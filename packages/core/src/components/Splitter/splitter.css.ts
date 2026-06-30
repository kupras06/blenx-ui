import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const HANDLE_SIZE = 8;

export const root = style({
  display: "flex",
  overflow: "hidden",
  width: "100%",
  height: "100%",
});

export const rootHorizontal = style({
  flexDirection: "row",
});

export const rootVertical = style({
  flexDirection: "column",
});

export const rootDisabled = style({
  pointerEvents: "none",
  opacity: 0.6,
});

export const panel = style({
  overflow: "hidden",
  flexShrink: 0,
  flexBasis: 0,
});

export const handle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
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
});

export const handleActive = style({
  backgroundColor: semanticVars.interactive.primary.default,
});

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
