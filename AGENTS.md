# Project Preferences

## StyleX Authoring

Whenever writing or editing StyleX styles, reference `@stylex-authoring.md` for syntax, patterns, and conventions (pseudo-classes, media queries, themes, dynamic styles, etc.).

## State Management

- **Use `zustand`** for all state management needs. Do not use React Context + useReducer for global/store state.
- Zustand stores should be created with `create()` and exported as hooks directly.
- For stores that need debouncing, use module-level `Map<string, ReturnType<typeof setTimeout>>` for timer tracking (not refs), since zustand stores are singletons.

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
