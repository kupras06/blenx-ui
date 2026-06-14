import * as stylex from "@stylexjs/stylex";
import { borderRadius, fontSize, fontWeight, spacing, theme } from "@/lib/theme/theme.stylex";

export const selectStyles = stylex.create({
  label: {
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.semibold,
    color: theme.contentSecondary,
    paddingBottom: spacing.xsmall,
    paddingLeft: spacing.xsmall,
    paddingRight: spacing.xsmall,
  },

  trigger: {
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
    color: theme.contentPrimary,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.border,
    borderRadius: borderRadius.medium,
    outline: "none",
    cursor: "pointer",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    ":hover": {
      borderColor: theme.borderStrong,
    },
    ":focus-visible": {
      borderColor: theme.primary,
      boxShadow: `0 0 0 2px ${theme.focusRing}`,
    },
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "[data-placeholder]": {
      color: theme.contentDisabled,
    },
  },

  triggerSm: {
    paddingTop: spacing.xsmall,
    paddingBottom: spacing.xsmall,
    paddingLeft: spacing.small,
    paddingRight: spacing.xsmall,
    fontSize: 14,
  },

  triggerLg: {
    paddingTop: spacing.medium,
    paddingBottom: spacing.medium,
    paddingLeft: spacing.large,
    paddingRight: spacing.medium,
    fontSize: 16,
  },

  icon: {
    display: "flex",
    alignItems: "center",
    color: theme.contentSecondary,
    flexShrink: 0,
  },

  popup: {
    boxSizing: "border-box",
    minWidth: "100%",
    maxHeight: 300,
    paddingTop: spacing.xsmall,
    paddingBottom: spacing.xsmall,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.border,
    borderRadius: borderRadius.large,
    boxShadow: theme.shadowLg,
    zIndex: 1400,
    outline: "none",
    overflowY: "auto",
    ":focus-visible": {
      outline: "none",
    },
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
    marginLeft: spacing.xsmall,
    marginRight: spacing.xsmall,
    borderRadius: borderRadius.small,
    fontSize: fontSize.small,
    lineHeight: "1.4",
    color: theme.contentPrimary,
    cursor: "pointer",
    userSelect: "none",
    ":hover": {
      backgroundColor: theme.backgroundSubtle,
    },
    "[data-highlighted]": {
      backgroundColor: theme.backgroundSubtle,
    },
    "[data-selected]": {
      backgroundColor: theme.primary,
      color: theme.contentOnPrimary,
      ":hover": {
        backgroundColor: theme.primary,
      },
      "[data-highlighted]": {
        backgroundColor: theme.primary,
      },
    },
    "[data-disabled]": {
      color: theme.contentDisabled,
      cursor: "default",
      ":hover": {
        backgroundColor: "transparent",
      },
    },
  },

  itemIndicator: {
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
    width: 14,
  },

  separator: {
    height: 1,
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall,
    backgroundColor: theme.borderSubtle,
  },

  groupLabel: {
    paddingTop: spacing.small,
    paddingBottom: spacing.xsmall,
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.semibold,
    color: theme.contentSecondary,
  },

  scrollArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 24,
    color: theme.contentSecondary,
    cursor: "pointer",
    ":hover": {
      backgroundColor: theme.backgroundSubtle,
    },
  },
});
