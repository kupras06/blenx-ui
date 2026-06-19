import { iconWrapperStyles } from "./icon.styles";
import { Box, type BoxProps } from "../Box/box";

type IconProps = BoxProps;

export function Icon({ children, style, ...props }: IconProps) {
	return (
		<Box style={[iconWrapperStyles.base, style]} {...props}>
			{children}
		</Box>
	);
}

export type { IconProps };
