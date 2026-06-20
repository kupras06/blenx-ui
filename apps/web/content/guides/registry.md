---
title: "Registry"
description: "Blenx uses a shadcn-style component registry. Components are copied into your project as source files—you own them, customize them, and version them alongside your app code."
category: "Advanced"
order: 6
keywords:
  - registry
  - CLI
  - shadcn
  - component distribution
  - dependency resolution
  - versioning
  - custom registry
  - source files
status: "stable"
---

## Registry Architecture

Blenx distributes components through a registry—a JSON manifest that maps component names to their source files, dependencies, and metadata. This is the same architecture that shadcn/ui popularized for React component libraries.

Key difference from traditional npm packages: when you install a Blenx component, you do not add a dependency to `package.json`. Instead, the CLI copies source files verbatim into your project directory. You can edit them, patch them, restructure them—they belong to you.

This model is controversial. It trades the convenience of `npm update` for complete ownership. There is no upgrade path from registry installations—if Blenx ships a breaking change to a component, your local copy does not update automatically. You decide when and how to merge upstream changes.

## How Registry Installation Works

The CLI command `npx blenx@latest add <component>` performs the following steps:

1. Fetches the registry manifest from the configured registry URL (defaults to `https://registry.blenx.dev`).
2. Resolves the component's metadata: entry file path, style dependencies, npm dependencies, and transitive registry dependencies.
3. Checks for conflicts with existing files in the target directory.
4. Copies each source file to the configured project path (defaults to `@ui/components/<name>.tsx`).
5. Installs npm packages listed in the component's `dependencies` array via the project's package manager.
6. Verifies the target alias resolves correctly in the project's TypeScript and bundler configuration.

If installation fails at step 3 (file collision), the CLI exits without writing anything. Overwrite existing files by passing `--force`.

## Dependency Resolution

Components declare two types of dependencies:

- **npm dependencies** — standard packages (`react`, `@stylexjs/stylex`, `@radix-ui/react-dialog`). The CLI installs these into your project's `package.json`.
- **registry dependencies** — other Blenx components. The CLI resolves these transitively before writing any files. If `dialog` depends on `button` and `surface`, and you have not installed them, the CLI installs all three.

Transitive resolution means you cannot partially install a component's dependency tree. The CLI ensures every file reference in the installed components resolves to an existing file in your project. This is stricter than npm's dependency model, where missing transitive dependencies fail silently at runtime.

## Updates and Versioning Strategy

The registry is immutable for published versions. Once a component version is published, its source files do not change. New versions are published as separate entries in the manifest.

When you run `npx blenx@latest add` again, the CLI checks the registry for newer versions of installed components. You can:

- `diff` your local copy against the registry version
- `update` to overwrite your local copy with the registry version
- `pin` a component to a specific registry version

Updates overwrite your local changes. If you have customized a component, the CLI warns you before overwriting. There is no automatic merge—you receive the full new source and must reapply your customizations manually. This is the price of ownership.

## Custom Registries

You can host your own registry. This is useful for:

- Internal design systems with proprietary components
- Companies that need audit trails for component changes
- Teams that want to distribute components across multiple projects without publishing to npm

A custom registry is a JSON endpoint that returns the same schema as the default registry. Configure it in `blenx.json`:

```json
{
  "registry": "https://internal.corp/blenx-registry",
  "target": "@ui",
  "typescript": { "baseUrl": "./src" }
}
```

Build your own registry server, or host a static JSON file. The CLI reads the manifest once during installation and resolves all dependencies from the same source. Custom registries do not cascade—if component A in your custom registry depends on component B, the resolution only looks within your custom registry, not the default one.

## File Targeting

The `target` configuration determines where files land:

| Config Value   | Default Directory         |
|----------------|---------------------------|
| `@ui`          | `src/ui/`                 |
| `@blocks`      | `src/blocks/`             |
| `@components`  | `src/components/`         |
| `@lib`         | `src/lib/`                |

These aliases are created during `init` in your `tsconfig.json` and bundler configuration. You can rename them freely, but changing a target after components are installed breaks imports—you would need to update every component file's import paths.

## registry-meta.json Structure

Each registry is defined by a `registry-meta.json` file, either served from a URL or shipped alongside a self-hosted registry. The schema:

```json
{
  "version": "1.0.0",
  "components": {
    "button": {
      "name": "button",
      "type": "registry:component",
      "description": "Interactive button with variants",
      "dependencies": ["react", "@stylexjs/stylex"],
      "registryDependencies": ["box", "text", "surface"],
      "files": ["button.tsx", "button.styles.ts"],
      "category": "components"
    }
  }
}
```

Each component entry declares its files relative to the registry root, its npm and registry dependencies, and its category for directory placement.

## When to Use Registry vs Direct Import

**Use the registry for** components you intend to customize extensively, components that form the visual core of your application (buttons, forms, layout), and any component where you want full control over styling, rendering, and behavior.

**Import from npm for** utility components you do not customize (hooks, utility functions, test helpers). These follow the traditional npm update model and do not benefit from being source-copied.

The registry model is not for every dependency. It optimizes for customization at the cost of automatic updates. Use it for UI components, where customization is common and valuable. Use traditional npm for everything else.

## Running Your Own Registry

To run a custom registry:

1. Create a `registry-meta.json` manifest file.
2. Host it at a URL reachable by the CLI (a static S3 bucket, a GitHub Pages site, an internal server).
3. Point `blenx.json` to the URL.
4. Add components by creating files in a structure that matches your registry manifest entries.

The CLI does not validate that registry files exist on disk before installation. It trusts the manifest. If your manifest points to `button.tsx` but the file is missing from the server, installation fails when the CLI tries to fetch it.
