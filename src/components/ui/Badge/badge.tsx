import { mergeProps, useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import { borderRadiusStyles } from "@/utils/layouts.styles";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { badgeStyles, badgeVariantStyles } from "./badge.styles";

type Props = PropsWithStylex<useRender.ComponentProps<"span">> & {
	variant?: keyof typeof badgeVariantStyles;
	radius?: keyof typeof borderRadiusStyles;
};

export function Badge({
	variant = "default",
	radius,
	style,
	render,
	...props
}: Props) {
	const sx = stylex.props(
		badgeStyles.root,
		badgeVariantStyles[variant],
		radius && borderRadiusStyles[radius],
		style,
	);
	const merged = mergeProps(props, sx);
	return useRender({ defaultTagName: "span", props: merged, render });
}
