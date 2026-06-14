"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import * as stylex from "@stylexjs/stylex";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { toggleStyles } from "./toggle.styles";

export type ToggleVariant = "default" | "outline";
export type ToggleSize = "default" | "sm" | "lg";

export interface ToggleProps extends PropsWithStylex<TogglePrimitive.Props> {
	variant?: ToggleVariant;
	size?: ToggleSize;
	style?: stylex.StyleXStyles;
}

export function Toggle({
	children,
	style,
	variant = "default",
	size = "default",
	...props
}: ToggleProps) {
	const variantStyle =
		variant === "outline" ? toggleStyles.outline : toggleStyles.default;
	const sizeStyle =
		size === "sm"
			? toggleStyles.sm
			: size === "lg"
				? toggleStyles.lg
				: toggleStyles.defaultSize;
	const toggleProps = stylex.props(
		toggleStyles.base,
		variantStyle,
		sizeStyle,
		style,
	);
	return (
		<TogglePrimitive
			{...toggleProps}
			data-slot="toggle"
			{...props}
			render={(renderProps, toggleState) => {
				const pressedStyle =
					variant === "outline"
						? toggleStyles.outlinePressed
						: toggleStyles.defaultPressed;
				const renderStyles = stylex.props(
					toggleStyles.base,
					variantStyle,
					sizeStyle,
					toggleState.pressed && pressedStyle,
					style,
				);
				return (
					<button {...renderProps} {...renderStyles}>
						{children}
					</button>
				);
			}}
		/>
	);
}
