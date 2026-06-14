import { readdirSync, readFileSync, writeFileSync, existsSync, statSync, mkdirSync } from "fs";
import { join, relative, dirname } from "path";

const ORIGINAL_UI_DIR = "packages/ui/src/components";
const ORIGINAL_LIB_DIR = "packages/ui/src/lib";
const ORIGINAL_UTILS_DIR = "packages/ui/src/utils";

const TEMP_DIR = "packages/registry/.temp";
const UI_DIR = join(TEMP_DIR, ORIGINAL_UI_DIR);
const LIB_DIR = join(TEMP_DIR, ORIGINAL_LIB_DIR);
const UTILS_DIR = join(TEMP_DIR, ORIGINAL_UTILS_DIR);

const OUTPUT = "packages/registry/registry.json";
const REGISTRY_URL = process.env.REGISTRY_URL || "http://localhost:3001/reg";

const items = [];

function copyAndTransformRecursive(src: string, dest: string) {
  if (!existsSync(src)) return;
  const stat = statSync(src);
  if (stat.isDirectory()) {
    if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
    for (const child of readdirSync(src)) {
      copyAndTransformRecursive(join(src, child), join(dest, child));
    }
  } else {
    if (!existsSync(dirname(dest))) mkdirSync(dirname(dest), { recursive: true });
    let content = readFileSync(src, "utf-8");
    if (src.endsWith(".ts") || src.endsWith(".tsx")) {
      content = content.replace(/from\s+"#\//g, 'from "@/').replace(/import\s+"#\//g, 'import "@/');
    }
    writeFileSync(dest, content, "utf-8");
  }
}

// Copy and transform before scanning
copyAndTransformRecursive("packages/ui/src", join(TEMP_DIR, "packages/ui/src"));

function getFilesRecursive(dir: string): string[] {
  const entries = readdirSync(dir);

  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry);

    if (statSync(fullPath).isDirectory()) {
      return getFilesRecursive(fullPath);
    }

    return [fullPath];
  });
}

function buildRegistryFiles(
  sourceDir: string,
  targetPrefix: string,
): Array<{
  path: string;
  type: string;
  target: string;
}> {
  return getFilesRecursive(sourceDir).map((file) => ({
    path: file,
    type: "registry:file",
    target: join(targetPrefix, relative(sourceDir, file).replaceAll("\\", "/")),
  }));
}
items.push({
  name: "shared",
  type: "registry:lib",
  title: "Shared",
  description: "Shared libraries, theme and utilities.",
  dependencies: ["@stylexjs/stylex", "@phosphor-icons/react", "@base-ui/react"],
  files: [...buildRegistryFiles(LIB_DIR, "@lib"), ...buildRegistryFiles(UTILS_DIR, "@utils")],
});

const themeRegistryUrl = `${REGISTRY_URL}/shared.json`;
// Scan component folders
const components = readdirSync(UI_DIR);

for (const component of components) {
  const metaPath = join(UI_DIR, component, "registry-meta.json");
  if (!existsSync(metaPath)) continue;

  const meta = JSON.parse(readFileSync(metaPath, "utf-8"));

  // Resolve file paths and registryDependencies URLs
  const files = meta.files.map(({ file, type, target }) => ({
    path: `${UI_DIR}/${component}/${file}`,
    type,
    target,
  }));
  const itemRegistryDependencies = (meta.registryDependencies || []).map((dep: string) =>
    dep.startsWith("http") ? dep : `${REGISTRY_URL}/${dep}.json`,
  );

  const registryDependencies = [...itemRegistryDependencies, themeRegistryUrl];

  items.push({
    ...meta,
    files,
    registryDependencies,
    dependencies: ["@stylexjs/stylex", "@phosphor-icons/react", "@base-ui/react"],
  });
}

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "blenx-dev",
  homepage: "https://blenx-dev.com",
  items,
};

const content = JSON.stringify(registry, null, 2);
console.log(`🔍 Building registry with ${items.length} items...`);
writeFileSync(OUTPUT, content);
console.log(`✔ registry.json built with ${items.length} items`);
