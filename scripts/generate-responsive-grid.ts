import { writeFileSync } from "fs";
import { resolve } from "path";

const BREAKPOINTS: Record<string, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const MAX_COLUMNS = 12;

const lines: string[] = [
  'import * as stylex from "@stylexjs/stylex";',
  'import { mediaQueries } from "@/lib/theme/tokens.stylex";',
  "",
  "export const responsiveGridColumns = stylex.create({",
];

for (let i = 1; i <= MAX_COLUMNS; i++) {
  lines.push(`\tbase${i}: { gridTemplateColumns: "repeat(${i}, minmax(0, 1fr))" },`);

  for (const [bp] of Object.entries(BREAKPOINTS)) {
    lines.push(
      `\t${bp}${i}: { [mediaQueries.${bp}]: { gridTemplateColumns: "repeat(${i}, minmax(0, 1fr))" } },`,
    );
  }
}

lines.push("});");
lines.push("");

const outputPath = resolve(
  import.meta.dirname,
  "../src/components/ui/Grid/responsiveGrid.styles.ts",
);

writeFileSync(outputPath, lines.join("\n"), "utf8");
console.log(`Generated ${outputPath}`);
