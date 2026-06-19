import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
	borderRadius,
	borderWidth,
	mediaQueries,
	spacing,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const checkboxStyles = stylex.create({
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
		borderRadius: borderRadius.small,
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
		alignItems: "flex-start",
		gap: spacing.small,
	},
	indicator: {
		position: "absolute",
		top: -1,
		left: -1,
		right: -1,
		bottom: -1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: borderRadius.small,
		color: theme.contentOnPrimary,
	},
	indicatorChecked: {
		backgroundColor: theme.primary,
		color: theme.contentOnPrimary,
	},
	indicatorIndeterminate: {
		color: theme.contentPrimary,
	},
	icon: {
		width: {
			default: 14,
			[mediaQueries.sm]: 12,
		},
		height: {
			default: 14,
			[mediaQueries.sm]: 12,
		},
	},
});
