import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import {
	dataRuleQueries,
	fontSize,
	fontWeight,
	spacing,
} from "@/lib/theme/tokens.stylex";
export const toggleSizeStyles = stylex.create({
	sm: {
		height: spacing.large,
		minWidth: spacing.large,
		paddingLeft: spacing.small,
		paddingRight: spacing.small,
	},
	lg: {
		height: spacing.xlarge,
		paddingLeft: spacing.medium,
		paddingRight: spacing.medium,
	},
	default: {
		height: spacing.large,
		minWidth: 36,
		paddingLeft: spacing.small,
		paddingRight: spacing.small,
	},
});

export const toggleVariantStyles = stylex.create({
	default: {
		borderColor: "transparent",
		color: theme.contentPrimary,
		backgroundColor: theme.surface,
	},
	outline: {
		borderColor: {
			default: theme.border,
			[dataRuleQueries.dataPressed]: theme.borderStrong,
		},
		color: theme.contentPrimary,
		backgroundColor: theme.backgroundSubtle,
	},
});

export const togglePressedStyles = stylex.create({
	default: {
		backgroundColor: theme.surfaceRaised,
	},
	outline: {
		outlineWidth: "0px",
		backgroundColor: theme.surfaceOverlay,
	},
});
export const toggleStyles = stylex.create({
	base: {
		position: "relative",
		display: "inline-flex",
		flexShrink: 0,
		alignItems: "center",
		justifyContent: "center",
		gap: spacing.small,
		whiteSpace: "nowrap",
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: theme.borderRadius,
		fontWeight: fontWeight.medium,
		fontSize: fontSize.small,
		lineHeight: 1.4,
		cursor: "pointer",
		userSelect: "none",
		outline: "none",
		backgroundColor: "transparent",
		transition: "box-shadow 0.15s ease",
		":focus-visible": {
			boxShadow: `0 0 0 2px ${theme.focusRing}`,
		},
		":disabled": {
			pointerEvents: "none",
			opacity: 0.64,
		},
	},
	icon: {
		flexShrink: 0,
		width: spacing.medium,
		height: spacing.medium,
	},
});
