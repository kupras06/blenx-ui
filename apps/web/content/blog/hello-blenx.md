---
title: "Hello, Blenx UI"
description: "Introducing Blenx UI — a design system built with Vanilla Extract, Radix UI primitives, and a layered semantic token architecture."
date: "2026-06-30"
author: "Blenx Team"
tags:
  - announcement
  - design-system
published: true
image: "/og/blog-hello-blenx.png"
---

## What is Blenx UI?

Blenx UI is a component library and design system built from the ground up with three core philosophies:

- **Vanilla Extract** for zero-runtime CSS-in-JS with type-safe themes
- **Radix UI** primitives for accessible, headless component behavior
- **Semantic token layers** for scalable, maintainable theming

## The Token Architecture

Unlike traditional design systems that hard-code color values, Blenx UI uses a multi-layer token system:

1. **Palette Layer** — Raw color scales (e.g., Radix color scales)
2. **Semantic Layer** — Meaning-based tokens (`primary`, `success`, `danger`) with state variants (`default`, `hover`, `active`)
3. **Token Layer** — Spacing, typography, shadows, and borders
4. **Component Layer** — Component-specific CSS variables

This layered approach means you can rebrand an entire app by swapping the palette while keeping semantic mappings intact.

## Why Vanilla Extract?

Vanilla Extract gives us:

- **Type safety** — Theme contracts are TypeScript-first, catching missing tokens at compile time
- **Zero runtime** — All styles are extracted at build time, no CSS-in-JS overhead
- **Co-location** — Styles live next to components but are compiled to static CSS files

## Getting Started

Ready to try Blenx UI? Head over to the [docs](/docs) to get started with installation, theming, and components.

```bash
npm install @blenx-dev/core @blenx-dev/theme
```

## What's Next?

We're actively building out the component catalog and theme builder. Follow along on [GitHub](https://github.com/blenx-dev/blenx-ui) and stay tuned for more posts about:

- Deep dives into the token architecture
- Theme builder walkthroughs
- Migration guides from other libraries
- Custom component patterns
