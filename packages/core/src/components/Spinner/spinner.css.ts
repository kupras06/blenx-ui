import { style, keyframes } from "@vanilla-extract/css";
import { baseSprinkles } from "../../utils/sprinkles";

export const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const spinner = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
  }),
  style({
    transformOrigin: "center",
    animationName: spin,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  }),
]);
