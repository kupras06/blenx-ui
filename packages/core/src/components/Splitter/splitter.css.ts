import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const HANDLE_SIZE = 8;

export const root = baseSprinkles({
  display: "flex",
  width: "full",
  height: "full",
  overflow: "hidden",
});

export const rootHorizontal = baseSprinkles({
  direction: "row",
});

export const rootVertical = baseSprinkles({
  direction: "column",
});

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
        backgroundColor: semanticVars.color.primary.default,
      },
    },
  }),
]);

export const handleActive = baseSprinkles({
  backgroundColor: "primary",
});

export const handleDisabled = style([
  baseSprinkles({ cursor: "not-allowed" }),
  style({ opacity: 0.4 }),
]);

export const handleHorizontal = style([
  baseSprinkles({ cursor: "col-resize" }),
  style({ width: HANDLE_SIZE }),
]);

export const handleVertical = style([
  baseSprinkles({ cursor: "row-resize" }),
  style({ height: HANDLE_SIZE }),
]);
