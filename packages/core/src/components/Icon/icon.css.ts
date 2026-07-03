import { style } from "@vanilla-extract/css";
import { baseSprinkles } from "../../utils/sprinkles";

export const iconWrapper = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    width: "fit",
    height: "fit",
    shrink: 0,
  }),
]);
