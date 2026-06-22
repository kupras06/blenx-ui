import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
import { borderRadius, fontSize, fontWeight, spacing } from "#theme/tokens.css";

export const label = style({
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.semibold,
  color: themeContract.contentSecondary,
  paddingBottom: spacing.xsmall,
  paddingLeft: spacing.xsmall,
  paddingRight: spacing.xsmall,
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing.small,
  boxSizing: "border-box",
  width: "100%",
  paddingTop: spacing.small,
  paddingBottom: spacing.small,
  paddingLeft: spacing.medium,
  paddingRight: spacing.small,
  fontSize: fontSize.small,
  lineHeight: "1.5",
  fontFamily: "inherit",
  color: themeContract.contentPrimary,
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: borderRadius.medium,
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
  paddingTop: spacing.xsmall,
  paddingBottom: spacing.xsmall,
  paddingLeft: spacing.small,
  paddingRight: spacing.xsmall,
  fontSize: 14,
});

export const triggerLg = style({
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
  paddingLeft: spacing.large,
  paddingRight: spacing.medium,
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
  paddingTop: spacing.xsmall,
  paddingBottom: spacing.xsmall,
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: borderRadius.large,
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
  gap: spacing.small,
  boxSizing: "border-box",
  minHeight: 32,
  paddingTop: spacing.xsmall,
  paddingBottom: spacing.xsmall,
  paddingLeft: spacing.small,
  paddingRight: spacing.small,
  marginLeft: spacing.xsmall,
  marginRight: spacing.xsmall,
  borderRadius: borderRadius.small,
  fontSize: fontSize.small,
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
  marginTop: spacing.xsmall,
  marginBottom: spacing.xsmall,
  backgroundColor: themeContract.borderSubtle,
});

export const groupLabel = style({
  paddingTop: spacing.small,
  paddingBottom: spacing.xsmall,
  paddingLeft: spacing.small,
  paddingRight: spacing.small,
  fontSize: fontSize.xsmall,
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
