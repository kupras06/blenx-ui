"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import * as stylex from "@stylexjs/stylex";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { checkboxStyles } from "./checkbox.styles";

type CheckboxGroupProps = PropsWithStylex<CheckboxGroupPrimitive.Props>;

type CheckboxProps = PropsWithStylex<CheckboxPrimitive.Root.Props>;

export function CheckboxGroup({ style, ...props }: CheckboxGroupProps) {
	return (
		<CheckboxGroupPrimitive
			{...stylex.props(checkboxStyles.group, style)}
			{...props}
		/>
	);
}

function Checkbox({ style, ...props }: CheckboxProps) {
	return (
		<CheckboxPrimitive.Root
			{...props}
			render={(rootProps, { disabled }) => (
				<span
					{...rootProps}
					{...stylex.props(
						checkboxStyles.root,
						disabled && checkboxStyles.rootDisabled,
						style,
					)}
					data-slot="checkbox"
				>
					<CheckboxPrimitive.Indicator
						render={(_indicatorProps, state) => (
							<span
								{...stylex.props(
									checkboxStyles.indicator,
									!state.indeterminate && checkboxStyles.indicatorChecked,
									state.indeterminate && checkboxStyles.indicatorIndeterminate,
								)}
								data-slot="checkbox-indicator"
							>
								{state.indeterminate ? (
									<svg
										aria-hidden="true"
										{...stylex.props(checkboxStyles.icon)}
										fill="none"
										height="24"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M5.252 12h13.496" />
									</svg>
								) : (
									<svg
										aria-hidden="true"
										{...stylex.props(checkboxStyles.icon)}
										fill="none"
										height="24"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
									</svg>
								)}
							</span>
						)}
					/>
				</span>
			)}
		/>
	);
}

export { Checkbox };
