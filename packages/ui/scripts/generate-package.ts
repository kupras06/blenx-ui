import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

const pkg = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));

const exports: Record<string, unknown> = {
  ".": {
    types: "./index.d.ts",
    import: "./index.js",
  },
};

//
// Generate exports for every component
//

const componentRoot = path.join(dist, "components");

try {
  const entries = await fs.readdir(componentRoot, {
    withFileTypes: true,
  });

  exports["./components"] = {
    types: "./components/index.d.ts",
    import: "./components/index.js",
  };

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const component = entry.name;

    exports[`./${component}`] = {
      types: `./components/${component}/index.d.ts`,
      import: `./components/${component}/index.js`,
    };
  }
} catch {}

//
// utils
//

// const utilsRoot = path.join(dist, "utils");

// try {
//   const entries = await fs.readdir(utilsRoot);

//   for (const file of entries) {
//     if (!file.endsWith(".js")) continue;

//     const name = file.replace(".js", "");

//     exports[`./utils/${name}`] = {
//       types: `./utils/${name}.d.ts`,
//       import: `./utils/${name}.js`,
//     };
//   }
// } catch {}

//
// styles
//

try {
  await fs.access(path.join(dist, "assets", "ui.css"));
  exports["./globals.css"] = "./assets/ui.css";
} catch {}

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

  files: ["**/*"],

  sideEffects: ["**/*.css"],

  exports,

  peerDependencies: pkg.peerDependencies,

  dependencies: pkg.dependencies,
};

await fs.writeFile(path.join(dist, "package.json"), JSON.stringify(publishPackage, null, 2));

console.log("✓ package.json generated");
