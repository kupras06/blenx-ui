import { style } from "@vanilla-extract/css";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    position: "relative",
    overflow: "hidden",
    maxWidth: "full",
  }),
]);
