import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import * as stylex from "@stylexjs/stylex";
import { switchStyles } from "./switch.styles";

type Props = Omit<SwitchPrimitive.Root.Props, "style"> & {
	style?: stylex.StyleXStyles;
};

export function Switch({ style, ...props }: Props) {
	const rootProps = stylex.props(switchStyles.root, style);
	return (
		<SwitchPrimitive.Root
			{...props}
			{...rootProps}
			render={(renderProps, { checked, disabled }) => (
				<span
					{...renderProps}
					{...stylex.props(
						switchStyles.root,
						checked && switchStyles.rootChecked,
						disabled && switchStyles.rootDisabled,
						style,
					)}
				>
					<SwitchPrimitive.Thumb
						{...stylex.props(
							switchStyles.thumb,
							checked && switchStyles.thumbChecked,
						)}
					/>
				</span>
			)}
		/>
	);
}
