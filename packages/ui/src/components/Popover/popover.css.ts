import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { borderRadius, borderWidth, fontSize, fontWeight, spacing } from "#theme/tokens.css";

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
  padding: spacing.small,
  backgroundColor: theme.surface,
  borderWidth: borderWidth.thin,
  borderStyle: "solid",
  borderColor: theme.border,
  borderRadius: borderRadius.large,
  boxShadow: theme.shadowLg,
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
  backgroundColor: theme.surface,
  borderWidth: borderWidth.thin,
  borderStyle: "solid",
  borderColor: theme.border,
  borderRadius: 2,
  transform: "rotate(45deg)",
});

export const title = style({
  fontSize: fontSize.medium,
  fontWeight: fontWeight.semibold,
  color: theme.contentPrimary,
  margin: 0,
  paddingBottom: spacing.xsmall,
});

export const description = style({
  fontSize: fontSize.small,
  color: theme.contentSecondary,
  margin: 0,
  paddingBottom: spacing.xsmall,
});
