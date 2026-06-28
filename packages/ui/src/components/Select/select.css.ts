import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

export const label = style({
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semibold,
  color: themeContract.contentSecondary,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.xs,
  paddingRight: spacing.xs,
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing.sm,
  boxSizing: "border-box",
  width: "100%",
  paddingTop: spacing.sm,
  paddingBottom: spacing.sm,
  paddingLeft: spacing.md,
  paddingRight: spacing.sm,
  fontSize: fontSize.sm,
  lineHeight: "1.5",
  fontFamily: "inherit",
  color: themeContract.contentPrimary,
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: borderRadius.md,
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
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.xs,
  fontSize: 14,
});

export const triggerLg = style({
  paddingTop: spacing.md,
  paddingBottom: spacing.md,
  paddingLeft: spacing.lg,
  paddingRight: spacing.md,
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
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: borderRadius.lg,
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
  gap: spacing.sm,
  boxSizing: "border-box",
  minHeight: 32,
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
  marginLeft: spacing.xs,
  marginRight: spacing.xs,
  borderRadius: borderRadius.sm,
  fontSize: fontSize.sm,
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
  marginTop: spacing.xs,
  marginBottom: spacing.xs,
  backgroundColor: themeContract.borderSubtle,
});

export const groupLabel = style({
  paddingTop: spacing.sm,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semibold,
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
