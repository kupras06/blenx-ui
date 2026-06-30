import { style } from "@vanilla-extract/css";
import { semanticVars } from "./contract.css";

export { tokenVarsDefaults } from "./tokens-defaults";

export const mediaQueries = {
  sm: "screen and (min-width: 640px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 1024px)",
  xl: "screen and (min-width: 1280px)",
  xxl: "screen and (min-width: 1536px)",
  dark: "(prefers-color-scheme: dark)",
} as const;

export const primitives = {
  trigger: style({
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    font: "inherit",
    color: "inherit",
    textDecoration: "none",
    borderWidth: 0,
    WebkitTapHighlightColor: "transparent",
  }),
  focusable: style({
    outline: "none",
    selectors: {
      "&:focus-visible": {
        outline: `2px solid ${semanticVars.focus.ring}`,
      },
    },
  }),
};

export const zIndex = {
  base: 0,
  raised: 100,
  floating: 1000,
  sticky: 1100,
  overlay: 1200,
  popover: 1300,
  modal: 1400,
  toast: 1500,
  tooltip: 1600,
} as const;
