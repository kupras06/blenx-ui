import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: tokenVars.borderRadius.default,
  backgroundColor: semanticVars.background.subtle,
  color: semanticVars.text.secondary,
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
  backgroundColor: semanticVars.background.subtle,
  color: semanticVars.text.secondary,
  fontSize: 12,
  outline: "none",
  border: "none",
  borderWidth: 0,
  fontWeight: 600,
  lineHeight: 1,
});

export const avatarRecipes = recipe({
  variants: {
    size: {
      sm: { width: tokenVars.spacing.lg, height: tokenVars.spacing.lg },
      md: { width: tokenVars.spacing.xl, height: tokenVars.spacing.xl },
      lg: { width: tokenVars.spacing.xxl, height: tokenVars.spacing.xxl },
      xl: { width: tokenVars.spacing.xxxl, height: tokenVars.spacing.xxxl },
      hero: { width: tokenVars.spacing.titanic, height: tokenVars.spacing.titanic },
    },
    radius: {
      none: { borderRadius: 0 },
      xs: { borderRadius: tokenVars.borderRadius.xs },
      small: { borderRadius: tokenVars.borderRadius.sm },
      medium: { borderRadius: tokenVars.borderRadius.md },
      large: { borderRadius: tokenVars.borderRadius.lg },
      xlarge: { borderRadius: tokenVars.borderRadius.xl },
      xxlarge: { borderRadius: tokenVars.borderRadius.xxl },
      full: { borderRadius: tokenVars.borderRadius.full },
    },
  },
});
