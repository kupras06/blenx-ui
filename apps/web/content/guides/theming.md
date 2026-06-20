---
title: "Theming"
description: "Understand Blenx's three-layer theme architecture—contract, themes, tokens—and learn how to create custom themes without fighting the framework."
category: "Customization"
order: 2
keywords:
  - theme
  - design tokens
  - semantic tokens
  - dark mode
  - light mode
  - StyleX
  - theming
  - token inheritance
status: "stable"
navigation:
  group: guides
  order: 2
---

## Theme Architecture

Blenx organizes theming in three layers: **contract**, **themes**, and **tokens**. This separation is not accidental—it enforces a clean boundary between design decisions and component implementations.

```
contract.stylex.ts    →   defines variable names only (the "API")
app-theme.stylex.ts   →   maps values to variables for light/dark themes
tokens.stylex.ts      →   semantic aliases used by components
```

### The Contract

The contract (`contract.stylex.ts`) uses `stylex.defineVars()` to declare every theme variable without assigning any values. It is a schema, not a theme. Components import only from the contract—never from a theme file. This means a component's styles say "use `fg.base`" instead of "use `#111`". The component does not know or care what value `fg.base` resolves to at runtime.

```tsx
// contract.stylex.ts
export const themeContract = stylex.defineVars({
  fgBase: null,
  fgMuted: null,
  bgBase: null,
  bgSurface: null,
  radiusSm: null,
  radiusMd: null,
  shadowSm: null,
  fontBody: null,
  fontHeading: null,
  scaleBase: null,
});
```

Every variable uses `null` as its initial value. StyleX errors at build time if a variable is accessed without a theme applied—no silent fallthroughs.

### The Themes

Themes are created with `stylex.createTheme()`. Each theme provides values for every variable in the contract. The filesystem contains `app-theme.stylex.ts` with `lightTheme` and `darkTheme` as separate theme objects.

A theme is a mapping from contract variable → concrete value. These values can reference raw design tokens or other variables. The pattern is always: contract → theme → component. Never the reverse.

### Design Tokens vs Semantic Tokens

Design tokens are raw values: `#ffffff`, `16px`, `0.5`. Semantic tokens are contextual names: `bgBase`, `radiusMd`, `scale100`. The distinction matters because semantic tokens encode _intent_, not _value_.

A button uses `bgBase` for its background. When you introduce a "high contrast" theme, `bgBase` maps to a different hex value. The button changes without being touched. If the button had used `#ffffff` directly, you would need to override every instance.

**Guideline:** Component styles should reference only semantic tokens from the contract. Raw values belong in theme definition files only.

## Color System

Light and dark themes each define a full palette of foreground, background, border, and accent colors. The contract exposes:

- `fgBase` / `fgMuted` / `fgInverse` — text colors
- `bgBase` / `bgSurface` / `bgElevated` — background layers
- `borderBase` / `borderInteractive` — border colors
- `accentBg` / `accentFg` — interactive accents

The dark theme inverts these relationships. Where light mode uses `fgBase: '#111'` and `bgBase: '#fff'`, dark mode swaps them. Components never detect dark mode—they reference `fgBase` and the active theme provides the correct value.

## Typography Scale

The contract defines a type scale through `fontBody`, `fontHeading`, and `scaleBase`. The `Text` primitive uses `scaleBase` as a multiplier for modular scaling. Changing `scaleBase` from `1` to `1.25` shifts every text size proportionally.

Font families are defined in the theme, not in components. This lets you swap from Inter to Geist to your brand font by editing one file.

## Radius, Shadows, and Spacing

Layout tokens follow the same discipline:

- `radiusSm`, `radiusMd`, `radiusLg` — consistent corner rounding
- `shadowSm`, `shadowMd`, `shadowLg` — elevation hierarchy
- Spacing is handled through `Stack` and `Grid` props, not magic numbers

Never reference `border-radius: 8px` in a component file. Use `themeContract.radiusMd`. If your design system pivots from rounded to sharp corners, you change one line instead of fifty.

## Theme Switching

Blenx uses zustand to manage the active theme, persisted to `localStorage` under the key `"theme"`. An inline `<script>` in the document `<head>` reads this value before React hydrates to prevent flash of unstyled content.

- `useThemeStore` exposes `theme` ("light" | "dark") and `setTheme`.
- Applying the theme means setting the corresponding `stylex.createTheme()` result on a provider element wrapping your app.
- A `<meta name="color-scheme" content="dark light">` tag ensures native elements respect the theme.

## Creating Custom Themes

To add a brand theme:

1. Create a new theme object with `stylex.createTheme(contract, { ... })`
2. Add the theme to your zustand store
3. Apply it via the StyleX `theme` prop at the root

You can stack themes. Wrap a section of your app in a `theme={brandTheme}` to scope the brand theme to that subtree. Theme inheritance works through React's tree—child elements resolve to the nearest theme provider.

## Common Pitfalls

- **Hardcoding values in components.** Resist typing `color: '#333'` in a component file. It creates a leaky abstraction that bypasses theming. Use a contract variable or add a new one to the contract.
- **Putting component-specific values in the contract.** If only one component needs a token, keep it local. The contract is for shared design language, not per-component quirks.
- **Mutating theme objects.** StyleX themes are statically defined. Do not programmatically merge or override theme objects at runtime—StyleX does not support it.
- **Forgetting to apply the theme provider.** Contract variables without an active theme produce no styles. Your app root must wrap content with the active theme via the `theme` prop.
