import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 18,
  height: 18,
  borderRadius: tokenVars.borderRadius.sm,
  borderWidth: tokenVars.borderWidth.thin,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  backgroundColor: semanticVars.background.default,
  outline: "none",
  transitionProperty: "box-shadow",
  transitionDuration: "150ms",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
    },
  },
  "@media": {
    "screen and (min-width: 640px)": {
      width: 16,
      height: 16,
    },
  },
});

export const rootDisabled = style({
  cursor: "not-allowed",
  opacity: 0.64,
});

export const group = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: tokenVars.spacing.sm,
});

export const indicator = style({
  position: "absolute",
  top: -1,
  left: -1,
  right: -1,
  bottom: -1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: tokenVars.borderRadius.sm,
  color: semanticVars.interactive.primaryFg,
});

export const indicatorChecked = style({
  backgroundColor: semanticVars.interactive.primary,
  color: semanticVars.interactive.primaryFg,
});

export const indicatorIndeterminate = style({
  color: semanticVars.text.primary,
});

export const icon = style({
  width: 14,
  height: 14,
  "@media": {
    "screen and (min-width: 640px)": {
      width: 12,
      height: 12,
    },
  },
});
