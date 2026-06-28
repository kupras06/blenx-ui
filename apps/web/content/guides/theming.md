---
title: "Theming"
description: "Understand Blenx's three-layer theme architecture—contract, tokens, themes—and learn how to create custom themes without fighting the framework."
category: "Customization"
order: 2
keywords:
  - theme
  - design tokens
  - semantic tokens
  - dark mode
  - light mode
  - vanilla-extract
  - theming
  - token inheritance
status: "stable"
navigation:
  group: guides
  order: 2
---

## Theme Architecture

Blenx organizes theming in three layers: **contract**, **tokens**, and **themes**. This separation enforces a clean boundary between design decisions and component implementations.

```
contract.css.ts    →   createThemeContract (variable names only, the "API")
tokens.css.ts      →   design token primitives (raw values: colors, spacing, fonts)
light-theme.css.ts →   createTheme (maps values to contract variables for light/dark modes)
```

### The Contract

The contract (`contract.css.ts`) uses `createThemeContract()` from vanilla-extract to declare every theme variable without assigning any values. It is a schema, not a theme. Components import only from the contract—never from a theme file. This means a component's styles say "use `contentPrimary`" instead of "use `#1c1917`". The component does not know or care what value `contentPrimary` resolves to at runtime.

```tsx
// contract.css.ts
import { createThemeContract } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  primary: "primary",
  primarySubtle: "primary-subtle",
  contentPrimary: "content-primary",
  contentSecondary: "content-secondary",
  surface: "surface",
  border: "border",
  borderRadius: "border-radius",
  shadowSm: "shadow-sm",
  // ...
});
```

The string values (e.g. `"content-primary"`) become CSS custom property names (`--content-primary`). Every variable must be assigned a value by a theme before it resolves to something meaningful.

### The Tokens

Design tokens (`tokens.css.ts`) are raw primitive values: colors, spacing, font sizes, radii, shadows, etc. They are plain `const` objects, not CSS. Tokens serve as the source of truth for raw values but are never referenced directly in component styles—they are consumed by theme definitions.

```tsx
// tokens.css.ts
export const borderRadius = {
  small: "4px",
  medium: "8px",
  large: "12px",
  full: "999px",
} as const;

export const fontSize = {
  small: "14px",
  medium: "16px",
  large: "18px",
} as const;

export const spacing = {
  none: "0px",
  small: "12px",
  medium: "16px",
  large: "24px",
  // ...
} as const;
```

**Guideline:** Component styles reference only contract variables. Raw token values belong in theme definition files only.

### The Themes

Themes are created with `createTheme()` from vanilla-extract. Each theme maps every contract variable to a concrete value.

```tsx
// light-theme.css.ts
import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./contract.css";

export const [themeClass, themeVars] = createTheme(themeContract, {
  primary: "#1c1917",
  contentPrimary: "#1c1917",
  contentSecondary: "#57534e",
  surface: "#ffffff",
  background: "#f5f3ef",
  border: "#e2ddd6",
  borderRadius: "12px",
  // ...
});
```

`createTheme()` returns a tuple: `[themeClass, themeVars]`. `themeClass` is a CSS class name that, when applied to an element, sets all contract CSS variables to the provided values. `themeVars` is a typed object mirroring the contract shape, useful for scoped overrides.

Multiple themes coexist by producing different CSS classes:

```tsx
export const [themeClass, themeVars] = createTheme(themeContract, {
  /* light values */
});
export const darkThemeClass = createTheme(themeContract, {
  /* dark values */
});
```

### Design Tokens vs Semantic Tokens

Design tokens are raw values: `#ffffff`, `16px`, `0.5`. Semantic tokens are contextual names: `contentPrimary`, `borderRadius`, `surface`. The distinction matters because semantic tokens encode _intent_, not _value_.

A button uses `themeContract.primary` for its background. When you introduce a "high contrast" theme, `themeContract.primary` maps to a different hex value. The button changes without being touched. If the button had used `#1c1917` directly, you would need to override every instance.

**Guideline:** Component styles should reference only semantic tokens from the contract. Raw values belong in theme definition files only.

## Color System

Light and dark themes each define a full palette. The contract exposes:

- `contentPrimary` / `contentSecondary` / `contentDisabled` — text colors
- `background` / `backgroundSubtle` — page background layers
- `surface` / `surfaceSubtle` / `surfaceRaised` — component surface layers
- `border` / `borderSubtle` / `borderStrong` — border colors
- `primary` / `primarySubtle` / `primaryHover` — interactive accents
- `sentimentPositive` / `sentimentWarning` / `sentimentNegative` / `sentimentInfo` — semantic colors

The dark theme inverts these relationships. Components never detect dark mode—they reference `themeContract.contentPrimary` and the active theme class provides the correct value.

## Typography Scale

The tokens file defines `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, and `fonts` as raw values. Individual themes reference these in `createTheme`:

```tsx
createTheme(themeContract, {
  fontSize: fontSize.md, // "16px"
});
```

Components read the resolved value through `themeContract.fontSize`. Font families are defined in `tokens.css.ts`, not in components. This lets you swap from "DM Sans" to your brand font by editing one file.

## Radius, Shadows, and Spacing

Layout tokens follow the same discipline:

- `borderRadius` — consistent corner rounding via `themeContract.borderRadius`
- `shadowSm`, `shadowMd`, `shadowLg`, `shadowXl` — elevation hierarchy
- Spacing is handled through `Stack`, `Grid`, and `Box` props, not magic numbers

Never reference `border-radius: 8px` in a component file. Use `themeContract.borderRadius`. If your design system pivots from rounded to sharp corners, you change one line instead of fifty.

## Theme Switching

Blenx uses a zustand store (`useThemeStore`) to manage the active theme, persisted to `localStorage` under the key `"theme"`. An inline `<script>` in the document `<head>` reads this value and sets `color-scheme` on `<html>` before React hydrates to prevent flash of unstyled content.

The theme toggle swaps classes on `<html>`:

```tsx
document.documentElement.classList.remove(lightTheme, darkThemeClass);
document.documentElement.classList.add(nextTheme);
```

A `<meta name="color-scheme" content="dark light">` tag ensures native elements respect the theme.

## Using Contract Variables in Components

Components reference the contract inside `style()` calls:

```tsx
import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/ui/theme/contract.css";

export const root = style({
  backgroundColor: themeContract.surface,
  color: themeContract.contentPrimary,
  border: `1px solid ${themeContract.border}`,
});
```

Apply styles with standard `className`:

```tsx
<div className={root}>...</div>
```

## Creating Custom Themes

To add a brand theme:

1. Create a new theme with `createTheme(contract, { ... })`
2. Import the resulting class in your app
3. Apply the class to `<html>` (or a subtree) via `classList`

```tsx
// my-brand-theme.css.ts
import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/ui/theme/contract.css";

export const brandTheme = createTheme(themeContract, {
  primary: "#ff6b35",
  contentPrimary: "#1a1a2e",
  surface: "#ffffff",
  // ... override any contract variable
});
```

Then apply it:

```tsx
import { brandTheme } from "./my-brand-theme.css";

document.documentElement.classList.add(brandTheme);
```

You can scope themes by applying the theme class to any container element. Theme inheritance works through CSS cascade—child elements resolve to the nearest ancestor with a theme class.

## Common Pitfalls

- **Hardcoding values in components.** Resist typing `color: '#333'` in a component file. It creates a leaky abstraction that bypasses theming. Use a contract variable or add a new one to the contract.
- **Putting component-specific values in the contract.** If only one component needs a token, keep it local. The contract is for shared design language, not per-component quirks.
- **Mutating theme objects.** `createTheme` output is statically extracted at build time. Do not programmatically merge or override theme objects at runtime—vanilla-extract does not support it.
- **Forgetting to apply the theme class.** Contract variables without an active theme class produce empty string values. Your app root must add the theme class to the document element.
