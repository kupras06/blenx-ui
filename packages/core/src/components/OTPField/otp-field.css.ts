import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "xs",
});

export const input = recipe({
  base: [
    baseSprinkles({
      align: "center",
      justify: "center",
      textAlign: "center",
      outline: "none",
    }),
    style({
      display: "flex",
      borderRadius: tokenVars.borderRadius.default,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: semanticVars.border.default,
      backgroundColor: semanticVars.background.default,
      color: semanticVars.text.primary,
      caretColor: semanticVars.color.primary.default,
      transition: "box-shadow 0.15s ease, border-color 0.15s ease",
      padding: 0,
      margin: 0,
    }),
  ],
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

export const separator = style([
  baseSprinkles({
    shrink: 0,
  }),
  style({
    backgroundColor: semanticVars.border.default,
    borderRadius: "999px",
    width: tokenVars.spacing["3"],
    height: tokenVars.spacing["0.5"],
  }),
]);
