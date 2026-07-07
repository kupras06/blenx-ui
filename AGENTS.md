# Project Preferences

## Git Workflow

- **All changes must go through a PR.** Never commit or push directly to `main`. Always create a feature branch, push it, and open a pull request.
- PRs should reference the relevant issue number (e.g., `Closes #N`).

## Vanilla Extract Authoring

Whenever writing or editing theme/style files, reference `.clinerules` for Vanilla Extract conventions (themes, contracts, responsive patterns, pseudo-classes, etc.).

## State Management

- **Use `zustand`** for all state management needs. Do not use React Context + useReducer for global/store state.
- Zustand stores should be created with `create()` and exported as hooks directly.
- For stores that need debouncing, use module-level `Map<string, ReturnType<typeof setTimeout>>` for timer tracking (not refs), since zustand stores are singletons.

## Component Exports

- Component files must only use **named exports** (`export {}` and `export type {}`). Do not group sub-components into a namespace object (e.g. `export const Accordion = { Root, Item }`). Instead, export each sub-component individually and let consumers import them by name.
- **No `default` exports** in component files or barrel files.
- The barrel file (`index.ts`) re-exports all named exports.

### Scoped Stores (Provider pattern)

For stores that should be scoped to a specific route or subtree (not global singletons), use `createContext` from `zustand-utils`:

```ts
import { create } from "zustand";
import { createContext } from "zustand-utils";

interface MyStore { ... }
function createMyStore() {
  return create<MyStore>((set) => ({ ... }));
}

const { Provider: MyProvider, useStore: useMyStore } = createContext<ReturnType<typeof createMyStore>>();

// Wrap subtree
<MyProvider createStore={createMyStore}>{children}</MyProvider>

// Read state with selectors
const value = useMyStore((s) => s.value)
const actions = useMyStore((s) => s.actions)
```

## Theme System

- Theme is defined via Vanilla Extract contract (`packages/theme/src/contract.css.ts`) with `createThemeContract()`.
- Two themes are created with `createTheme` in `packages/theme/src/light-theme.css.ts`: a light theme and a dark theme variant.
- App-level themes are in `apps/web/src/lib/app-theme.css.ts` (`lightTheme` / `darkTheme` class names).
- Design token primitives (spacing, font-sizes, radii, etc.) live in `packages/theme/src/tokens.css.ts`.
- Theme mode is managed by zustand store (scoped store pattern via `zustand-utils/createContext`).
- An inline `<script>` in `<head>` sets `color-scheme` on `<html>` from localStorage before any rendering.
- A `<meta name="color-scheme" content="dark light">` tag is included in the document head.
- Theme toggle button uses sun/moon icons from `@phosphor-icons/react`.

## Lint & Format

- **Linting**: `oxlint` via `.oxlintrc.json`.
- **Formatting**: `oxfmt` via `.oxfmtrc.json` (tabs, double quotes, trailing commas, semicolons).
- Run `npm run check` before pushing (oxfmt --check + oxlint).
- Run `npm run check:fix` to auto-fix.

## UI Components

- Always prefer `@blenx-dev/core` components for any UI (Popover, Menu, Button, HStack, VStack, Box, Text, Badge, etc.) rather than building custom elements with plain HTML/CSS.
- Components from `@blenx-dev/core` are the source of truth for layout, interaction, and styling patterns.

## Shared Intent Color Tokens

A global token map lives at `packages/core/src/utils/intent.ts`:

- **`intentColorTokens`** — a `Record<ColorRoleName, IntentColorTokens>` mapping each of the 7 color roles (`primary`, `secondary`, `neutral`, `success`, `warning`, `danger`, `info`) to all 10 `ColorRole` sub-keys (`default`, `hover`, `active`, `bg`, `bgHover`, `bgActive`, `fg`, `text`, `textActive`, `border`).
- **`IntentName`** — type alias for `ColorRoleName`.
- **`IntentColorTokens`** — record type keyed by `ColorRole` sub-key names.

Use `intentColorTokens` instead of referencing `semanticVars.color.*` directly. This ensures a single source of truth for all intent→token mappings across Button, Toggle, Badge, Alert, and future components.

## Palette / Intent Color Pattern

When adding theme-driven color support (e.g. `palette`, `intent`) to a component, follow the Button/Toggle pattern:

1. Declare scoped CSS vars with `createVar()` and export them as `componentVars`.
2. Add a `palette`/`intent` variant dimension to the `recipe` that assigns tokens to the vars via `vars: { [var]: intentColorTokens.intentName.key }`.
3. Variant-specific defaults (e.g. outline vs. default background) are also set via `vars` in their respective variant entries. `palette` variant is listed **after** `variant` in the recipe so it always overrides variant defaults.
4. Base-level (no-palette) defaults go in the recipe's `base.vars`.
5. Pressed/hover/active states reference the vars directly (no `var()` fallback strings needed — `createVar()` scoped names handle isolation).
6. The component passes the palette value straight to the recipe: `recipe({ size, variant, palette })`.

Example at `packages/core/src/components/Toggle/toggle.css.ts`:
