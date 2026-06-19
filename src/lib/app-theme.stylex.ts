import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius } from "@/lib/theme/tokens.stylex";
import * as stylex from "@stylexjs/stylex";

const colors = {
	error: "#ef4444",
	errorLight: "#f87171",
	errorDark: "#7f1d1d",
	success: "#22c55e",
	successLight: "#4ade80",
	successDark: "#14532d",
	warning: "#eab308",
	warningLight: "#facc15",
	warningDark: "#713f12",
	info: "#3b82f6",
	infoLight: "#60a5fa",
	infoDark: "#1e3a8a",
} as const;

const lightValues = {
	primary: "#18181b",
	primarySubtle: "#3f3f46",
	secondary: "#3b82f6",

	background: "#ffffff",
	backgroundSubtle: "#f4f4f5",

	surface: "#ffffff",
	surfaceSubtle: "#f4f4f5",
	surfaceRaised: "#ffffff",
	surfaceHover: "#f4f4f5",
	surfaceOverlay: "rgba(0,0,0,0.4)",

	border: "#e4e4e7",
	borderSubtle: "#f4f4f5",
	borderStrong: "#d4d4d8",
	borderRadius: borderRadius.large,

	contentPrimary: "#09090b",
	contentSecondary: "#71717a",
	contentDisabled: "#a1a1aa",
	contentAccent: "#18181b",
	contentOnPrimary: "#ffffff",

	focusRing: "#3b82f6",

	sentimentNegative: colors.error,
	sentimentNegativeSubtle: "#fef2f2",
	sentimentPositive: colors.success,
	sentimentPositiveSubtle: "#f0fdf4",
	sentimentWarning: colors.warning,
	sentimentWarningSubtle: "#fefce8",
	sentimentInfo: colors.info,
	sentimentInfoSubtle: "#eff6ff",

	shadowSm: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
	shadowMd: "0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
	shadowLg: "0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)",
	shadowXl: "0 20px 48px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.08)",

	primaryHover: "#3f3f46",
	sentimentPositiveHover: "#15803d",
	sentimentWarningHover: "#b91c1c",
	sentimentNegativeHover: "#dc2626",
	sentimentInfoHover: "#1d4ed8",

	hoverOverlay: "rgba(0,0,0,0.06)",
	hoverOverlaySoft: "rgba(0,0,0,0.12)",
};

const darkValues = {
	primary: "#fafafa",
	primarySubtle: "#d4d4d8",
	secondary: "#3b82f6",

	background: "#09090b",
	backgroundSubtle: "#18181b",

	surface: "#09090b",
	surfaceSubtle: "#18181b",
	surfaceRaised: "#27272a",
	surfaceHover: "#27272a",
	surfaceOverlay: "rgba(0,0,0,0.8)",

	border: "#27272a",
	borderSubtle: "#18181b",
	borderStrong: "#3f3f46",
	borderRadius: borderRadius.large,

	contentPrimary: "#fafafa",
	contentSecondary: "#a1a1aa",
	contentDisabled: "#52525b",
	contentAccent: "#fafafa",
	contentOnPrimary: "#09090b",

	focusRing: "#3b82f6",

	sentimentNegative: colors.errorLight,
	sentimentNegativeSubtle: colors.errorDark,
	sentimentPositive: colors.successLight,
	sentimentPositiveSubtle: colors.successDark,
	sentimentWarning: colors.warningLight,
	sentimentWarningSubtle: colors.warningDark,
	sentimentInfo: colors.infoLight,
	sentimentInfoSubtle: colors.infoDark,

	shadowSm: "0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
	shadowMd: "0 4px 12px rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.2)",
	shadowLg: "0 8px 24px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.25)",
	shadowXl: "0 20px 48px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)",

	primaryHover: "#d4d4d8",
	sentimentPositiveHover: "#4ade80",
	sentimentWarningHover: "#facc15",
	sentimentNegativeHover: "#f87171",
	sentimentInfoHover: "#60a5fa",

	hoverOverlay: "rgba(255,255,255,0.08)",
	hoverOverlaySoft: "rgba(255,255,255,0.15)",
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
	borderRadius: lightValues.borderRadius,

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
	borderRadius: darkValues.borderRadius,

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
