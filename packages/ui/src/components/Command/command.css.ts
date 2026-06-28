import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

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
  borderRadius: borderRadius.lg,
  boxShadow: themeContract.shadowLg,
  boxSizing: "border-box",
  outline: "none",
});

export const inputWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
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
  fontSize: fontSize.sm,
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
  padding: spacing.xs,
});

export const group = style({
  display: "flex",
  flexDirection: "column",
});

export const groupHeading = style({
  paddingTop: spacing.sm,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semibold,
  color: themeContract.contentSecondary,
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
  borderRadius: borderRadius.sm,
  fontSize: fontSize.sm,
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
  marginTop: spacing.xs,
  marginBottom: spacing.xs,
  backgroundColor: themeContract.borderSubtle,
});

export const empty = style({
  paddingTop: spacing.lg,
  paddingBottom: spacing.lg,
  textAlign: "center",
  fontSize: fontSize.sm,
  color: themeContract.contentSecondary,
});
