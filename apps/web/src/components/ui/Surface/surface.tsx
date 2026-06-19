import * as stylex from "@stylexjs/stylex";
import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import {
	surfaceInteractiveStyles,
	surfaceStyles,
	surfaceVariantStyles,
} from "./surface.styles";

type SurfaceVariant = keyof typeof surfaceVariantStyles;
type SurfaceProps = BoxProps & {
	variant?: SurfaceVariant;
	interactive?: boolean;
};

function Surface({
	variant = "default",
	interactive,
	style,
	...props
}: SurfaceProps) {
	const resolvedStyles = stylex.props(
		surfaceStyles.base,
		surfaceVariantStyles[variant],
		interactive && surfaceInteractiveStyles.base,
		style,
	);
	return <Box {...resolvedStyles} {...props} />;
}

export type { SurfaceProps, SurfaceVariant };
export { Surface };
