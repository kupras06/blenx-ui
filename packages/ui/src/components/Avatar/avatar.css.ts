import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@blenx-dev/theme/contract";
import { spacing } from "@blenx-dev/theme/tokens";
import { borderRadius } from "@blenx-dev/theme/tokens";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: themeContract.borderRadius,
  backgroundColor: themeContract.backgroundSubtle,
  color: themeContract.contentSecondary,
  overflow: "hidden",
  flexShrink: 0,
  outline: "none",
  border: "none",
  borderWidth: 0,
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  outline: "none",
  border: "none",
  borderWidth: 0,
});

export const fallback = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: themeContract.backgroundSubtle,
  color: themeContract.contentSecondary,
  fontSize: 12,
  outline: "none",
  border: "none",
  borderWidth: 0,
  fontWeight: 600,
  lineHeight: 1,
});

export const size = recipe({
  variants: {
    size: {
      sm: { width: spacing.lg, height: spacing.lg },
      md: { width: spacing.xl, height: spacing.xl },
      lg: { width: spacing.xxl, height: spacing.xxl },
      xl: { width: spacing.xxxl, height: spacing.xxxl },
      hero: { width: spacing.titanic, height: spacing.titanic },
    },
  },
});

export const radius = recipe({
  variants: {
    radius: {
      none: { borderRadius: 0 },
      xs: { borderRadius: borderRadius.xs },
      small: { borderRadius: borderRadius.sm },
      medium: { borderRadius: borderRadius.md },
      large: { borderRadius: borderRadius.lg },
      xlarge: { borderRadius: borderRadius.xl },
      xxlarge: { borderRadius: borderRadius.xxl },
      full: { borderRadius: borderRadius.full },
    },
  },
});
