import * as stylex from "@stylexjs/stylex";
import { spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const stackDirectionStyles = stylex.create({
	column: { flexDirection: "column" },
	row: { flexDirection: "row" },
});

export const stackGapStyles = stylex.create({
	none: { gap: 0 },
	xxsmall: { gap: spacing.xxsmall },
	xsmall: { gap: spacing.xsmall },
	small: { gap: spacing.small },
	medium: { gap: spacing.medium },
	large: { gap: spacing.large },
	xlarge: { gap: spacing.xlarge },
	xxlarge: { gap: spacing.xxlarge },
	xxxlarge: { gap: spacing.xxxlarge },
	huge: { gap: spacing.huge },
	massive: { gap: spacing.massive },
});

export const stackAlignStyles = stylex.create({
	start: { alignItems: "flex-start" },
	center: { alignItems: "center" },
	end: { alignItems: "flex-end" },
	stretch: { alignItems: "stretch" },
	baseline: { alignItems: "baseline" },
});

export const stackJustifyStyles = stylex.create({
	start: { justifyContent: "flex-start" },
	center: { justifyContent: "center" },
	end: { justifyContent: "flex-end" },
	between: { justifyContent: "space-between" },
	around: { justifyContent: "space-around" },
	evenly: { justifyContent: "space-evenly" },
	stretch: { justifyContent: "stretch" },
});

export const stackWrapStyles = stylex.create({
	true: { flexWrap: "wrap" },
});
