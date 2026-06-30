import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const textVariants = recipe({
  base: {
    margin: 0,
    textDecoration: "none",
    lineHeight: tokenVars.lineHeight.normal,
  },
  variants: {
    variant: {
      h1: {
        fontSize: tokenVars.fontSize.displayLg,
        fontWeight: tokenVars.fontWeight.bold,
        letterSpacing: tokenVars.letterSpacing.tight,
        margin: 0,
        scrollMarginTop: "80px",
      },
      h2: {
        fontSize: tokenVars.fontSize.xxxl,
        fontWeight: tokenVars.fontWeight.bold,
        letterSpacing: tokenVars.letterSpacing.tight,
        margin: 0,
        scrollMarginTop: "80px",
      },
      h3: {
        fontSize: tokenVars.fontSize.xl,
        fontWeight: tokenVars.fontWeight.semibold,
        letterSpacing: tokenVars.letterSpacing.snug,
        margin: 0,
        scrollMarginTop: "80px",
      },
      h4: {
        fontSize: tokenVars.fontSize.lg,
        fontWeight: tokenVars.fontWeight.semibold,
        margin: 0,
        scrollMarginTop: "80px",
      },
      h5: {
        fontSize: tokenVars.fontSize.md,
        fontWeight: tokenVars.fontWeight.semibold,
        margin: 0,
        scrollMarginTop: "80px",
      },
      h6: {
        fontSize: tokenVars.fontSize.sm,
        fontWeight: tokenVars.fontWeight.semibold,
        margin: 0,
        scrollMarginTop: "80px",
      },
      body1: {
        fontWeight: tokenVars.fontWeight.regular,
        margin: 0,
      },
      body2: {
        fontSize: tokenVars.fontSize.sm,
        fontWeight: tokenVars.fontWeight.regular,
        margin: 0,
      },
      body3: {
        fontSize: tokenVars.fontSize.xs,
        fontWeight: tokenVars.fontWeight.regular,
        margin: 0,
      },
      body4: {
        fontSize: tokenVars.fontSize.xxs,
        fontWeight: tokenVars.fontWeight.medium,
        letterSpacing: tokenVars.letterSpacing.wide,
        margin: 0,
      },
      caption: {
        fontSize: tokenVars.fontSize.xs,
        fontWeight: tokenVars.fontWeight.medium,
        letterSpacing: tokenVars.letterSpacing.wide,
        margin: 0,
      },
      creatorNote: {
        fontSize: tokenVars.fontSize.lg,
        lineHeight: "28px",
        fontWeight: tokenVars.fontWeight.regular,
        fontStyle: "italic",
        margin: 0,
      },
      p: {
        fontSize: tokenVars.fontSize.md,
        fontWeight: tokenVars.fontWeight.regular,
        margin: 0,
      },
      div: {
        fontSize: tokenVars.fontSize.md,
        fontWeight: tokenVars.fontWeight.regular,
        margin: 0,
      },
      code: {
        margin: 0,
        backgroundColor: semanticVars.background.subtle,
        borderRadius: tokenVars.borderRadius.sm,
      },
    },
    textAlign: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
    weight: {
      regular: { fontWeight: tokenVars.fontWeight.regular },
      medium: { fontWeight: tokenVars.fontWeight.medium },
      semibold: { fontWeight: tokenVars.fontWeight.semibold },
      bold: { fontWeight: tokenVars.fontWeight.bold },
    },
    transform: {
      uppercase: { textTransform: "uppercase" },
      capitalize: { textTransform: "capitalize" },
      none: { textTransform: "none" },
      lowercase: { textTransform: "lowercase" },
    },
  },
});
