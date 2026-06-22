import { recipe } from "@vanilla-extract/recipes";
import { spacing } from "#theme/tokens.css";

export const stackRecipe = recipe({
  variants: {
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
      "row-inverse": { flexDirection: "row-reverse" },
      "column-inverse": { flexDirection: "column-reverse" },
    },
    gap: {
      none: { gap: 0 },
      xxsmall: { gap: spacing.xxsmall },
      xsmall: { gap: spacing.xsmall },
      small: { gap: spacing.small },
      medium: { gap: spacing.medium },
      large: { gap: spacing.large },
      xlarge: { gap: spacing.xlarge },
      xxlarge: { gap: spacing.xxlarge },
      xxxlarge: { gap: spacing.xxxlarge },
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
    direction: "column",
    gap: "medium",
  },
});
