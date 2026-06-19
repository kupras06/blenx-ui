"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import * as stylex from "@stylexjs/stylex";
import { radioStyles } from "./radio.styles";

type RadioGroupProps = Omit<RadioGroupPrimitive.Props, "style"> & {
	style?: stylex.StyleXStyles;
};

type RadioProps = Omit<RadioPrimitive.Root.Props, "style"> & {
	style?: stylex.StyleXStyles;
};

export function RadioGroup({ style, ...props }: RadioGroupProps) {
	return (
		<RadioGroupPrimitive
			{...stylex.props(radioStyles.group, style)}
			data-slot="radio-group"
			{...props}
		/>
	);
}

export function Radio({ style, ...props }: RadioProps) {
	return (
		<RadioPrimitive.Root
			{...props}
			render={(rootProps, { checked, disabled }) => (
				<span
					{...rootProps}
					{...stylex.props(
						radioStyles.root,
						disabled && radioStyles.rootDisabled,
						style,
					)}
					data-slot="radio"
				>
					<RadioPrimitive.Indicator
						{...stylex.props(
							radioStyles.indicator,
							checked && radioStyles.indicatorChecked,
						)}
					>
						{checked && <span {...stylex.props(radioStyles.dot)} />}
					</RadioPrimitive.Indicator>
				</span>
			)}
		/>
	);
}

export { Radio as RadioGroupItem };
