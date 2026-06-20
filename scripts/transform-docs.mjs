#!/usr/bin/env node
/**
 * Transforms all component documentation files to:
 * 1. Add `title` and `description` to frontmatter (preserving existing)
 * 2. Reduce Overview to max 3 sentences
 * 3. Standardize section ordering: Overview > Demo > Usage > Composition > ...
 */
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const DOCS_DIR = join(process.cwd(), "apps/web/content/components");

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function titleFromFilename(filename) {
  return filename.replace(/\.md$/, "").split("-").map(capitalize).join(" ");
}

function truncateToSentences(text, maxSentences) {
  const sentences = text.match(/[^.!?\n]+[.!?]+/g) || [text];
  if (sentences.length <= maxSentences) return text;
  return sentences.slice(0, maxSentences).join(" ").trim();
}

const SECTION_ORDER = [
  "Overview",
  "Demo",
  "Installation",
  "Source Code",
  "Usage",
  "Composition",
  "Design Guidelines",
  "API Reference",
  "Accessibility",
  "Limitations",
];

const REGISTRY_NAME_MAP = {
  "color-picker": "colorpicker",
  "color-swatch": "color-swatch",
  "data-table": "data-table",
  "date-picker": "datepicker",
  "icon-button": "icon-button",
  "input-group": "inputgroup",
  "otp-field": "otpfield",
  "scroll-area": "scroll-area",
  "segmented-control": "segmented-control",
  "toggle-group": "togglegroup",
};

const EXCLUDED_SECTIONS = new Set(["Best Practices", "Common Mistakes"]);

function reorderSections(sections) {
  const known = {};
  const unknown = [];

  for (const [heading, content] of sections) {
    if (EXCLUDED_SECTIONS.has(heading)) {
      continue;
    }
    if (SECTION_ORDER.includes(heading)) {
      known[heading] = content;
    } else {
      unknown.push([heading, content]);
    }
  }

  const ordered = [];
  for (const h of SECTION_ORDER) {
    if (known[h]) {
      ordered.push([h, known[h]]);
    }
  }
  ordered.push(...unknown);
  return ordered;
}

function parseSections(body) {
  const headingRegex = /^## (.+)$/gm;
  const sections = [];
  let lastIndex = 0;
  let lastHeading = null;
  let matches;

  while ((matches = headingRegex.exec(body)) !== null) {
    const currentHeading = matches[1].trim();
    if (lastHeading) {
      const content = body.slice(lastIndex, matches.index).trim();
      sections.push([lastHeading, content]);
    }
    lastIndex = matches.index + matches[0].length;
    lastHeading = currentHeading;
  }

  if (lastHeading) {
    const content = body.slice(lastIndex).trim();
    sections.push([lastHeading, content]);
  }

  return sections;
}

function sectionsToBody(sections) {
  return sections.map(([heading, content]) => `## ${heading}\n\n${content}`).join("\n\n");
}

const files = readdirSync(DOCS_DIR).filter((f) => f.endsWith(".md"));

for (const file of files) {
  const filepath = join(DOCS_DIR, file);
  let content = readFileSync(filepath, "utf8");

  // Parse frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) {
    console.warn(`Skipping ${file}: no frontmatter`);
    continue;
  }

  const frontmatterRaw = fmMatch[1];
  const body = content.slice(fmMatch[0].length);

  const title = titleFromFilename(file);

  // Parse sections
  const sections = parseSections(body);

  // Find Overview for description
  const overviewSection = sections.find(([h]) => h === "Overview");
  let description = "";
  if (overviewSection) {
    const firstSentenceMatch = overviewSection[1].match(/^[^.?!\n]+[.!?]+/);
    description = firstSentenceMatch
      ? firstSentenceMatch[0].trim()
      : overviewSection[1].split("\n")[0].slice(0, 120);
    // Clean up leading article
    description = description.replace(/^(The |A |An )/, "");
    description = capitalize(description.charAt(0).toLowerCase() + description.slice(1));

    // Truncate Overview to 3 sentences
    overviewSection[1] = truncateToSentences(overviewSection[1], 3);
  }

  // Determine registry name from filename
  const baseName = file.replace(/\.md$/, "");
  const registryName = REGISTRY_NAME_MAP[baseName] ?? baseName;

  // Reorder sections
  const orderedSections = reorderSections(sections);

  // Ensure Source Code section exists with content
  const sourceSectionIdx = orderedSections.findIndex(([h]) => h === "Source Code");
  if (sourceSectionIdx === -1) {
    // Insert after Installation
    const installIdx = orderedSections.findIndex(([h]) => h === "Installation");
    const insertAt = installIdx !== -1 ? installIdx + 1 : 2;
    orderedSections.splice(insertAt, 0, [
      "Source Code",
      `<SourceCode registryName="${registryName}" />`,
    ]);
  } else {
    // Ensure it has content
    const existingContent = orderedSections[sourceSectionIdx][1];
    if (!existingContent || !existingContent.includes("<SourceCode")) {
      orderedSections[sourceSectionIdx] = [
        "Source Code",
        `<SourceCode registryName="${registryName}" />`,
      ];
    }
  }

  // Reorder sections
  const newBody = sectionsToBody(orderedSections);

  // Preserve original frontmatter lines and inject title/description after first line
  const fmLines = frontmatterRaw.split("\n");

  // Build new frontmatter
  let newFrontmatter = "---\n";
  newFrontmatter += `title: "${title}"\n`;
  if (description) {
    newFrontmatter += `description: "${description}"\n`;
  }
  // Append all original lines except blank ones and any existing title/description
  for (const line of fmLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("title:") || trimmed.startsWith("description:")) {
      continue;
    }
    newFrontmatter += `${line}\n`;
  }
  newFrontmatter += "---\n\n";

  writeFileSync(filepath, newFrontmatter + newBody + "\n");
  console.log(`✓ ${file}`);
}

console.log("\nDone!");
