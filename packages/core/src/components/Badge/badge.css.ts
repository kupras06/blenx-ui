import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles.css";
import {
  dangerPalette,
  neutralPalette,
  paletteVars,
  primaryPalette,
  successPalette,
} from "../../utils/pallete-styles.css";

export const badgeRecipe = recipe({
  base: baseSprinkles({
    display: "inline-block",
    padding: "xs",
    borderRadius: "default",
    fontSize: "sm",
    lineHeight: "normal",
    borderWidth: "thin",
    borderColor: "transparent",
  }),
  variants: {
    appearance: {
      solid: {
        backgroundColor: paletteVars.bg,
        color: paletteVars.fg,
      },
      soft: {
        backgroundColor: "color-mix(in srgb, var(--badge-bg) 25%, transparent)",
      },
      outline: {
        backgroundColor: "transparent",
        border: "1px solid " + paletteVars.border,
      },
    },

    variant: {
      default: primaryPalette,

      primary: primaryPalette,
      secondary: neutralPalette,

      success: successPalette,

      danger: dangerPalette,
    },
  },
  compoundVariants: [
    {
      variants: {
        appearance: "solid",
      },
      style: {
        backgroundColor: paletteVars.bg,
        color: paletteVars.fg,
        borderColor: paletteVars.border,
      },
    },

    {
      variants: {
        appearance: "outline",
      },
      style: {
        backgroundColor: "transparent",
        color: paletteVars.border,
        borderColor: paletteVars.border,
      },
    },

    {
      variants: {
        appearance: "soft",
      },
      style: {
        backgroundColor: `color-mix(in srgb, ${paletteVars.border} 25%, transparent)`,
        color: paletteVars.fg,
      },
    },
  ],

  defaultVariants: {
    appearance: "solid",
    variant: "default",
  },
});
