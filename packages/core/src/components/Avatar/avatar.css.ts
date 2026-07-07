import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    radius: "default",
    backgroundColor: "subtle",
    color: "secondary",
    overflow: "hidden",
    shrink: 0,
    borderWidth: "thin",
  }),
  style({
    outline: "none",
    border: "none",
  }),
]);

export const image = style([
  baseSprinkles({
    width: "full",
    height: "full",
    display: "block",
    borderWidth: "thin",
  }),
  style({
    objectFit: "cover",
    outline: "none",
    border: "none",
  }),
]);

export const fallback = style([
  baseSprinkles({
    width: "full",
    height: "full",
    display: "flex",
    align: "center",
    justify: "center",
    backgroundColor: "subtle",
    color: "secondary",
    borderWidth: "none",
    fontWeight: "semibold",
  }),
  style({
    fontSize: 12,
    outline: "none",
    border: "none",
    lineHeight: 1,
  }),
]);

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
