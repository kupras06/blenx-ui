import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, spacing } from "@blenx-dev/theme/tokens";

export const root = style({
  width: spacing.xxl,
  height: spacing.lg,
  display: "inline-flex",
  alignItems: "center",
  padding: spacing.xxs,
  borderRadius: borderRadius.full,
  backgroundColor: themeContract.border,
  cursor: "pointer",
  transitionProperty: "background-color",
  transitionDuration: "150ms",
  selectors: {
    "&:focus-visible": {
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineColor: themeContract.borderStrong,
    },
  },
});

export const rootChecked = style({
  backgroundColor: themeContract.primary,
});

export const rootDisabled = style({
  cursor: "not-allowed",
  opacity: 0.35,
});

export const thumb = style({
  width: spacing.lg,
  height: spacing.lg,
  borderRadius: borderRadius.full,
  backgroundColor: themeContract.primary,
  transitionProperty: "transform, background-color",
  transitionDuration: "150ms",
  transform: "translateX(0)",
});

export const thumbChecked = style({
  backgroundColor: themeContract.surface,
  transform: `translateX(${spacing.lg})`,
});
