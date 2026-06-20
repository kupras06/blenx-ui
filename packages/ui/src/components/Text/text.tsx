import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { colorStyles } from "@blenx-dev/ui/utils/base.styles";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import {
  fontSizeStyles,
  textAlignStyles,
  textStyles,
  textTransformStyles,
  textVarianttyles,
  textWeightStyles,
} from "./text.styles";
import { Box, type BoxProps } from "../Box/box";

const variantTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "div",
  body2: "div",
  body3: "div",
  body4: "div",
  caption: "div",
  creatorNote: "p",
  p: "p",
  code: "code",
} as const satisfies Record<string, keyof React.JSX.IntrinsicElements>;
export type TextVariant = keyof typeof variantTag;

type Props = PropsWithStylex<
  BoxProps & {
    variant?: TextVariant;
    color?: keyof typeof colorStyles;
    align?: keyof typeof textAlignStyles;
    weight?: keyof typeof textWeightStyles;
    transform?: keyof typeof textTransformStyles;
    size?: keyof typeof fontSizeStyles;
    style?: stylex.StyleXStyles;
    span?: boolean;
  }
>;

export function Text({
  variant = "body1",
  color,
  align,
  weight,
  style,
  size,
  render,
  span,
  transform = "none",
  children,
  ...props
}: Props): React.ReactElement {
  const sx = stylex.props(
    textStyles.base,
    textTransformStyles[transform],
    textVarianttyles[variant],
    color && colorStyles[color],
    align && textAlignStyles[align],
    weight && textWeightStyles[weight],
    !color && colorStyles.primary,
    size && fontSizeStyles[size],
    style,
  );
  const merged = mergeProps({ children, ...props }, sx);
  if (span) {
    return useRender({
      defaultTagName: "span",
      props: merged,
      render,
    });
  }
  return <Box render={render} {...merged} />;
}
