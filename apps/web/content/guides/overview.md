---
title: "Overview"
description: "Blenx UI is a React component library built with Vanilla Extract and Base UI primitives, distributed through a registry-first architecture."
category: "Getting Started"
keywords:
  - overview
  - introduction
  - blenx
status: "stable"
navigation:
  group: guides
  order: 0
  link: "/docs"
---

Blenx UI is a modern React component library built on top of Vanilla Extract and Base UI primitives. It combines the ownership model popularized by shadcn/ui with a registry-first architecture, allowing teams to install components as source code instead of consuming them through a runtime package.

The goal is simple: provide production-ready components without taking control away from developers.

## Why Blenx?

Most component libraries force a tradeoff between speed and flexibility. They are quick to adopt, but difficult to customize once your design system evolves.

Blenx takes a different approach.

Components are distributed through a registry and added directly to your codebase. Once installed, they become part of your application. You can modify implementation details, swap primitives, customize styling, and adapt behavior without waiting for upstream changes.

This means:

- Full source ownership
- No vendor lock-in
- Registry-driven installation
- Type-safe APIs
- Design system friendly architecture
- Easy customization and extension

## Built on Vanilla Extract

Blenx uses Vanilla Extract as its styling foundation.

Vanilla Extract generates static CSS files at build time, providing predictable performance, strong type safety, and scalable theming without runtime styling overhead.

Components are built around semantic design tokens, making it easy to implement custom themes while maintaining consistency across applications.

## Built on Base UI

Interactive components are powered by Base UI primitives.

Accessibility, keyboard navigation, focus management, overlays, dialogs, popovers, and other complex interactions are built on a solid foundation so you can focus on product development rather than low-level implementation details.

## Registry First

Instead of importing components from a large runtime package, Blenx components are installed through a registry using the shadcn CLI.

When a component is added:

- Source files are copied into your project
- Dependencies are resolved automatically
- Registry metadata is preserved
- Components remain fully editable

This approach keeps applications lightweight while giving developers complete control over implementation.

## Designed for Design Systems

Blenx is built around composable primitives such as Box, Stack, Grid, Surface, Container, and Text.

Higher-level components are intentionally composed from these primitives rather than hiding implementation details behind large, monolithic APIs.

This makes customization predictable and encourages consistent design system patterns across applications.

## What's Next?

Start with the Getting Started guide to configure the registry and install your first component. Then explore the component library, theming system, and design primitives that power the Blenx ecosystem.
