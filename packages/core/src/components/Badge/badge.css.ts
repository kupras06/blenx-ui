import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles.css";
import {
  dangerPalette,
  infoPalette,
  neutralPalette,
  paletteVars,
  primaryPalette,
  successPalette,
  warningPalette,
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
      soft: {},
      outline: {
        backgroundColor: "transparent",
        border: "1px solid " + paletteVars.border,
      },
    },

    variant: {
      default: primaryPalette,

      primary: primaryPalette,
      secondary: neutralPalette,
      neutral: neutralPalette,

      success: successPalette,
      warning: warningPalette,
      danger: dangerPalette,
      info: infoPalette,
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
