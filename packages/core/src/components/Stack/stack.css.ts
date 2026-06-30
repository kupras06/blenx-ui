import { recipe } from "@vanilla-extract/recipes";
import { tokenVars } from "@blenx-dev/theme/contract";

export const stackRecipe = recipe({
  variants: {
    gap: {
      none: { gap: 0 },
      xxs: { gap: tokenVars.spacing.xxs },
      xs: { gap: tokenVars.spacing.xs },
      sm: { gap: tokenVars.spacing.sm },
      md: { gap: tokenVars.spacing.md },
      lg: { gap: tokenVars.spacing.lg },
      xl: { gap: tokenVars.spacing.xl },
      xxl: { gap: tokenVars.spacing.xxl },
      xxxl: { gap: tokenVars.spacing.xxxl },
      huge: { gap: tokenVars.spacing.huge },
      massive: { gap: tokenVars.spacing.massive },
    },
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
      stretch: { justifyContent: "stretch" },
    },
    wrap: {
      true: { flexWrap: "wrap" },
    },
  },
  defaultVariants: {
    gap: "md",
  },
});
