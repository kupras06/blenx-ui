// scripts/generate-icons.ts

import { promises as fs } from "node:fs";
import path from "node:path";

import config from "../iconify.config";
type IconCollection = {
  prefix: string;
  icons: Record<
    string,
    {
      body: string;
      width?: number;
      height?: number;
    }
  >;
};

function pascalCase(name: string) {
  return name
    .split(/[-_]/g)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");
}

async function main() {
  const collection = (
    await import(`@iconify/json/json/${config.collection}.json`, {
      with: { type: "json" },
    } as never)
  ).default as IconCollection;

  const outDir = path.resolve("src/icons");

  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  const exports: string[] = ["export interface IconProps extends React.SVGProps<SVGSVGElement> {}"];
  const writePromises = [];
  for (const iconName of config.icons) {
    const icon = collection.icons[iconName];

    if (!icon) {
      throw new Error(`Missing icon "${iconName}"`);
    }

    const component = `${pascalCase(iconName)}Icon`;

    const width = icon.width ?? 24;
    const height = icon.height ?? 24;

    const source = `import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ${component} = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${width} ${height}"
      fill="none"
      stroke="currentColor"
      dangerouslySetInnerHTML={{ __html: ${JSON.stringify(icon.body)} }}
      {...props}
    />
  )
);

${component}.displayName = "${component}";
`;
    writePromises.push(fs.writeFile(path.join(outDir, `${component}.tsx`), source, "utf8"));

    exports.push(`export * from "./${component}";`);
  }
  await Promise.all(writePromises);
  await fs.writeFile(path.join(outDir, "index.ts"), exports.join("\n"), "utf8");

  console.log(`Generated ${exports.length} icons`);
}

main();
