import { style } from "@vanilla-extract/css";
import { themeContract, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  width: tokenVars.spacing.xxl,
  height: tokenVars.spacing.lg,
  display: "inline-flex",
  alignItems: "center",
  padding: tokenVars.spacing.xxs,
  borderRadius: tokenVars.borderRadius.full,
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
  width: tokenVars.spacing.lg,
  height: tokenVars.spacing.lg,
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: themeContract.primary,
  transitionProperty: "transform, background-color",
  transitionDuration: "150ms",
  transform: "translateX(0)",
});

export const thumbChecked = style({
  backgroundColor: themeContract.surface,
  transform: `translateX(${tokenVars.spacing.lg})`,
});
