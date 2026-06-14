import * as stylex from "@stylexjs/stylex";
import { borderRadius, spacing, theme } from "@/lib/theme/theme.stylex";

export const switchStyles = stylex.create({
	root: {
		width: spacing.xxlarge,
		height: spacing.large,
		display: "inline-flex",
		alignItems: "center",
		padding: spacing.xxsmall,
		borderRadius: borderRadius.full,
		backgroundColor: theme.border,
		cursor: "pointer",
		transitionProperty: "background-color",
		transitionDuration: "150ms",
		":focus-visible": {
			outlineWidth: 2,
			outlineStyle: "solid",
			outlineColor: theme.borderStrong,
		},
	},
	rootChecked: {
		backgroundColor: theme.primary,
	},
	rootDisabled: {
		cursor: "not-allowed",
		opacity: 0.35,
	},
	thumb: {
		width: spacing.large,
		height: spacing.large,
		borderRadius: borderRadius.full,
		backgroundColor: theme.primary,
		transitionProperty: "transform, background-color",
		transitionDuration: "150ms",
		transform: "translateX(0)",
	},
	thumbChecked: {
		backgroundColor: theme.surface,
		transform: `translateX(${spacing.large})`,
	},
});
