import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
import { borderRadius, fontSize, fontWeight, spacing } from "#theme/tokens.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxHeight: "100%",
  overflow: "hidden",
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: borderRadius.large,
  boxShadow: themeContract.shadowLg,
  boxSizing: "border-box",
  outline: "none",
});

export const inputWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.small,
  paddingLeft: spacing.small,
  paddingRight: spacing.small,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.borderSubtle,
  boxSizing: "border-box",
});

export const inputIcon = style({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  color: themeContract.contentDisabled,
});

export const input = style({
  width: "100%",
  height: 44,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontSize: fontSize.small,
  fontFamily: "inherit",
  color: themeContract.contentPrimary,
  selectors: {
    "&::placeholder": {
      color: themeContract.contentDisabled,
    },
  },
});

export const list = style({
  overflow: "auto",
  maxHeight: 300,
  padding: spacing.xsmall,
});

export const group = style({
  display: "flex",
  flexDirection: "column",
});

export const groupHeading = style({
  paddingTop: spacing.small,
  paddingBottom: spacing.xsmall,
  paddingLeft: spacing.small,
  paddingRight: spacing.small,
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.semibold,
  color: themeContract.contentSecondary,
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
  borderRadius: borderRadius.small,
  fontSize: fontSize.small,
  lineHeight: "1.4",
  color: themeContract.contentPrimary,
  cursor: "pointer",
  userSelect: "none",
  outline: "none",
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.backgroundSubtle,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${themeContract.focusRing}`,
    },
  },
});

export const itemActive = style({
  backgroundColor: themeContract.backgroundSubtle,
});

export const itemDisabled = style({
  color: themeContract.contentDisabled,
  cursor: "default",
  selectors: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

export const separator = style({
  height: 1,
  marginTop: spacing.xsmall,
  marginBottom: spacing.xsmall,
  backgroundColor: themeContract.borderSubtle,
});

export const empty = style({
  paddingTop: spacing.large,
  paddingBottom: spacing.large,
  textAlign: "center",
  fontSize: fontSize.small,
  color: themeContract.contentSecondary,
});
