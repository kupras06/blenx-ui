# Project Preferences

## Git Workflow

- **All changes must go through a PR.** Never commit or push directly to `main`. Always create a feature branch, push it, and open a pull request.
- PRs should reference the relevant issue number (e.g., `Closes #N`).

## StyleX Authoring

Whenever writing or editing StyleX styles, reference `@stylex-authoring.md` for syntax, patterns, and conventions (pseudo-classes, media queries, themes, dynamic styles, etc.).

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
