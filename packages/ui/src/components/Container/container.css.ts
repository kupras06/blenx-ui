import { recipe } from "@vanilla-extract/recipes";

export const containerRecipe = recipe({
  base: {
    width: "100%",
    boxSizing: "border-box",
  },
  variants: {
    size: {
      xxs: { maxWidth: "240px" },
      xs: { maxWidth: "320px" },
      sm: { maxWidth: "480px" },
      md: { maxWidth: "640px" },
      lg: { maxWidth: "768px" },
      xl: { maxWidth: "1024px" },
      "2xl": { maxWidth: "1280px" },
      "3xl": { maxWidth: "1440px" },
      full: { maxWidth: "100%" },
    },

    centered: {
      true: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },

    contentCentered: {
      true: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
  defaultVariants: {
    size: "lg",
    centered: true,
  },
});
