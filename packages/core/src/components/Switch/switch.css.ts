import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    radius: "full",
    backgroundColor: "secondary",
    cursor: "pointer",
  }),
  style({
    width: tokenVars.spacing.xxl,
    height: tokenVars.spacing.lg,
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

export const rootChecked = baseSprinkles({
  backgroundColor: "primary",
});

export const rootDisabled = style([baseSprinkles({ cursor: "not-allowed", opacity: "0.5" })]);

export const thumb = style([
  baseSprinkles({
    radius: "full",
    backgroundColor: "subtle",
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
    backgroundColor: "primary",
  }),
  style({
    transform: `translateX(${tokenVars.spacing["lg"]})`,
  }),
]);
