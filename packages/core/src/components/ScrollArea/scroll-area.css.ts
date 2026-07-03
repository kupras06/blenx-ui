import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    height: "full",
    width: "full",
  }),
  style({
    minHeight: 0,
  }),
]);

export const viewport = style([
  baseSprinkles({
    height: "full",
    radius: "default",
  }),
  style({
    minWidth: 0,
    outline: "none",
    overscrollBehaviorY: "contain",
    overscrollBehaviorX: "contain",
    selectors: {
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
      },
    },
  }),
]);

export const viewportFade = style({
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)",
  maskImage:
    "linear-gradient(to bottom, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)",
});

export const viewportGutter = style([
  baseSprinkles({
    paddingRight: "sm",
    paddingBottom: "sm",
  }),
]);

export const contentFill = style([
  baseSprinkles({
    height: "full",
    width: "full",
  }),
]);

export const scrollbar = style([
  baseSprinkles({
    display: "flex",
  }),
  style({
    margin: tokenVars.spacing.xs,
    opacity: 0,
    transitionProperty: "opacity",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease",
    selectors: {
      "&[data-hovering]": {
        opacity: 1,
        transitionDelay: "0ms",
        transitionDuration: "100ms",
      },
      "&[data-scrolling]": {
        opacity: 1,
        transitionDelay: "0ms",
        transitionDuration: "100ms",
      },
    },
  }),
]);

export const scrollbarHorizontal = style([
  baseSprinkles({
    direction: "row",
  }),
  style({
    height: "6px",
  }),
]);

export const scrollbarVertical = style({
  width: "6px",
});

export const thumb = style([
  baseSprinkles({
    position: "relative",
    grow: 1,
    radius: "default",
    backgroundColor: "subtle",
  }),
]);
