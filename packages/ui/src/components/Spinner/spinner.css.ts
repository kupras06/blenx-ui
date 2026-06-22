import { style, keyframes } from "@vanilla-extract/css";

export const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const spinner = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transformOrigin: "center",
  animationName: spin,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});
