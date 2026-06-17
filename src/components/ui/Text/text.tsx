import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { colorStyles } from "@/utils/base-styles";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import {
	textAlignStyles,
	textStyles,
	textTransformStyles,
	textVarianttyles,
	textWeightStyles,
} from "./text.styles";

const variantTag = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	body1: "span",
	body2: "span",
	body3: "span",
	body4: "span",
	caption: "span",
	creatorNote: "p",
	p: "p",
	div: "div",
	code: "code",
} as const satisfies Record<string, keyof React.JSX.IntrinsicElements>;
export type TextVariant = keyof typeof variantTag;

type Props = PropsWithStylex<
	useRender.ComponentProps<"span"> & {
		variant?: TextVariant;
		color?: keyof typeof colorStyles;
		align?: keyof typeof textAlignStyles;
		weight?: keyof typeof textWeightStyles;
		transform?: keyof typeof textTransformStyles;
		style?: stylex.StyleXStyles;
	}
>;

export function Text({
	variant = "body1",
	color,
	align,
	weight,
	style,
	render,
	transform = "none",
	...props
}: Props): React.ReactElement {
	const sx = stylex.props(
		textStyles.base,
		textTransformStyles[transform],
		textVarianttyles[variant],
		color && colorStyles[color],
		align && textAlignStyles[align],
		weight && textWeightStyles[weight],
		!color && colorStyles.primary,
		style,
	);
	const merged = mergeProps(props, sx);
	return useRender({
		defaultTagName: variantTag[variant],
		props: merged,
		render,
	});
}
