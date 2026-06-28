import { recipe } from "@vanilla-extract/recipes";
import { spacing } from "@blenx-dev/theme/tokens";

export const stackRecipe = recipe({
  variants: {
    gap: {
      none: { gap: 0 },
      xxs: { gap: spacing.xxs },
      xs: { gap: spacing.xs },
      sm: { gap: spacing.sm },
      md: { gap: spacing.md },
      lg: { gap: spacing.lg },
      xl: { gap: spacing.xl },
      xxl: { gap: spacing.xxl },
      xxxl: { gap: spacing.xxxl },
      huge: { gap: spacing.huge },
      massive: { gap: spacing.massive },
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
