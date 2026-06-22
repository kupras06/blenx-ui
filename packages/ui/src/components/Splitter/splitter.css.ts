import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { duration } from "#theme/tokens.css";

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
  backgroundColor: theme.borderSubtle,
  transitionProperty: "background-color",
  transitionDuration: duration.fast,
  outline: "none",
  selectors: {
    "&:hover": {
      backgroundColor: theme.border,
    },
    "&:focus-visible": {
      backgroundColor: theme.primary,
    },
  },
});

export const handleActive = style({
  backgroundColor: theme.primary,
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
