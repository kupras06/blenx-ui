import { OTPFieldPreview } from "@base-ui/react/otp-field";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import {
	otpFieldStyles,
	otpInputStyles,
	otpSeparatorStyles,
} from "./otp-field.styles";

type OTPFieldSize = "default" | "lg";

type OTPFieldProps = Omit<
	React.ComponentProps<typeof OTPFieldPreview.Root>,
	"style"
> & {
	size?: OTPFieldSize;
	style?: stylex.StyleXStyles;
};

type OTPFieldInputProps = Omit<
	React.ComponentProps<typeof OTPFieldPreview.Input>,
	"style" | "size"
> & {
	size?: OTPFieldSize;
	style?: stylex.StyleXStyles;
};

type OTPFieldSeparatorProps = {
	style?: stylex.StyleXStyles;
};

export function OTPField({ size = "default", style, ...props }: OTPFieldProps) {
	return (
		<OTPFieldPreview.Root
			{...stylex.props(otpFieldStyles.root, style)}
			data-size={size}
			{...(props as React.ComponentProps<typeof OTPFieldPreview.Root>)}
		/>
	);
}

export function OTPFieldInput({
	size = "default",
	style,
	...props
}: OTPFieldInputProps) {
	const sizeStyle =
		size === "lg"
			? (otpInputStyles.lg as stylex.StyleXStyles)
			: (otpInputStyles.default as stylex.StyleXStyles);
	return (
		<OTPFieldPreview.Input
			{...stylex.props(otpInputStyles.base, sizeStyle, style)}
			{...(props as React.ComponentProps<typeof OTPFieldPreview.Input>)}
		/>
	);
}

export function OTPFieldSeparator({ style }: OTPFieldSeparatorProps) {
	return (
		<OTPFieldPreview.Separator
			render={<div {...stylex.props(otpSeparatorStyles.base, style)} />}
		/>
	);
}
