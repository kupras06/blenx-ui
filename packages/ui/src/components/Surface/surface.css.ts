import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme } from "#theme/contract.css";

export const base = style({
  textDecoration: "none",
});

export const variant = recipe({
  variants: {
    variant: {
      default: {
        backgroundColor: theme.surface,
        borderRadius: theme.borderRadius,
      },
      outline: {
        backgroundColor: theme.surface,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.border,
      },
      raised: {
        backgroundColor: theme.surfaceRaised,
        boxShadow: theme.shadowMd,
      },
      sunken: {
        backgroundColor: theme.surfaceSubtle,
      },
    },
  },
});

export const interactive = style({
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: theme.surfaceHover,
    },
    "&:focus-visible": {
      outline: `2px solid ${theme.focusRing}`,
      outlineOffset: "2px",
    },
  },
});
