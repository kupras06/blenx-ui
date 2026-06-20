---
title: "Styling"
description: "Write colocated, type-safe styles with StyleX—atomic CSS that compiles away at build time with no runtime overhead."
category: "Guides"
order: 3
keywords:
  - StyleX
  - atomic CSS
  - colocated styles
  - stylex.create
  - responsive design
  - component variants
  - layout
  - anti-patterns
status: "stable"
---

## StyleX Philosophy

Blenx is built on StyleX, a CSS-in-JS solution developed at Meta. StyleX compiles styles at build time into atomic CSS classes with zero runtime. Every style you write becomes a small, deterministic, collision-free class name. There is no style injection, no evaluation at runtime, and no style recalc on prop changes beyond className string concatenation.

This philosophy drives every decision in Blenx:

- **Colocation.** Styles live next to the component that uses them. Delete a component, delete its styles. No orphaned CSS.
- **Type safety.** StyleX validates property names and values at build time. A typo in `algnItems` fails before you ship.
- **Atomic output.** Each unique CSS declaration becomes one class. If two components use `display: flex`, they share the same atomic class. Total CSS size grows logarithmically, not linearly.

## Preferred Patterns

### stylex.create()

Define styles statically at the module level. Never call `stylex.create()` inside a render function or hook—it should be evaluated once per module, not per render.

```tsx
const styles = stylex.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: themeContract.spaceMd,
  },
  active: {
    backgroundColor: themeContract.accentBg,
  },
});
```

### stylex.props()

Apply styles with `stylex.props()`. This function merges multiple style objects safely, resolving conflicts through StyleX's own precedence logic rather than CSS specificity hacks.

```tsx
<div {...stylex.props(styles.root, isActive && styles.active)} />
```

Do not spread `stylex.props()` results into a style object manually. The function returns `{ className, style }`—spreading into a component that passes props to a DOM element is the intended usage.

### Dynamic Styles

When a style value depends on a prop or state, use StyleX's `stylex.defineVars()` for parametric values or compute the className conditionally. Avoid constructing style objects with inline template literals for values that StyleX should optimize.

```tsx
// Good: conditional application
<div {...stylex.props(styles.root, size === 'lg' && styles.large)} />

// Also good: parametric via CSS custom properties
const vars = stylex.defineVars({ gap: null });
<div {...stylex.props(styles.root)} style={{ [vars.gap]: gap }}>
```

## Component Variants

Use a variant map pattern. Define one base style and one style per variant. Apply the base always and the variant conditionally.

```tsx
const variants = stylex.create({
  primary: { backgroundColor: 'var(--accent-bg)' },
  secondary: { backgroundColor: 'var(--bg-surface)' },
  ghost: { backgroundColor: 'transparent' },
});
```

This scales better than a single `stylex.create()` with dozens of conditional properties because StyleX can deduplicate the atomic output across variant instances.

## Responsive Design

StyleX supports media queries through a `stylex.media()` API. Define breakpoint-specific overrides inline in your style definition.

```tsx
const styles = stylex.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [stylex.media('(min-width: 768px)')]: {
      flexDirection: 'row',
    },
  },
});
```

Define your breakpoints as constants in a shared file and reference them as string variables. StyleX will compile them into deterministic media query classes. There is no runtime breakpoint detection.

## Layout Composition

Blenx provides four layout primitives that encode common CSS patterns:

- **Box** — the foundational element. Renders a `div` with styleX props. Use it when no semantic element makes sense.
- **Stack** (HStack, VStack) — one-dimensional layout with `gap` and `alignment`. Replaces manual `display: flex` + `gap` everywhere.
- **Grid** — two-dimensional layout via CSS Grid. Accepts `columns`, `rows`, `gap`.
- **Container** — content width constraints with optional centering.

These primitives exist because layout CSS is repetitive and error-prone. A `Stack` with `gap="md"` compiles to the same atomic classes as a hand-written flex container, but it is easier to read and maintain.

## Token Usage in Styles

Always reference theme tokens through the contract. Import the contract and use it as a variable source:

```tsx
import { themeContract } from '@/lib/theme/contract.stylex';

const styles = stylex.create({
  root: {
    color: themeContract.fgBase,
    backgroundColor: themeContract.bgSurface,
    borderRadius: themeContract.radiusMd,
  },
});
```

The contract exports StyleX variables, not JavaScript values. They resolve at build time. You cannot inspect `themeContract.radiusMd` at runtime—it compiles to a CSS custom property reference.

## Anti-Patterns

### Style Recalculation on Every Render

Never call `stylex.create()` inside a render function. It creates new style objects every render and defeats StyleX's deduplication.

```tsx
// Bad: creates new styles every render
function Bad({ gap }: { gap: string }) {
  const styles = stylex.create({ root: { gap } });
  return <div {...stylex.props(styles.root)} />;
}
```

### `!important`

StyleX output is atomic and avoids specificity wars by design. Adding `!important` to a StyleX style defeats the atomic ordering system and creates conflicts that are hard to debug. If you need to override a style, use StyleX's merge semantics: pass the override as the second argument to `stylex.props()`.

### Nested Selectors

StyleX does not support nested selectors like Sass or PostCSS. If you need to style a child from a parent, use data attributes or pass styles as props. Nested selectors create coupling between a parent and its children's internal structure—Blenx prefers explicit prop drilling.

### Inline Styles via the `style` Prop

The `style` prop bypasses StyleX entirely. It creates inline styles that cannot be deduplicated, cannot be scoped, and cannot participate in the theme system. Use `style` only for truly dynamic values that cannot be expressed through StyleX (e.g., programmatic positioning). For everything else, use `stylex.props()`.

## When to Create `.styles.ts` vs Inline Styles

Extract styles into a dedicated `.styles.ts` file when the style definition exceeds five rules, contains responsive overrides, or is shared across multiple components. Keep styles inline (in the same file) when they are simple and tightly coupled to a single component. There is no performance difference—StyleX compiles both the same way—but separate style files improve readability for complex components.

The convention in Blenx is: primitive and layout components keep styles colocated. Complex composite components (Dialog, Table, Tabs) extract styles to a separate file prefixed by the component name (e.g., `dialog.styles.ts`).
