import { style } from "@vanilla-extract/css";
import { baseSprinkles } from "../../utils/sprinkles";

export const field = baseSprinkles({
  display: "flex",
  direction: "column",
  align: "start",
  gap: "2",
  flex: 1,
});

export const label = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    fontSize: "md",
    fontWeight: "regular",
  }),
  style({
    color: "inherit",
  }),
]);

export const item = baseSprinkles({
  display: "flex",
  flex: 1,
});

export const description = style([
  baseSprinkles({
    color: "secondary",
  }),
  style({
    fontSize: "12px",
    lineHeight: 1.4,
  }),
]);

export const error = style([
  baseSprinkles({
    color: "error",
  }),
  style({
    fontSize: "12px",
    lineHeight: 1.4,
  }),
]);
