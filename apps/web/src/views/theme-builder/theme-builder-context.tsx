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
    primary: { default: "#243142", hover: "#1B2533", active: "#0F1820" },
    primaryFg: "#FFFFFF",
    primaryBg: { default: "#E8EDF3", hover: "#D6DDE5", active: "#C5D0DB" },
    secondary: { default: "#C9822A", hover: "#B07020", active: "#9E5E19" },
    secondaryFg: "#FFFFFF",
    secondaryBg: { default: "#FDF3E8", hover: "#FCE7D1", active: "#FBDCBA" },
    neutral: { default: "#6B7280", hover: "#5A6673", active: "#495560" },
    neutralFg: "#FFFFFF",
  },
  status: {
    success: { default: "#27AE60", hover: "#219A52", active: "#1E8449" },
    successBg: "#EAFAF1",
    warning: { default: "#F39C12", hover: "#E08E0B", active: "#C9770A" },
    warningBg: "#FEF9E7",
    danger: { default: "#D63031", hover: "#C0392B", active: "#A93226" },
    dangerBg: "#FFEAEA",
    info: { default: "#2980B9", hover: "#2471A3", active: "#1F618D" },
    infoBg: "#EBF5FB",
  },
  focus: {
    ring: "#4A90D9",
  },
};

interface ThemeBuilderStore {
  tokens: ThemeTokens;
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
    selectedToken: null,

    setSelectedToken: (token) => set({ selectedToken: token }),

    updateToken: (group, key, value) => {
      const timer = debounceTimers.get(`${group}.${key}`);
      if (timer) {
        clearTimeout(timer);
        debounceTimers.delete(`${group}.${key}`);
      }
      set((state) => {
        const updated = structuredClone(state.tokens);
        const groupObj = updated[group] as Record<string, unknown>;
        const parts = key.split(".");
        if (parts.length === 1) {
          (groupObj as Record<string, string>)[key] = value;
        } else {
          const [parent, child] = parts;
          const parentObj = { ...(groupObj[parent] as Record<string, string>) };
          parentObj[child] = value;
          groupObj[parent] = parentObj;
        }
        return { tokens: updated };
      });
    },

    updateTokenDebounced: (group, key, value) => {
      const timerKey = `${group}.${key}`;
      const timer = debounceTimers.get(timerKey);
      if (timer) clearTimeout(timer);
      debounceTimers.set(
        timerKey,
        setTimeout(() => {
          debounceTimers.delete(timerKey);
          set((state) => {
            const updated = structuredClone(state.tokens);
            const groupObj = updated[group] as Record<string, unknown>;
            const parts = key.split(".");
            if (parts.length === 1) {
              (groupObj as Record<string, string>)[key] = value;
            } else {
              const [parent, child] = parts;
              const parentObj = { ...(groupObj[parent] as Record<string, string>) };
              parentObj[child] = value;
              groupObj[parent] = parentObj;
            }
            return { tokens: updated };
          });
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
