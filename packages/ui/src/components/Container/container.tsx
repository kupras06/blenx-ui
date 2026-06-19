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
	content,
	style,
	...props
}: Props) {
	return (
		<Box
			maxWidth={size}
			{...props}
			style={[
				containerStyles.root,
				content === "center" ? containerStyles.contentCenter : null,
				center ? containerStyles.center : null,
				style,
			]}
		/>
	);
}
