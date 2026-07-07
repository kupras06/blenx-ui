import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const backdrop = style([
  baseSprinkles({
    position: "fixed",
    zIndex: "modal",
  }),
  style({
    inset: 0,
  }),
  style({
    backgroundColor: "rgba(0, 0, 0, 0.32)",
  }),
]);

export const positioner = style([
  baseSprinkles({
    zIndex: "popover",
  }),
  style({
    outline: "none",
  }),
]);

export const popup = style([
  baseSprinkles({
    padding: "sm",
    backgroundColor: "surface",
    radius: "lg",
    borderWidth: "thin",
    borderStyle: "solid",
    boxShadow: "lg",
  }),
  style({
    minWidth: 160,
    width: "max(var(--anchor-width), 240px)",
    maxWidth: "calc(100vw - 16px)",
    borderColor: semanticVars.border.default,
    outline: "none",
    transformOrigin: "var(--transform-origin)",
    transitionProperty: "opacity, scale",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease",
    selectors: {
      "&[data-starting-style]": {
        opacity: 0,
        scale: 0.95,
      },
      "&[data-ending-style]": {
        opacity: 0,
        scale: 0.95,
      },
    },
    "@media": {
      "(prefers-reduced-motion: reduce)": {
        transitionProperty: "none",
        transitionDuration: "0ms",
      },
    },
  }),
]);

export const arrow = style([
  baseSprinkles({ position: "absolute" }),
  style({ width: 10, height: 10 }),
]);

export const arrowFill = style([
  baseSprinkles({
    backgroundColor: "surface",
    width: "full",
    height: "full",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  style({
    borderColor: semanticVars.border.default,
    borderRadius: 2,
    transform: "rotate(45deg)",
  }),
]);

export const title = style([
  baseSprinkles({
    fontSize: "md",
    color: "primary",
    fontWeight: "semibold",
    paddingBottom: "xs",
  }),
  style({
    margin: 0,
  }),
]);

export const description = style([
  baseSprinkles({
    fontSize: "sm",
    color: "secondary",
    paddingBottom: "xs",
  }),
  style({
    margin: 0,
  }),
]);
