---
title: "Installation"
description: "Add Blenx to your project via the CLI registry. One command installs the component, its dependencies, and all required primitives."
category: "Getting Started"
keywords:
  - installation
  - CLI
  - registry
  - setup
  - dependencies
status: "stable"
navigation:
  group: guides
  order: 1
  link: "/docs/installation"
---

## CLI Installation

Blenx uses a shadcn-style registry CLI. Run the init command to scaffold the configuration and install peer dependencies:

```bash
npx blenx@latest init
```

The `init` command creates a `blenx.json` config file and installs `@stylexjs/stylex` as a peer dependency. You must have the StyleX bundler plugin configured in your Vite, Next.js, or Webpack setup before components will render styled output.

## Adding Components

After init, add individual components by name:

```bash
npx blenx@latest add button
npx blenx@latest add dialog
npx blenx@latest add stack
```

Each command copies the component source file into your project under the `@ui/` alias. The CLI resolves transitive dependencies automatically — installing `dialog` also installs `button`, `surface`, `text`, and `box` if they are not already present.

## Dependencies

Blenx components depend on three npm packages:

- `@stylexjs/stylex` — the styling engine
- `@base-ui/react` — headless UI primitives (Accordion, Dialog, Menu, Tabs, etc.)
- `@phosphor-icons/react` — icon set

The CLI adds these to your project during init if they are missing. Some components add further registry-level dependencies (e.g., `date-picker` requires `calendar`, `field`, `popover`). The CLI resolves the full dependency tree before writing any files.

## Project Structure

After installation, your project contains:

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
│   └── ...
└── lib/
    └── theme/
        ├── contract.stylex.ts
        ├── app-theme.stylex.ts
        └── tokens.stylex.ts
```

The `@ui/` path alias is configured during init. You can customize it to `@components/` or any path your project uses.

## Updating Components

Registry installations are source snapshots. Upstream fixes do not automatically flow into your project. To update a component, run `blenx add` again with the same component name — it overwrites the existing file. Review the diff before overwriting if you have customized the component.

## Prerequisites

- React 18 or newer
- `@stylexjs/stylex` configured in your bundler
- A build pipeline that supports the StyleX plugin

Blenx has no runtime or CDN delivery. Every component is compiled as part of your application bundle.
