import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";
import {
  dangerPalette,
  infoPalette,
  neutralPalette,
  paletteVars,
  primaryPalette,
  successPalette,
  warningPalette,
} from "../../utils/pallete-styles.css";

export const base = style([
  baseSprinkles({
    position: "relative",
    display: "inline-flex",
    shrink: 0,
    align: "center",
    justify: "center",
    gap: "sm",
    radius: "inherit",
    backgroundColor: "transparent",
    fontSize: "sm",
    borderWidth: "thin",
    lineHeight: "tight",
    fontWeight: "medium",
  }),
  style({
    whiteSpace: "nowrap",
    borderStyle: "solid",
    cursor: "pointer",
    userSelect: "none",
    outline: "none",
    transition: "box-shadow 0.15s ease",
    selectors: {
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
      },
      "&:disabled": {
        pointerEvents: "none",
        opacity: 0.64,
      },
    },
  }),
]);

export const toggleRecipes = recipe({
  base: primaryPalette,
  variants: {
    size: {
      sm: {
        height: tokenVars.spacing.lg,
        minWidth: tokenVars.spacing.lg,
        paddingLeft: tokenVars.spacing.sm,
        paddingRight: tokenVars.spacing.sm,
      },
      default: {
        height: tokenVars.spacing.lg,
        minWidth: 36,
        paddingLeft: tokenVars.spacing.sm,
        paddingRight: tokenVars.spacing.sm,
      },
      lg: {
        height: tokenVars.spacing.xl,
        paddingLeft: tokenVars.spacing.md,
        paddingRight: tokenVars.spacing.md,
      },
    },
    variant: {
      default: {
        borderColor: paletteVars.border,
        color: paletteVars.fg,
        backgroundColor: paletteVars.bg,
      },
      outline: {
        borderColor: paletteVars.border,
        color: paletteVars.fg,
        backgroundColor: paletteVars.bg,
      },
    },
    palette: {
      primary: primaryPalette,
      secondary: neutralPalette,
      neutral: neutralPalette,
      success: successPalette,
      warning: warningPalette,
      danger: dangerPalette,
      info: infoPalette,
    },
  },
});

export const pressed = {
  default: style({
    backgroundColor: paletteVars.activeBg,
  }),
  outline: style({
    outlineWidth: tokenVars.borderWidth.thin,
    backgroundColor: paletteVars.activeBg,
    borderColor: paletteVars.border,
  }),
};
