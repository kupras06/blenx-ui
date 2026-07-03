import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles";

export const containerRecipe = recipe({
  base: {
    minWidth: 0,
  },
  variants: {
    size: {
      xxs: { width: "min(240px, 100%)" },
      xs: { width: "min(320px, 100%)" },
      sm: { width: "min(480px, 100%)" },
      md: { width: "min(640px, 100%)" },
      lg: { width: "min(768px, 100%)" },
      xl: { width: "min(1024px, 100%)" },
      xxl: { width: "min(1280px, 100%)" },
      xxxl: { width: "min(1440px, 100%)" },
      xxxxl: { width: "min(1536px, 100%)" },
      full: { maxWidth: "100%", width: "100%" },
    },
    centered: {
      true: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },

    contentCentered: {
      true: baseSprinkles({
        display: "flex",
        direction: "column",
        justify: "center",
        align: "center",
      }),
    },
  },
  defaultVariants: {
    size: "lg",
    centered: true,
  },
});
