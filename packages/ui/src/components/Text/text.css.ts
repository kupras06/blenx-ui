import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme } from "#theme/contract.css";
import {
  borderRadius,
  fonts,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
} from "#theme/tokens.css";

export const base = style({
  margin: 0,
  textDecoration: "none",
  color: theme.contentOnPrimary,
});

export const variant = recipe({
  variants: {
    variant: {
      h1: {
        fontFamily: fonts.display,
        fontSize: fontSize.displayLg,
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
    },
  },
});

export const align = recipe({
  variants: {
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
  },
});

export const weight = recipe({
  variants: {
    weight: {
      regular: { fontWeight: fontWeight.regular },
      medium: { fontWeight: fontWeight.medium },
      semibold: { fontWeight: fontWeight.semibold },
      bold: { fontWeight: fontWeight.bold },
    },
  },
});

export const transform = recipe({
  variants: {
    transform: {
      uppercase: { textTransform: "uppercase" },
      capitalize: { textTransform: "capitalize" },
      none: { textTransform: "none" },
      lowercase: { textTransform: "lowercase" },
    },
  },
});

export const size = recipe({
  variants: {
    size: {
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
    },
  },
});
