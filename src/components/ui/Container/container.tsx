import * as stylex from "@stylexjs/stylex";
import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import { containerStyles } from "./container.styles";

type Props = BoxProps & {
	size?: BoxProps["maxWidth"];
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
		applyCenter && containerStyles.center,
		containerStyles.root,
		style,
	);
	return <Box {...props} {...resolvedStyles} />;
}
