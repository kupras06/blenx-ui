import { style } from "@vanilla-extract/css";
import { themeContract, tokenVars } from "@blenx-dev/theme/contract";

export const disabled = style({
  pointerEvents: "none",
  opacity: 0.64,
});

export const control = style({
  display: "flex",
  touchAction: "none",
  userSelect: "none",
});

export const controlHorizontal = style({
  width: "100%",
  minWidth: 176,
  height: 7,
});

export const controlVertical = style({
  height: "100%",
  minHeight: 176,
  flexDirection: "column",
});

export const track = style({
  position: "relative",
  flexGrow: 1,
  userSelect: "none",
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: themeContract.border,
});

export const trackHorizontal = style({
  width: "100%",
  height: 7,
});

export const trackVertical = style({
  height: "100%",
});

export const indicator = style({
  userSelect: "none",
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: themeContract.primary,
});

export const thumb = style({
  display: "block",
  flexShrink: 0,
  userSelect: "none",
  borderRadius: tokenVars.borderRadius.full,
  borderWidth: tokenVars.borderWidth.thin,
  borderStyle: "solid",
  borderColor: themeContract.border,
  backgroundColor: themeContract.surface,
  outline: "none",
  transitionProperty: "box-shadow, transform",
  transitionDuration: "150ms",
  width: 16,
  height: 16,
  boxShadow: themeContract.shadowSm,
  selectors: {
    "&:has(:focus-visible)": {
      boxShadow: `0 0 0 3px ${themeContract.focusRing}`,
    },
  },
});

export const thumbDragging = style({
  transform: "scale(1.2)",
  boxShadow: "none",
});

export const value = style({
  display: "flex",
  justifyContent: "flex-end",
  fontSize: tokenVars.fontSize.sm,
});
