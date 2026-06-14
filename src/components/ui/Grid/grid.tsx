import * as stylex from "@stylexjs/stylex";
import { Box, type BoxProps } from "../Box/box";
import { stackGapStyles as gridGapStyles } from "../Stack/stack.styles";
import {
	gridAlignStyles,
	gridColumnStyles,
	gridJustifyStyles,
	gridSpanStyles,
	gridStyles,
} from "./grid.styles";

type SpacingToken = keyof typeof gridGapStyles;

export type GridProps = BoxProps & {
	columns?: keyof typeof gridColumnStyles;
	gap?: SpacingToken;
	align?: "start" | "center" | "end" | "stretch";
	justify?: "start" | "center" | "end" | "stretch";
};

export type GridItemProps = BoxProps & {
	span?: keyof typeof gridSpanStyles;
};

function Grid({
	gap: gapProp = "medium",
	columns: columnsProp,
	align: alignProp,
	justify: justifyProp,
	style,
	...props
}: GridProps) {
	const resolvedStyles = stylex.props(
		columnsProp && gridColumnStyles[columnsProp],
		gridGapStyles[gapProp],
		alignProp && gridAlignStyles[alignProp],
		justifyProp && gridJustifyStyles[justifyProp],
		style,
	);

	return <Box display="grid" {...props} {...resolvedStyles} />;
}

function GridItem({ span: spanProp, style, ...props }: GridItemProps) {
	const resolvedStyles = stylex.props(
		gridStyles.item,
		spanProp && gridSpanStyles[spanProp],
		style,
	);
	return <Box {...props} {...resolvedStyles} />;
}

export { Grid, GridItem };
export default Grid;
