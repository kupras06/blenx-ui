import { mergeProps } from "@base-ui/react/merge-props";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import * as stylex from "@stylexjs/stylex";
import { borderRadiusStyles } from "@blenx-dev/ui/utils/layout.styles";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { Spinner } from "../Spinner/spinner";
import {
	buttonIntentStyles,
	buttonSizes,
	buttonStyles,
	buttonVariantStyles,
} from "./button.styles";

type _BaseUIButtonProps = PropsWithStylex<ButtonPrimitive.Props>;

const NEW_VARIANTS = ["solid", "soft", "outline", "ghost", "link"] as const;
type NewVariant = (typeof NEW_VARIANTS)[number];
type ButtonIntent = keyof typeof buttonIntentStyles;

type ButtonProps = PropsWithStylex<_BaseUIButtonProps> & {
	variant?: NewVariant;
	intent?: ButtonIntent;
	size?: keyof typeof buttonSizes;
	disabled?: boolean;
	loading?: boolean;
	radius?: keyof typeof borderRadiusStyles;
	fullWidth?: boolean;
};

function Button({
	children,
	variant = "solid",
	intent,
	size = "medium",
	disabled: disabledProp,
	loading,
	fullWidth,
	radius,
	style,
	...props
}: ButtonProps) {
	const isDisabled = Boolean(loading || disabledProp);
	const resolvedVariant = intent === "mono" ? "soft" : variant;

	const defaultProps = {
		...stylex.props(
			buttonIntentStyles[intent ?? "primary"],
			buttonStyles.base,
			fullWidth && buttonStyles.fullWidth,
			buttonSizes[size],
			buttonVariantStyles[resolvedVariant],
			radius && borderRadiusStyles[radius],
			style,
		),
		"aria-disabled": loading || undefined,
		"data-loading": loading ? "" : undefined,
		"data-slot": "button",
		nativeButton: !props.render,
		disabled: isDisabled,
	};
	return (
		<ButtonPrimitive {...mergeProps<"button">(defaultProps, props)}>
			{loading && <Spinner data-slot="button-loading-indicator" />}
			{children}
		</ButtonPrimitive>
	);
}

export { Button };
export type { ButtonProps, ButtonIntent };
