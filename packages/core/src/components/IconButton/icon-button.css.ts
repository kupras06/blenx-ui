import { style } from "@vanilla-extract/css";
import { baseSprinkles } from "../../utils/sprinkles";

export const base = style([
  baseSprinkles({
    width: "fit",
  }),
  style({
    maxWidth: "100px",
  }),
]);
