---
title: "Styling"
description: "Write colocated, type-safe styles with vanilla-extract—zero-runtime CSS that compiles to static class names at build time."
category: "Guides"
order: 3
keywords:
  - vanilla-extract
  - CSS-in-JS
  - colocated styles
  - style
  - responsive design
  - component variants
  - layout
  - anti-patterns
status: "stable"
navigation:
  group: guides
  order: 3
---

## Vanilla-Extract Philosophy

Blenx is built on vanilla-extract, a zero-runtime CSS-in-JS solution. Styles are authored in `*.css.ts` files and compiled to static CSS at build time. Every call to `style()` produces a deterministic, scoped class name with no style injection, no runtime evaluation, and no class name collisions.

This philosophy drives every decision in Blenx:

- **Colocation.** Styles live next to the component that uses them. Delete a component, delete its `*.css.ts` file. No orphaned CSS.
- **Type safety.** vanilla-extract validates property names and values at build time via TypeScript. A typo in `algnItems` fails before you ship.
- **Zero runtime.** All CSS is extracted at build time. The bundle contains only static class names, no JavaScript style objects.

## Preferred Patterns

### Defining styles (`*.css.ts`)

Create a `*.css.ts` file next to your component. Define styles statically at the module level using `style()`. Never call `style()` inside a render function—it compiles to nothing at runtime and should be evaluated once per module.

```tsx
// button.css.ts
import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/core/theme/contract.css";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: themeContract.contentPrimary,
  backgroundColor: themeContract.surface,
});
```

### Applying styles

Import the styles and use them as class names. Combine multiple styles with `clsx` or string concatenation.

```tsx
import clsx from "clsx";
import * as styles from "./button.css";

<div className={clsx(styles.root, isActive && styles.active)} />;
```

### Dynamic Styles

When a style value depends on a prop or state, use `createVar()` for parametric CSS custom properties or compute the class name conditionally.

```tsx
// Good: conditional application
<div className={clsx(styles.root, size === "lg" && styles.lg)} />;

// Also good: parametric via CSS custom properties
import { createVar, style } from "@vanilla-extract/css";

const gapVar = createVar();
export const root = style({
  vars: { [gapVar]: "0px" },
  gap: gapVar,
});

// In component:
<div className={styles.root} style={{ [gapVar]: gap }} />;
```

### Using sprinkles

Layout primitives (Box, Stack, Grid) expose **sprinkles**—predefined atomic utility properties for spacing, layout, color, and positioning. Use sprinkles props instead of writing one-off styles for common patterns.

```tsx
<Box display="flex" gap="md" padding="lg" alignItems="center">
  <span>Content</span>
</Box>
```

Sprinkles cover padding/margin shorthands (`p`, `px`, `py`, `m`, `mx`, `my`), flex layout (`display`, `flexDirection`, `alignItems`, `justifyContent`), colors (`color`, `backgroundColor`), positioning (`position`, `top`, `zIndex`), and grid (`columns`, `gap`). Responsive conditions are supported via object syntax:

```tsx
<Box
  display={{ base: "block", md: "flex" }}
  direction={{ base: "column", md: "row" }}
  gap={{ base: "sm", lg: "lg" }}
>
```

## Component Variants

Use a variant map pattern with `recipe()` from `@vanilla-extract/recipes`. Define one base style and one recipe per variant dimension.

```tsx
// button.css.ts
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
});

export const intent = recipe({
  variants: {
    intent: {
      primary: { backgroundColor: "var(--primary)" },
      secondary: { backgroundColor: "var(--surface)" },
      ghost: { backgroundColor: "transparent" },
    },
  },
});
```

```tsx
// button.tsx
<div className={clsx(styles.base, styles.intent({ intent: variant }))} />
```

This scales better than a single monolithic style with dozens of conditional properties because each variant compiles to its own CSS class.

## Responsive Design

Use `@media` queries inside `style()` for breakpoint-specific overrides:

```tsx
export const root = style({
  display: "flex",
  flexDirection: "column",
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
    },
  },
});
```

Or use sprinkles responsive conditions with the breakpoint shorthand:

```tsx
<Box direction={{ base: "column", md: "row" }} justify={{ base: "start", lg: "center" }}>
```

Define shared breakpoints in `tokens.css` and reference them as needed. There is no runtime breakpoint detection—all media queries are emitted as static CSS.

## Layout Composition

Blenx provides four layout primitives that encode common CSS patterns:

- **Box** — the foundational element. Renders a `div` with sprinkles props for layout, spacing, color, flex, and positioning. Use it when no semantic element makes sense.
- **Stack** (HStack, VStack) — one-dimensional layout with `gap` and `alignment`. Replaces manual `display: flex` + `gap` everywhere.
- **Grid** — two-dimensional layout via CSS Grid. Accepts `columns`, `rows`, `gap`.
- **Container** — content width constraints with optional centering.

These primitives exist because layout CSS is repetitive and error-prone. A `Stack` with `gap="md"` compiles to the same CSS as a hand-written flex container, but it is easier to read and maintain.

## Token Usage in Styles

Always reference theme tokens through the contract:

```tsx
import { themeContract } from "@blenx-dev/core/theme/contract.css";
import { fontSize, spacing, borderRadius } from "@blenx-dev/core/theme/tokens.css";

export const root = style({
  color: themeContract.contentPrimary,
  backgroundColor: themeContract.surface,
  borderRadius: borderRadius.md,
  fontSize: fontSize.sm,
  padding: spacing.md,
});
```

The contract exports CSS custom property references, not JavaScript values. They resolve at build time. You cannot inspect `themeContract.contentPrimary` at runtime—it compiles to a `var(--content-primary)` reference.

## Anti-Patterns

### Style Recalculation on Every Render

Never call `style()` inside a render function. Styles are extracted at build time—calling `style()` at runtime is a no-op that produces no CSS.

```tsx
// Bad: style() does nothing meaningful at runtime
function Bad({ gap }: { gap: string }) {
  const dynStyles = style({ gap });
  return <div className={dynStyles} />;
}
```

### `!important`

vanilla-extract output follows standard CSS specificity. Adding `!important` creates conflicts that are hard to debug. If you need to override a style, use a more specific selector or reorder class names in `clsx`.

### Nested Selectors

vanilla-extract supports selectors via the `selectors` property, but avoid coupling parent and child internal structure. Prefer data attributes or passing styles as props.

```tsx
// Use selectors sparingly:
export const listItem = style({
  selectors: {
    "&[data-active]": { backgroundColor: themeContract.primary },
  },
});
```

### Inline Styles via the `style` Prop

The `style` prop creates inline styles that cannot be deduplicated, scoped, or participate in the theme system. Use `style` only for truly dynamic values that cannot be expressed through `createVar()` (e.g., programmatic positioning). For everything else, use class names and sprinkles.

## When to Create `*.css.ts` vs Inline Styles

Extract styles into a dedicated `*.css.ts` file when the style definition exceeds five rules, contains responsive overrides, or is shared across multiple components. Keep styles colocated when they are tightly coupled to a single component. There is no performance difference—VE compiles both the same way—but separate files improve readability for complex components.

The convention in Blenx is: primitive and layout components keep styles colocated. Complex composite components (Dialog, Table, Tabs) extract styles to a file prefixed by the component name (e.g., `dialog.css.ts`).
