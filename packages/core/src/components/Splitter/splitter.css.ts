import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const HANDLE_SIZE = 8;

export const root = style([
  baseSprinkles({
    display: "flex",
    width: "full",
    height: "full",
    overflow: "hidden",
  }),
]);

export const rootHorizontal = style([
  baseSprinkles({
    direction: "row",
  }),
]);

export const rootVertical = style([
  baseSprinkles({
    direction: "column",
  }),
]);

export const rootDisabled = style({
  pointerEvents: "none",
  opacity: 0.6,
});

export const panel = style([
  baseSprinkles({
    overflow: "hidden",
    shrink: 0,
  }),
  style({
    flexBasis: 0,
  }),
]);

export const handle = style([
  baseSprinkles({
    position: "relative",
    display: "flex",
    align: "center",
    justify: "center",
    shrink: 0,
  }),
  style({
    backgroundColor: semanticVars.border.subtle,
    transitionProperty: "background-color",
    transitionDuration: tokenVars.duration.fast,
    outline: "none",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.border.default,
      },
      "&:focus-visible": {
        backgroundColor: semanticVars.interactive.primary.default,
      },
    },
  }),
]);

export const handleActive = style([
  baseSprinkles({
    backgroundColor: "primary",
  }),
]);

export const handleDisabled = style({
  cursor: "not-allowed",
  opacity: 0.4,
});

export const handleHorizontal = style({
  width: HANDLE_SIZE,
  cursor: "col-resize",
});

export const handleVertical = style({
  height: HANDLE_SIZE,
  cursor: "row-resize",
});
