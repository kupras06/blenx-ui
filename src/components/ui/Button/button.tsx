import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import { borderRadiusStyles } from "@/utils/layouts.styles";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { Spinner } from "../Spinner/spinner";
import {
	buttonSizes,
	buttonStyles,
	buttonVariantStyles,
} from "./button.styles";

type _BaseUIButtonProps = PropsWithStylex<useRender.ComponentProps<"button">>;

type ButtonProps = PropsWithStylex<_BaseUIButtonProps> & {
	variant?: keyof typeof buttonVariantStyles;
	size?: keyof typeof buttonSizes;
	disabled?: boolean;
	loading?: boolean;
	radius?: keyof typeof borderRadiusStyles;
	fullWidth?: boolean;
};

function Button({
	children,
	variant = "primary",
	size = "medium",
	disabled: disabledProp,
	loading,
	type = "button",
	fullWidth,
	radius,
	render,
	style,
	...props
}: ButtonProps) {
	const isDisabled: boolean = Boolean(loading || disabledProp);
	const typeValue = render ? undefined : (type ?? "button");

	const defaultProps = {
		...props,
		children: (
			<>
				{children}
				{loading && (
					<Spinner
						style={buttonStyles.spinner}
						data-slot="button-loading-indicator"
					/>
				)}
			</>
		),
		...stylex.props(
			buttonStyles.base,
			fullWidth && buttonStyles.fullWidth,
			buttonVariantStyles[variant],
			buttonSizes[size],
			radius && borderRadiusStyles[radius],
			style,
		),
		"aria-disabled": loading || undefined,
		"data-loading": loading ? "" : undefined,
		"data-slot": "button",
		disabled: isDisabled,
		type: typeValue,
	};
	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, props),
		render,
	});
}

export { Button };
export type { ButtonProps };
