import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, duration, fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

export const root = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: spacing["2"],
});

export const track = style({
  display: "block",
  height: 6,
  width: "100%",
  overflow: "hidden",
  borderRadius: borderRadius.full,
  backgroundColor: themeContract.surface,
});

export const indicator = style({
  height: "100%",
  backgroundColor: themeContract.primary,
  borderRadius: borderRadius.full,
  transitionProperty: "width, background-color",
  transitionDuration: duration.slow,
  transitionTimingFunction: "ease",
});

export const progressLabel = style({
  fontSize: fontSize.md,
  fontWeight: fontWeight.medium,
});

export const value = style({
  fontSize: fontSize.sm,
  fontVariantNumeric: "tabular-nums",
});
