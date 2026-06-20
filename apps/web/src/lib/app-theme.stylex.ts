import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { borderRadius } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import * as stylex from "@stylexjs/stylex";

const lightValues = {
	primary: "#1c1917",
	primarySubtle: "#57534e",
	secondary: "#4f5d95",
	focusRing: "#5b5fc7",

	background: "#f5f3ef",
	backgroundSubtle: "#edeae4",

	surface: "#ffffff",
	surfaceSubtle: "#faf9f7",
	surfaceRaised: "#ffffff",
	surfaceHover: "#edeae4",
	surfaceOverlay: "rgba(28,25,23,0.35)",

	border: "#e2ddd6",
	borderSubtle: "#edeae4",
	borderStrong: "#c8c1b5",

	contentPrimary: "#1c1917",
	contentSecondary: "#57534e",
	contentDisabled: "#a8a29e",
	contentAccent: "#1c1917",
	contentOnPrimary: "#ffffff",

	sentimentNegative: "#ef4444",
	sentimentNegativeSubtle: "#fef2f2",
	sentimentPositive: "#10b981",
	sentimentPositiveSubtle: "#ecfdf5",
	sentimentWarning: "#f59e0b",
	sentimentWarningSubtle: "#fffbeb",
	sentimentInfo: "#0ea5e9",
	sentimentInfoSubtle: "#f0f9ff",

	shadowSm: "0 1px 3px rgba(28,25,23,0.07), 0 1px 2px rgba(28,25,23,0.04)",
	shadowMd: "0 4px 12px rgba(28,25,23,0.09), 0 2px 4px rgba(28,25,23,0.05)",
	shadowLg: "0 8px 24px rgba(28,25,23,0.11), 0 4px 8px rgba(28,25,23,0.05)",
	shadowXl: "0 20px 48px rgba(28,25,23,0.14), 0 8px 16px rgba(28,25,23,0.07)",

	primaryHover: "#292524",
	sentimentPositiveHover: "#059669",
	sentimentWarningHover: "#d97706",
	sentimentNegativeHover: "#dc2626",
	sentimentInfoHover: "#0284c7",

	hoverOverlay: "rgba(28,25,23,0.05)",
	hoverOverlaySoft: "rgba(28,25,23,0.10)",
};

const darkValues = {
	primary: "#f5f3ef",
	primarySubtle: "#d4cec5",
	secondary: "#8ea0ff",

	background: "#0f0e0c",
	backgroundSubtle: "#1a1916",

	surface: "#1a1916",
	surfaceSubtle: "#242320",
	surfaceRaised: "#2e2c28",
	surfaceHover: "#2e2c28",
	surfaceOverlay: "rgba(0,0,0,0.75)",

	border: "#2e2c28",
	borderSubtle: "#242320",
	borderStrong: "#3c3a35",

	contentPrimary: "#f5f3ef",
	contentSecondary: "#a8a29e",
	contentDisabled: "#57534e",
	contentAccent: "#f5f3ef",
	contentOnPrimary: "#0f0e0c",

	focusRing: "#818cf8",

	sentimentNegative: "#f87171",
	sentimentNegativeSubtle: "#450a0a",
	sentimentPositive: "#34d399",
	sentimentPositiveSubtle: "#064e3b",
	sentimentWarning: "#fbbf24",
	sentimentWarningSubtle: "#451a03",
	sentimentInfo: "#38bdf8",
	sentimentInfoSubtle: "#082f49",

	shadowSm: "0 1px 3px rgba(0,0,0,0.28), 0 1px 2px rgba(0,0,0,0.18)",
	shadowMd: "0 4px 12px rgba(0,0,0,0.32), 0 2px 4px rgba(0,0,0,0.18)",
	shadowLg: "0 8px 24px rgba(0,0,0,0.38), 0 4px 8px rgba(0,0,0,0.22)",
	shadowXl: "0 20px 48px rgba(0,0,0,0.48), 0 8px 16px rgba(0,0,0,0.28)",

	primaryHover: "#e7e3dc",
	sentimentPositiveHover: "#6ee7b7",
	sentimentWarningHover: "#fcd34d",
	sentimentNegativeHover: "#fca5a5",
	sentimentInfoHover: "#7dd3fc",

	hoverOverlay: "rgba(245,243,239,0.07)",
	hoverOverlaySoft: "rgba(245,243,239,0.13)",
};

export const lightTheme = stylex.createTheme(theme, {
	primary: lightValues.primary,
	primarySubtle: lightValues.primarySubtle,
	primaryHover: lightValues.primaryHover,
	secondary: lightValues.secondary,
	fontSize: "16px",
	background: lightValues.background,
	backgroundSubtle: lightValues.backgroundSubtle,

	surface: lightValues.surface,
	surfaceSubtle: lightValues.surfaceSubtle,
	surfaceRaised: lightValues.surfaceRaised,
	surfaceHover: lightValues.surfaceHover,
	surfaceOverlay: lightValues.surfaceOverlay,

	border: lightValues.border,
	borderSubtle: lightValues.borderSubtle,
	borderStrong: lightValues.borderStrong,
	borderRadius: borderRadius.large,

	contentPrimary: lightValues.contentPrimary,
	contentSecondary: lightValues.contentSecondary,
	contentDisabled: lightValues.contentDisabled,
	contentOnPrimary: lightValues.contentOnPrimary,

	focusRing: lightValues.focusRing,

	sentimentNegative: lightValues.sentimentNegative,
	sentimentNegativeSubtle: lightValues.sentimentNegativeSubtle,
	sentimentNegativeHover: lightValues.sentimentNegativeHover,

	sentimentPositive: lightValues.sentimentPositive,
	sentimentPositiveSubtle: lightValues.sentimentPositiveSubtle,
	sentimentPositiveHover: lightValues.sentimentPositiveHover,

	sentimentWarning: lightValues.sentimentWarning,
	sentimentWarningSubtle: lightValues.sentimentWarningSubtle,
	sentimentWarningHover: lightValues.sentimentWarningHover,

	sentimentInfo: lightValues.sentimentInfo,
	sentimentInfoSubtle: lightValues.sentimentInfoSubtle,
	sentimentInfoHover: lightValues.sentimentInfoHover,

	shadowSm: lightValues.shadowSm,
	shadowMd: lightValues.shadowMd,
	shadowLg: lightValues.shadowLg,
	shadowXl: lightValues.shadowXl,

	hoverOverlay: lightValues.hoverOverlay,
	hoverOverlaySoft: lightValues.hoverOverlaySoft,
});

export const darkTheme = stylex.createTheme(theme, {
	primary: darkValues.primary,
	primarySubtle: darkValues.primarySubtle,
	primaryHover: darkValues.primaryHover,
	secondary: darkValues.secondary,
	fontSize: "16px",
	background: darkValues.background,
	backgroundSubtle: darkValues.backgroundSubtle,

	surface: darkValues.surface,
	surfaceSubtle: darkValues.surfaceSubtle,
	surfaceRaised: darkValues.surfaceRaised,
	surfaceHover: darkValues.surfaceHover,
	surfaceOverlay: darkValues.surfaceOverlay,

	border: darkValues.border,
	borderSubtle: darkValues.borderSubtle,
	borderStrong: darkValues.borderStrong,
	borderRadius: borderRadius.large,

	contentPrimary: darkValues.contentPrimary,
	contentSecondary: darkValues.contentSecondary,
	contentDisabled: darkValues.contentDisabled,
	contentOnPrimary: darkValues.contentOnPrimary,

	focusRing: darkValues.focusRing,

	sentimentNegative: darkValues.sentimentNegative,
	sentimentNegativeSubtle: darkValues.sentimentNegativeSubtle,
	sentimentNegativeHover: darkValues.sentimentNegativeHover,

	sentimentPositive: darkValues.sentimentPositive,
	sentimentPositiveSubtle: darkValues.sentimentPositiveSubtle,
	sentimentPositiveHover: darkValues.sentimentPositiveHover,

	sentimentWarning: darkValues.sentimentWarning,
	sentimentWarningSubtle: darkValues.sentimentWarningSubtle,
	sentimentWarningHover: darkValues.sentimentWarningHover,

	sentimentInfo: darkValues.sentimentInfo,
	sentimentInfoSubtle: darkValues.sentimentInfoSubtle,
	sentimentInfoHover: darkValues.sentimentInfoHover,

	shadowSm: darkValues.shadowSm,
	shadowMd: darkValues.shadowMd,
	shadowLg: darkValues.shadowLg,
	shadowXl: darkValues.shadowXl,

	hoverOverlay: darkValues.hoverOverlay,
	hoverOverlaySoft: darkValues.hoverOverlaySoft,
});
