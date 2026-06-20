import { Input as InputPrimitive } from "@base-ui/react/input";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import type * as React from "react";
import { useId } from "react";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { inputStyles } from "./input.styles";

type InputSize = "sm" | "default" | "lg";
type _BaseInputProps = Omit<
	InputPrimitive.Props & React.RefAttributes<HTMLInputElement>,
	"size"
>;
export type InputProps = PropsWithStylex<_BaseInputProps> & {
	size?: InputSize;
	error?: string;
	wrapperStyle?: stylex.StyleXStyles;
};

type LabelProps = PropsWithStylex<useRender.ComponentProps<"label">> & {
	style?: stylex.StyleXStyles;
};

export function Label({
	render,
	style,
	...props
}: LabelProps): React.ReactElement {
	const defaultProps = {
		...stylex.props(inputStyles.label, style),
		"data-slot": "label",
	};

	return useRender({
		defaultTagName: "label",
		props: mergeProps<"label">(defaultProps, props),
		render,
	});
}

export function Input({
	error,
	style,
	size = "default",
	...props
}: InputProps) {
	const generatedId = useId();
	const fieldId = props.id ?? generatedId;

	return (
		<InputPrimitive
			id={fieldId}
			data-slot="input"
			{...stylex.props(
				inputStyles.input,
				size === "sm" && inputStyles.inputSm,
				size === "lg" && inputStyles.inputLg,
				error ? inputStyles.inputError : null,
				style,
			)}
			{...props}
		/>
	);
}
