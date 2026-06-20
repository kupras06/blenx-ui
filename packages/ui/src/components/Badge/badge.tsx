import { mergeProps } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { badgeStyles, badgeVariantStyles } from "./badge.styles";
import { Box, type BoxProps } from "../Box/box";

type Props = PropsWithStylex<BoxProps> & {
  variant?: keyof typeof badgeVariantStyles;
};

export function Badge({ variant = "default", style, ...props }: Props) {
  const sx = stylex.props(badgeStyles.root, badgeVariantStyles[variant], style);
  const merged = mergeProps(props, sx);
  return <Box {...merged} />;
}
