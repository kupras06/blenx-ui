import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import {
	themeTransition,
	type ColorProps,
	type SpacingProps,
} from "@blenx-dev/ui/utils/base.styles";
import {
	resolvePaddingStyles,
	resolveMarginStyles,
	resolveDisplayStyles,
	type BorderRadiusProp,
	type LayoutProps,
} from "@blenx-dev/ui/utils/layout.styles";
import type { _BaseDivProps } from "@/utils/stylex.utils";
import { boxSizeStyles, boxStyles } from "./box.styles";

type BoxSize = keyof typeof boxSizeStyles;
type _BaseBoxPrpos = LayoutProps &
	SpacingProps &
	ColorProps & {
		fullWidth?: boolean;
		fullHeight?: boolean;
		grow?: boolean;
		shrink?: boolean;
		// @deprecated use borderRadius instead
		radius?: BorderRadiusProp;
		borderRadius?: BorderRadiusProp;
		withBorder?: boolean;
		maxWidth?: BoxSize | number;
		style?: stylex.StyleXStyles;
	};
type BoxProps = _BaseDivProps & _BaseBoxPrpos;

const isBoxSize = (value: BoxSize | number): value is BoxSize =>
	typeof value !== "number";
const BOX_PROP_KEYS = [
	...new Set<keyof _BaseBoxPrpos>([
		"display",
		"fullWidth",
		"fullHeight",
		"grow",
		"shrink",
		"padding",
		"paddingX",
		"paddingY",
		"paddingTop",
		"paddingBottom",
		"paddingLeft",
		"paddingRight",
		"margin",
		"marginX",
		"marginY",
		"marginTop",
		"marginBottom",
		"marginLeft",
		"marginRight",
		"radius",
		"borderRadius",
		"style",
		"withBorder",
		"maxWidth",
		"color",
		"backgroundColor",
		"zIndex",
		"overflow",
		"position",
		"top",
		"bottom",
		"right",
		"left",
	]),
];

function splitBoxProps<T extends Record<string, unknown>, K extends keyof T>(
	props: T,
	keys: readonly K[],
) {
	const picked = {} as Pick<T, K>;
	const omitted = {} as Omit<T, K>;

	for (const key in props) {
		if (keys.includes(key as unknown as K)) {
			picked[key as unknown as K] = props[key] as unknown as T[K];
		} else {
			(omitted as Record<string, unknown>)[key] = props[key];
		}
	}

	return [picked, omitted] as const;
}
function Box({ render, ...props }: BoxProps) {
	const [boxProps, htmlProps] = splitBoxProps(props, BOX_PROP_KEYS);
	const paddingStyles = resolvePaddingStyles(boxProps);
	const marginStyles = resolveMarginStyles(boxProps);
	const displayStyles = resolveDisplayStyles(boxProps);
	const stylexProps = stylex.props(
		themeTransition.root,
		boxStyles.root,
		Boolean(boxProps.fullWidth) && boxStyles.fullWidth,
		Boolean(boxProps.fullHeight) && boxStyles.fullHeight,
		Boolean(boxProps.grow) && boxStyles.grow,
		Boolean(boxProps.shrink) && boxStyles.shrink,
		Boolean(boxProps.withBorder) && boxStyles.withBorder,
		...paddingStyles,
		...marginStyles,
		...displayStyles,

		boxProps.maxWidth && typeof boxProps.maxWidth === "number"
			? boxStyles.maxWidth(boxProps.maxWidth)
			: null,
		boxProps.maxWidth && isBoxSize(boxProps.maxWidth)
			? boxSizeStyles[boxProps.maxWidth]
			: null,
		Boolean(boxProps.maxWidth) && boxStyles.fullWidth,
		boxProps.style,
	);
	const mergedProps = mergeProps(htmlProps, stylexProps);
	return useRender({
		defaultTagName: "div",
		props: mergedProps,
		render,
	});
}

export type { BoxProps };
export { Box };
