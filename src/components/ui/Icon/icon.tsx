import { borderRadiusStyles } from "@/utils/layout.styles";
import type { BorderRadiusProp } from "@/utils/layout.styles";
import { iconWrapperStyles } from "./icon.styles";
import { Box, type BoxProps } from "../Box/box";

type IconProps = BoxProps & {
	radius?: BorderRadiusProp;
};

export function Icon({ radius, children, style, ...props }: IconProps) {
	return (
		<Box
			style={[
				iconWrapperStyles.base,
				radius && borderRadiusStyles[radius],
				style,
			]}
			{...props}
		>
			{children}
		</Box>
	);
}

export type { IconProps };
