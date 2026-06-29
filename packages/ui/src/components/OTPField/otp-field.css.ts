import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing["1"],
});

export const input = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: themeContract.borderRadius,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: themeContract.border,
    backgroundColor: themeContract.background,
    color: themeContract.contentPrimary,
    outline: "none",
    caretColor: themeContract.primary,
    transition: "box-shadow 0.15s ease, border-color 0.15s ease",
    padding: 0,
    margin: 0,
  },
  variants: {
    size: {
      default: {
        width: tokenVars.spacing["9"],
        height: tokenVars.spacing["9"],
        fontSize: tokenVars.fontSize.md,
      },
      lg: {
        width: tokenVars.spacing["10"],
        height: tokenVars.spacing["10"],
        fontSize: tokenVars.fontSize.lg,
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const separator = style({
  backgroundColor: themeContract.border,
  borderRadius: "999px",
  width: tokenVars.spacing["3"],
  height: tokenVars.spacing["0.5"],
  flexShrink: 0,
});
