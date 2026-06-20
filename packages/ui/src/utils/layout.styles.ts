import * as stylex from "@stylexjs/stylex";
import { borderRadius, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import {
  bgColorStyles,
  colorStyles,
  zIndexStyles,
  type MarginProps,
  type PaddingProps,
} from "./base.styles";
import type { BoxProps } from "@/components/ui";

export const displayStyles = stylex.create({
  block: { display: "block" },
  flex: { display: "flex" },
  grid: { display: "grid" },
  inline: { display: "inline" },
  "inline-block": { display: "inline-block" },
  "inline-flex": { display: "inline-flex" },
  none: { display: "none" },
});

export const borderRadiusStyles = stylex.create({
  none: { borderRadius: 0 },
  xsmall: { borderRadius: borderRadius.xsmall },
  small: { borderRadius: borderRadius.small },
  medium: { borderRadius: borderRadius.medium },
  large: { borderRadius: borderRadius.large },
  xlarge: { borderRadius: borderRadius.xlarge },
  xxlarge: { borderRadius: borderRadius.xxlarge },
  full: { borderRadius: borderRadius.full },
});

export const paddingTopStyles = stylex.create({
  none: { paddingTop: 0 },
  xxsmall: { paddingTop: spacing.xxsmall },
  xsmall: { paddingTop: spacing.xsmall },
  small: { paddingTop: spacing.small },
  medium: { paddingTop: spacing.medium },
  large: { paddingTop: spacing.large },
  xlarge: { paddingTop: spacing.xlarge },
  xxlarge: { paddingTop: spacing.xxlarge },
  xxxlarge: { paddingTop: spacing.xxxlarge },
  huge: { paddingTop: spacing.huge },
  massive: { paddingTop: spacing.massive },
  titanic: { paddingTop: spacing.titanic },
});

export const paddingBottomStyles = stylex.create({
  none: { paddingBottom: 0 },
  xxsmall: { paddingBottom: spacing.xxsmall },
  xsmall: { paddingBottom: spacing.xsmall },
  small: { paddingBottom: spacing.small },
  medium: { paddingBottom: spacing.medium },
  large: { paddingBottom: spacing.large },
  xlarge: { paddingBottom: spacing.xlarge },
  xxlarge: { paddingBottom: spacing.xxlarge },
  xxxlarge: { paddingBottom: spacing.xxxlarge },
  huge: { paddingBottom: spacing.huge },
  massive: { paddingBottom: spacing.massive },
  titanic: { paddingBottom: spacing.titanic },
});

export const paddingLeftStyles = stylex.create({
  none: { paddingLeft: 0 },
  xxsmall: { paddingLeft: spacing.xxsmall },
  xsmall: { paddingLeft: spacing.xsmall },
  small: { paddingLeft: spacing.small },
  medium: { paddingLeft: spacing.medium },
  large: { paddingLeft: spacing.large },
  xlarge: { paddingLeft: spacing.xlarge },
  xxlarge: { paddingLeft: spacing.xxlarge },
  xxxlarge: { paddingLeft: spacing.xxxlarge },
  huge: { paddingLeft: spacing.huge },
  massive: { paddingLeft: spacing.massive },
  titanic: { paddingLeft: spacing.titanic },
});

export const paddingRightStyles = stylex.create({
  none: { paddingRight: 0 },
  xxsmall: { paddingRight: spacing.xxsmall },
  xsmall: { paddingRight: spacing.xsmall },
  small: { paddingRight: spacing.small },
  medium: { paddingRight: spacing.medium },
  large: { paddingRight: spacing.large },
  xlarge: { paddingRight: spacing.xlarge },
  xxlarge: { paddingRight: spacing.xxlarge },
  xxxlarge: { paddingRight: spacing.xxxlarge },
  huge: { paddingRight: spacing.huge },
  massive: { paddingRight: spacing.massive },
  titanic: { paddingRight: spacing.titanic },
});

export const marginTopStyles = stylex.create({
  none: { marginTop: 0 },
  xxsmall: { marginTop: spacing.xxsmall },
  xsmall: { marginTop: spacing.xsmall },
  small: { marginTop: spacing.small },
  medium: { marginTop: spacing.medium },
  large: { marginTop: spacing.large },
  xlarge: { marginTop: spacing.xlarge },
  xxlarge: { marginTop: spacing.xxlarge },
  xxxlarge: { marginTop: spacing.xxxlarge },
  huge: { marginTop: spacing.huge },
  massive: { marginTop: spacing.massive },
  titanic: { marginTop: spacing.titanic },
});

export const marginBottomStyles = stylex.create({
  none: { marginBottom: 0 },
  xxsmall: { marginBottom: spacing.xxsmall },
  xsmall: { marginBottom: spacing.xsmall },
  small: { marginBottom: spacing.small },
  medium: { marginBottom: spacing.medium },
  large: { marginBottom: spacing.large },
  xlarge: { marginBottom: spacing.xlarge },
  xxlarge: { marginBottom: spacing.xxlarge },
  xxxlarge: { marginBottom: spacing.xxxlarge },
  huge: { marginBottom: spacing.huge },
  massive: { marginBottom: spacing.massive },
  titanic: { marginBottom: spacing.titanic },
});

export const marginLeftStyles = stylex.create({
  none: { marginLeft: 0 },
  xxsmall: { marginLeft: spacing.xxsmall },
  xsmall: { marginLeft: spacing.xsmall },
  small: { marginLeft: spacing.small },
  medium: { marginLeft: spacing.medium },
  large: { marginLeft: spacing.large },
  xlarge: { marginLeft: spacing.xlarge },
  xxlarge: { marginLeft: spacing.xxlarge },
  xxxlarge: { marginLeft: spacing.xxxlarge },
  huge: { marginLeft: spacing.huge },
  massive: { marginLeft: spacing.massive },
  titanic: { marginLeft: spacing.titanic },
});

export const marginRightStyles = stylex.create({
  none: { marginRight: 0 },
  xxsmall: { marginRight: spacing.xxsmall },
  xsmall: { marginRight: spacing.xsmall },
  small: { marginRight: spacing.small },
  medium: { marginRight: spacing.medium },
  large: { marginRight: spacing.large },
  xlarge: { marginRight: spacing.xlarge },
  xxlarge: { marginRight: spacing.xxlarge },
  xxxlarge: { marginRight: spacing.xxxlarge },
  huge: { marginRight: spacing.huge },
  massive: { marginRight: spacing.massive },
  titanic: { marginRight: spacing.titanic },
});

export const overflowStyles = stylex.create({
  hidden: { overflow: "hidden" },
  visible: { overflow: "visible" },
  scroll: { overflow: "scroll" },
  auto: { overflow: "auto" },
});

export const positionStyles = stylex.create({
  static: { position: "static" },
  relative: { position: "relative" },
  absolute: { position: "absolute" },
  fixed: { position: "fixed" },
  sticky: { position: "sticky" },
});
export const positionTopStyles = stylex.create({
  none: { top: 0 },
  xsmall: { top: spacing.xxsmall },
  small: { top: spacing.small },
  medium: { top: spacing.medium },
  large: { top: spacing.large },
  xlarge: { top: spacing.xlarge },
  xxlarge: { top: spacing.xxlarge },
  xxxlarge: { top: spacing.xxxlarge },
  huge: { top: spacing.huge },
  massive: { top: spacing.massive },
  titanic: { top: spacing.titanic },
});
export const positionBottomStyles = stylex.create({
  none: { bottom: 0 },
  xsmall: { bottom: spacing.xxsmall },
  small: { bottom: spacing.small },
  medium: { bottom: spacing.medium },
  large: { bottom: spacing.large },
  xlarge: { bottom: spacing.xlarge },
  xxlarge: { bottom: spacing.xxlarge },
  xxxlarge: { bottom: spacing.xxxlarge },
  huge: { bottom: spacing.huge },
  massive: { bottom: spacing.massive },
  titanic: { bottom: spacing.titanic },
});
export const positionLeftStyles = stylex.create({
  none: { left: 0 },
  xsmall: { left: spacing.xxsmall },
  small: { left: spacing.small },
  medium: { left: spacing.medium },
  large: { left: spacing.large },
  xlarge: { left: spacing.xlarge },
  xxlarge: { left: spacing.xxlarge },
  xxxlarge: { left: spacing.xxxlarge },
  huge: { left: spacing.huge },
  massive: { left: spacing.massive },
  titanic: { left: spacing.titanic },
});
export const positionRightStyles = stylex.create({
  none: { right: 0 },
  xsmall: { right: spacing.xxsmall },
  small: { right: spacing.small },
  medium: { right: spacing.medium },
  large: { right: spacing.large },
  xlarge: { right: spacing.xlarge },
  xxlarge: { right: spacing.xxlarge },
  xxxlarge: { right: spacing.xxxlarge },
  huge: { right: spacing.huge },
  massive: { right: spacing.massive },
  titanic: { right: spacing.titanic },
});

export type BorderRadiusProp = keyof typeof borderRadiusStyles;
type BoxDisplay = keyof typeof displayStyles;

type BoxOverflow = keyof typeof overflowStyles;
type BoxPosition = keyof typeof positionStyles;
type PositionTop = keyof typeof positionTopStyles;
type PositionBottom = keyof typeof positionBottomStyles;
type PositionLeft = keyof typeof positionLeftStyles;
type PositionRight = keyof typeof positionRightStyles;

export type LayoutProps = {
  display?: BoxDisplay;
  overflow?: BoxOverflow;
  position?: BoxPosition;
  top?: PositionTop;
  bottom?: PositionBottom;
  left?: PositionLeft;
  right?: PositionRight;
  zIndex?: keyof typeof zIndexStyles;
};

export function resolvePaddingStyles(paddingProps: Partial<PaddingProps>) {
  const resolvedPaddingX = paddingProps.paddingX ?? paddingProps.padding;
  const resolvedPaddingY = paddingProps.paddingY ?? paddingProps.padding;
  const paddingTop = paddingProps.paddingTop ?? resolvedPaddingY;
  const paddingBottom = paddingProps.paddingBottom ?? resolvedPaddingY;
  const paddingLeft = paddingProps.paddingLeft ?? resolvedPaddingX;
  const paddingRight = paddingProps.paddingRight ?? resolvedPaddingX;
  return [
    paddingTop && paddingTopStyles[paddingTop],
    paddingBottom && paddingBottomStyles[paddingBottom],
    paddingLeft && paddingLeftStyles[paddingLeft],
    paddingRight && paddingRightStyles[paddingRight],
  ];
}

export function resolveMarginStyles(marginProps: MarginProps) {
  const resolvedMarginX = marginProps.marginX ?? marginProps.margin;
  const resolvedMarginY = marginProps.marginY ?? marginProps.margin;
  const marginTop = marginProps.marginTop ?? resolvedMarginY;
  const marginBottom = marginProps.marginBottom ?? resolvedMarginY;
  const marginLeft = marginProps.marginLeft ?? resolvedMarginX;
  const marginRight = marginProps.marginRight ?? resolvedMarginX;
  return [
    marginTop && marginTopStyles[marginTop],
    marginBottom && marginBottomStyles[marginBottom],
    marginLeft && marginLeftStyles[marginLeft],
    marginRight && marginRightStyles[marginRight],
  ];
}

export function resolveDisplayStyles(boxProps: BoxProps) {
  const resolvedRadius = boxProps.borderRadius ?? boxProps.radius;
  return [
    boxProps.color && colorStyles[boxProps.color],
    boxProps.backgroundColor && bgColorStyles[boxProps.backgroundColor],
    boxProps.zIndex && zIndexStyles[boxProps.zIndex],
    resolvedRadius && borderRadiusStyles[resolvedRadius],
    boxProps.zIndex && zIndexStyles[boxProps.zIndex],
    boxProps.display && displayStyles[boxProps.display],
    boxProps.overflow && overflowStyles[boxProps.overflow],
    boxProps.position && positionStyles[boxProps.position],
    boxProps.top && positionTopStyles[boxProps.top],
    boxProps.bottom && positionBottomStyles[boxProps.bottom],
    boxProps.left && positionLeftStyles[boxProps.left],
    boxProps.right && positionRightStyles[boxProps.right],
  ];
}
