import * as stylex from "@stylexjs/stylex";
import { colorSwatchStyles } from "./color-swatch.styles";

type Props = {
	color: string;
	size?: number;
	style?: stylex.StyleXStyles;
};

export function ColorSwatch({ color, size = 16, style }: Props) {
	return (
		<span
			{...stylex.props(colorSwatchStyles.base, style)}
			style={{
				width: size,
				height: size,
				backgroundColor: color,
				borderRadius: 4,
			}}
		/>
	);
}
