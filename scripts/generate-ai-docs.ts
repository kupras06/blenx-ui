import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { basename, join } from "path";
import { expandRunnerCommands } from "../apps/web/src/lib/expand-commands";

// =====================
// Paths
// =====================
const CORE_SRC_DIR = "packages/core/src";
const UI_COMPONENTS_DIR = join(CORE_SRC_DIR, "components");
const WEB_PUBLIC_DIR = "apps/web/public";
const WEB_CONTENT_DIR = "apps/web/content/components";

const CALENDAR_DIR = "packages/calendar/src/Calendar";
const DATEPICKER_DIR = "packages/calendar/src/DatePicker";
const COLORPICKER_DIR = "packages/color-picker/src/ColorPicker";
const DATATABLE_DIR = "packages/datatable/src/DataTable";

const AI_OUTPUT_DIR = join(WEB_PUBLIC_DIR, "ai");
const LLMS_OUTPUT = join(WEB_PUBLIC_DIR, "llms.txt");
const LLMS_FULL_OUTPUT = join(WEB_PUBLIC_DIR, "llms-full.txt");
const METADATA_OUTPUT = join(WEB_PUBLIC_DIR, "ai-metadata.json");

const PACKAGE_MAP: Record<string, string> = {
  "data-table": "@blenx-dev/datatable",
  calendar: "@blenx-dev/calendar",
  "date-picker": "@blenx-dev/calendar",
  "color-picker": "@blenx-dev/color-picker",
};

const EXPORT_PACKAGE_MAP: Record<string, string> = {
  "data-table": "@blenx-dev/datatable",
  calendar: "@blenx-dev/calendar",
  "date-picker": "@blenx-dev/calendar",
  "color-picker": "@blenx-dev/color-picker",
};

// =====================
// Types
// =====================
interface DocsMeta {
  title: string;
  description: string;
  category: string;
  status?: string;
  keywords?: string[];
  related?: string[];
  accessibility?: {
    keyboard?: string[];
    aria?: string[];
  };
}

interface RegistryMetaFile {
  file: string;
  type: string;
  target: string;
}

interface RegistryMetaJson {
  name: string;
  title: string;
  description: string;
  registryDependencies?: string[];
  dependencies?: string[];
  files: RegistryMetaFile[];
}

interface MdxFrontmatter {
  title: string;
  description: string;
  category?: string;
  status?: string;
  keywords?: string[];
}

interface ComponentData {
  slug: string;
  title: string;
  description: string;
  package: string;
  category: string;
  status: string;
  keywords: string[];
  related: string[];
  dependencies: string[];
  files: string[];
  accessibility: { keyboard: string[]; aria: string[] };
  examples: { name: string; source: string }[];
  sections: Record<string, string>;
  registryName: string;
  imports: string[];
}

// =====================
// Helpers
// =====================
function readJson<T>(filePath: string): T | null {
  try {
    return JSON.parse(readFileSync(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

function readSource(filePath: string): string {
  try {
    return readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pascalToKebab(name: string): string {
  return name
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

function normalizeSlug(name: string): string {
  return slugify(pascalToKebab(name));
}

function titleToExportName(title: string): string {
  return title.replace(/\s+/g, "");
}

function findFilesByPattern(dir: string, pattern: RegExp): string[] {
  if (!existsSync(dir)) return [];
  const entries = readdirSync(dir);
  const results: string[] = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      results.push(...findFilesByPattern(fullPath, pattern));
    } else if (pattern.test(entry)) {
      results.push(fullPath);
    }
  }
  return results;
}

// =====================
// MDX Parsing
// =====================
function parseMdxFrontmatter(content: string): MdxFrontmatter | null {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;

  const fm: Record<string, string> = {};
  const lines = match[1].split("\n");
  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line
      .slice(colonIdx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    fm[key] = val;
  }

  return {
    title: fm.title ?? "",
    description: fm.description ?? "",
    category: fm.category,
    status: fm.status,
    keywords: fm.keywords ? JSON.parse(fm.keywords) : [],
  };
}

function stripJsxTags(text: string): string {
  return text
    .replace(/<[A-Z][\s\S]*?\/>/g, "")
    .replace(/<[A-Z][\s\S]*?>[\s\S]*?<\/[A-Z][\s\S]*?>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractMdxSections(content: string): Record<string, string> {
  const sections: Record<string, string> = {};
  const fmMatch = content.match(/^---\n[\s\S]*?\n---\n/);
  const body = fmMatch ? content.slice(fmMatch[0].length) : content;

  const headingRegex = /^##\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  const headings: { title: string; index: number }[] = [];

  while ((match = headingRegex.exec(body)) !== null) {
    headings.push({ title: match[1].toLowerCase(), index: match.index });
  }

  for (let i = 0; i < headings.length; i++) {
    const start = headings[i].index;
    const headingLineEnd = body.indexOf("\n", start);
    const contentStart = headingLineEnd + 1;
    const end = i + 1 < headings.length ? headings[i + 1].index : body.length;
    const raw = body.slice(contentStart, end).trim();
    const cleaned = stripJsxTags(raw);
    if (cleaned) {
      sections[headings[i].title] = cleaned;
    }
  }

  return sections;
}

// =====================
// Demo file extraction
// =====================
function extractDemoSource(filePath: string): { name: string; source: string }[] {
  const content = readSource(filePath);
  if (!content) return [];

  const results: { name: string; source: string }[] = [];

  // Try to extract individual demo function bodies
  const fnRegex = /export\s+function\s+(\w+Demo)/g;
  let fnMatch: RegExpExecArray | null;
  const demoFnNames: string[] = [];

  while ((fnMatch = fnRegex.exec(content)) !== null) {
    demoFnNames.push(fnMatch[1]);
  }

  if (demoFnNames.length === 0) {
    return [{ name: "Default", source: content }];
  }

  for (const fnName of demoFnNames) {
    const idx = content.indexOf(`function ${fnName}`);
    if (idx === -1) continue;

    // Find opening brace position
    const braceIdx = content.indexOf("{", idx);
    if (braceIdx === -1) continue;

    // Track brace depth to find the end
    let depth = 1;
    let pos = braceIdx + 1;
    while (depth > 0 && pos < content.length) {
      if (content[pos] === "{") depth++;
      else if (content[pos] === "}") depth--;
      pos++;
    }

    const fnBody = content.slice(idx, pos);
    const name = fnName.replace(/Demo$/, "") || fnName;
    results.push({ name, source: fnBody });
  }

  return results;
}

// =====================
// Package / import resolution
// =====================
function resolvePackage(slug: string): string {
  const pkg = PACKAGE_MAP[slug];
  if (pkg) return pkg;
  return "@blenx-dev/core";
}

function resolveExportPackage(slug: string): string {
  const pkg = EXPORT_PACKAGE_MAP[slug];
  if (pkg) return pkg;
  return "@blenx-dev/core";
}

function buildImportStatements(title: string, pkg: string): string[] {
  const exportName = titleToExportName(title);
  return [`import { ${exportName} } from "${pkg}"`];
}

// =====================
// Component discovery
// =====================
interface ComponentCandidate {
  slug: string;
  docsMetaPath: string | null;
  registryMetaPath: string | null;
  mdxPath: string | null;
  demoPaths: string[];
  componentDir: string;
}

function dirNameToSlug(dirName: string, dirPath: string): string {
  // First try registry name
  const metaPath = join(dirPath, "registry-meta.json");
  if (existsSync(metaPath)) {
    const meta = readJson<RegistryMetaJson>(metaPath);
    if (meta?.name) return meta.name;
  }
  // Fall back to normalized PascalCase
  return normalizeSlug(dirName);
}

function discoverComponents(): ComponentCandidate[] {
  const candidates = new Map<string, ComponentCandidate>();

  function register(slug: string, field: keyof ComponentCandidate, value: string) {
    if (!candidates.has(slug)) {
      candidates.set(slug, {
        slug,
        docsMetaPath: null,
        registryMetaPath: null,
        mdxPath: null,
        demoPaths: [],
        componentDir: "",
      });
    }
    const c = candidates.get(slug)!;
    if (field === "demoPaths") {
      (c.demoPaths as string[]).push(value);
    } else if (field === "componentDir" && !c.componentDir) {
      (c as any)[field] = value;
    } else {
      (c as any)[field] = value;
    }
  }

  // Step 1: Scan MDX files first — these define canonical slugs
  if (existsSync(WEB_CONTENT_DIR)) {
    const mdxFiles = readdirSync(WEB_CONTENT_DIR).filter(
      (f) => f.endsWith(".md") || f.endsWith(".mdx"),
    );
    for (const mdxFile of mdxFiles) {
      const mdxPath = join(WEB_CONTENT_DIR, mdxFile);
      const slug = basename(mdxFile, ".md").replace(/\.mdx$/, "");
      register(slug, "mdxPath", mdxPath);
    }
  }

  // Step 2: Scan package directories — merge into existing MDX-based candidates
  const scanDirs = [
    UI_COMPONENTS_DIR,
    CALENDAR_DIR,
    DATEPICKER_DIR,
    COLORPICKER_DIR,
    DATATABLE_DIR,
  ];

  for (const scanDir of scanDirs) {
    if (!existsSync(scanDir)) continue;

    if (
      scanDir === CALENDAR_DIR ||
      scanDir === DATEPICKER_DIR ||
      scanDir === COLORPICKER_DIR ||
      scanDir === DATATABLE_DIR
    ) {
      const dirName = basename(scanDir);
      const rawSlug = dirNameToSlug(dirName, scanDir);
      const docsMetaPath = join(scanDir, "docs-meta.json");
      const registryMetaPath = join(scanDir, "registry-meta.json");

      // Try to find a matching MDX-based candidate
      let slug = rawSlug;
      for (const [existingSlug] of candidates) {
        if (
          existingSlug === rawSlug ||
          existingSlug.replace(/-/g, "") === rawSlug.replace(/-/g, "")
        ) {
          slug = existingSlug;
          break;
        }
      }

      register(slug, "componentDir", scanDir);
      if (existsSync(docsMetaPath)) register(slug, "docsMetaPath", docsMetaPath);
      if (existsSync(registryMetaPath)) register(slug, "registryMetaPath", registryMetaPath);

      const demoPaths = findFilesByPattern(scanDir, /\.demo\.tsx$/);
      for (const df of demoPaths) {
        register(slug, "demoPaths", df);
      }

      continue;
    }

    const entries = readdirSync(scanDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const dirPath = join(scanDir, entry.name);
      const rawSlug = dirNameToSlug(entry.name, dirPath);
      const docsMetaPath = join(dirPath, "docs-meta.json");
      const registryMetaPath = join(dirPath, "registry-meta.json");

      // Try to find a matching MDX-based candidate
      let slug = rawSlug;
      for (const [existingSlug] of candidates) {
        if (
          existingSlug === rawSlug ||
          existingSlug.replace(/-/g, "") === rawSlug.replace(/-/g, "")
        ) {
          slug = existingSlug;
          break;
        }
      }

      register(slug, "componentDir", dirPath);
      if (existsSync(docsMetaPath)) register(slug, "docsMetaPath", docsMetaPath);
      if (existsSync(registryMetaPath)) register(slug, "registryMetaPath", registryMetaPath);

      const demoPaths = findFilesByPattern(dirPath, /\.demo\.tsx$/);
      for (const df of demoPaths) {
        register(slug, "demoPaths", df);
      }
    }
  }

  return Array.from(candidates.values());
}

// =====================
// Component data assembly
// =====================
function buildComponentData(candidate: ComponentCandidate): ComponentData | null {
  const { slug, docsMetaPath, registryMetaPath, mdxPath, demoPaths } = candidate;

  // At minimum we need a title — from docs-meta, registry-meta, or MDX
  let title = slug;
  let description = "";
  let category = "primitives";
  let status = "stable";
  let keywords: string[] = [];
  let related: string[] = [];
  let accessibility: { keyboard: string[]; aria: string[] } = { keyboard: [], aria: [] };
  let dependencies: string[] = [];
  let files: string[] = [];

  // Read docs-meta
  if (docsMetaPath) {
    const meta = readJson<DocsMeta>(docsMetaPath);
    if (meta) {
      title = meta.title || title;
      description = meta.description || description;
      category = slugify(meta.category || category);
      status = meta.status || status;
      keywords = meta.keywords || [];
      related = meta.related || [];
      if (meta.accessibility) {
        accessibility = {
          keyboard: meta.accessibility.keyboard ?? [],
          aria: meta.accessibility.aria ?? [],
        };
      }
    }
  }

  // Read registry-meta
  if (registryMetaPath) {
    const meta = readJson<RegistryMetaJson>(registryMetaPath);
    if (meta) {
      title = meta.title || title;
      description = meta.description || description;
      dependencies = meta.dependencies ?? [];
      dependencies.push(...(meta.registryDependencies ?? []));
      files = meta.files.map((f) => f.target);
    }
  }

  // Read MDX frontmatter (overrides)
  if (mdxPath) {
    const mdxContent = readSource(mdxPath);
    const fm = parseMdxFrontmatter(mdxContent);
    if (fm) {
      title = fm.title || title;
      description = fm.description || description;
      if (fm.category) category = fm.category;
      if (fm.status) status = fm.status;
      if (fm.keywords) keywords = [...new Set([...keywords, ...fm.keywords])];
    }
  }

  // Extract sections from MDX
  const sections: Record<string, string> = {};
  if (mdxPath) {
    const mdxContent = readSource(mdxPath);
    const extracted = extractMdxSections(mdxContent);
    Object.assign(sections, extracted);
  }

  // Extract demo source
  const examples: { name: string; source: string }[] = [];
  for (const demoPath of demoPaths) {
    const demos = extractDemoSource(demoPath);
    examples.push(...demos);
  }

  const pkg = resolvePackage(slug);
  const imports = buildImportStatements(title, resolveExportPackage(slug));

  return {
    slug,
    title,
    description,
    package: pkg,
    category,
    status,
    keywords,
    related,
    dependencies: [...new Set(dependencies)],
    files,
    accessibility,
    examples,
    sections,
    registryName: slug,
    imports,
  };
}

// =====================
// AI Markdown generation
// =====================
function generateComponentMarkdown(data: ComponentData): string {
  const lines: string[] = [];

  lines.push(`# ${data.title}`);
  lines.push("");
  lines.push(data.description);
  lines.push("");
  lines.push(`- **Package:** \`${data.package}\``);
  lines.push(`- **Category:** ${data.category}`);
  lines.push(`- **Status:** ${data.status}`);
  if (data.keywords.length > 0) {
    lines.push(`- **Keywords:** ${data.keywords.join(", ")}`);
  }
  lines.push("");

  // Installation
  lines.push("## Installation");
  lines.push("");
  lines.push("```bash");
  lines.push(expandRunnerCommands(`npx shadcn@latest add @blenx/${data.registryName}`));
  lines.push("```");
  lines.push("");

  // Imports
  lines.push("## Imports");
  lines.push("");
  for (const imp of data.imports) {
    lines.push("```tsx");
    lines.push(imp);
    lines.push("```");
    lines.push("");
  }

  // Overview / prose sections
  const overviewText = data.sections["overview"] ?? "";
  if (overviewText) {
    lines.push("## Overview");
    lines.push("");
    lines.push(overviewText);
    lines.push("");
  }

  // Usage / Variants
  const usageText = data.sections["usage"] ?? data.sections["variants"] ?? "";
  if (usageText) {
    lines.push("## Variants");
    lines.push("");
    lines.push(usageText);
    lines.push("");
  }

  // Examples
  if (data.examples.length > 0) {
    lines.push("## Examples");
    lines.push("");
    for (const ex of data.examples) {
      if (data.examples.length > 1) {
        lines.push(`### ${ex.name}`);
        lines.push("");
      }
      lines.push("```tsx");
      lines.push(ex.source.trim());
      lines.push("```");
      lines.push("");
    }
  }

  // Dependencies
  if (data.dependencies.length > 0) {
    lines.push("## Dependencies");
    lines.push("");
    for (const dep of data.dependencies) {
      lines.push(`- ${dep}`);
    }
    lines.push("");
  }

  // Files
  if (data.files.length > 0) {
    lines.push("## Files");
    lines.push("");
    for (const file of data.files) {
      lines.push(`- \`${file}\``);
    }
    lines.push("");
  }

  // Accessibility
  const hasKeyboard = data.accessibility.keyboard && data.accessibility.keyboard.length > 0;
  const hasAria = data.accessibility.aria && data.accessibility.aria.length > 0;
  if (hasKeyboard || hasAria) {
    lines.push("## Accessibility");
    lines.push("");
    if (hasKeyboard) {
      lines.push("### Keyboard Support");
      lines.push("");
      for (const key of data.accessibility.keyboard!) {
        lines.push(`- \`${key}\``);
      }
      lines.push("");
    }
    if (hasAria) {
      lines.push("### ARIA Attributes");
      lines.push("");
      for (const attr of data.accessibility.aria!) {
        lines.push(`- \`${attr}\``);
      }
      lines.push("");
    }
  }

  // Limitations as Common Mistakes
  const limitationsText = data.sections["limitations"] ?? "";
  if (limitationsText) {
    lines.push("## Common Mistakes");
    lines.push("");
    lines.push(limitationsText);
    lines.push("");
  }

  // Related
  if (data.related.length > 0) {
    lines.push("## Related Components");
    lines.push("");
    for (const rel of data.related) {
      lines.push(`- ${rel}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

// =====================
// Main build
// =====================
function build() {
  console.log("\n── Discovering Components ──");
  const candidates = discoverComponents();
  console.log(`  Found ${candidates.length} component candidates`);

  console.log("\n── Building AI Documentation ──");
  const components: ComponentData[] = [];

  for (const candidate of candidates) {
    const data = buildComponentData(candidate);
    if (!data || !data.description) {
      console.log(`  ⚠ Skipped ${candidate.slug} (no description)`);
      continue;
    }
    components.push(data);
  }

  console.log(`  Built ${components.length} component docs`);

  // Generate per-component markdown
  if (!existsSync(AI_OUTPUT_DIR)) {
    mkdirSync(AI_OUTPUT_DIR, { recursive: true });
  }

  const pages: { slug: string; title: string; description: string; markdown: string }[] = [];

  for (const comp of components) {
    const markdown = generateComponentMarkdown(comp);
    const slug = comp.slug;

    const outputPath = join(AI_OUTPUT_DIR, `${slug}.md`);
    writeFileSync(outputPath, markdown);
    console.log(`  ✔ ai/${slug}.md`);

    pages.push({
      slug: `ai/${slug}.md`,
      title: comp.title,
      description: comp.description,
      markdown,
    });
  }

  console.log("\n── Generating llms.txt ──");
  const llmsLines: string[] = [];
  llmsLines.push("# Blenx UI");
  llmsLines.push("");
  llmsLines.push(
    "Design system built for React with Vanilla Extract. Accessible, themeable, and composable components.",
  );
  llmsLines.push("");
  llmsLines.push("## Components");
  llmsLines.push("");

  for (const page of pages) {
    llmsLines.push(`- [${page.title}](/${page.slug}): ${page.description}`);
  }

  llmsLines.push("");
  writeFileSync(LLMS_OUTPUT, llmsLines.join("\n"));
  console.log(`  ✔ llms.txt (${pages.length} components)`);

  console.log("\n── Generating llms-full.txt ──");
  const fullLines: string[] = [];
  fullLines.push("# Blenx UI");
  fullLines.push("");
  fullLines.push(
    "Design system built for React with Vanilla Extract. Accessible, themeable, and composable components.",
  );
  fullLines.push("");
  fullLines.push("---");
  fullLines.push("");

  for (const page of pages) {
    fullLines.push(page.markdown);
    fullLines.push("");
    fullLines.push("---");
    fullLines.push("");
  }

  writeFileSync(LLMS_FULL_OUTPUT, fullLines.join("\n"));
  console.log("  ✔ llms-full.txt");

  console.log("\n── Generating AI Metadata ──");
  const metadata = components.map((c) => ({
    name: c.slug,
    title: c.title,
    description: c.description,
    package: c.package,
    category: c.category,
    status: c.status,
    keywords: c.keywords,
    related: c.related,
    dependencies: c.dependencies,
    accessibility: c.accessibility,
    hasExamples: c.examples.length > 0,
    hasSections: Object.keys(c.sections).length > 0,
    aiUrl: `/ai/${c.slug}.md`,
  }));
  writeFileSync(METADATA_OUTPUT, JSON.stringify(metadata, null, 2));
  console.log("  ✔ ai-metadata.json");

  console.log(`\n✓ AI documentation generated for ${components.length} components\n`);
}

if (import.meta.main) {
  build();
}
