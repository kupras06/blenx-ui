---
title: "Getting Started"
description: "Install Blenx, configure your environment, and build your first component in under five minutes."
category: "Getting Started"
order: 1
keywords:
  - installation
  - setup
  - registry
  - CLI
  - first component
  - dependency chain
status: "stable"
navigation:
  group: guides
  order: 1
---

## Overview

Blenx is a styled React component library built on StyleX. It uses a shadcn-style registry for distribution—meaning you own the code. Every component is installed directly into your project as source files, not imported from an opaque npm package. You get full control over styling, behavior, and bundling with zero lock-in.

This guide walks through installation, project structure, adding your first component, and setting up your development workflow.

## Prerequisites

- React 18 or newer
- `@stylexjs/stylex` configured in your bundler
- A monorepo (recommended, not required)

Blenx has no runtime styling engine. StyleX compiles all styles at build time into atomic CSS. If your project uses CSS Modules, Tailwind, or styled-components, you can still use Blenx—each system lives in its own layer. But you will get the most value by writing new components with StyleX.

## Installation via the CLI

Blenx distributes components through a CLI that copies source files into your project. This is the same pattern popularized by shadcn/ui.

```bash
npx blenx@latest init
```

The `init` command scaffolds a `blenx.json` configuration file, installs the required peer dependencies (`react`, `react-dom`, `@stylexjs/stylex`), and creates the default directory structure under `@ui/`.

After init, add individual components:

```bash
npx blenx@latest add button
npx blenx@latest add dialog
npx blenx@latest add stack
```

Each command copies the component source, its direct dependencies, and the required primitives into your project. The CLI resolves transitive dependencies automatically—install `dialog` and it pulls in `button`, `surface`, `text`, and `box` if they are not already present.

## Project Structure

After initialization, your project will contain:

```
@ui/
├── primitives/
│   ├── box.tsx
│   ├── stack.tsx
│   ├── grid.tsx
│   ├── container.tsx
│   ├── surface.tsx
│   └── text.tsx
├── components/
│   ├── button.tsx
│   ├── dialog.tsx
│   └── input.tsx
└── lib/
    └── theme/
        ├── contract.stylex.ts
        ├── app-theme.stylex.ts
        └── tokens.stylex.ts
```

The `@ui/` alias is configured during init. You can customize it to `@components/`, `@blocks/`, or any path you prefer. Files within `primitives/` are foundation components—every other component depends on them. Files within `components/` are interactive UI elements. Files within `lib/` contain theme contracts and token definitions.

## Understanding the Dependency Chain

Blenx components are intentionally granular. A `Dialog` depends on:

- `Box` (layout foundation)
- `Surface` (themed container)
- `Text` (typography)
- `Button` (action triggers)
- `Stack` (spatial layout)
- `FocusTrap` (accessibility primitive)

This sounds like a lot. It is. But the tradeoff is deliberate: every dependency is a reusable primitive you can compose independently. You never have to override a deeply nested style because you can replace the primitive directly. There is no monolithic `Dialog` component with thirty props for every possible visual permutation.

The CLI handles all of this automatically. Run `blenx add dialog` and every transitive dependency is resolved and installed. You only need to understand the chain when you want to customize—knowing that `Dialog` renders a `Surface` means you can theme your surfaces globally and every dialog inherits.

## Development Workflow

1. **Install a component.** Use the CLI, never copy-paste from the registry manually. The CLI ensures dependency consistency.
2. **Open the source file.** It lives in your project. You own it. Modify the JSX, swap primitives, adjust styles.
3. **Style with StyleX.** Every component uses `stylex.create()` with semantic tokens from the theme contract. Change a token value and all components update.
4. **Run the StyleX build plugin.** Your bundler (Vite, Next.js, Webpack) must include the StyleX plugin. Without it, styles are not compiled.
5. **Test and iterate.** Because styles are colocated and type-safe, refactoring is local. Change a component in isolation without fear of breaking distant UI.

## Next Steps

Run `npx blenx@latest add button` to install your first component. Then open `@ui/components/button.tsx` and read through the source—every Blenx component is written to be read, not hidden behind an abstraction.

For deeper guidance, see the Theming guide to understand how styles cascade from tokens to components, or the Primitives guide to learn about the composition model.
