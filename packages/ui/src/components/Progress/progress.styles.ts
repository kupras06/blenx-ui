import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
	borderRadius,
	duration,
	fontSize,
	fontWeight,
	spacing,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const progressStyles = stylex.create({
	root: {
		display: "flex",
		width: "100%",
		flexDirection: "column",
		gap: spacing["2"],
	},
	track: {
		display: "block",
		height: 6,
		width: "100%",
		overflow: "hidden",
		borderRadius: borderRadius.full,
		backgroundColor: theme.surface,
	},
	indicator: {
		height: "100%",
		backgroundColor: theme.primary,
		borderRadius: borderRadius.full,
		transitionProperty: "width, background-color",
		transitionDuration: duration.slow,
		transitionTimingFunction: "ease",
	},
	label: {
		fontSize: fontSize.medium,
		fontWeight: fontWeight.medium,
	},
	value: {
		fontSize: fontSize.small,
		fontVariantNumeric: "tabular-nums",
	},
});
