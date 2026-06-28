import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, borderWidth, spacing } from "@blenx-dev/theme/tokens";

export const root = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 18,
  height: 18,
  borderRadius: borderRadius.full,
  borderWidth: borderWidth.thin,
  borderStyle: "solid",
  borderColor: themeContract.border,
  backgroundColor: themeContract.background,
  outline: "none",
  transitionProperty: "box-shadow",
  transitionDuration: "150ms",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${themeContract.focusRing}`,
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
  gap: spacing.sm,
});

export const indicator = style({
  display: "none",
  position: "absolute",
  top: -1,
  left: -1,
  right: -1,
  bottom: -1,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: borderRadius.full,
});

export const indicatorChecked = style({
  display: "flex",
  backgroundColor: themeContract.primary,
});

export const dot = style({
  width: 8,
  height: 8,
  borderRadius: borderRadius.full,
  backgroundColor: themeContract.contentOnPrimary,
  "@media": {
    "screen and (min-width: 640px)": {
      width: 6,
      height: 6,
    },
  },
});
