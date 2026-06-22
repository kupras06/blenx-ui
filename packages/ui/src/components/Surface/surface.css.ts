import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "#theme/contract.css";

export const base = style({
  textDecoration: "none",
});

export const variant = recipe({
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
  },
});

export const interactive = style({
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
});
