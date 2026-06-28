import { themeContract } from "@blenx-dev/theme/contract";
import { fontSize } from "@blenx-dev/theme/tokens";
import { create } from "zustand";
import { createContext } from "zustand-utils";

type ThemeKeys = keyof typeof themeContract;
export type ThemeTokens = Record<ThemeKeys, string>;

export const defaultTokens: ThemeTokens = {
  primary: "#243142",
  primarySubtle: "#3A4A5D",
  secondary: "#C9822A",
  background: "#F7F4EE",
  backgroundSubtle: "#ECE8E0",
  surface: "#FFFFFF",
  surfaceSubtle: "#ECE8E0",
  surfaceRaised: "#FEFCFA",
  surfaceHover: "#E8E6DE",
  surfaceOverlay: "rgba(0,0,0,0.4)",
  border: "#D6DDE5",
  borderSubtle: "#E7EBF0",
  borderStrong: "#B8C2CF",
  contentPrimary: "#223042",
  contentSecondary: "#5A6878",
  contentDisabled: "#A9B2BD",
  contentAccent: "#243142",
  contentOnPrimary: "#FFFFFF",
  sentimentNegative: "#D63031",
  sentimentNegativeSubtle: "#FFEAEA",
  sentimentPositive: "#27AE60",
  sentimentPositiveSubtle: "#EAFAF1",
  sentimentWarning: "#F39C12",
  sentimentWarningSubtle: "#FEF9E7",
  sentimentInfo: "#2980B9",
  sentimentInfoSubtle: "#EBF5FB",
  focusRing: "#4A90D9",
  fontSize: fontSize.md,
  borderRadius: "medium",
  shadowSm: "0 1px 3px rgba(36,49,66,0.08), 0 1px 2px rgba(36,49,66,0.04)",
  shadowMd: "0 4px 12px rgba(36,49,66,0.10), 0 2px 4px rgba(36,49,66,0.06)",
  shadowLg: "0 8px 24px rgba(36,49,66,0.12), 0 4px 8px rgba(36,49,66,0.06)",
  shadowXl: "0 20px 48px rgba(36,49,66,0.15), 0 8px 16px rgba(36,49,66,0.08)",
  primaryHover: "#1B2533",
  sentimentPositiveHover: "#219150",
  sentimentWarningHover: "#D68910",
  sentimentNegativeHover: "#B9292A",
  sentimentInfoHover: "#206694",
  hoverOverlay: "rgba(0,0,0,0.05)",
  hoverOverlaySoft: "rgba(0,0,0,0.02)",
};

interface ThemeBuilderStore {
  tokens: ThemeTokens;
  selectedToken: keyof ThemeTokens | null;
  sidebarOpen: boolean;
  setSelectedToken: (key: keyof ThemeTokens | null) => void;
  toggleSidebar: () => void;
  updateToken: (key: keyof ThemeTokens, value: string | number) => void;
  updateTokenDebounced: (key: keyof ThemeTokens, value: string | number) => void;
  resetTokens: () => void;
}

const debounceTimers = new Map<string, ReturnType<typeof setTimeout>>();

function createThemeBuilderStore() {
  return create<ThemeBuilderStore>((set) => ({
    tokens: { ...defaultTokens },
    selectedToken: null,
    sidebarOpen: true,

    setSelectedToken: (key) => set({ selectedToken: key }),

    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

    updateToken: (key, value) => {
      const timer = debounceTimers.get(key);
      if (timer) {
        clearTimeout(timer);
        debounceTimers.delete(key);
      }
      set((state) => ({
        tokens: { ...state.tokens, [key]: value },
      }));
    },

    updateTokenDebounced: (key, value) => {
      const timer = debounceTimers.get(key);
      if (timer) clearTimeout(timer);
      debounceTimers.set(
        key,
        setTimeout(() => {
          debounceTimers.delete(key);
          set((state) => ({
            tokens: { ...state.tokens, [key]: value },
          }));
        }, 16),
      );
    },

    resetTokens: () => {
      set({ tokens: { ...defaultTokens } });
    },
  }));
}

const { Provider, useStore, useStoreApi } =
  createContext<ReturnType<typeof createThemeBuilderStore>>();

export function ThemeBuilderProvider({ children }: { children: React.ReactNode }) {
  return <Provider createStore={createThemeBuilderStore}>{children}</Provider>;
}

export { useStore as useThemeBuilder, useStoreApi as useThemeBuilderApi };
