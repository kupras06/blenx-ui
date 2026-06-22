import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { borderRadius, spacing } from "#theme/tokens.css";

export const root = style({
  width: spacing.xxlarge,
  height: spacing.large,
  display: "inline-flex",
  alignItems: "center",
  padding: spacing.xxsmall,
  borderRadius: borderRadius.full,
  backgroundColor: theme.border,
  cursor: "pointer",
  transitionProperty: "background-color",
  transitionDuration: "150ms",
  selectors: {
    "&:focus-visible": {
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineColor: theme.borderStrong,
    },
  },
});

export const rootChecked = style({
  backgroundColor: theme.primary,
});

export const rootDisabled = style({
  cursor: "not-allowed",
  opacity: 0.35,
});

export const thumb = style({
  width: spacing.large,
  height: spacing.large,
  borderRadius: borderRadius.full,
  backgroundColor: theme.primary,
  transitionProperty: "transform, background-color",
  transitionDuration: "150ms",
  transform: "translateX(0)",
});

export const thumbChecked = style({
  backgroundColor: theme.surface,
  transform: `translateX(${spacing.large})`,
});
