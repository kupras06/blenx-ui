import type { SemanticTokens } from "@blenx-dev/theme";
import { create } from "zustand";
import { createContext } from "zustand-utils";

export type ThemeTokenGroup = keyof SemanticTokens;
export type ThemeTokenValue = string;
export type ThemeTokens = SemanticTokens;

export const defaultTokens: SemanticTokens = {
  background: {
    default: "#F7F4EE",
    subtle: "#ECE8E0",
  },
  surface: {
    default: "#FFFFFF",
    raised: "#FEFCFA",
    overlay: "rgba(0,0,0,0.4)",
    floating: "#FFFFFF",
  },
  text: {
    primary: "#223042",
    secondary: "#5A6878",
    disabled: "#A9B2BD",
    inverse: "#FFFFFF",
  },
  border: {
    default: "#D6DDE5",
    subtle: "#E7EBF0",
    strong: "#B8C2CF",
  },
  interactive: {
    primary: "#243142",
    primaryFg: "#FFFFFF",
    primaryHover: "#1B2533",
    primaryBg: "#E8EDF3",
    secondary: "#C9822A",
    secondaryFg: "#FFFFFF",
    secondaryHover: "#B07020",
    secondaryBg: "#FDF3E8",
    neutral: "#6B7280",
    neutralFg: "#FFFFFF",
  },
  status: {
    success: "#27AE60",
    successBg: "#EAFAF1",
    warning: "#F39C12",
    warningBg: "#FEF9E7",
    danger: "#D63031",
    dangerBg: "#FFEAEA",
    info: "#2980B9",
    infoBg: "#EBF5FB",
  },
  focus: {
    ring: "#4A90D9",
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.07)",
    lg: "0 10px 15px rgba(0,0,0,0.1)",
    xl: "0 20px 25px rgba(0,0,0,0.15)",
  },
};

interface ThemeBuilderStore {
  tokens: ThemeTokens;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  updateToken: (group: ThemeTokenGroup, key: string, value: ThemeTokenValue) => void;
  updateTokenDebounced: (group: ThemeTokenGroup, key: string, value: ThemeTokenValue) => void;
  resetTokens: () => void;
  selectedToken: string | null;
  setSelectedToken: (token: string | null) => void;
}

const debounceTimers = new Map<string, ReturnType<typeof setTimeout>>();

function createThemeBuilderStore() {
  return create<ThemeBuilderStore>((set) => ({
    tokens: structuredClone(defaultTokens),
    sidebarOpen: true,
    selectedToken: null,

    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

    setSelectedToken: (token) => set({ selectedToken: token }),

    updateToken: (group, key, value) => {
      const timer = debounceTimers.get(`${group}.${key}`);
      if (timer) {
        clearTimeout(timer);
        debounceTimers.delete(`${group}.${key}`);
      }
      set((state) => ({
        tokens: {
          ...state.tokens,
          [group]: {
            ...(state.tokens[group] as Record<string, string>),
            [key]: value,
          },
        },
      }));
    },

    updateTokenDebounced: (group, key, value) => {
      const timerKey = `${group}.${key}`;
      const timer = debounceTimers.get(timerKey);
      if (timer) clearTimeout(timer);
      debounceTimers.set(
        timerKey,
        setTimeout(() => {
          debounceTimers.delete(timerKey);
          set((state) => ({
            tokens: {
              ...state.tokens,
              [group]: {
                ...(state.tokens[group] as Record<string, string>),
                [key]: value,
              },
            },
          }));
        }, 16),
      );
    },

    resetTokens: () => {
      set({ tokens: structuredClone(defaultTokens) });
    },
  }));
}

const { Provider, useStore, useStoreApi } =
  createContext<ReturnType<typeof createThemeBuilderStore>>();

export function ThemeBuilderProvider({ children }: { children: React.ReactNode }) {
  return <Provider createStore={createThemeBuilderStore}>{children}</Provider>;
}

export { useStore as useThemeBuilder, useStoreApi as useThemeBuilderApi };
