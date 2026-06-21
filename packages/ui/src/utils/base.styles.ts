import * as stylex from "@stylexjs/stylex";
import { theme } from "#theme/contract.stylex";
import type { paddingTopStyles } from "./layout.styles";
import { zIndexVars } from "#theme/tokens.stylex";

export const colorStyles = stylex.create({
  primary: { color: theme.contentPrimary },
  secondary: { color: theme.contentSecondary },
  disabled: { color: theme.contentDisabled },
  error: { color: theme.sentimentNegative },
  success: { color: theme.sentimentPositive },
  warning: { color: theme.sentimentWarning },
  info: { color: theme.sentimentInfo },
});

export const bgColorStyles = stylex.create({
  primary: { backgroundColor: theme.primary },
  secondary: { backgroundColor: theme.secondary },
  disabled: { backgroundColor: theme.surfaceSubtle },
  error: { backgroundColor: theme.sentimentNegativeSubtle },
  success: { backgroundColor: theme.sentimentPositiveSubtle },
  warning: { backgroundColor: theme.sentimentWarningSubtle },
  info: { backgroundColor: theme.sentimentInfoSubtle },
});

export const borderColorStyles = stylex.create({
  primary: { borderColor: theme.primary },
  secondary: { borderColor: theme.secondary },
  disabled: { borderColor: theme.surfaceSubtle },
  error: { borderColor: theme.sentimentNegativeSubtle },
  success: { borderColor: theme.sentimentPositiveSubtle },
  warning: { borderColor: theme.sentimentWarningSubtle },
  info: { borderColor: theme.sentimentInfoSubtle },
});
export const zIndexStyles = stylex.create({
  base: {
    zIndex: zIndexVars.base,
  },
  raised: {
    zIndex: zIndexVars.raised,
  },
  floating: {
    zIndex: zIndexVars.floating,
  },
  sticky: {
    zIndex: zIndexVars.sticky,
  },
  overlay: {
    zIndex: zIndexVars.overlay,
  },
  modal: {
    zIndex: zIndexVars.modal,
  },
  popover: {
    zIndex: zIndexVars.popover,
  },
  toast: {
    zIndex: zIndexVars.toast,
  },
  tooltip: {
    zIndex: zIndexVars.tooltip,
  },
});
type BoxSpacing = keyof typeof paddingTopStyles;
export type PaddingProps = {
  padding?: BoxSpacing;
  paddingX?: BoxSpacing;
  paddingY?: BoxSpacing;
  paddingTop?: BoxSpacing;
  paddingBottom?: BoxSpacing;
  paddingLeft?: BoxSpacing;
  paddingRight?: BoxSpacing;
};
export type MarginProps = {
  margin?: BoxSpacing;
  marginX?: BoxSpacing;
  marginY?: BoxSpacing;
  marginTop?: BoxSpacing;
  marginBottom?: BoxSpacing;
  marginLeft?: BoxSpacing;
  marginRight?: BoxSpacing;
};

export type SpacingProps = PaddingProps & MarginProps;
export type ColorProps = {
  color?: keyof typeof colorStyles;
  backgroundColor?: keyof typeof bgColorStyles;
  borderColor?: keyof typeof bgColorStyles;
};

export const themeTransition = stylex.create({
  root: {
    transitionProperty: "background-color, color, box-shadow",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease",
  },
});
