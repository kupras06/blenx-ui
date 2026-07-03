import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const disabled = style({
  pointerEvents: "none",
  opacity: 0.64,
});

export const control = style([
  baseSprinkles({
    display: "flex",
  }),
  style({
    touchAction: "none",
    userSelect: "none",
  }),
]);

export const controlHorizontal = style([
  baseSprinkles({
    width: "full",
  }),
  style({
    minWidth: 176,
    height: 7,
  }),
]);

export const controlVertical = style([
  baseSprinkles({
    height: "full",
    direction: "column",
  }),
  style({
    minHeight: 176,
  }),
]);

export const track = style([
  baseSprinkles({
    position: "relative",
    grow: 1,
    radius: "full",
  }),
  style({
    userSelect: "none",
    backgroundColor: semanticVars.border.default,
  }),
]);

export const trackHorizontal = style([
  baseSprinkles({
    width: "full",
  }),
  style({
    height: 7,
  }),
]);

export const trackVertical = style([
  baseSprinkles({
    height: "full",
  }),
]);

export const indicator = style([
  baseSprinkles({
    radius: "full",
    backgroundColor: "primary",
  }),
  style({
    userSelect: "none",
  }),
]);

export const thumb = style([
  baseSprinkles({
    display: "block",
    shrink: 0,
    radius: "full",
    backgroundColor: "surface",
  }),
  style({
    userSelect: "none",
    borderWidth: tokenVars.borderWidth.thin,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    outline: "none",
    transitionProperty: "box-shadow, transform",
    transitionDuration: "150ms",
    width: 16,
    height: 16,
    boxShadow: tokenVars.shadow.sm,
    selectors: {
      "&:has(:focus-visible)": {
        boxShadow: `0 0 0 3px ${semanticVars.focus.ring}`,
      },
    },
  }),
]);

export const thumbDragging = style({
  transform: "scale(1.2)",
  boxShadow: "none",
});

export const value = style([
  baseSprinkles({
    display: "flex",
    justify: "end",
    fontSize: "sm",
  }),
]);
