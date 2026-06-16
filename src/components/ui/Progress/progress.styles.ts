import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import {
	borderRadius,
	duration,
	fontSize,
	fontWeight,
	spacing,
} from "@/lib/theme/tokens.stylex";

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
		backgroundColor: theme.backgroundSubtle,
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
