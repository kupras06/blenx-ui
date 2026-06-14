import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import {
  borderRadiusStyles,
  displayStyles,
  marginXStyles,
  marginYStyles,
  overflowStyles,
  paddingXStyles,
  paddingYStyles,
  positionStyles,
} from "@/utils/layouts.styles";
import type { _BaseDivProps } from "@/utils/stylex.utils";
import { boxStyles } from "./box.styles";

type BoxDisplay = keyof typeof displayStyles;
type BoxSpacing = keyof typeof paddingXStyles;
type BoxOverflow = keyof typeof overflowStyles;
type BoxPosition = keyof typeof positionStyles;

type BoxProps = _BaseDivProps & {
  display?: BoxDisplay;

  fullWidth?: boolean;
  fullHeight?: boolean;
  grow?: boolean;
  shrink?: boolean;

  padding?: BoxSpacing;
  paddingX?: BoxSpacing;
  paddingY?: BoxSpacing;
  margin?: BoxSpacing;
  marginX?: BoxSpacing;
  marginY?: BoxSpacing;
  radius?: keyof typeof borderRadiusStyles;
  withBorder?: boolean;

  overflow?: BoxOverflow;
  position?: BoxPosition;

  style?: stylex.StyleXStyles;
};

function Box({
  render,
  display,
  fullWidth,
  fullHeight,
  grow,
  shrink,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  overflow,
  position,
  radius,
  style,
  withBorder,
  ...props
}: BoxProps) {
  const stylexProps = stylex.props(
    boxStyles.root,
    display && displayStyles[display],
    fullWidth && boxStyles.fullWidth,
    fullHeight && boxStyles.fullHeight,
    grow && boxStyles.grow,
    shrink && boxStyles.shrink,

    overflow && overflowStyles[overflow],
    position && positionStyles[position],
    radius && borderRadiusStyles[radius],
    withBorder && boxStyles.withBorder,
    padding && paddingXStyles[padding],
    padding && paddingYStyles[padding],
    paddingX && paddingXStyles[paddingX],
    paddingY && paddingYStyles[paddingY],
    margin && marginXStyles[margin],
    margin && marginYStyles[margin],
    marginX && marginXStyles[marginX],
    marginY && marginYStyles[marginY],
    style,
  );
  const mergedProps = mergeProps(props, stylexProps);
  return useRender({
    defaultTagName: "div",
    props: mergedProps,
    render,
  });
}

export type { BoxProps };
export { Box };
