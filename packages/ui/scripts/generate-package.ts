import { promises as fs } from "node:fs";
import path from "node:path";
import { readdir, readFile } from "node:fs/promises";
const root = process.cwd();
const dist = path.join(root, "dist");

const pkg = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));

const packageRoot = process.cwd();
const repoRoot = path.resolve(packageRoot, "../..");

/**
 * Read the root package.json (for catalog dependencies)
 */
const rootPackage = JSON.parse(await readFile(path.join(repoRoot, "package.json"), "utf8"));

/**
 * Discover every workspace package and its version.
 */
const workspacePackages = new Map<
  string,
  {
    version: string;
    directory: string;
  }
>();

const packagesDir = path.join(repoRoot, "packages");

await Promise.all(
  (await readdir(packagesDir, { withFileTypes: true })).map(async (dir) => {
    if (!dir.isDirectory()) return;

    const packageJsonPath = path.join(packagesDir, dir.name, "package.json");

    try {
      const pkg = JSON.parse(await readFile(packageJsonPath, "utf8"));

      workspacePackages.set(pkg.name, {
        version: pkg.version,
        directory: path.join(packagesDir, dir.name),
      });
    } catch {
      // ignore folders without package.json
    }
  }),
);

async function resolveVersion(packageName: string, version: string): Promise<string> {
  //
  // Normal dependency
  //
  if (!version.startsWith("workspace:") && version !== "catalog:") {
    return version;
  }

  //
  // Workspace dependency
  //
  if (version.startsWith("workspace:")) {
    const workspace = workspacePackages.get(packageName);

    if (!workspace) {
      throw new Error(`Unable to resolve workspace package "${packageName}"`);
    }

    return `^${workspace.version}`;
  }

  //
  // Bun catalog dependency
  //
  if (version === "catalog:") {
    const catalog = rootPackage.workspaces.catalog ?? {};

    const resolved = catalog[packageName];

    if (!resolved) {
      throw new Error(`Unable to resolve catalog dependency "${packageName}"`);
    }

    return resolved;
  }

  return version;
}

export async function resolveDependencies(deps?: Record<string, string>) {
  if (!deps) return {};

  const entries = Object.entries(deps);
  const resolvedEntries = await Promise.all(
    entries.map(([name, version]) =>
      resolveVersion(name, version).then((resolvedVersion) => [name, resolvedVersion] as const),
    ),
  );

  return Object.fromEntries(resolvedEntries) as Record<string, string>;
}

const exports: Record<string, unknown> = {
  ".": {
    types: `./src/index.d.ts`,
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
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const component = entry.name;

    exports[`./${component}`] = {
      types: `./src/components/${component}/index.d.ts`,
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
  await fs.access(path.join(dist, "assets", "components.css"));
  exports["./globals.css"] = "./assets/components.css";
} catch {}
const peerDependencies = await resolveDependencies(
  Object.fromEntries(Object.entries(pkg.peerDependencies)),
);

const dependencies = await resolveDependencies(
  Object.fromEntries(Object.entries(pkg.dependencies)),
);

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

  peerDependencies,

  dependencies,
};

await fs.writeFile(path.join(dist, "package.json"), JSON.stringify(publishPackage, null, 2));

console.log("✓ package.json generated");
