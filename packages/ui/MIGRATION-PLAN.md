# Migration Plan: StyleX → Vanilla-Extract

## Strategy

**Hybrid approach:** Shared sprinkles for Box, Stack, Grid layout components. All other components use `recipe()`, `style()`, and `globalStyle()` individually.

**Incremental — one component at a time.** The existing StyleX build (`@stylexjs/unplugin` Vite plugin) remains active throughout. A VE theme bridge (`contract.css.ts`) provides CSS variable references that piggyback on the StyleX theme values at runtime.

**Theme and vars are migrated last.** No VE theme implementation until all components use VE.

---

## Prerequisites

- `@vanilla-extract/css`, `@vanilla-extract/recipes`, `@vanilla-extract/sprinkles` — already in `package.json` dependencies
- `@vanilla-extract/vite-plugin` — already in `devDependencies`
- `clsx` — already in `dependencies`

---

## Phase 0 — Foundation

### 0.1 Add VE Vite plugin

**File:** `vite.config.ts`
**Action:** Add `@vanilla-extract/vite-plugin` alongside the existing stylex plugin. Both run in parallel during migration.

### 0.2 Create VE theme bridge

**File:** `src/theme/contract.css.ts`
**Action:** `createGlobalThemeContract()` mirroring the StyleX contract variable names. No value assignment — this is just a reference layer so VE files can use `theme.primary` (resolves to `var(--primary)`) which the StyleX theme still defines at runtime.

```ts
import { createGlobalThemeContract } from "@vanilla-extract/css";

export const theme = createGlobalThemeContract({
  primary: "primary",
  primarySubtle: "primary-subtle",
  secondary: "secondary",
  primaryHover: "primary-hover",
  contentPrimary: "content-primary",
  contentSecondary: "content-secondary",
  contentDisabled: "content-disabled",
  contentAccent: "content-accent",
  contentOnPrimary: "content-on-primary",
  surface: "surface",
  surfaceSubtle: "surface-subtle",
  surfaceRaised: "surface-raised",
  surfaceHover: "surface-hover",
  surfaceOverlay: "surface-overlay",
  border: "border",
  borderSubtle: "border-subtle",
  borderStrong: "border-strong",
  borderRadius: "border-radius",
  background: "background",
  backgroundSubtle: "background-subtle",
  sentimentPositive: "sentiment-positive",
  sentimentPositiveSubtle: "sentiment-positive-subtle",
  sentimentPositiveHover: "sentiment-positive-hover",
  sentimentWarning: "sentiment-warning",
  sentimentWarningSubtle: "sentiment-warning-subtle",
  sentimentWarningHover: "sentiment-warning-hover",
  sentimentNegative: "sentiment-negative",
  sentimentNegativeSubtle: "sentiment-negative-subtle",
  sentimentNegativeHover: "sentiment-negative-hover",
  sentimentInfo: "sentiment-info",
  sentimentInfoSubtle: "sentiment-info-subtle",
  sentimentInfoHover: "sentiment-info-hover",
  focusRing: "focus-ring",
  shadowSm: "shadow-sm",
  shadowMd: "shadow-md",
  shadowLg: "shadow-lg",
  shadowXl: "shadow-xl",
  fontSize: "font-size",
  hoverOverlay: "hover-overlay",
  hoverOverlaySoft: "hover-overlay-soft",
});
```

### 0.3 Create VE tokens

**File:** `src/theme/tokens.css.ts`
**Action:** Convert StyleX token constants to plain exported objects and VE vars where appropriate.

```ts
// Border radius — can use createGlobalThemeContract or plain object
export const borderRadius = {
  xsmall: "2px",
  small: "4px",
  medium: "8px",
  large: "12px",
  xlarge: "16px",
  xxlarge: "24px",
  full: "999px",
} as const;

export const fonts = { ... } as const;
export const fontSize = { ... } as const;
export const fontWeight = { ... } as const;
export const lineHeight = { ... } as const;
export const letterSpacing = { ... } as const;
export const spacing = { ... } as const;
export const borderWidth = { ... } as const;
export const duration = { ... } as const;
export const easing = { ... } as const;

// Primitive styles → style({}) exports
// Media queries → plain objects
export const mediaQueries = { sm: "screen and (min-width: 640px)", ... } as const;
export const zIndex = { base: 0, raised: 100, ... } as const;
```

### 0.4 Create shared sprinkles config

**File:** `src/utils/sprinkles.css.ts`
**Action:** Consolidate Box layout/spacing/color/flex/position utilities from `box.css.ts`, `base.styles.ts`, and `layout.styles.ts` into one central sprinkles config. This is used by Box, Stack, and Grid.

**Conditions:** `mobile` (no query), `tablet` (min-width: 768px), `desktop` (min-width: 1280px)

**Property groups:**

- **layout:** width, maxWidth, height, maxHeight, borderRadius
- **responsiveSpacing:** padding (all directions), margin (all directions), gap with responsive conditions
- **color:** color, backgroundColor, borderColor
- **flex:** flex, flexGrow, flexShrink, display, justifyContent, alignItems
- **position:** zIndex, position, top/bottom/left/right, overflow

### 0.5 Create type utilities

**File:** `src/utils/types.ts` (replaces `stylex.utils.ts`)
**Action:** Create a types-only file with Base UI prop types, removing any `@stylexjs/stylex` import.

```ts
import type { useRender } from "@base-ui/react/use-render";

export type PropsWithClassName<T> = Omit<T, "className" | "style"> & {
  className?: string;
  style?: React.CSSProperties;
};
export type _BaseDivProps = PropsWithClassName<useRender.ComponentProps<"div">>;
```

---

## Phase 1 — Layout Components (shared sprinkles)

Components use the shared sprinkles config directly.

| #   | Component     | Action                                                                    | VE API                    |
| --- | ------------- | ------------------------------------------------------------------------- | ------------------------- |
| 1.1 | **Box**       | Delete `box.styles.ts` (already has `box.css.ts` with sprinkles)          | sprinkles                 |
| 1.2 | **Container** | Delete `container.styles.ts` (already has `container.css.ts` with recipe) | recipe                    |
| 1.3 | **Stack**     | `stack.styles.ts` → `stack.css.ts`; update `stack.tsx`                    | recipe + shared sprinkles |
| 1.4 | **Grid**      | `grid.styles.ts` → `grid.css.ts`; update `grid.tsx`                       | recipe + shared sprinkles |

### 1.3 Stack

- StyleX: orientation (horizontal/vertical), spacing, wrap, inline, align, justify, distribution
- VE: `recipe()` for orientation/spacing variants + shared sprinkles for align/justify/wrap

### 1.4 Grid

- StyleX: columns, rows, gap, areas
- VE: `recipe()` for column/row variants + shared sprinkles for gap

---

## Phase 2 — Simple Variant Components

No pseudo-classes or minimal pseudo-classes. Pure variant-based styling → `recipe()`.

| #   | Component      | Variants                                           | Pseudo-elements  | VE API                              |
| --- | -------------- | -------------------------------------------------- | ---------------- | ----------------------------------- |
| 2.1 | **Badge**      | variant (default/primary/secondary/danger/success) | none             | `recipe()`                          |
| 2.2 | **Switch**     | checked, disabled                                  | `:focus-visible` | `recipe()` + `style({ selectors })` |
| 2.3 | **Spinner**    | size (small/medium/large)                          | none             | `recipe()`                          |
| 2.4 | **Separator**  | orientation (horizontal/vertical)                  | none             | `recipe()`                          |
| 2.5 | **Icon**       | size (small/medium/large/xlarge)                   | none             | `recipe()`                          |
| 2.6 | **Progress**   | —                                                  | none             | `style()`                           |
| 2.7 | **Slider**     | orientation                                        | none             | `style()`                           |
| 2.8 | **Splitter**   | orientation                                        | none             | `style()`                           |
| 2.9 | **ScrollArea** | —                                                  | `:hover`         | `style({ selectors })`              |

---

## Phase 3 — Medium Complexity Components

Multiple variants, pseudo-classes, and/or compound sub-elements.

| #    | Component       | Key features                                                                                               | VE API                              |
| ---- | --------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 3.1  | **Button**      | 3 variant axes (intent/variant/size), `:hover`, `:disabled`, `button-intents.stylex.ts` with `createVar()` | `recipe()` + `createVar()`          |
| 3.2  | **Text**        | 12+ typography variants, color/weight/align sub-styles                                                     | `recipe()` + exported style blocks  |
| 3.3  | **Avatar**      | Size variants, fallback state                                                                              | `recipe()`                          |
| 3.4  | **Card**        | Variant (elevated/outlined), padding                                                                       | `recipe()`                          |
| 3.5  | **Surface**     | Variant (raised/subtle), padding                                                                           | `recipe()`                          |
| 3.6  | **Alert**       | Variant (info/success/warning/error), icon                                                                 | `recipe()`                          |
| 3.7  | **Field**       | Form field layout, error/label states                                                                      | `recipe()`                          |
| 3.8  | **Input**       | Size variant, `:focus`, `:disabled`, `[data-*]`                                                            | `style()` + `globalStyle()`         |
| 3.9  | **Textarea**    | Same as Input                                                                                              | `style()` + `globalStyle()`         |
| 3.10 | **InputGroup**  | Slot layout (addon, button)                                                                                | `style()`                           |
| 3.11 | **OTPField**    | Digit slots, `:focus`                                                                                      | `style()`                           |
| 3.12 | **Checkbox**    | Checked/indeterminate, `:focus-visible`, `:disabled`                                                       | `recipe()` + `style({ selectors })` |
| 3.13 | **Radio**       | Checked state, `:focus-visible`, `:disabled`                                                               | `recipe()` + `style({ selectors })` |
| 3.14 | **Toggle**      | Pressed state, `:hover`, `:focus-visible`                                                                  | `recipe()` + `style({ selectors })` |
| 3.15 | **ToggleGroup** | Orientation, variant                                                                                       | `recipe()`                          |
| 3.16 | **ColorSwatch** | Color display, checkerboard                                                                                | `style()`                           |
| 3.17 | **Breadcrumbs** | Separator, link states                                                                                     | `recipe()`                          |
| 3.18 | **Table**       | Row/header/cell styles                                                                                     | `style()` + `globalStyle()`         |

### Key Pattern: Button

- `button-intents.stylex.ts` (`stylex.defineVars`) → `createVar()` for each intent slot
- 3 recipe variant groups: `intent` (primary/neutral/success/warning/danger/info/mono), `variant` (solid/soft/outline/ghost/link), `size` (xsmall/small/icon/medium/large)
- `:hover`, `:disabled` → `style({ selectors: { "&:hover:not(:disabled)": {}, "&:disabled": {} } })`

### Key Pattern: Text

- `/text-variants.css.ts` (or inline in `text.css.ts`):
  - `recipe()` with `variant` (h1–h6, body1–4, caption, creatorNote, p, div, code) + `size` override
  - Separate style blocks for `textTransform`, `textAlign`, `textWeight`, `color`

---

## Phase 4 — Complex Interactive Components

Data-attribute selectors, parent selectors, compound compositions.

| #    | Component        | Selectors                                                                                 | VE API                      |
| ---- | ---------------- | ----------------------------------------------------------------------------------------- | --------------------------- |
| 4.1  | **Accordion**    | `[data-panel-open] &` (parent selector), `:focus-visible`, `:hover`                       | `style()` + `globalStyle()` |
| 4.2  | **Tabs**         | `:hover`, `:focus-visible`, indicator animation                                           | `recipe()` + `style()`      |
| 4.3  | **Select**       | `[data-placeholder]`, `[data-highlighted]`, `[data-selected]`, `[data-disabled]` (nested) | `style()` + `globalStyle()` |
| 4.4  | **Menu**         | data attributes, hover states                                                             | `style()` + `globalStyle()` |
| 4.5  | **Combobox**     | Similar to Select + Input                                                                 | `style()` + `globalStyle()` |
| 4.6  | **Command**      | Command palette, data attributes, `:hover`                                                | `style()` + `globalStyle()` |
| 4.7  | **Autocomplete** | Input + suggestions                                                                       | `style()` + `globalStyle()` |
| 4.8  | **Calendar**     | Date grid, selected/today/disabled                                                        | `style()` + `globalStyle()` |
| 4.9  | **ColorPicker**  | Swatches, sliders                                                                         | `style()`                   |
| 4.10 | **DatePicker**   | Combines Calendar + Popover                                                               | `style()`                   |

### Key Pattern: Parent selector workaround

StyleX `[data-panel-open] &` → VE `globalStyle()`:

```ts
globalStyle(`[data-panel-open] .${triggerIcon}`, {
  transform: "rotate(180deg)",
});
```

### Key Pattern: Nested data-attribute selectors (Select)

```ts
// VE globalStyle for scoping
globalStyle(`${item}[data-selected]`, { ... });
globalStyle(`${item}[data-highlighted]`, { ... });
globalStyle(`${item}[data-selected]:hover`, { ... });
```

---

## Phase 5 — Layout-Heavy Components

Complex animations, pseudo-elements, `:has()` selectors, media query overrides.

| #   | Component       | Key challenges                                                                                      | VE API                      |
| --- | --------------- | --------------------------------------------------------------------------------------------------- | --------------------------- |
| 5.1 | **Dialog**      | `::before`, `:has()`, `@media`, `data-[starting/ending]-style`, `--nested-dialogs`                  | `style()` + `globalStyle()` |
| 5.2 | **Sheet**       | 21 styles, directional variants, `prefers-reduced-motion`, `data-starting/ending-style`, `::before` | `style()` + `globalStyle()` |
| 5.3 | **Drawer**      | 54 styles (largest), directional/side variants, swipe area, menu items, `:has()`                    | `style()` + `globalStyle()` |
| 5.4 | **AlertDialog** | 14 styles, same patterns as Dialog, `@media (max-width: 768px)`                                     | `style()` + `globalStyle()` |
| 5.5 | **Popover**     | Arrow positioning, animations                                                                       | `style()`                   |

### Key Pattern: `::before` pseudo-element

```ts
export const popup = style({
  // ...
  selectors: {
    "&::before": {
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      borderRadius: "calc(16px - 1px)",
      boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
    },
  },
});
```

### Key Pattern: `:has()` selectors

```ts
globalStyle(`${panel}:has([data-slot='dialog-popup']:has([data-slot='dialog-header']))`, {
  paddingTop: spacing.xsmall,
});
```

### Key Pattern: Enter/exit animations

```ts
globalStyle(`${backdrop}[data-starting-style]`, { opacity: 0 });
globalStyle(`${backdrop}[data-ending-style]`, { opacity: 0 });
```

---

## Phase 6 — Components Without `styles.ts`

These have no dedicated style file. Check for inline `stylex.create()` usage.

| #   | Component            | Action                                                                          |
| --- | -------------------- | ------------------------------------------------------------------------------- |
| 6.1 | **IconButton**       | `icon-button.tsx` has inline `stylex.create({ base })` — convert to `style({})` |
| 6.2 | **CloseButton**      | Wraps IconButton; no styles to migrate                                          |
| 6.3 | **CopyButton**       | Wraps IconButton with `variant="ghost"`; no styles to migrate                   |
| 6.4 | **SegmentedControl** | Check for inline stylex; likely none                                            |
| 6.5 | **ColorPicker**      | Check for inline stylex; uses react-colorful                                    |
| 6.6 | **DatePicker**       | Commented out in barrel; skip                                                   |
| 6.7 | **ColorPicker**      | —                                                                               |

---

## Phase 7 — Cleanup

| #   | Task                                               | Details                                                                 |
| --- | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 7.1 | Delete `stylex.utils.ts`                           | Replaced by `types.ts`                                                  |
| 7.2 | Delete all `*.styles.ts` files                     | 44 component files + 2 util files (should all be gone after Phases 1–5) |
| 7.3 | Delete `button-intents.stylex.ts`                  | Converted in Phase 3.1                                                  |
| 7.4 | Remove `@stylexjs/stylex` from remaining TSX files | Verify no remaining stylex imports in components                        |

---

## Phase 8 — Theme + Vars Migration (Final)

Only after all components are on VE. The bridge (`contract.css.ts`) becomes the real contract.

| #   | Task                                         | Details                                                                             |
| --- | -------------------------------------------- | ----------------------------------------------------------------------------------- |
| 8.1 | Update `contract.css.ts`                     | Add `createGlobalTheme(":root", theme, { ...values... })` for light and dark themes |
| 8.2 | Convert `tokens.stylex.ts`                   | Replace with VE version (already created in 0.3)                                    |
| 8.3 | Remove `contract.stylex.ts`                  | No longer needed                                                                    |
| 8.4 | Remove `tokens.stylex.ts`                    | No longer needed                                                                    |
| 8.5 | Remove `theme.stylex.ts`                     | No longer needed                                                                    |
| 8.6 | Remove `@stylexjs/unplugin` from vite config | Only VE plugin remains                                                              |
| 8.7 | Update package.json                          | Remove `@stylexjs/stylex` if it was a direct dep                                    |

---

## Per-Component Conversion Template

Each component in Phases 1–5 follows these sub-steps:

```
1. Read `component.styles.ts` — catalog all style keys, pseudo-classes, selectors, media queries
2. Create `component.css.ts` — convert to recipe/style/globalStyle as appropriate
3. Read `component.tsx` — understand style application pattern:
   a. stylex.props() spread → clsx(classes)
   b. stylex.props().className extraction → clsx(classes)
   c. useRender + mergeProps → clsx + manual style merge
4. Update `component.tsx`:
   a. Remove `import * as stylex from "@stylexjs/stylex"`
   b. Change `import { ... } from "./component.styles"` → `import { ... } from "./component.css"`
   c. Replace `stylex.props(a, b, c)` with `clsx(a, b, c)`
   d. Replace `stylex.props(...).className ?? ""` with `clsx(...)`
   e. Replace `keyof typeof styleObj` with `RecipeVariants<typeof recipe>`
   f. Replace `style: StyleXStyles` with `style?: React.CSSProperties`
5. Delete `component.styles.ts`
6. Run `npm run check-types` to verify
```

---

## Dependency Order

```
contract.css.ts (VE bridge)
        ↓
 utils/sprinkles.css.ts
        ↓
  Box → Container
        ↓
   Stack → Grid
        ↓
  Simple (Badge, Switch, Spinner...)
        ↓
    Medium (Button, Text, Card...)
        ↓
 Complex (Accordion, Tabs, Select...)
        ↓
 Layout-heavy (Dialog, Sheet, Drawer...)
        ↓
 Theme migration (final)
```

Components in each phase can be migrated in any order within their phase. Lower phases don't depend on higher ones.

---

## StyleX → Vanilla-Extract Cheat Sheet

| StyleX                                 | Vanilla-Extract                                            |
| -------------------------------------- | ---------------------------------------------------------- |
| `stylex.props(a, b, c)`                | `clsx(a, b, c)`                                            |
| `stylex.create({ root: {} })`          | `export const root = style({})`                            |
| `":hover"` as key                      | `selectors: { "&:hover": {} }`                             |
| `":hover:not(:disabled)"`              | `selectors: { "&:hover:not(:disabled)": {} }`              |
| `"[data-foo]"` as key                  | `selectors: { "&[data-foo]": {} }`                         |
| `"[data-foo] &"` (parent selector)     | `globalStyle(\`[data-foo] .${className}\`, {})`            |
| `"::before"` as key                    | `selectors: { "&::before": {} }`                           |
| Multi-value with `@media`              | Nested `"@media"` in style block                           |
| `prefers-reduced-motion`               | `"@media (prefers-reduced-motion: reduce)"`                |
| `stylex.defineVars({ x: "" })`         | `createGlobalThemeContract({ x: "x" })`                    |
| `stylex.defineConsts({ x: val })`      | `export const x = val` (plain export)                      |
| `keyof typeof styleObj`                | `RecipeVariants<typeof recipe>`                            |
| `theme.primary` (stylex var)           | `theme.primary` (VE contract reference → `var(--primary)`) |
| `fontSize.spacing.xxsmall` (dependent) | `fontSize.xxsmall` (direct value)                          |
| `[intentTokens.solidBg]` (dynamic)     | `createVar()` — scoped CSS variable                        |
| `style: StyleXStyles`                  | `style?: React.CSSProperties`                              |
| `PropsWithStylex<T>`                   | `T & { style?: React.CSSProperties; className?: string }`  |
