import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxHeight: "100%",
  overflow: "hidden",
  backgroundColor: semanticVars.surface.default,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  borderRadius: tokenVars.borderRadius.lg,
  boxShadow: tokenVars.shadow.lg,
  boxSizing: "border-box",
  outline: "none",
});

export const inputWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.subtle,
  boxSizing: "border-box",
});

export const inputIcon = style({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  color: semanticVars.text.disabled,
});

export const input = style({
  width: "100%",
  height: 44,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontSize: tokenVars.fontSize.sm,
  fontFamily: "inherit",
  color: semanticVars.text.primary,
  selectors: {
    "&::placeholder": {
      color: semanticVars.text.disabled,
    },
  },
});

export const list = style({
  overflow: "auto",
  maxHeight: 300,
  padding: tokenVars.spacing.xs,
});

export const group = style({
  display: "flex",
  flexDirection: "column",
});

export const groupHeading = style({
  paddingTop: tokenVars.spacing.sm,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.semibold,
  color: semanticVars.text.secondary,
});

export const item = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  boxSizing: "border-box",
  minHeight: 32,
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  borderRadius: tokenVars.borderRadius.sm,
  fontSize: tokenVars.fontSize.sm,
  lineHeight: "1.4",
  color: semanticVars.text.primary,
  cursor: "pointer",
  userSelect: "none",
  outline: "none",
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
    },
  },
});

export const itemActive = style({
  backgroundColor: semanticVars.background.subtle,
});

export const itemDisabled = style({
  color: semanticVars.text.disabled,
  cursor: "default",
  selectors: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

export const separator = style({
  height: 1,
  marginTop: tokenVars.spacing.xs,
  marginBottom: tokenVars.spacing.xs,
  backgroundColor: semanticVars.border.subtle,
});

export const empty = style({
  paddingTop: tokenVars.spacing.lg,
  paddingBottom: tokenVars.spacing.lg,
  textAlign: "center",
  fontSize: tokenVars.fontSize.sm,
  color: semanticVars.text.secondary,
});
