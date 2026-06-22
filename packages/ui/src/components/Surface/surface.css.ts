import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "#theme/contract.css";

export const variantRecipe = recipe({
  base: { textDecoration: "none" },
  variants: {
    variant: {
      default: {
        backgroundColor: themeContract.surface,
        borderRadius: themeContract.borderRadius,
      },
      outline: {
        backgroundColor: themeContract.surface,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: themeContract.border,
      },
      raised: {
        backgroundColor: themeContract.surfaceRaised,
        boxShadow: themeContract.shadowMd,
      },
      sunken: {
        backgroundColor: themeContract.surfaceSubtle,
      },
    },
    interactive: {
      true: {
        cursor: "pointer",
        selectors: {
          "&:hover": {
            backgroundColor: themeContract.surfaceHover,
          },
          "&:focus-visible": {
            outline: `2px solid ${themeContract.focusRing}`,
            outlineOffset: "2px",
          },
        },
      },
    },
  },
});
