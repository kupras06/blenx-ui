import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    position: "relative",
    display: "inline-flex",
    align: "center",
    justify: "center",
    shrink: 0,
    radius: "full",
    backgroundColor: "canvas",
  }),
  style({
    width: 18,
    height: 18,
    borderWidth: tokenVars.borderWidth.thin,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    outline: "none",
    transitionProperty: "box-shadow",
    transitionDuration: "150ms",
    selectors: {
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
      },
    },
    "@media": {
      "screen and (min-width: 640px)": {
        width: 16,
        height: 16,
      },
    },
  }),
]);

export const rootDisabled = style({
  cursor: "not-allowed",
  opacity: 0.64,
});

export const group = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    gap: "sm",
  }),
]);

export const indicator = style([
  baseSprinkles({
    display: "none",
    position: "absolute",
    align: "center",
    justify: "center",
    radius: "full",
  }),
  style({
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
  }),
]);

export const indicatorChecked = style([
  baseSprinkles({
    display: "flex",
    backgroundColor: "primary",
  }),
]);

export const dot = style([
  baseSprinkles({
    radius: "full",
  }),
  style({
    width: 8,
    height: 8,
    backgroundColor: semanticVars.interactive.primaryFg,
    "@media": {
      "screen and (min-width: 640px)": {
        width: 6,
        height: 6,
      },
    },
  }),
]);
