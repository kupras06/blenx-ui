import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius, mediaQueries } from "@/lib/theme/tokens.stylex";

const colors = {
	ink: "#243142",
	inkSoft: "#3A4A5D",
	saffron: "#C9822A",
	saffronSoft: "#E1A24E",
	paper: "#F7F4EE",
	stone: "#303846",
	stoneDark: "#232A34",
	borderLight: "#D6DDE5",
	borderDark: "#4A5563",
	textPrimaryLight: "#223042",
	textPrimaryDark: "#F2F5F8",
	textSecondaryLight: "#5A6878",
	textSecondaryDark: "#A9B4C0",
	error: "#D63031",
	errorLight: "#FF7675",
	success: "#27AE60",
	successLight: "#55EFC4",
	warning: "#F39C12",
	info: "#2980B9",
	white: "#FFFFFF",
	surfaceDark: "#2F3845",
} as const;
const lightValues = {
	primary: colors.ink,
	primarySubtle: colors.inkSoft,
	secondary: colors.saffron,

	background: colors.paper,
	backgroundSubtle: "#ECE8E0",

	surface: colors.white,
	surfaceSubtle: "#ECE8E0",
	surfaceRaised: "#FEFCFA",
	surfaceHover: "#E8E6DE",
	surfaceOverlay: "rgba(0,0,0,0.4)",

	border: colors.borderLight,
	borderSubtle: "#E7EBF0",
	borderStrong: "#B8C2CF",
	borderRadius: borderRadius.large,

	contentPrimary: colors.textPrimaryLight,
	contentSecondary: colors.textSecondaryLight,
	contentDisabled: "#A9B2BD",
	contentAccent: colors.ink,
	contentOnPrimary: colors.white,
	contentInverse: colors.paper,

	focusRing: "#4A90D9",

	sentimentNegative: colors.error,
	sentimentNegativeSubtle: "#FFEAEA",
	sentimentPositive: colors.success,
	sentimentPositiveSubtle: "#EAFAF1",
	sentimentWarning: colors.warning,
	sentimentWarningSubtle: "#FEF9E7",
	sentimentInfo: colors.info,
	sentimentInfoSubtle: "#EBF5FB",

	shadowSm: "0 1px 3px rgba(36,49,66,0.08), 0 1px 2px rgba(36,49,66,0.04)",
	shadowMd: "0 4px 12px rgba(36,49,66,0.10), 0 2px 4px rgba(36,49,66,0.06)",
	shadowLg: "0 8px 24px rgba(36,49,66,0.12), 0 4px 8px rgba(36,49,66,0.06)",
	shadowXl: "0 20px 48px rgba(36,49,66,0.15), 0 8px 16px rgba(36,49,66,0.08)",
};

const darkValues = {
	primary: colors.paper,
	primarySubtle: "#5A6678",
	secondary: colors.saffronSoft,

	background: colors.stone,
	backgroundSubtle: colors.stoneDark,

	surface: colors.surfaceDark,
	surfaceSubtle: colors.stoneDark,
	surfaceRaised: "#384250",
	surfaceHover: "#3D4856",
	surfaceOverlay: "rgba(0,0,0,0.6)",

	border: colors.borderDark,
	borderSubtle: "#3B4451",
	borderStrong: "#647184",
	borderRadius: borderRadius.large,

	contentPrimary: colors.textPrimaryDark,
	contentSecondary: colors.textSecondaryDark,
	contentDisabled: "#697584",
	contentAccent: colors.saffron,
	contentOnPrimary: colors.stone,
	contentInverse: colors.ink,

	focusRing: "#6DB3F2",

	sentimentNegative: colors.errorLight,
	sentimentNegativeSubtle: "#3D1A1A",
	sentimentPositive: colors.successLight,
	sentimentPositiveSubtle: "#1A3D2B",
	sentimentWarning: "#FDCB6E",
	sentimentWarningSubtle: "#3D3010",
	sentimentInfo: "#74B9FF",
	sentimentInfoSubtle: "#0D2A3D",
	shadowSm: "0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
	shadowMd: "0 4px 12px rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.2)",
	shadowLg: "0 8px 24px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.25)",
	shadowXl: "0 20px 48px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)",
};
const themed = <T>(light: T, dark: T) => ({
	default: light,
	[mediaQueries.darkMode]: dark,
});

import * as stylex from "@stylexjs/stylex";
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
