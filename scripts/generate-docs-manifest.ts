import { readFileSync, writeFileSync, existsSync, statSync, readdirSync } from "fs";
import { join, relative, dirname, basename } from "path";

const SOURCE_COMPONENTS_DIR = "src/components";
const REGISTRY_JSON = "registry/registry.json";
const OUTPUT_MANIFEST = "public/docs/components.json";
const OUTPUT_REGISTRY = "src/docs-demo-registry.ts";

interface DocsMeta {
  title: string;
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

interface DemoFile {
  source: string;
}

interface ExampleFile {
  name: string;
  source: string;
}

interface RegistryItemData {
  dependencies: string[];
  registryDependencies: string[];
  files: Array<{ path: string; type: string; target: string }>;
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
  registry: RegistryItemData;
  demo: DemoFile | undefined;
  examples: ExampleFile[];
}

type Manifest = Record<string, ManifestItem>;

function findDocsMetaFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const entries = readdirSync(dir);
  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) return findDocsMetaFiles(fullPath);
    return entry === "docs-meta.json" ? [fullPath] : [];
  });
}

function findComponentFiles(
  dir: string,
  pattern: RegExp,
): string[] {
  if (!existsSync(dir)) return [];
  const entries = readdirSync(dir);
  const results: string[] = [];
  for (const entry of entries) {
    if (entry === "node_modules") continue;
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      results.push(...findComponentFiles(fullPath, pattern));
    } else if (pattern.test(entry)) {
      results.push(fullPath);
    }
  }
  return results;
}

function readSource(filePath: string): string {
  try {
    return readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

function findRegistryName(compDir: string): string | null {
  const metaPath = join(compDir, "registry-meta.json");
  if (!existsSync(metaPath)) return null;
  try {
    const meta = JSON.parse(readFileSync(metaPath, "utf-8"));
    return meta.name || null;
  } catch {
    return null;
  }
}

function loadRegistryData(): Map<string, any> {
  const reg = JSON.parse(readFileSync(REGISTRY_JSON, "utf-8"));
  const map = new Map<string, any>();
  for (const item of reg.items || []) {
    map.set(item.name, item);
  }
  return map;
}

const registeredDemos: Array<{ name: string; path: string }> = [];

const demoImportPaths: string[] = [];

function build() {
  const docsMetaFiles = findDocsMetaFiles(SOURCE_COMPONENTS_DIR);
  const registryMap = loadRegistryData();
  const manifest: Manifest = {};

  for (const metaPath of docsMetaFiles) {
    const compDir = dirname(metaPath);
    const relativeCompDir = relative(SOURCE_COMPONENTS_DIR, compDir);
    const dirName = basename(compDir);
    const componentKey = dirName.toLowerCase();

    const meta: DocsMeta = JSON.parse(readFileSync(metaPath, "utf-8"));
    const registryName = findRegistryName(compDir) || componentKey;

    const demoFiles = findComponentFiles(compDir, /\.demo\.tsx$/);
    const exampleFiles = findComponentFiles(compDir, /\.example\.\w+\.tsx$/);

    let demo: DemoFile | undefined;
    if (demoFiles.length > 0) {
      const demoPath = demoFiles[0];
      demo = { source: readSource(demoPath) };
      const importPath = `@/components/${relativeCompDir}/${basename(demoPath).replace(/\.tsx$/, "")}`;
      registeredDemos.push({ name: registryName, path: importPath });
      demoImportPaths.push(
        `  "${registryName}": () => import("${importPath}")`,
      );
    }

    const examples: ExampleFile[] = exampleFiles.map((exPath) => {
      const ext = basename(exPath);
      const match = ext.match(/\.example\.(\w+)\.tsx$/);
      const name = match ? match[1] : ext;
      return { name, source: readSource(exPath) };
    });

    const regItem = registryMap.get(registryName);
    const registryData = regItem
      ? {
          dependencies: regItem.dependencies || [],
          registryDependencies: regItem.registryDependencies || [],
          files: (regItem.files || []).map((f: any) => ({
            path: f.path,
            type: f.type,
            target: f.target,
          })),
        }
      : { dependencies: [], registryDependencies: [], files: [] };

    manifest[componentKey] = {
      title: meta.title,
      description: meta.description,
      category: meta.category,
      status: meta.status,
      keywords: meta.keywords,
      related: meta.related,
      accessibility: meta.accessibility,
      registryName,
      registry: registryData,
      demo,
      examples,
    };
  }

  writeFileSync(OUTPUT_MANIFEST, JSON.stringify(manifest, null, 2));
  console.log(`✔ docs manifest written to ${OUTPUT_MANIFEST} with ${Object.keys(manifest).length} components`);

  const registryContent = `// This file is auto-generated by scripts/generate-docs-manifest.ts
// Do not edit manually.

export const demoImports: Record<string, () => Promise<Record<string, unknown>>> = {
${demoImportPaths.join(",\n")},
};
`;
  writeFileSync(OUTPUT_REGISTRY, registryContent);
  console.log(`✔ demo registry written to ${OUTPUT_REGISTRY} with ${registeredDemos.length} demos`);
}

build();
