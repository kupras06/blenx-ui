import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { fontSize, fonts, spacing } from "@/lib/theme/tokens.stylex";
import { intentTokens } from "./button-intents.stylex";

export const buttonSizes = stylex.create({
	xsmall: {
		paddingTop: spacing.xxsmall,
		paddingBottom: spacing.xxsmall,
		paddingLeft: spacing.xsmall,
		paddingRight: spacing.xsmall,
		fontSize: fontSize.small,
	},
	small: {
		paddingTop: spacing.xsmall,
		paddingBottom: spacing.xsmall,
		paddingLeft: spacing.small,
		paddingRight: spacing.small,
	},
	icon: {
		paddingTop: spacing.xsmall,
		paddingBottom: spacing.xsmall,
		paddingLeft: spacing.xsmall,
		paddingRight: spacing.xsmall,
	},
	medium: {
		paddingTop: spacing.small,
		paddingBottom: spacing.small,
		paddingLeft: spacing.medium,
		paddingRight: spacing.medium,
	},
	large: {
		paddingTop: spacing.medium,
		paddingBottom: spacing.medium,
		paddingLeft: spacing.large,
		paddingRight: spacing.large,
		fontSize: fontSize.large,
	},
});

export const buttonIntentStyles = stylex.create({
	primary: {
		[intentTokens.solidBg]: theme.primary,
		[intentTokens.solidFg]: theme.contentOnPrimary,
		[intentTokens.solidHoverBg]: theme.primaryHover,

		[intentTokens.softBg]: theme.primarySubtle,
		[intentTokens.softFg]: theme.primary,

		[intentTokens.softHoverBg]: theme.primarySubtle,

		[intentTokens.border]: theme.primary,
		[intentTokens.borderHover]: theme.primaryHover,

		[intentTokens.fg]: theme.primary,
	},
	neutral: {
		[intentTokens.solidBg]: theme.surfaceRaised,
		[intentTokens.solidFg]: theme.contentPrimary,
		[intentTokens.solidHoverBg]: theme.surfaceHover,
		[intentTokens.softBg]: theme.backgroundSubtle,
		[intentTokens.softFg]: theme.contentPrimary,

		[intentTokens.softHoverBg]: theme.surfaceHover,

		[intentTokens.border]: theme.border,
		[intentTokens.borderHover]: theme.borderStrong,

		[intentTokens.fg]: theme.contentPrimary,
	},
	success: {
		[intentTokens.solidBg]: theme.sentimentPositive,
		[intentTokens.solidFg]: theme.contentOnPrimary,
		[intentTokens.solidHoverBg]: theme.sentimentPositiveHover,

		[intentTokens.softBg]: theme.sentimentPositiveSubtle,
		[intentTokens.softFg]: theme.sentimentPositive,

		[intentTokens.softHoverBg]: theme.sentimentPositiveSubtle,

		[intentTokens.border]: theme.sentimentPositive,
		[intentTokens.borderHover]: theme.sentimentPositiveHover,

		[intentTokens.fg]: theme.sentimentPositive,
	},
	warning: {
		[intentTokens.solidBg]: theme.sentimentWarning,
		[intentTokens.solidFg]: theme.contentOnPrimary,
		[intentTokens.solidHoverBg]: theme.sentimentWarningHover,

		[intentTokens.softBg]: theme.sentimentWarningSubtle,
		[intentTokens.softFg]: theme.sentimentWarning,

		[intentTokens.softHoverBg]: theme.sentimentWarningSubtle,

		[intentTokens.border]: theme.sentimentWarning,
		[intentTokens.borderHover]: theme.sentimentWarningHover,

		[intentTokens.fg]: theme.sentimentWarning,
	},
	danger: {
		[intentTokens.solidBg]: theme.sentimentNegative,
		[intentTokens.solidFg]: theme.contentOnPrimary,
		[intentTokens.solidHoverBg]: theme.sentimentNegativeHover,

		[intentTokens.softBg]: theme.sentimentNegativeSubtle,
		[intentTokens.softFg]: theme.sentimentNegative,

		[intentTokens.softHoverBg]: theme.sentimentNegativeSubtle,

		[intentTokens.border]: theme.sentimentNegative,
		[intentTokens.borderHover]: theme.sentimentNegativeHover,

		[intentTokens.fg]: theme.sentimentNegative,
	},
	info: {
		[intentTokens.solidBg]: theme.sentimentInfo,
		[intentTokens.solidFg]: theme.contentOnPrimary,
		[intentTokens.solidHoverBg]: theme.sentimentInfoHover,

		[intentTokens.softBg]: theme.sentimentInfoSubtle,
		[intentTokens.softFg]: theme.sentimentInfo,

		[intentTokens.softHoverBg]: theme.sentimentInfoSubtle,

		[intentTokens.border]: theme.sentimentInfo,
		[intentTokens.borderHover]: theme.sentimentInfoHover,

		[intentTokens.fg]: theme.sentimentInfo,
	},
	mono: {
		[intentTokens.solidBg]: "#ffffff",
		[intentTokens.solidFg]: "#ffffff",
		[intentTokens.solidHoverBg]: "#f5f5f5",

		[intentTokens.softBg]: "#ffffff",
		[intentTokens.softFg]: "#ffffff",

		[intentTokens.softHoverBg]: "#f5f5f5",

		[intentTokens.border]: "#d4d4d4",
		[intentTokens.borderHover]: "#d4d4d4",

		[intentTokens.fg]: "#111111",
	},
});
export const buttonVariantStyles = stylex.create({
	solid: {
		backgroundColor: intentTokens.solidBg,
		borderColor: intentTokens.border,
		color: intentTokens.solidFg,
		":hover:not(:disabled)": {
			backgroundColor: intentTokens.solidHoverBg,
			borderColor: intentTokens.borderHover,
		},
	},
	soft: {
		backgroundColor: intentTokens.softBg,
		color: intentTokens.solidFg,
		borderColor: "transparent",
		":hover:not(:disabled)": {
			backgroundColor: `color-mix(in srgb, ${intentTokens.solidHoverBg} 80%, ${intentTokens.softBg})`,
			borderColor: `color-mix(in srgb, ${intentTokens.border} 80%, ${intentTokens.softBg})`,
		},
	},
	outline: {
		backgroundColor: "transparent",
		borderColor: intentTokens.border,
		color: intentTokens.fg,
		":hover:not(:disabled)": {
			backgroundColor: `color-mix(in srgb, ${intentTokens.solidFg} 85%, ${intentTokens.solidFg})`,
			borderColor: intentTokens.borderHover,
		},
	},
	ghost: {
		backgroundColor: "transparent",
		borderColor: "transparent",
		color: intentTokens.fg,
		":hover:not(:disabled)": {
			backgroundColor: `color-mix(in srgb, ${intentTokens.border} 15%, ${intentTokens.solidFg})`,
		},
	},
	link: {
		backgroundColor: "transparent",
		borderColor: "transparent",
		color: intentTokens.fg,
		":hover:not(:disabled)": {
			textDecoration: "underline",
		},
	},
});

export const buttonStyles = stylex.create({
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		gap: spacing.small,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: theme.borderRadius,
		cursor: "pointer",
		fontWeight: 500,
		width: "fit-content",
		height: "fit-content",
		fontSize: theme.fontSize,
		fontFamily: fonts.display,
		textDecoration: "none",
		position: "relative",
		transition: "all 0.2s ease",
		":disabled": {
			opacity: 0.4,
			cursor: "not-allowed",
		},
	},
	fullWidth: {
		width: "100%",
	},
});
