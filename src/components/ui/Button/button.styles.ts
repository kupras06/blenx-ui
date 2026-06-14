import * as stylex from "@stylexjs/stylex";
import { fontSize, spacing, theme } from "@/lib/theme/theme.stylex";

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

export const buttonVariantStyles = stylex.create({
	primary: {
		backgroundColor: theme.primary,
		borderColor: theme.primary,
		color: theme.contentOnPrimary,
		":hover:not(:disabled)": {
			backgroundColor: theme.primarySubtle,
			borderColor: theme.primarySubtle,
		},
	},
	secondary: {
		backgroundColor: "transparent",
		borderColor: theme.border,
		color: theme.contentAccent,
		":hover:not(:disabled)": {
			backgroundColor: theme.backgroundSubtle,
			borderColor: theme.borderStrong,
			color: theme.contentPrimary,
		},
	},
	ghost: {
		backgroundColor: "transparent",
		borderColor: "transparent",
		color: theme.contentPrimary,
		":hover:not(:disabled)": {
			backgroundColor: theme.backgroundSubtle,
		},
	},
	outline: {
		backgroundColor: "transparent",
		borderColor: theme.border,
		color: theme.contentPrimary,
		":hover:not(:disabled)": {
			backgroundColor: theme.backgroundSubtle,
			borderColor: theme.borderStrong,
		},
	},
	"outline-dashed": {
		borderStyle: "dashed",
		backgroundColor: "transparent",
		borderColor: theme.border,
		color: theme.contentPrimary,
		":hover:not(:disabled)": {
			backgroundColor: theme.backgroundSubtle,
			borderColor: theme.borderStrong,
		},
	},
	soft: {
		backgroundColor: theme.backgroundSubtle,
		borderColor: "transparent",
		color: theme.contentPrimary,
		":hover:not(:disabled)": {
			backgroundColor: theme.surfaceRaised,
		},
	},
	link: {
		backgroundColor: "transparent",
		borderColor: "transparent",
		color: theme.contentAccent,
		paddingLeft: 0,
		paddingRight: 0,
		":hover:not(:disabled)": {
			textDecoration: "underline",
		},
	},
	danger: {
		backgroundColor: theme.sentimentNegative,
		borderColor: theme.sentimentNegative,
		color: theme.contentOnPrimary,
		":hover:not(:disabled)": {
			backgroundColor: theme.sentimentNegativeSubtle,
			borderColor: theme.sentimentNegativeSubtle,
			color: theme.sentimentNegative,
		},
	},
	success: {
		backgroundColor: theme.sentimentPositive,
		borderColor: theme.sentimentPositive,
		color: theme.contentOnPrimary,
		":hover:not(:disabled)": {
			backgroundColor: theme.sentimentPositiveSubtle,
			borderColor: theme.sentimentPositiveSubtle,
			color: theme.sentimentPositive,
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
		height: "fit-content",
		fontSize: theme.fontSize,
		textDecoration: "none",
		transition: "all 0.2s ease",
		":disabled": {
			opacity: 0.4,
			cursor: "not-allowed",
		},
	},

	spinner: {
		position: "absolute",
		cursor: "none",
	},
	fullWidth: {
		width: "100%",
	},
});
