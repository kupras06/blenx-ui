import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const trigger = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  appearance: "none",
  border: "none",
  padding: 0,
  outline: "none",
  borderWidth: 0,
  fontFamily: "inherit",
  fontSize: "inherit",
  color: "inherit",
  borderRadius: tokenVars.borderRadius.md,
  transition: "background-color 0.15s ease, box-shadow 0.15s ease",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
    },
  },
});

export const popup = style({
  backgroundColor: semanticVars.surface.default,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: semanticVars.border.subtle,
  borderRadius: tokenVars.borderRadius.lg,
  boxShadow: semanticVars.shadow.xl,
  zIndex: 1000,
  padding: tokenVars.spacing.xs,
  display: "flex",
  gap: tokenVars.spacing["1"],
  flexDirection: "column",
  minWidth: 224,
  overflow: "hidden",
  outline: "none",
});

export const item = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  minHeight: 24,
  padding: `${tokenVars.spacing.xs} ${tokenVars.spacing.sm}`,
  borderRadius: tokenVars.borderRadius.default,
  color: semanticVars.text.primary,
  fontSize: tokenVars.fontSize.sm,
  fontWeight: tokenVars.fontWeight.medium,
  lineHeight: 1.2,
  textDecoration: "none",
  textAlign: "left",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  appearance: "none",
  outline: "none",
  transition: "background-color 0.15s ease, color 0.15s ease",
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
      color: semanticVars.text.primary,
    },
    "&:focus-visible": {
      backgroundColor: semanticVars.background.subtle,
      color: semanticVars.text.primary,
      boxShadow: `0 0 0 2px ${semanticVars.border.strong} inset`,
    },
    "&:active": {
      backgroundColor: semanticVars.border.subtle,
    },
  },
});

export const itemDestructive = style({
  color: semanticVars.status.danger,
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.status.dangerBg,
      color: semanticVars.status.danger,
    },
    "&:focus-visible": {
      backgroundColor: semanticVars.status.dangerBg,
      color: semanticVars.status.danger,
      boxShadow: `0 0 0 2px ${semanticVars.status.danger} inset`,
    },
    "&:active": {
      backgroundColor: semanticVars.status.dangerBg,
    },
  },
});

export const separator = style({
  height: 1,
  backgroundColor: semanticVars.border.subtle,
  border: "none",
});

export const groupLabel = style({
  padding: `${tokenVars.spacing.sm} ${tokenVars.spacing.md} ${tokenVars.spacing.xs}`,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.semibold,
  color: semanticVars.text.secondary,
  textTransform: "uppercase",
  letterSpacing: tokenVars.letterSpacing.wide,
});

export const inset = style({
  paddingLeft: 40,
});

export const shortcut = style({
  marginLeft: "auto",
  color: semanticVars.text.disabled,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
});
