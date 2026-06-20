import {
	Avatar as AvatarPrimitive,
	type AvatarRootProps,
} from "@base-ui/react/avatar";
import * as stylex from "@stylexjs/stylex";
import { borderRadiusStyles } from "@blenx-dev/ui/utils/layout.styles";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { avatarStyles, avataSizeStyles } from "./avatar.styles";

interface AvatarProps extends PropsWithStylex<AvatarRootProps> {
	size?: keyof typeof avataSizeStyles;
	radius?: keyof typeof borderRadiusStyles;
}

type AvatarImageProps = PropsWithStylex<AvatarPrimitive.Image.Props>;

type AvatarFallbackProps = PropsWithStylex<AvatarPrimitive.Fallback.Props>;

function Avatar({ children, size, style, radius }: AvatarProps) {
	const rootCn = stylex.props(
		avatarStyles.root,
		size && avataSizeStyles[size],
		radius && borderRadiusStyles[radius],
		style,
	);

	return <AvatarPrimitive.Root {...rootCn}>{children}</AvatarPrimitive.Root>;
}

function AvatarImage({ src, alt, style, ...props }: AvatarImageProps) {
	const imgCn = stylex.props(avatarStyles.image, style);

	return <AvatarPrimitive.Image src={src} alt={alt} {...imgCn} {...props} />;
}

function AvatarFallback({ style, ...props }: AvatarFallbackProps) {
	const renderedStyles = stylex.props(avatarStyles.fallback, style);
	return <AvatarPrimitive.Fallback {...renderedStyles} {...props} />;
}

export type { AvatarFallbackProps, AvatarImageProps, AvatarProps };
export { Avatar, AvatarFallback, AvatarImage };
