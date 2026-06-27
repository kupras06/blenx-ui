import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const pkg = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));

const publishPackage = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  license: pkg.license,
  repository: pkg.repository,
  homepage: pkg.homepage,
  bugs: pkg.bugs,
  keywords: pkg.keywords,

  type: "module",

  publishConfig: {
    access: "public",
  },

  sideEffects: ["./theme.css"],

  exports: {
    ".": {
      types: "./index.d.ts",
      import: "./index.js",
    },

    "./contract": {
      types: "./contract.css.d.ts",
      import: "./contract.js",
    },

    "./tokens": {
      types: "./tokens.css.d.ts",
      import: "./tokens.js",
    },

    "./light-theme": {
      types: "./light-theme.css.d.ts",
      import: "./light-theme.js",
    },

    "./theme.css": "./theme.css",
  },

  dependencies: pkg.dependencies,
};

await mkdir(path.join(root, "dist"), { recursive: true });

await writeFile(path.join(root, "dist", "package.json"), JSON.stringify(publishPackage, null, 2));

console.log("✓ package.json generated");
