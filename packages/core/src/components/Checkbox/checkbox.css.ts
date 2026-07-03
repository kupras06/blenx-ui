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
    radius: "sm",
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
    align: "start",
    gap: "sm",
  }),
]);

export const indicator = style([
  baseSprinkles({
    position: "absolute",
    display: "flex",
    align: "center",
    justify: "center",
    radius: "sm",
  }),
  style({
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    color: semanticVars.interactive.primaryFg,
  }),
]);

export const indicatorChecked = style([
  baseSprinkles({
    backgroundColor: "primary",
  }),
  style({
    color: semanticVars.interactive.primaryFg,
  }),
]);

export const indicatorIndeterminate = style([
  baseSprinkles({
    color: "primary",
  }),
]);

export const icon = style({
  width: 14,
  height: 14,
  "@media": {
    "screen and (min-width: 640px)": {
      width: 12,
      height: 12,
    },
  },
});
