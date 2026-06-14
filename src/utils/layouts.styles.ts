import * as stylex from "@stylexjs/stylex";
import { borderRadius, spacing } from "../lib/theme/contract.stylex";

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

export const paddingXStyles = stylex.create({
  none: { paddingLeft: 0, paddingRight: 0 },
  xxsmall: { paddingLeft: spacing.xxsmall, paddingRight: spacing.xxsmall },
  xsmall: { paddingLeft: spacing.xsmall, paddingRight: spacing.xsmall },
  small: { paddingLeft: spacing.small, paddingRight: spacing.small },
  medium: { paddingLeft: spacing.medium, paddingRight: spacing.medium },
  large: { paddingLeft: spacing.large, paddingRight: spacing.large },
  xlarge: { paddingLeft: spacing.xlarge, paddingRight: spacing.xlarge },
  xxlarge: { paddingLeft: spacing.xxlarge, paddingRight: spacing.xxlarge },
  xxxlarge: { paddingLeft: spacing.xxxlarge, paddingRight: spacing.xxxlarge },
  huge: { paddingLeft: spacing.huge, paddingRight: spacing.huge },
  massive: { paddingLeft: spacing.massive, paddingRight: spacing.massive },
});

export const paddingYStyles = stylex.create({
  none: { paddingTop: 0, paddingBottom: 0 },
  xxsmall: { paddingTop: spacing.xxsmall, paddingBottom: spacing.xxsmall },
  xsmall: { paddingTop: spacing.xsmall, paddingBottom: spacing.xsmall },
  small: { paddingTop: spacing.small, paddingBottom: spacing.small },
  medium: { paddingTop: spacing.medium, paddingBottom: spacing.medium },
  large: { paddingTop: spacing.large, paddingBottom: spacing.large },
  xlarge: { paddingTop: spacing.xlarge, paddingBottom: spacing.xlarge },
  xxlarge: { paddingTop: spacing.xxlarge, paddingBottom: spacing.xxlarge },
  xxxlarge: { paddingTop: spacing.xxxlarge, paddingBottom: spacing.xxxlarge },
  huge: { paddingTop: spacing.huge, paddingBottom: spacing.huge },
  massive: { paddingTop: spacing.massive, paddingBottom: spacing.massive },
});

export const marginXStyles = stylex.create({
  none: { marginLeft: 0, marginRight: 0 },
  xxsmall: { marginLeft: spacing.xxsmall, marginRight: spacing.xxsmall },
  xsmall: { marginLeft: spacing.xsmall, marginRight: spacing.xsmall },
  small: { marginLeft: spacing.small, marginRight: spacing.small },
  medium: { marginLeft: spacing.medium, marginRight: spacing.medium },
  large: { marginLeft: spacing.large, marginRight: spacing.large },
  xlarge: { marginLeft: spacing.xlarge, marginRight: spacing.xlarge },
  xxlarge: { marginLeft: spacing.xxlarge, marginRight: spacing.xxlarge },
  xxxlarge: { marginLeft: spacing.xxxlarge, marginRight: spacing.xxxlarge },
  huge: { marginLeft: spacing.huge, marginRight: spacing.huge },
  massive: { marginLeft: spacing.massive, marginRight: spacing.massive },
});

export const marginYStyles = stylex.create({
  none: { marginTop: 0, marginBottom: 0 },
  xxsmall: { marginTop: spacing.xxsmall, marginBottom: spacing.xxsmall },
  xsmall: { marginTop: spacing.xsmall, marginBottom: spacing.xsmall },
  small: { marginTop: spacing.small, marginBottom: spacing.small },
  medium: { marginTop: spacing.medium, marginBottom: spacing.medium },
  large: { marginTop: spacing.large, marginBottom: spacing.large },
  xlarge: { marginTop: spacing.xlarge, marginBottom: spacing.xlarge },
  xxlarge: { marginTop: spacing.xxlarge, marginBottom: spacing.xxlarge },
  xxxlarge: { marginTop: spacing.xxxlarge, marginBottom: spacing.xxxlarge },
  huge: { marginTop: spacing.huge, marginBottom: spacing.huge },
  massive: { marginTop: spacing.massive, marginBottom: spacing.massive },
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
