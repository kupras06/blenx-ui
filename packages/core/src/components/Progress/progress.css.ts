import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: tokenVars.spacing["2"],
});

export const track = style({
  display: "block",
  height: 6,
  width: "100%",
  overflow: "hidden",
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: semanticVars.surface.default,
});

export const indicator = style({
  height: "100%",
  backgroundColor: semanticVars.interactive.primary.default,
  borderRadius: tokenVars.borderRadius.full,
  transitionProperty: "width, background-color",
  transitionDuration: tokenVars.duration.slow,
  transitionTimingFunction: "ease",
});

export const progressLabel = style({
  fontSize: tokenVars.fontSize.md,
  fontWeight: tokenVars.fontWeight.medium,
});

export const value = style({
  fontSize: tokenVars.fontSize.sm,
  fontVariantNumeric: "tabular-nums",
});
