import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    radius: "full",
    backgroundColor: "secondary",
  }),
  style({
    width: tokenVars.spacing.xxl,
    height: tokenVars.spacing.lg,
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

export const rootChecked = baseSprinkles({
  backgroundColor: "primary",
});

export const rootDisabled = style({
  cursor: "not-allowed",
  opacity: 0.35,
});

export const thumb = style([
  baseSprinkles({
    radius: "full",
    backgroundColor: "disabled",
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
    backgroundColor: "primaryActive",
  }),
  style({
    transform: `translateX(${tokenVars.spacing["lg"]})`,
  }),
]);
