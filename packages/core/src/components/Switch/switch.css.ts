import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    padding: "xxs",
    radius: "full",
  }),
  style({
    width: tokenVars.spacing.xxl,
    height: tokenVars.spacing.lg,
  }),
  style({
    backgroundColor: semanticVars.border.default,
    cursor: "pointer",
    transitionProperty: "background-color",
    transitionDuration: "150ms",
    selectors: {
      "&:focus-visible": {
        outlineWidth: 2,
        outlineStyle: "solid",
        outlineColor: semanticVars.border.strong,
      },
    },
  }),
]);

export const rootChecked = style([
  baseSprinkles({
    backgroundColor: "primary",
  }),
]);

export const rootDisabled = style({
  cursor: "not-allowed",
  opacity: 0.35,
});

export const thumb = style([
  baseSprinkles({
    radius: "full",
    backgroundColor: "primary",
  }),
  style({
    width: tokenVars.spacing.lg,
    height: tokenVars.spacing.lg,
  }),
  style({
    transitionProperty: "transform, background-color",
    transitionDuration: "150ms",
    transform: "translateX(0)",
  }),
]);

export const thumbChecked = style([
  baseSprinkles({
    backgroundColor: "surface",
  }),
  style({
    transform: `translateX(${tokenVars.spacing.lg})`,
  }),
]);
