import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
import { borderRadius, spacing } from "#theme/tokens.css";

export const root = style({
  width: spacing.xxlarge,
  height: spacing.large,
  display: "inline-flex",
  alignItems: "center",
  padding: spacing.xxsmall,
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
  width: spacing.large,
  height: spacing.large,
  borderRadius: borderRadius.full,
  backgroundColor: themeContract.primary,
  transitionProperty: "transform, background-color",
  transitionDuration: "150ms",
  transform: "translateX(0)",
});

export const thumbChecked = style({
  backgroundColor: themeContract.surface,
  transform: `translateX(${spacing.large})`,
});
