import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { borderRadius, fontSize, fontWeight, spacing } from "#theme/tokens.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxHeight: "100%",
  overflow: "hidden",
  backgroundColor: theme.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.border,
  borderRadius: borderRadius.large,
  boxShadow: theme.shadowLg,
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
  borderBottomColor: theme.borderSubtle,
  boxSizing: "border-box",
});

export const inputIcon = style({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  color: theme.contentDisabled,
});

export const input = style({
  width: "100%",
  height: 44,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontSize: fontSize.small,
  fontFamily: "inherit",
  color: theme.contentPrimary,
  selectors: {
    "&::placeholder": {
      color: theme.contentDisabled,
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
  color: theme.contentSecondary,
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
  color: theme.contentPrimary,
  cursor: "pointer",
  userSelect: "none",
  outline: "none",
  selectors: {
    "&:hover": {
      backgroundColor: theme.backgroundSubtle,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${theme.focusRing}`,
    },
  },
});

export const itemActive = style({
  backgroundColor: theme.backgroundSubtle,
});

export const itemDisabled = style({
  color: theme.contentDisabled,
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
  backgroundColor: theme.borderSubtle,
});

export const empty = style({
  paddingTop: spacing.large,
  paddingBottom: spacing.large,
  textAlign: "center",
  fontSize: fontSize.small,
  color: theme.contentSecondary,
});
