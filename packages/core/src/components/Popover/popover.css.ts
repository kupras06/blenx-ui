import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
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
  }),
  style({
    minWidth: 160,
    width: "max(var(--anchor-width), 240px)",
    maxWidth: "calc(100vw - 16px)",
    borderWidth: tokenVars.borderWidth.thin,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    boxShadow: tokenVars.shadow.lg,
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

export const arrow = style({
  position: "absolute",
  width: 10,
  height: 10,
});

export const arrowFill = style([
  baseSprinkles({
    backgroundColor: "surface",
  }),
  style({
    width: "100%",
    height: "100%",
    borderWidth: tokenVars.borderWidth.thin,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    borderRadius: 2,
    transform: "rotate(45deg)",
  }),
]);

export const title = style([
  baseSprinkles({
    fontSize: "md",
    color: "primary",
  }),
  style({
    fontWeight: tokenVars.fontWeight.semibold,
    margin: 0,
    paddingBottom: tokenVars.spacing.xs,
  }),
]);

export const description = style([
  baseSprinkles({
    fontSize: "sm",
    color: "secondary",
  }),
  style({
    margin: 0,
    paddingBottom: tokenVars.spacing.xs,
  }),
]);
