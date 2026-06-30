---
title: "Vite Configuration"
description: "Configure Vite to use Blenx UI with Vanilla Extract."
category: "Guides"
navigation:
  group: guides
  order: 4
keywords:
  - vite
  - configuration
  - setup
---

# Vite Configuration

Blenx UI ships **Vanilla Extract source files** instead of precompiled CSS. This allows your application to generate CSS only for the components and styles it actually uses, resulting in smaller bundles and better tree shaking.

Because of this, Vite must process Blenx UI as application source rather than as a pre-bundled dependency.

## Install

```bash
pnpm add @blenx-dev/core @blenx-dev/theme
```

## Configure Vite

Add the Vanilla Extract plugin and exclude `@blenx-dev/core` from dependency optimization.

```ts
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],

  optimizeDeps: {
    exclude: ["@blenx-dev/core"],
  },
});
```

## Why is this required?

During development, Vite pre-bundles dependencies inside `node_modules` using **esbuild**. Since esbuild does not execute the Vanilla Extract transform, `.css.ts` files inside Blenx UI would be treated as ordinary JavaScript modules.

This results in runtime errors similar to:

```text
Styles were unable to be assigned to a file.
```

Excluding `@blenx-dev/core` from `optimizeDeps` allows the Vanilla Extract plugin to transform Blenx UI's `.css.ts` files correctly during both development and production builds.

## When do I need this?

You only need this configuration if you are consuming Blenx UI directly from npm.

If you're working in a monorepo where the Blenx UI source is already part of the Vite project, no additional configuration is required.

## Troubleshooting

### Styles were unable to be assigned to a file

Ensure that:

- `vanillaExtractPlugin()` is registered in your Vite configuration.
- `@blenx-dev/core` is listed in `optimizeDeps.exclude`.
- Your application imports components from `@blenx-dev/core` rather than individual compiled artifacts.

Once configured, Vite will treat Blenx UI as source code, allowing Vanilla Extract to generate the required CSS automatically.
