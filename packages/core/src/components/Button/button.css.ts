import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles";
import {
  dangerPalette,
  infoPalette,
  monoPalette,
  neutralPalette,
  paletteVars,
  primaryPalette,
  successPalette,
  warningPalette,
} from "../../utils/pallete-styles.css";

export const variant = recipe({
  base: [
    baseSprinkles({
      display: "inline-flex",
      align: "center",
      justify: "center",
      gap: "sm",
      radius: "default",
      width: "fit",
      height: "fit",
      position: "relative",
      fontSize: "md",
      borderStyle: "solid",
      fontWeight: "medium",
      borderWidth: "thin",
      cursor: "pointer",
    }),
    style({
      textDecoration: "none",
      transition: "all 0.2s ease",
      selectors: {
        "&:disabled": {
          opacity: 0.4,
          cursor: "not-allowed",
        },
      },
    }),
  ],
  variants: {
    intent: {
      primary: primaryPalette,
      neutral: neutralPalette,
      success: successPalette,
      warning: warningPalette,
      danger: dangerPalette,
      info: infoPalette,
      mono: monoPalette,
    },
    size: {
      xs: baseSprinkles({ fontSize: "sm", py: "xxs", px: "xs" }),
      sm: baseSprinkles({ fontSize: "sm", py: "xs", px: "sm" }),
      icon: baseSprinkles({ py: "xs", px: "xs" }),
      md: baseSprinkles({ fontSize: "md", py: "sm", px: "md" }),
      lg: baseSprinkles({ fontSize: "lg", py: "md", px: "lg" }),
    },
    variant: {
      solid: {
        backgroundColor: paletteVars.bg,
        borderColor: paletteVars.border,
        color: paletteVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: paletteVars.hoverBg,
          },
        },
      },
      soft: {
        backgroundColor: `color-mix(in srgb, ${paletteVars.hoverBg} 20%, transparent)`,
        color: paletteVars.fg,
        borderColor: "transparent",
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 40%, transparent)`,
          },
        },
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: paletteVars.border,
        color: paletteVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 20%, transparent)`,
            borderColor: paletteVars.border,
          },
        },
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: paletteVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 20%, transparent)`,
          },
        },
      },
      link: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: paletteVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
