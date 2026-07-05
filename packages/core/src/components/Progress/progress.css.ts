import { style } from "@vanilla-extract/css";
import { tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = baseSprinkles({
  display: "flex",
  direction: "column",
  width: "full",
  gap: "2",
});

export const track = style([
  baseSprinkles({
    display: "block",
    width: "full",
    overflow: "hidden",
    radius: "full",
    backgroundColor: "secondary",
  }),
  style({
    height: 6,
  }),
]);

export const indicator = style([
  baseSprinkles({
    height: "full",
    backgroundColor: "primary",
    radius: "full",
  }),
  style({
    transitionProperty: "width, background-color",
    transitionDuration: tokenVars.duration.slow,
    transitionTimingFunction: "ease",
  }),
]);

export const progressLabel = style([
  baseSprinkles({
    fontSize: "md",
  }),
  style({
    fontWeight: tokenVars.fontWeight.medium,
  }),
]);

export const value = style([
  baseSprinkles({
    fontSize: "sm",
  }),
  style({
    fontVariantNumeric: "tabular-nums",
  }),
]);
