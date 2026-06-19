import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import {
	borderRadius,
	borderWidth,
	mediaQueries,
	spacing,
} from "@/lib/theme/tokens.stylex";

export const radioStyles = stylex.create({
	root: {
		position: "relative",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		width: {
			default: 18,
			[mediaQueries.sm]: 16,
		},
		height: {
			default: 18,
			[mediaQueries.sm]: 16,
		},
		borderRadius: borderRadius.full,
		borderWidth: borderWidth.thin,
		borderStyle: "solid",
		borderColor: theme.border,
		backgroundColor: theme.background,
		outline: "none",
		transitionProperty: "box-shadow",
		transitionDuration: "150ms",
		":focus-visible": {
			boxShadow: `0 0 0 2px ${theme.focusRing}`,
		},
		// "&[aria-invalid]": {
		// 	BorderColor: theme.sentimentNegative,
		// },
	},
	rootDisabled: {
		cursor: "not-allowed",
		opacity: 0.64,
	},
	group: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
	},
	indicator: {
		display: "none",
		position: "absolute",
		top: -1,
		left: -1,
		right: -1,
		bottom: -1,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: borderRadius.full,
	},
	indicatorChecked: {
		display: "flex",
		backgroundColor: theme.primary,
	},
	dot: {
		width: {
			default: 8,
			[mediaQueries.sm]: 6,
		},
		height: {
			default: 8,
			[mediaQueries.sm]: 6,
		},
		borderRadius: borderRadius.full,
		backgroundColor: theme.contentOnPrimary,
	},
});
