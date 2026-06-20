import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
  borderRadius,
  fontSize,
  fonts,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const textTransformStyles = stylex.create({
  uppercase: {
    textTransform: "uppercase",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  none: {
    textTransform: "none",
  },
  lowercase: {
    textTransform: "lowercase",
  },
});

export const textAlignStyles = stylex.create({
  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },
});
export const fontSizeStyles = stylex.create({
  xxsmall: { fontSize: spacing.xxsmall, lineHeight: lineHeight.tight },
  xsmall: { fontSize: spacing.xsmall, lineHeight: lineHeight.tight },
  small: { fontSize: spacing.small, lineHeight: lineHeight.tight },
  medium: { fontSize: spacing.medium, lineHeight: lineHeight.tight },
  large: { fontSize: spacing.large, lineHeight: lineHeight.tight },
  xlarge: { fontSize: spacing.xlarge, lineHeight: lineHeight.tight },
  xxlarge: { fontSize: spacing.xxlarge, lineHeight: lineHeight.tight },
  xxxlarge: { fontSize: spacing.xxxlarge, lineHeight: lineHeight.tight },
  huge: { fontSize: spacing.huge, lineHeight: lineHeight.tight },
  massive: { fontSize: spacing.massive, lineHeight: lineHeight.tight },
  titanic: { fontSize: spacing.titanic, lineHeight: lineHeight.tight },
});

export const textWeightStyles = stylex.create({
  regular: { fontWeight: fontWeight.regular },
  medium: { fontWeight: fontWeight.medium },
  semibold: { fontWeight: fontWeight.semibold },
  bold: { fontWeight: fontWeight.bold },
});
export const textStyles = stylex.create({
  base: {
    margin: 0,
    textDecoration: "none",
    color: theme.contentOnPrimary,
  },
});
export const textVarianttyles = stylex.create({
  h1: {
    fontFamily: fonts.display,
    fontSize: fontSize.display,
    lineHeight: lineHeight.tight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tight,
    margin: 0,
    scrollMarginTop: "80px",
  },
  h2: {
    fontFamily: fonts.heading,
    fontSize: fontSize.xxlarge,
    lineHeight: lineHeight.tight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tight,
    margin: 0,
    scrollMarginTop: "80px",
  },
  h3: {
    fontFamily: fonts.heading,
    fontSize: fontSize.xlarge,
    lineHeight: lineHeight.snug,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.snug,
    margin: 0,
    scrollMarginTop: "80px",
  },
  h4: {
    fontFamily: fonts.heading,
    fontSize: fontSize.large,
    lineHeight: lineHeight.tight,
    fontWeight: fontWeight.semibold,
    margin: 0,
    scrollMarginTop: "80px",
  },
  h5: {
    fontFamily: fonts.heading,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.semibold,
    margin: 0,
    scrollMarginTop: "80px",
  },
  h6: {
    fontFamily: fonts.heading,
    fontSize: fontSize.small,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.semibold,
    margin: 0,
    scrollMarginTop: "80px",
  },
  body1: {
    fontFamily: fonts.body,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.regular,
    margin: 0,
  },
  body2: {
    fontFamily: fonts.body,
    fontSize: fontSize.small,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.regular,
    margin: 0,
  },
  body3: {
    fontFamily: fonts.body,
    fontSize: fontSize.xsmall,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.regular,
    margin: 0,
  },
  body4: {
    fontFamily: fonts.label,
    fontSize: fontSize.xxsmall,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.wide,
    margin: 0,
  },
  caption: {
    fontFamily: fonts.label,
    fontSize: fontSize.xsmall,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.wide,
    margin: 0,
  },
  creatorNote: {
    fontFamily: fonts.body,
    fontSize: fontSize.large,
    lineHeight: "28px",
    fontWeight: fontWeight.regular,
    fontStyle: "italic",
    margin: 0,
  },
  p: {
    fontFamily: fonts.body,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.regular,
    margin: 0,
  },
  div: {
    fontFamily: fonts.body,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.regular,
    margin: 0,
  },
  code: {
    fontFamily: fonts.mono,
    fontSize: fontSize.small,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.regular,
    margin: 0,
    backgroundColor: theme.backgroundSubtle,
    padding: spacing["1"],
    borderRadius: borderRadius.small,
  },
});
