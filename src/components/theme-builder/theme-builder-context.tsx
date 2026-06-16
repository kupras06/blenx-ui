import { create } from "zustand";
import { createContext } from "zustand-utils";

export type ThemeTokens = {
	primary: string;
	primarySubtle: string;
	secondary: string;
	background: string;
	backgroundSubtle: string;
	surface: string;
	surfaceSubtle: string;
	surfaceRaised: string;
	surfaceHover: string;
	surfaceOverlay: string;
	border: string;
	borderSubtle: string;
	borderStrong: string;
	contentPrimary: string;
	contentSecondary: string;
	contentDisabled: string;
	contentAccent: string;
	contentOnPrimary: string;
	contentInverse: string;
	sentimentNegative: string;
	sentimentNegativeSubtle: string;
	sentimentPositive: string;
	sentimentPositiveSubtle: string;
	sentimentWarning: string;
	sentimentWarningSubtle: string;
	sentimentInfo: string;
	sentimentInfoSubtle: string;
	focusRing: string;
	fontFamilySans: string;
	fontFamilyMono: string;
	baseFontSize: string;
	headingScale: number;
	fontWeight: string;
	shadowIntensity: string;
	radius: string;
	spacing: string;
	shadowSm: string;
	shadowMd: string;
	shadowLg: string;
	shadowXl: string;
};

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
	contentInverse: "#F7F4EE",
	sentimentNegative: "#D63031",
	sentimentNegativeSubtle: "#FFEAEA",
	sentimentPositive: "#27AE60",
	sentimentPositiveSubtle: "#EAFAF1",
	sentimentWarning: "#F39C12",
	sentimentWarningSubtle: "#FEF9E7",
	sentimentInfo: "#2980B9",
	sentimentInfoSubtle: "#EBF5FB",
	focusRing: "#4A90D9",
	fontFamilySans: '"DM Sans", system-ui, -apple-system, sans-serif',
	fontFamilyMono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
	baseFontSize: "16px",
	headingScale: 1.25,
	fontWeight: "400",
	shadowIntensity: "medium",
	radius: "medium",
	spacing: "default",
	shadowSm: "0 1px 3px rgba(36,49,66,0.08), 0 1px 2px rgba(36,49,66,0.04)",
	shadowMd: "0 4px 12px rgba(36,49,66,0.10), 0 2px 4px rgba(36,49,66,0.06)",
	shadowLg: "0 8px 24px rgba(36,49,66,0.12), 0 4px 8px rgba(36,49,66,0.06)",
	shadowXl: "0 20px 48px rgba(36,49,66,0.15), 0 8px 16px rgba(36,49,66,0.08)",
};

interface ThemeBuilderStore {
	tokens: ThemeTokens;
	selectedToken: keyof ThemeTokens | null;
	sidebarOpen: boolean;
	setSelectedToken: (key: keyof ThemeTokens | null) => void;
	toggleSidebar: () => void;
	updateToken: (key: keyof ThemeTokens, value: string | number) => void;
	updateTokenDebounced: (
		key: keyof ThemeTokens,
		value: string | number,
	) => void;
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

export function ThemeBuilderProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Provider createStore={createThemeBuilderStore}>{children}</Provider>;
}

export { useStore as useThemeBuilder, useStoreApi as useThemeBuilderApi };
