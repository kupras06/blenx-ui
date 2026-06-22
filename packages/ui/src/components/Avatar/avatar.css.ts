import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme } from "#theme/contract.css";
import { spacing } from "#theme/tokens.css";
import { borderRadius } from "#theme/tokens.css";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.borderRadius,
  backgroundColor: theme.backgroundSubtle,
  color: theme.contentSecondary,
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
  backgroundColor: theme.backgroundSubtle,
  color: theme.contentSecondary,
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
      small: { width: spacing.large, height: spacing.large },
      medium: { width: spacing.xlarge, height: spacing.xlarge },
      large: { width: spacing.xxlarge, height: spacing.xxlarge },
      xlarge: { width: spacing.xxxlarge, height: spacing.xxxlarge },
      hero: { width: spacing.titanic, height: spacing.titanic },
    },
  },
});

export const radius = recipe({
  variants: {
    radius: {
      none: { borderRadius: 0 },
      xsmall: { borderRadius: borderRadius.xsmall },
      small: { borderRadius: borderRadius.small },
      medium: { borderRadius: borderRadius.medium },
      large: { borderRadius: borderRadius.large },
      xlarge: { borderRadius: borderRadius.xlarge },
      xxlarge: { borderRadius: borderRadius.xxlarge },
      full: { borderRadius: borderRadius.full },
    },
  },
});
