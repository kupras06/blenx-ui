import * as stylex from "@stylexjs/stylex";
import {
  fontSize,
  theme,
  fonts,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "@/lib/theme/theme.stylex";

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

export const textColorStyles = stylex.create({
  primary: { color: theme.contentPrimary },
  secondary: { color: theme.contentSecondary },
  accent: { color: theme.contentAccent },
  disabled: { color: theme.contentDisabled },
  error: { color: theme.sentimentNegative },
});

export const textAlignStyles = stylex.create({
  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },
});

export const textWeightStyles = stylex.create({
  regular: { fontWeight: fontWeight.regular },
  medium: { fontWeight: fontWeight.medium },
  semibold: { fontWeight: fontWeight.semibold },
  bold: { fontWeight: fontWeight.bold },
});

export const textStyles = stylex.create({
  h1: {
    fontFamily: fonts.display,
    fontSize: fontSize.display,
    lineHeight: lineHeight.tight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tight,
    margin: 0,
  },
  h2: {
    fontFamily: fonts.heading,
    fontSize: fontSize.xxlarge,
    lineHeight: lineHeight.tight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tight,
    margin: 0,
  },
  h3: {
    fontFamily: fonts.heading,
    fontSize: fontSize.xlarge,
    lineHeight: lineHeight.snug,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.snug,
    margin: 0,
  },
  h4: {
    fontFamily: fonts.heading,
    fontSize: fontSize.large,
    lineHeight: lineHeight.tight,
    fontWeight: fontWeight.semibold,
    margin: 0,
  },
  h5: {
    fontFamily: fonts.heading,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.semibold,
    margin: 0,
  },
  h6: {
    fontFamily: fonts.heading,
    fontSize: fontSize.small,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.semibold,
    margin: 0,
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
});
