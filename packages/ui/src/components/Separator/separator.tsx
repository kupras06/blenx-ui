import { mergeProps } from "@base-ui/react";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import * as stylex from "@stylexjs/stylex";
import type * as React from "react";
import { separatorStyles } from "./separator.styles";

type Orientation = "horizontal" | "vertical";
type SeparatorTone = "subtle" | "strong";

export type SeparatorProps = Omit<SeparatorPrimitive.Props, "style"> & {
  orientation?: Orientation;
  label?: React.ReactNode;
  tone?: SeparatorTone;
  style?: stylex.StyleXStyles;
};

export function Separator({
  orientation = "horizontal",
  label,
  tone = "strong",
  style,
  ...props
}: SeparatorProps) {
  const toneStyle = tone === "strong" ? separatorStyles.strong : separatorStyles.subtle;
  let defaultProps = {};
  if (orientation === "horizontal" && label) {
    defaultProps = stylex.props(separatorStyles.base, separatorStyles.withLabel, toneStyle, style);
  } else if (orientation === "horizontal")
    defaultProps = stylex.props(separatorStyles.base, separatorStyles.horizontal, toneStyle, style);
  else
    defaultProps = stylex.props(separatorStyles.base, separatorStyles.vertical, toneStyle, style);

  const mergedProps = mergeProps(props, defaultProps);
  return <SeparatorPrimitive {...mergedProps} />;
}
