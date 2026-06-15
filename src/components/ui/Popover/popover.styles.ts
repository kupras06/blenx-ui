import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import {
	borderRadius,
	borderWidth,
	fontSize,
	fontWeight,
	spacing,
} from "@/lib/theme/tokens.stylex";

export const popoverStyles = stylex.create({
	backdrop: {
		position: "fixed",
		inset: 0,
		zIndex: 50,
		backgroundColor: "rgba(0, 0, 0, 0.32)",
	},
	positioner: {
		zIndex: 50,
		outline: "none",
	},
	popup: {
		boxSizing: "border-box",
		minWidth: 160,
		// --anchor-width is a CSS variable set by the PopoverPositioner component
		width: "max(var(--anchor-width), 240px)",
		maxWidth: "calc(100vw - 16px)",
		padding: spacing.small,
		backgroundColor: theme.surface,
		borderWidth: borderWidth.thin,
		borderStyle: "solid",
		borderColor: theme.border,
		borderRadius: borderRadius.large,
		boxShadow: theme.shadowLg,
		outline: "none",
		transformOrigin: "var(--transform-origin)",
		transitionProperty: "opacity, scale",
		transitionDuration: "150ms",
		transitionTimingFunction: "ease",
		"[data-starting-style]": {
			opacity: 0,
			scale: 0.95,
		},
		"[data-ending-style]": {
			opacity: 0,
			scale: 0.95,
		},
	},
	arrow: {
		position: "absolute",
		width: 10,
		height: 10,
	},
	arrowFill: {
		width: "100%",
		height: "100%",
		backgroundColor: theme.surface,
		borderWidth: borderWidth.thin,
		borderStyle: "solid",
		borderColor: theme.border,
		borderRadius: 2,
		transform: "rotate(45deg)",
	},
	title: {
		fontSize: fontSize.medium,
		fontWeight: fontWeight.semibold,
		color: theme.contentPrimary,
		margin: 0,
		paddingBottom: spacing.xsmall,
	},
	description: {
		fontSize: fontSize.small,
		color: theme.contentSecondary,
		margin: 0,
		paddingBottom: spacing.xsmall,
	},
});
