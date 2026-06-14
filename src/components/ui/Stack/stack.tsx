import * as stylex from "@stylexjs/stylex";
import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import {
	stackAlignStyles,
	stackDirectionStyles,
	stackGapStyles,
	stackJustifyStyles,
	stackWrapStyles,
} from "./stack.styles";

type StackDirection = keyof typeof stackDirectionStyles;
type StackGap = keyof typeof stackGapStyles;
type StackAlign = keyof typeof stackAlignStyles;
type StackJustify = keyof typeof stackJustifyStyles;

export type StackProps = Omit<BoxProps, "display"> & {
	direction?: StackDirection;
	gap?: StackGap;
	align?: StackAlign;
	justify?: StackJustify;
	wrap?: boolean;
};

export function Stack({
	direction,
	gap = "medium",
	align,
	justify,
	wrap,
	style,
	...props
}: StackProps) {
	const resolvedDirection = direction ?? "column";
	const resolvedStyles = stylex.props(
		stackDirectionStyles[resolvedDirection],
		stackGapStyles[gap],
		align && stackAlignStyles[align],
		justify && stackJustifyStyles[justify],
		wrap && stackWrapStyles.true,
		style,
	);
	return <Box display="flex" {...resolvedStyles} {...props} />;
}

type VStackProps = Omit<StackProps, "direction">;

export function VStack(props: VStackProps) {
	return <Stack direction="column" {...props} />;
}

type HStackProps = Omit<StackProps, "direction">;

export function HStack(props: HStackProps) {
	return <Stack direction="row" {...props} />;
}
