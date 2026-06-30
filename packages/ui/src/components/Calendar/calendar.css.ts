import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  display: "inline-block",
  width: "100%",
});

export const months = style({
  display: "flex",
  flexDirection: "column",
});

export const monthCaption = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  paddingBottom: tokenVars.spacing.sm,
  minHeight: 40,
});

export const captionLabel = style({
  fontSize: tokenVars.fontSize.md,
  fontWeight: tokenVars.fontWeight.semibold,
  color: semanticVars.text.primary,
  margin: 0,
  padding: 0,
});

export const nav = style({
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  inset: 0,
  padding: tokenVars.spacing.xs,
  pointerEvents: "none",
  zIndex: 10,
});

export const buttonNav = style({
  pointerEvents: "auto",
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  font: "inherit",
  WebkitTapHighlightColor: "transparent",
  width: 28,
  height: 28,
  borderRadius: tokenVars.borderRadius.default,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: semanticVars.text.secondary,
  cursor: "pointer",
  flexShrink: 0,
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
    },
  },
});

export const monthGrid = style({
  width: "100%",
  borderCollapse: "collapse",
});

export const weekday = style({
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
  color: semanticVars.text.secondary,
  textAlign: "center",
  verticalAlign: "middle",
  padding: tokenVars.spacing.xxs,
  width: 40,
  height: 32,
  boxSizing: "border-box",
});

export const day = style({
  textAlign: "center",
  verticalAlign: "middle",
  padding: 1,
  width: 40,
  height: 40,
  boxSizing: "border-box",
});

export const dayButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  minWidth: 32,
  minHeight: 32,
  maxWidth: 36,
  maxHeight: 36,
  borderRadius: tokenVars.borderRadius.default,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  fontSize: tokenVars.fontSize.sm,
  color: semanticVars.text.primary,
  outline: "none",
  margin: "0 auto",
  padding: 0,
  fontFamily: "inherit",
  lineHeight: 1,
  transitionProperty: "background-color, color",
  transitionDuration: "100ms",
  transitionTimingFunction: "ease",
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
    },
  },
});

export const dayButtonSelected = style({
  backgroundColor: semanticVars.interactive.primary,
  color: semanticVars.interactive.primaryFg,
  fontWeight: tokenVars.fontWeight.semibold,
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.interactive.primary,
    },
  },
});

export const dayButtonToday = style({
  fontWeight: tokenVars.fontWeight.semibold,
});

export const dayButtonDisabled = style({
  color: semanticVars.text.disabled,
  cursor: "not-allowed",
  opacity: 0.5,
  selectors: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

export const dayButtonOutside = style({
  color: semanticVars.text.disabled,
  opacity: 0.5,
});

export const footer = style({
  paddingTop: tokenVars.spacing.sm,
});

export const dropdowns = style({
  display: "flex",
  gap: tokenVars.spacing.xs,
  alignItems: "center",
});

export const dropdown = style({
  appearance: "none",
  backgroundColor: semanticVars.background.subtle,
  border: `1px solid ${semanticVars.border.default}`,
  borderRadius: tokenVars.borderRadius.default,
  color: semanticVars.text.primary,
  fontSize: tokenVars.fontSize.sm,
  padding: `${tokenVars.spacing.xxs} ${tokenVars.spacing.sm}`,
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": {
      borderColor: semanticVars.border.strong,
      boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
    },
  },
});
