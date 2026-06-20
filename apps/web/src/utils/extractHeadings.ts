export interface TocItem {
  depth: number;
  title: string;
  slug: string;
}

/**
 * Generate a GitHub-style slug from heading text.
 *
 * Examples:
 *   "Theme Architecture"  → "theme-architecture"
 *   "Getting Started"     → "getting-started"
 *   "H2 & H3 Support"     → "h2--h3-support"
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Extract H2 and H3 headings from raw MDX content.
 *
 * Parses `## `, `### ` lines in the source, ignoring:
 *   - H1, H4, H5, H6
 *   - Headings inside code blocks (fenced with ```)
 *   - Frontmatter (between --- delimiters)
 *
 * Returns an array of TocItem with depth, title, and slug.
 */
export function extractHeadings(raw: string): TocItem[] {
  const items: TocItem[] = [];
  const lines = raw.split("\n");
  let inFrontmatter = false;
  let inCodeBlock = false;

  for (const line of lines) {
    // Track frontmatter
    if (line.trimStart().startsWith("---")) {
      if (!inFrontmatter) {
        inFrontmatter = true;
        continue;
      } else {
        inFrontmatter = false;
        continue;
      }
    }

    if (inFrontmatter) continue;

    // Track fenced code blocks
    if (line.trimStart().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    // Match ATX headings: ## or ###
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;

    const depth = match[1].length; // 2 or 3
    const title = match[2].trim();
    const slug = slugifyHeading(title);

    items.push({ depth, title, slug });
  }

  return items;
}
