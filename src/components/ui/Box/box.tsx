import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import {
	bgColorStyles,
	colorStyles,
	type SpacingProps,
} from "@/utils/base.styles";
import {
	borderRadiusStyles,
	displayStyles,
	marginXStyles,
	marginYStyles,
	overflowStyles,
	paddingXStyles,
	paddingYStyles,
	positionStyles,
	type BorderRadiusProp,
	type LayoutProps,
} from "@/utils/layout.styles";
import type { _BaseDivProps } from "@/utils/stylex.utils";
import { boxSizeStyles, boxStyles } from "./box.styles";

type BoxSize = keyof typeof boxSizeStyles;
type BoxProps = _BaseDivProps &
	LayoutProps &
	SpacingProps & {
		fullWidth?: boolean;
		fullHeight?: boolean;
		grow?: boolean;
		shrink?: boolean;
		// @deprecated use borderRadius instead
		radius?: BorderRadiusProp;
		borderRadius?: BorderRadiusProp;
		withBorder?: boolean;
		color?: keyof typeof colorStyles;
		backgroundColor?: keyof typeof bgColorStyles;
		maxWidth?: BoxSize | number;
		style?: stylex.StyleXStyles;
	};
const isBoxSize = (value: BoxSize | number): value is BoxSize =>
	typeof value !== "number";
function Box({
	render,
	display,
	fullWidth,
	fullHeight,
	grow,
	shrink,
	padding,
	paddingX,
	paddingY,
	margin,
	marginX,
	marginY,
	overflow,
	position,
	radius,
	style,
	withBorder,
	maxWidth,
	color,
	backgroundColor,
	...props
}: BoxProps) {
	const resolvedPaddingX = paddingX ?? padding;
	const resolvedPaddingY = paddingY ?? padding;
	const resolvedMarginX = marginX ?? margin;
	const resolvedMarginY = marginY ?? margin;
	const stylexProps = stylex.props(
		boxStyles.root,
		display && displayStyles[display],
		fullWidth && boxStyles.fullWidth,
		fullHeight && boxStyles.fullHeight,
		grow && boxStyles.grow,
		shrink && boxStyles.shrink,

		overflow && overflowStyles[overflow],
		position && positionStyles[position],
		withBorder && boxStyles.withBorder,
		resolvedPaddingX && paddingXStyles[resolvedPaddingX],
		resolvedPaddingY && paddingYStyles[resolvedPaddingY],
		resolvedMarginX && marginXStyles[resolvedMarginX],
		resolvedMarginY && marginYStyles[resolvedMarginY],
		color && colorStyles[color],
		backgroundColor && bgColorStyles[backgroundColor],
		maxWidth && typeof maxWidth === "number"
			? boxStyles.maxWidth(maxWidth)
			: null,
		maxWidth && isBoxSize(maxWidth) ? boxSizeStyles[maxWidth] : null,
		radius && borderRadiusStyles[radius],
		style,
	);

	const mergedProps = mergeProps(props, stylexProps);
	return useRender({
		defaultTagName: "div",
		props: mergedProps,
		render,
	});
}

export type { BoxProps };
export { Box };
