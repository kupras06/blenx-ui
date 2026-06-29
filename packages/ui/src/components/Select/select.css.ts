import { style } from "@vanilla-extract/css";
import { themeContract, tokenVars } from "@blenx-dev/theme/contract";

export const label = style({
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.semibold,
  color: themeContract.contentSecondary,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.xs,
  paddingRight: tokenVars.spacing.xs,
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: tokenVars.spacing.sm,
  boxSizing: "border-box",
  width: "100%",
  paddingTop: tokenVars.spacing.sm,
  paddingBottom: tokenVars.spacing.sm,
  paddingLeft: tokenVars.spacing.md,
  paddingRight: tokenVars.spacing.sm,
  fontSize: tokenVars.fontSize.sm,
  lineHeight: "1.5",
  fontFamily: "inherit",
  color: themeContract.contentPrimary,
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: tokenVars.borderRadius.md,
  outline: "none",
  cursor: "pointer",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  selectors: {
    "&:hover": {
      borderColor: themeContract.borderStrong,
    },
    "&:focus-visible": {
      borderColor: themeContract.primary,
      boxShadow: `0 0 0 2px ${themeContract.focusRing}`,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "&[data-placeholder]": {
      color: themeContract.contentDisabled,
    },
  },
});

export const triggerSm = style({
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.xs,
  fontSize: 14,
});

export const triggerLg = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.md,
  paddingLeft: tokenVars.spacing.lg,
  paddingRight: tokenVars.spacing.md,
  fontSize: 16,
});

export const icon = style({
  display: "flex",
  alignItems: "center",
  color: themeContract.contentSecondary,
  flexShrink: 0,
});

export const popup = style({
  boxSizing: "border-box",
  maxHeight: 300,
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: tokenVars.borderRadius.lg,
  boxShadow: themeContract.shadowLg,
  zIndex: 1400,
  minWidth: "var(--anchor-width)",
  maxWidth: "var(--available-width)",
  outline: "none",
  overflowY: "auto",
  selectors: {
    "&:focus-visible": {
      outline: "none",
    },
  },
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
  marginLeft: tokenVars.spacing.xs,
  marginRight: tokenVars.spacing.xs,
  borderRadius: tokenVars.borderRadius.sm,
  fontSize: tokenVars.fontSize.sm,
  lineHeight: "1.4",
  color: themeContract.contentPrimary,
  cursor: "pointer",
  userSelect: "none",
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.backgroundSubtle,
    },
    "&[data-highlighted]": {
      backgroundColor: themeContract.backgroundSubtle,
    },
    "&[data-selected]": {
      backgroundColor: themeContract.primary,
      color: themeContract.contentOnPrimary,
    },
    "&[data-selected]:hover": {
      backgroundColor: themeContract.primary,
    },
    "&[data-selected][data-highlighted]": {
      backgroundColor: themeContract.primary,
    },
    "&[data-disabled]": {
      color: themeContract.contentDisabled,
      cursor: "default",
    },
    "&[data-disabled]:hover": {
      backgroundColor: "transparent",
    },
  },
});

export const itemIndicator = style({
  display: "inline-flex",
  alignItems: "center",
  flexShrink: 0,
  width: 14,
});

export const separator = style({
  height: 1,
  marginTop: tokenVars.spacing.xs,
  marginBottom: tokenVars.spacing.xs,
  backgroundColor: themeContract.borderSubtle,
});

export const groupLabel = style({
  paddingTop: tokenVars.spacing.sm,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.semibold,
  color: themeContract.contentSecondary,
});

export const scrollArrow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 24,
  color: themeContract.contentSecondary,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.backgroundSubtle,
    },
  },
});
