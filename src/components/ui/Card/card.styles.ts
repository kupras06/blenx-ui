import * as stylex from "@stylexjs/stylex";
import { fontSize, fontWeight, spacing, theme } from "@/lib/theme/theme.stylex";

export const cardStyles = stylex.create({
	base: {
		backgroundColor: theme.surface,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.border,
		borderRadius: theme.borderRadius,
		boxSizing: "border-box",
	},
});

export const cardPaddingStyles = stylex.create({
	small: { padding: spacing.small },
	medium: { padding: spacing.medium },
	large: { padding: spacing.large },
});

export const cardSectionStyles = stylex.create({
	base: {
		boxSizing: "border-box",
	},
	header: {
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.borderSubtle,
	},
	// body: {},
	footer: {
		borderTopWidth: 1,
		borderTopStyle: "solid",
		borderTopColor: theme.borderSubtle,
	},
});

export const cardTextStyles = stylex.create({
	title: {
		margin: 0,
		color: theme.contentPrimary,
		fontSize: fontSize.medium,
		fontWeight: fontWeight.semibold,
		lineHeight: 1.3,
	},
	description: {
		margin: 0,
		color: theme.contentSecondary,
		fontSize: fontSize.small,
		lineHeight: 1.5,
	},
});
