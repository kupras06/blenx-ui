import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  width: tokenVars.spacing.xxl,
  height: tokenVars.spacing.lg,
  display: "inline-flex",
  alignItems: "center",
  padding: tokenVars.spacing.xxs,
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: semanticVars.border.default,
  cursor: "pointer",
  transitionProperty: "background-color",
  transitionDuration: "150ms",
  selectors: {
    "&:focus-visible": {
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineColor: semanticVars.border.strong,
    },
  },
});

export const rootChecked = style({
  backgroundColor: semanticVars.interactive.primary.default,
});

export const rootDisabled = style({
  cursor: "not-allowed",
  opacity: 0.35,
});

export const thumb = style({
  width: tokenVars.spacing.lg,
  height: tokenVars.spacing.lg,
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: semanticVars.interactive.primary.default,
  transitionProperty: "transform, background-color",
  transitionDuration: "150ms",
  transform: "translateX(0)",
});

export const thumbChecked = style({
  backgroundColor: semanticVars.surface.default,
  transform: `translateX(${tokenVars.spacing.lg})`,
});
