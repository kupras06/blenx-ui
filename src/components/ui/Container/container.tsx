import * as stylex from "@stylexjs/stylex";
import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import { containerSizeStyles, containerStyles } from "./container.styles";

type ContainerSize = keyof typeof containerSizeStyles;
type Props = BoxProps & {
	size?: ContainerSize;
	center?: boolean;
	content?: "center" | "top";
};

export function Container({
	size,
	center = true,
	content = "top",
	style,
	...props
}: Props) {
	const applyCenter = center || content === "center";
	const resolvedStyles = stylex.props(
		size && containerSizeStyles[size],
		applyCenter && containerStyles.center,
		containerStyles.root,
		style,
	);
	return <Box {...props} {...resolvedStyles} />;
}
