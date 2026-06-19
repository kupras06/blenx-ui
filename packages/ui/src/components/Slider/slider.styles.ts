import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
	borderRadius,
	borderWidth,
	fontSize,
	mediaQueries,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";
export const thumbStateStyles = stylex.create({
	dragging: {
		transform: "scale(1.2)",
		boxShadow: "none",
	},
});
export const sliderControlStyles = stylex.create({
	horizontal: {
		width: "100%",
		minWidth: 176,
		height: 7,
	},
	vertical: {
		height: "100%",
		minHeight: 176,
		flexDirection: "column",
	},
});
export const sliderTrackStyles = stylex.create({
	horizontal: {
		width: "100%",
		height: 7,
	},
	vertical: {
		height: "100%",
	},
});
export const sliderStyles = stylex.create({
	disabled: {
		pointerEvents: "none",
		opacity: 0.64,
	},
	control: {
		display: "flex",
		touchAction: "none",
		userSelect: "none",
	},
	track: {
		position: "relative",
		flexGrow: 1,
		userSelect: "none",
		borderRadius: borderRadius.full,
		backgroundColor: theme.border,
	},
	indicator: {
		userSelect: "none",
		borderRadius: borderRadius.full,
		backgroundColor: theme.primary,
	},
	thumb: {
		display: "block",
		flexShrink: 0,
		userSelect: "none",
		borderRadius: borderRadius.full,
		borderWidth: borderWidth.thin,
		borderStyle: "solid",
		borderColor: theme.border,
		backgroundColor: theme.surface,
		outline: "none",
		transitionProperty: "box-shadow, transform",
		transitionDuration: "150ms",
		width: {
			default: 16,
			[mediaQueries.sm]: 14,
		},
		height: {
			default: 16,
			[mediaQueries.sm]: 14,
		},
		boxShadow: {
			default: theme.shadowSm,
			":has(:focus-visible)": `0 0 0 3px ${theme.focusRing}`,
			// "&[data-dragging]": "none",
		},
		transform: {
			default: "none",
			// "&[data-dragging]": "scale(1.2)",
		},
	},
	value: {
		display: "flex",
		justifyContent: "flex-end",
		fontSize: fontSize.small,
	},
});
