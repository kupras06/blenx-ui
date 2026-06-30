import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { basename, dirname, join, relative } from "path";

// =====================
// Paths (from repo root)
// =====================
const UI_SRC_DIR = "packages/ui/src";
const UI_COMPONENTS_DIR = join(UI_SRC_DIR, "components");
const UI_DATA_TABLE_DIR = join(UI_SRC_DIR, "DataTable");
const BLOCK_COMPONENTS_DIR = "apps/web/src/components";
const WEB_PUBLIC_DIR = "apps/web/public";
const WEB_SRC_DIR = "apps/web/src";
const REGISTRY_OUTPUT_DIR = join(WEB_PUBLIC_DIR, "reg");

const OUTPUT_MANIFEST = join(WEB_PUBLIC_DIR, "docs/components.json");
const OUTPUT_REGISTRY = join(WEB_SRC_DIR, "docs-demo-registry.ts");

// =====================
// Types
// =====================
interface RegistryMetaFile {
  file: string;
  type: string;
  target: string;
}

interface RegistryMetaJson {
  name: string;
  type: string;
  title: string;
  description: string;
  registryDependencies?: string[];
  dependencies?: string[];
  files: RegistryMetaFile[];
}

interface DocsMeta {
  title: string;
  componentKey?: string;
  description: string;
  category: string;
  status?: "stable" | "beta" | "experimental";
  keywords?: string[];
  related?: string[];
  accessibility?: {
    keyboard?: string[];
    aria?: string[];
  };
}

interface ManifestItem {
  title: string;
  description: string;
  category: string;
  status: string | undefined;
  keywords: string[] | undefined;
  related: string[] | undefined;
  accessibility: object | undefined;
  registryName: string;
  examples: { name: string; source: string }[];
}

type Manifest = Record<string, ManifestItem>;

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

function rewriteImports(content: string): string {
  return content
    .replace(/@blenx-dev\/ui\//g, "@/")
    .replace(/@blenx-dev\/theme\//g, "@lib/theme/")
    .replace(/#utils\//g, "@utils/");
}

function normalizeRegistryDependency(dep: string): string {
  const urlMatch = dep.match(/\/reg\/(.+)\.json$/);
  if (urlMatch) return urlMatch[1];
  return dep;
}

function findDocsMetaFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const entries = readdirSync(dir);
  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) return findDocsMetaFiles(fullPath);
    return entry === "docs-meta.json" ? [fullPath] : [];
  });
}

function findComponentFiles(dir: string, pattern: RegExp): string[] {
  if (!existsSync(dir)) return [];
  const entries = readdirSync(dir);
  const results: string[] = [];
  for (const entry of entries) {
    if (entry !== "node_modules") {
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        results.push(...findComponentFiles(fullPath, pattern));
      } else if (pattern.test(entry)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

function findRegistryMetaFiles(): Array<{
  dir: string;
  meta: RegistryMetaJson;
}> {
  const results: Array<{ dir: string; meta: RegistryMetaJson }> = [];
  const seen = new Set<string>();

  function scanDir(root: string) {
    if (!existsSync(root)) return;
    const entries = readdirSync(root, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name === "node_modules") continue;
      const dirPath = join(root, entry.name);
      const metaPath = join(dirPath, "registry-meta.json");
      if (existsSync(metaPath)) {
        const meta = readJson<RegistryMetaJson>(metaPath);
        if (meta?.name) {
          const key = meta.name;
          if (!seen.has(key)) {
            seen.add(key);
            results.push({ dir: dirPath, meta });
          }
        }
      }
    }
  }

  scanDir(UI_COMPONENTS_DIR);
  scanDir(join(BLOCK_COMPONENTS_DIR, "blocks"));

  // Handle DataTable (standalone dir in packages/ui/src/)
  const dtMetaPath = join(UI_DATA_TABLE_DIR, "registry-meta.json");
  if (existsSync(dtMetaPath)) {
    const meta = readJson<RegistryMetaJson>(dtMetaPath);
    if (meta?.name && !seen.has(meta.name)) {
      seen.add(meta.name);
      results.push({ dir: UI_DATA_TABLE_DIR, meta });
    }
  }

  return results;
}

const UI_COMPONENT_EXPORT_PACKAGE = "@blenx-dev/ui/components/";

// =====================
// Registry JSON generation
// =====================
function generateRegistryJson(entry: { dir: string; meta: RegistryMetaJson }): void {
  const { dir, meta } = entry;
  const files = meta.files.map((f) => {
    const sourcePath = join(dir, f.file);
    const rawContent = readSource(sourcePath);
    const content = rewriteImports(rawContent);
    return {
      path: f.target,
      type: f.type,
      target: f.target,
      content,
    };
  });

  const dependencies = meta.dependencies ?? [
    "@stylexjs/stylex",
    "@phosphor-icons/react",
    "@base-ui/react",
  ];

  const registryDependencies = meta.registryDependencies?.map(normalizeRegistryDependency) ?? [];

  // Auto-inject "shared" for UI components (targets prefixed with @ui/ or @components/)
  // since they all depend on theme contract, tokens, and utility files.
  const isUIComponent = meta.files.some(
    (f) => f.target.startsWith("@ui/") || f.target.startsWith("@components/"),
  );
  if (isUIComponent && !registryDependencies.includes("shared")) {
    registryDependencies.unshift("shared");
  }

  const registryJson = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: meta.name,
    type: meta.type ?? "registry:ui",
    title: meta.title,
    description: meta.description,
    dependencies,
    registryDependencies: registryDependencies.length > 0 ? registryDependencies : undefined,
    files,
  };

  if (!existsSync(REGISTRY_OUTPUT_DIR)) {
    mkdirSync(REGISTRY_OUTPUT_DIR, { recursive: true });
  }

  const outputPath = join(REGISTRY_OUTPUT_DIR, `${meta.name}.json`);
  writeFileSync(outputPath, JSON.stringify(registryJson, null, 2));
  console.log(`  ✔ ${meta.name}.json`);
}

function generateSharedRegistry(): void {
  const sharedFiles: Array<{
    source: string;
    target: string;
    type: string;
  }> = [
    {
      source: "packages/theme/src/contract.css.ts",
      target: "@lib/theme/contract.css.ts",
      type: "registry:lib",
    },
    {
      source: "packages/theme/src/tokens.css.ts",
      target: "@lib/theme/tokens.css.ts",
      type: "registry:lib",
    },
    {
      source: "packages/ui/src/utils/sprinkles.css.ts",
      target: "@utils/sprinkles.css.ts",
      type: "registry:lib",
    },
    {
      source: "packages/ui/src/utils/ve-style.utils.ts",
      target: "@utils/ve-style.utils.ts",
      type: "registry:lib",
    },
    {
      source: "packages/ui/src/utils/types.ts",
      target: "@utils/types.ts",
      type: "registry:lib",
    },
    {
      source: "packages/ui/src/utils/heights.ts",
      target: "@utils/heights.ts",
      type: "registry:lib",
    },
  ];

  const files = sharedFiles.map((f) => ({
    path: f.target,
    type: f.type,
    target: f.target,
    content: rewriteImports(readSource(f.source)),
  }));

  const registryJson = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "shared",
    type: "registry:lib",
    title: "Shared",
    description: "Shared libraries, theme and utilities for blenx UI.",
    dependencies: [
      "@stylexjs/stylex",
      "@phosphor-icons/react",
      "@base-ui/react",
      "@vanilla-extract/sprinkles",
    ],
    files,
  };

  if (!existsSync(REGISTRY_OUTPUT_DIR)) {
    mkdirSync(REGISTRY_OUTPUT_DIR, { recursive: true });
  }

  writeFileSync(join(REGISTRY_OUTPUT_DIR, "shared.json"), JSON.stringify(registryJson, null, 2));
  console.log("  ✔ shared.json");
}

// =====================
// Manifest & Demo Registry
// =====================

const registeredDemos: Array<{ name: string; path: string }> = [];
const demoImportPaths: string[] = [];

function updateDemoImportPaths(registryName: string, compDir: string, relativeCompDir: string) {
  const demoFiles = findComponentFiles(compDir, /\.demo\.tsx$/);
  if (demoFiles.length === 0) return;

  const importPath = `@/components/${relativeCompDir}/${basename(demoFiles[0]).replace(/\.tsx$/, "")}`;

  registeredDemos.push({ name: registryName, path: importPath });
  demoImportPaths.push(`  "${registryName}": () => import("${importPath}")`);
}

function buildExamplesMeta(compDir: string): { name: string; source: string }[] {
  const exampleFiles = findComponentFiles(compDir, /\.example\.\w+\.tsx$/);
  return exampleFiles.map((exPath) => {
    const ext = basename(exPath);
    const match = ext.match(/\.example\.(?<name>\w+)\.tsx$/);
    const name = match?.groups?.name ?? ext;
    return { name, source: readSource(exPath) };
  });
}

function buildManifestInfo(metaPath: string): {
  componentKey: string;
  manifestInfo: ManifestItem;
} {
  const compDir = dirname(metaPath);
  const relativeCompDir = relative(BLOCK_COMPONENTS_DIR, compDir);
  const dirName = basename(compDir);

  const meta = readJson<DocsMeta>(metaPath) ?? {
    title: dirName,
    description: "",
    category: "Uncategorized",
  };
  const componentKey = meta.componentKey || dirName.toLowerCase();
  const registryName = findRegistryName(compDir) || componentKey;

  updateDemoImportPaths(registryName, compDir, relativeCompDir);

  const examples = buildExamplesMeta(compDir);
  return {
    componentKey,
    manifestInfo: {
      title: meta.title,
      description: meta.description,
      category: meta.category,
      status: meta.status,
      keywords: meta.keywords,
      related: meta.related,
      accessibility: meta.accessibility,
      registryName,
      examples,
    },
  };
}

function findRegistryName(compDir: string): string | null {
  const metaPath = join(compDir, "registry-meta.json");
  if (!existsSync(metaPath)) return null;
  const meta = readJson<RegistryMetaJson>(metaPath);
  return meta?.name ?? null;
}

function findUIClientDemoFiles(): Array<{
  name: string;
  importPath: string;
  compDir: string;
}> {
  const results: Array<{ name: string; importPath: string; compDir: string }> = [];

  const uiCompDirs = readdirSync(UI_COMPONENTS_DIR, { withFileTypes: true });
  for (const entry of uiCompDirs) {
    if (!entry.isDirectory()) continue;
    const dirPath = join(UI_COMPONENTS_DIR, entry.name);
    const demoFiles = findComponentFiles(dirPath, /\.demo\.tsx$/);
    if (demoFiles.length === 0) continue;

    const metaPath = join(dirPath, "registry-meta.json");
    const meta = readJson<RegistryMetaJson>(metaPath);
    const registryName = meta?.name ?? entry.name.toLowerCase();

    const demoFileName = basename(demoFiles[0]).replace(/\.tsx$/, "");
    const importPath = `${UI_COMPONENT_EXPORT_PACKAGE}${entry.name}/${demoFileName}`;

    results.push({ name: registryName, importPath, compDir: dirPath });
  }

  return results;
}

function findBlockDemoFiles(): Array<{
  name: string;
  importPath: string;
  compDir: string;
}> {
  const results: Array<{ name: string; importPath: string; compDir: string }> = [];
  const blocksDir = join(BLOCK_COMPONENTS_DIR, "blocks");
  if (!existsSync(blocksDir)) return results;

  const blockDirs = readdirSync(blocksDir, { withFileTypes: true });
  for (const entry of blockDirs) {
    if (!entry.isDirectory()) continue;
    const dirPath = join(blocksDir, entry.name);
    const demoFiles = findComponentFiles(dirPath, /\.demo\.tsx$/);
    if (demoFiles.length === 0) continue;

    const metaPath = join(dirPath, "registry-meta.json");
    const meta = readJson<RegistryMetaJson>(metaPath);
    const registryName = meta?.name ?? entry.name.toLowerCase();

    const demoFileName = basename(demoFiles[0]).replace(/\.tsx$/, "");
    const importPath = `@/components/blocks/${entry.name}/${demoFileName}`;

    results.push({ name: registryName, importPath, compDir: dirPath });
  }

  return results;
}

// =====================
// Main build
// =====================

function build() {
  console.log("\n── Generating Registry JSON ──");

  const registryEntries = findRegistryMetaFiles();
  for (const entry of registryEntries) {
    generateRegistryJson(entry);
  }
  console.log(`  Total: ${registryEntries.length} components`);

  console.log("\n── Generating Shared Registry ──");
  generateSharedRegistry();

  console.log("\n── Generating Demo Registry ──");
  const uiDemos = findUIClientDemoFiles();
  const blockDemos = findBlockDemoFiles();

  const allDemoImportPaths = [
    ...blockDemos.map((d) => `  "${d.name}": () => import("${d.importPath}")`),
    ...uiDemos.map((d) => `  "${d.name}": () => import("${d.importPath}")`),
  ];

  const registryContent = `// This file is auto-generated by scripts/generate-docs-manifest.ts
// Do not edit manually.

export const demoImports: Record<string, () => Promise<Record<string, unknown>>> = {
${allDemoImportPaths.join(",\n")},
};
`;
  writeFileSync(OUTPUT_REGISTRY, registryContent);
  console.log(`  ✔ demo registry written with ${allDemoImportPaths.length} demos`);

  console.log("\n── Generating Docs Manifest ──");
  const docsMetaFiles = findDocsMetaFiles(join(BLOCK_COMPONENTS_DIR, "blocks"));
  const manifest: Manifest = {};

  for (const metaPath of docsMetaFiles) {
    const { componentKey, manifestInfo } = buildManifestInfo(metaPath);
    manifest[componentKey] = manifestInfo;
  }
  writeFileSync(OUTPUT_MANIFEST, JSON.stringify(manifest, null, 2));
  console.log(`  ✔ docs manifest written with ${Object.keys(manifest).length} components`);

  console.log(`\n✓ Complete\n`);
}

if (import.meta.main) {
  build();
}
