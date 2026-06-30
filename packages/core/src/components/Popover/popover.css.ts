import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  backgroundColor: "rgba(0, 0, 0, 0.32)",
});

export const positioner = style({
  zIndex: 50,
  outline: "none",
});

export const popup = style({
  boxSizing: "border-box",
  minWidth: 160,
  width: "max(var(--anchor-width), 240px)",
  maxWidth: "calc(100vw - 16px)",
  padding: tokenVars.spacing.sm,
  backgroundColor: semanticVars.surface.default,
  borderWidth: tokenVars.borderWidth.thin,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  borderRadius: tokenVars.borderRadius.lg,
  boxShadow: tokenVars.shadow.lg,
  outline: "none",
  transformOrigin: "var(--transform-origin)",
  transitionProperty: "opacity, scale",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease",
  selectors: {
    "&[data-starting-style]": {
      opacity: 0,
      scale: 0.95,
    },
    "&[data-ending-style]": {
      opacity: 0,
      scale: 0.95,
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transitionProperty: "none",
      transitionDuration: "0ms",
    },
  },
});

export const arrow = style({
  position: "absolute",
  width: 10,
  height: 10,
});

export const arrowFill = style({
  width: "100%",
  height: "100%",
  backgroundColor: semanticVars.surface.default,
  borderWidth: tokenVars.borderWidth.thin,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  borderRadius: 2,
  transform: "rotate(45deg)",
});

export const title = style({
  fontSize: tokenVars.fontSize.md,
  fontWeight: tokenVars.fontWeight.semibold,
  color: semanticVars.text.primary,
  margin: 0,
  paddingBottom: tokenVars.spacing.xs,
});

export const description = style({
  fontSize: tokenVars.fontSize.sm,
  color: semanticVars.text.secondary,
  margin: 0,
  paddingBottom: tokenVars.spacing.xs,
});
