import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius, mediaQueries } from "@/lib/theme/tokens.stylex";
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
	contentInverse: "#ffffff",

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
	contentInverse: "#09090b",

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
};
const themed = <T>(light: T, dark: T) => ({
	default: light,
	[mediaQueries.darkMode]: dark,
});

export const appTheme = stylex.createTheme(theme, {
	primary: themed(lightValues.primary, darkValues.primary),
	primarySubtle: themed(lightValues.primarySubtle, darkValues.primarySubtle),
	secondary: themed(lightValues.secondary, darkValues.secondary),
	fontSize: themed("16px", "16px"),
	background: themed(lightValues.background, darkValues.background),
	backgroundSubtle: themed(
		lightValues.backgroundSubtle,
		darkValues.backgroundSubtle,
	),

	surface: themed(lightValues.surface, darkValues.surface),
	surfaceSubtle: themed(lightValues.surfaceSubtle, darkValues.surfaceSubtle),
	surfaceRaised: themed(lightValues.surfaceRaised, darkValues.surfaceRaised),
	surfaceHover: themed(lightValues.surfaceHover, darkValues.surfaceHover),
	surfaceOverlay: themed(lightValues.surfaceOverlay, darkValues.surfaceOverlay),

	border: themed(lightValues.border, darkValues.border),
	borderSubtle: themed(lightValues.borderSubtle, darkValues.borderSubtle),
	borderStrong: themed(lightValues.borderStrong, darkValues.borderStrong),
	borderRadius: themed(lightValues.borderRadius, darkValues.borderRadius),

	contentPrimary: themed(lightValues.contentPrimary, darkValues.contentPrimary),
	contentSecondary: themed(
		lightValues.contentSecondary,
		darkValues.contentSecondary,
	),
	contentDisabled: themed(
		lightValues.contentDisabled,
		darkValues.contentDisabled,
	),
	contentAccent: themed(lightValues.contentAccent, darkValues.contentAccent),
	contentOnPrimary: themed(
		lightValues.contentOnPrimary,
		darkValues.contentOnPrimary,
	),
	contentInverse: themed(lightValues.contentInverse, darkValues.contentInverse),

	focusRing: themed(lightValues.focusRing, darkValues.focusRing),

	sentimentNegative: themed(
		lightValues.sentimentNegative,
		darkValues.sentimentNegative,
	),
	sentimentNegativeSubtle: themed(
		lightValues.sentimentNegativeSubtle,
		darkValues.sentimentNegativeSubtle,
	),
	sentimentPositive: themed(
		lightValues.sentimentPositive,
		darkValues.sentimentPositive,
	),
	sentimentPositiveSubtle: themed(
		lightValues.sentimentPositiveSubtle,
		darkValues.sentimentPositiveSubtle,
	),
	sentimentWarning: themed(
		lightValues.sentimentWarning,
		darkValues.sentimentWarning,
	),
	sentimentWarningSubtle: themed(
		lightValues.sentimentWarningSubtle,
		darkValues.sentimentWarningSubtle,
	),
	sentimentInfo: themed(lightValues.sentimentInfo, darkValues.sentimentInfo),
	sentimentInfoSubtle: themed(
		lightValues.sentimentInfoSubtle,
		darkValues.sentimentInfoSubtle,
	),

	shadowSm: themed(lightValues.shadowSm, darkValues.shadowSm),
	shadowMd: themed(lightValues.shadowMd, darkValues.shadowMd),
	shadowLg: themed(lightValues.shadowLg, darkValues.shadowLg),
	shadowXl: themed(lightValues.shadowXl, darkValues.shadowXl),
});
