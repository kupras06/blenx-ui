import { readdirSync, readFileSync, writeFileSync, existsSync, statSync, mkdirSync } from "fs";
import { join, relative, dirname } from "path";

const TEMP_DIR = "registry/.temp";
const SOURCE_COMPONENTS_DIR = "src/components";
const TEMP_COMPONENTS_DIR = join(TEMP_DIR, "src/components");
const OUTPUT = "registry/registry.json";
const REGISTRY_URL = process.env.REGISTRY_URL || "http://localhost:3001/reg";
const TEMP_SRC_DIR = join(TEMP_DIR, "src");

const LIB_DIR = join(TEMP_SRC_DIR, "lib");

const UTILS_DIR = join(TEMP_SRC_DIR, "utils");
const items = [];
function findRegistryMetaFiles(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }

  const entries = readdirSync(dir);

  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry);

    if (statSync(fullPath).isDirectory()) {
      return findRegistryMetaFiles(fullPath);
    }

    return entry === "registry-meta.json" ? [fullPath] : [];
  });
}
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
    let content = readFileSync(src, "utf8");
    if (src.endsWith(".ts") || src.endsWith(".tsx")) {
      content = content.replace(/from\s+"#\//g, 'from "@/').replace(/import\s+"#\//g, 'import "@/');
    }
    writeFileSync(dest, content, "utf8");
  }
}

// Copy and transform before scanning
copyAndTransformRecursive("src", TEMP_SRC_DIR);
function getFilesRecursive(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }
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
const registryMetaFiles = findRegistryMetaFiles(SOURCE_COMPONENTS_DIR);
console.log("registryMetaFiles", registryMetaFiles);
for (const metaPath of registryMetaFiles) {
  const sourceComponentDir = dirname(metaPath);
  const relativeComponentDir = relative(SOURCE_COMPONENTS_DIR, sourceComponentDir);

  const tempComponentDir = join(TEMP_COMPONENTS_DIR, relativeComponentDir);
  const meta = JSON.parse(readFileSync(metaPath, "utf8"));

  const files = (meta.files || []).map(({ file, type, target }: any) => ({
    path: join(tempComponentDir, file),
    type,
    target,
  }));

  const itemRegistryDependencies = (meta.registryDependencies || []).map((dep: string) =>
    dep.startsWith("http") ? dep : `${REGISTRY_URL}/${dep}.json`,
  );

  items.push({
    ...meta,
    files,
    registryDependencies: [...itemRegistryDependencies, themeRegistryUrl],
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
