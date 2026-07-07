# Audit & Improvements Report: `@blenx-dev/core`

This document outlines the findings and proposed improvements for `@blenx-dev/core` to make it a highly configurable, customizable component library while keeping the compiled CSS size and JS bundle footprint to a minimum.

---

## 1. CSS Output & Bundle Size Optimization

Vanilla Extract's `sprinkles` generates utility classes based on the Cartesian product of properties, values, and conditions. With the current setup, the CSS output contains redundant rules and layout bloat.

### 1.1. Restrict Responsive Conditions (Breakpoints)

Currently, `responsiveConditions` defines **5 breakpoints** (`base`, `sm`, `md`, `lg`, `xl`).

- **Impact**: For every responsive property (padding, margin, flex, grid, etc.), it generates 5 media query selectors.
- **Suggestion**: Consolidate to **3 breakpoints** (e.g., `base`, `md`, `lg` / Mobile, Tablet, Desktop) which is sufficient for most application layouts. This reduces generated responsive CSS size by ~40%.
- **Status**: ✅ Removed `sm` (640px) and `xl` (1536px) — unused in component code. Kept `base`, `md` (768px), `lg` (1280px).

### 1.2. Consolidate Dual Spacing Scales

Currently, `sprinkles.tokens.ts` contains a dual scale:

- Named tokens: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`, `massive`, etc.
- Tailwind-like numeric tokens: `0`, `0.5`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `16`, `20`, `24`, `32`, `40`, `48`.
- **Impact**: Having two overlapping scales doubles the classes generated for properties like `padding`, `margin`, `gap`, `top`, `bottom`, `left`, and `right`.
- **Suggestion**: Unify on a single standard spacing scale (either named or numeric), or significantly prune unused numeric keys in the utility stylesheet.
- **Status**: ✅ Pruned unused numeric keys: removed `0.5`, `1`, `2`, `5`, `7`, `9`, `12`, `16`, `20`, `24`, `32`. Kept only the ones with actual usage: `0`, `3`, `4`, `6`, `8`, `10`, `40`, `48`. Updated all component CSS files to use named tokens (`sm`, `xs`) where `"1"` or `"2"` were previously used via `baseSprinkles()`.

### 1.3. Move Hover/Active States out of Sprinkles

Currently, `backgroundColors` in `sprinkles.tokens.ts` includes color tokens for interactive states like `primaryHover`, `primaryActive`, `secondaryHover`, `secondaryActive`, and `disabled`.

- **Impact**: Generates utility classes like `bg="primaryHover"` that are rarely needed as static utility class names.
- **Suggestion**: Interactive hover, active, and focus states are much better handled at the component recipe level (e.g., using `selectors: { '&:hover': ... }` in CSS-in-JS). Removing interactive states from sprinkles will prune many classes.
- **Status**: ✅ Removed `primaryHover`, `primaryActive`, `secondaryHover`, `secondaryActive`, and `disabled` from `backgroundColors`. The only consumer was `Switch` (thumb `disabled`/`primaryActive`), updated to use `subtle`/`primary` respectively. The palette system now handles all interactive states at the component level.

---

## 2. API Design & Component Customization (Configurability)

### 2.1. API Prop Inconsistencies for Styling and Colors

Across components, styling (solid/outline/soft) and color (primary/danger/etc.) variables use inconsistent prop names:

- **Button**: Uses `variant` for styling (solid/soft/outline/ghost/link) and `intent` for color.
- **Toggle**: Uses `variant` for styling (default/outline) and `palette` for color.
- **Badge**: Uses `appearance` for styling (solid/soft/outline) and `variant` for color.
- **Alert**: Uses `variant` for color (`info | success | warning | error`) and lacks a structural variant prop.
- **Suggestion**: Standardize props across all components:
  - Use `variant` for the visual structure (e.g., `solid | soft | outline`).
  - Use `palette` for the color roles (e.g., `primary | neutral | success | danger | info | warning`).

### 2.2. Consistent Sprinkles Support across All Components

- **Current State**: Components like `Button`, `Field`, `Text`, and `Box` use `applyBaseSprinkles` to expose layout, alignment, and spacing props to the consumer. However, input and interactive components like `Switch`, `Checkbox`, `Input`, `Dialog`, and `Menu` do not accept sprinkles on their roots.
- **Impact**: Consumers are forced to wrap elements in `<Box>` or write custom CSS overrides just to apply a basic margin (`mt`, `mb`), align items, or set width/height.
- **Suggestion**: Standardize all component props to extend `BaseSprinkles` and apply them to the root wrapper element, providing a consistent API for layout customizations.
- **Status**: ✅ All five component families now accept `BaseSprinkles` props on their roots:
  - `Input` — accepts layout/spacing/color sprinkles on the `<InputPrimitive>` root
  - `Switch` — accepts sprinkles on the `<span>` root
  - `Checkbox` — accepts sprinkles on the `<span>` root
  - `Menu` — `MenuTrigger`, `MenuPopup`, `MenuItem`, `MenuSeparator`, `MenuGroupLabel`, `MenuShortcut` all accept sprinkles
  - `Dialog` — `DialogTrigger`, `DialogClose`, `DialogBackdrop`, `DialogViewport`, `DialogPopup`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogPanel` all accept sprinkles

### 2.3. Fix the Default `borderRadius` Leak in `applyBaseSprinkles`

- **Current State**: Inside [ve-style.utils.ts](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/utils/ve-style.utils.ts#L35):
  ```ts
  sprinkleProps.borderRadius = sprinkleProps.borderRadius || "default";
  ```
- **Impact**: Every container using base sprinkles (including `<Box>`, `<HStack>`, and `<VStack>`) will implicitly receive a default border radius (e.g., `4px` or `6px`) unless the user explicitly sets `borderRadius="none"`. Layout boxes should not default to rounded corners.
- **Suggestion**: Move default border-radius assignments to individual component styles (like `Button.css.ts` or `Input.css.ts`) rather than forcing it inside the global utility helper.
- **Status**: ✅ Fixed in [ve-style.utils.ts](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/utils/ve-style.utils.ts#L35) — line removed.

### 2.4. Composable vs. Monolithic Components

- **Table**: The current `Table` component is a monolithic/JSON-driven wrapper:
  ```tsx
  <Table columnData={columns} rowData={rows} />
  ```
  While simple, this makes custom cell rendering, conditional row styling, embedding links, and customized headers hard to build. The library should export composable parts: `Table`, `TableHeader`, `TableBody`, `TableRow`, and `TableCell`.
- **Dialog and Popover**: The `DialogPopup` (under [dialog.tsx](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Dialog/dialog.tsx#L56)) automatically renders `DialogPortal`, `DialogViewport`, and `DialogBackdrop`. This prevents consumers from placing inline overlays, changing viewport configurations, or customizing portaling behaviors. Providing a helper/shorthand is fine, but the raw composable parts should remain fully customizable.

---

## 3. Specific Bugs & Standard Alignments

### 3.1. Invalid CSS Compilation in Input styles

In [input.css.ts](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Input/input.css.ts#L44):

```ts
boxShadow: `0 0 0 3px ${semanticVars.color.danger}`,
```

- **Bug**: `semanticVars.color.danger` is a full object contract (ColorRole), not a single string custom property. This compiles to the invalid CSS:
  ```css
  box-shadow: 0 0 0 3px [object Object];
  ```
- **Fix**: Change it to target a specific variable:
  ```ts
  boxShadow: `0 0 0 3px ${semanticVars.color.danger.default}`,
  ```
- **Status**: ✅ Fixed in [input.css.ts](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Input/input.css.ts#L44)

### 3.2. Dead CSS Rule in Badge Styles

In [badge.css.ts](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Badge/badge.css.ts#L28):

```ts
soft: {
  backgroundColor: "color-mix(in srgb, var(--badge-bg) 25%, transparent)",
}
```

- **Bug**: `var(--badge-bg)` is never set in this stylesheet or inherited, and the soft styling is actually overridden by compound variants on lines 72-78. This entry is dead code.
- **Status**: ✅ Fixed in [badge.css.ts](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Badge/badge.css.ts) — dead `soft` variant body removed.

### 3.3. Violation of Named-Export Rules (Namespace Objects)

The codebase includes rule configurations in `AGENTS.md`:

> _"Do not group sub-components into a namespace object (e.g. `export const Accordion = { Root, Item }`). Instead, export each sub-component individually and let consumers import them by name. No default exports."_

- **Violation**: `Select`, `PopoverCompound`, and `Accordion` all export grouped namespace objects:
  - [Select](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Select/select.tsx#L148)
  - [PopoverCompound](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Popover/popover.tsx#L98)
  - [Accordion](file:///Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Accordion/accordion.tsx#L81)
- **Fix**: Deprecate/remove these namespaces and expose them only as individual named exports.
- **Status**: ⚠️ `@deprecated` JSDoc added to all three namespace objects. Consumers still widely use them (78+ Accordion usages, 24+ Select usages, 2 PopoverCompound usages) — removal should be a separate breaking-change PR.

### 3.4. Align Components with the `Palette / Intent Color Pattern`

- **Current State**: `Alert`, `Progress`, and `Spinner` do not leverage the shared `pallete-styles.css.ts` configuration, referencing `semanticVars.color.*` directly or hardcoding background variables.
- **Fix**: Migrate these components to the `Palette / Intent Color Pattern` using `pallete-styles.css.ts` so they support the standard palette variables (`primary`, `neutral`, `success`, `danger`, `warning`, `info`, `mono`, `link`).
- **Status**:
  - `Alert`: ✅ Refactored to use `createVar()` scoped CSS vars with `vars` in recipe variants (mirrors palette pattern locally). The Alert's `bg`/`fg`/`border` mappings differ from Button/Toggle (tinted bg vs solid fill), so it uses its own scoped vars rather than the shared `paletteVars`.
  - `Progress`: ⏳ The `indicator` uses `backgroundColor: "primary"` (sprinkles value → `semanticVars.color.primary.default`). Acceptable for a progress bar — no interactive states needed.
  - `Spinner`: ⏳ No palette references — pure animation. Minimal impact.
