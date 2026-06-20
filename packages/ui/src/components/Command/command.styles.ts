import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { borderRadius, fontSize, fontWeight, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const commandStyles = stylex.create({
  root: {
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
  },

  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.borderSubtle,
    boxSizing: "border-box",
  },

  inputIcon: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    color: theme.contentDisabled,
  },

  input: {
    width: "100%",
    height: 44,
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: fontSize.small,
    fontFamily: "inherit",
    color: theme.contentPrimary,
    "::placeholder": {
      color: theme.contentDisabled,
    },
  },

  list: {
    overflow: "auto",
    maxHeight: 300,
    padding: spacing.xsmall,
  },

  group: {
    display: "flex",
    flexDirection: "column",
  },

  groupHeading: {
    paddingTop: spacing.small,
    paddingBottom: spacing.xsmall,
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.semibold,
    color: theme.contentSecondary,
  },

  item: {
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
    backgroundColor: {
      default: "transparent",
      ":hover": theme.backgroundSubtle,
    },
    ":focus-visible": {
      boxShadow: `0 0 0 2px ${theme.focusRing}`,
    },
  },

  itemActive: {
    backgroundColor: theme.backgroundSubtle,
  },

  itemDisabled: {
    color: theme.contentDisabled,
    cursor: "default",
    backgroundColor: {
      default: "transparent",
      ":hover": "transparent",
    },
  },

  separator: {
    height: 1,
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall,
    backgroundColor: theme.borderSubtle,
  },

  empty: {
    paddingTop: spacing.large,
    paddingBottom: spacing.large,
    textAlign: "center",
    fontSize: fontSize.small,
    color: theme.contentSecondary,
  },
});
