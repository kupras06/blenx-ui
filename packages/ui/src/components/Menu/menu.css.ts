import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { borderRadius, fontSize, fontWeight, letterSpacing, spacing } from "#theme/tokens.css";

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
  borderRadius: borderRadius.medium,
  transition: "background-color 0.15s ease, box-shadow 0.15s ease",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${theme.borderStrong}`,
    },
  },
});

export const popup = style({
  backgroundColor: theme.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.borderSubtle,
  borderRadius: borderRadius.large,
  boxShadow: theme.shadowXl,
  zIndex: 1000,
  padding: spacing.xsmall,
  display: "flex",
  gap: spacing["1"],
  flexDirection: "column",
  minWidth: 224,
  overflow: "hidden",
  outline: "none",
});

export const item = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.small,
  minHeight: 24,
  padding: `${spacing.xsmall} ${spacing.small}`,
  borderRadius: theme.borderRadius,
  color: theme.contentPrimary,
  fontSize: fontSize.small,
  fontWeight: fontWeight.medium,
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
      backgroundColor: theme.backgroundSubtle,
      color: theme.contentPrimary,
    },
    "&:focus-visible": {
      backgroundColor: theme.backgroundSubtle,
      color: theme.contentPrimary,
      boxShadow: `0 0 0 2px ${theme.borderStrong} inset`,
    },
    "&:active": {
      backgroundColor: theme.borderSubtle,
    },
  },
});

export const itemDestructive = style({
  color: theme.sentimentNegative,
  selectors: {
    "&:hover": {
      backgroundColor: theme.sentimentNegativeSubtle,
      color: theme.sentimentNegative,
    },
    "&:focus-visible": {
      backgroundColor: theme.sentimentNegativeSubtle,
      color: theme.sentimentNegative,
      boxShadow: `0 0 0 2px ${theme.sentimentNegative} inset`,
    },
    "&:active": {
      backgroundColor: theme.sentimentNegativeSubtle,
    },
  },
});

export const separator = style({
  height: 1,
  backgroundColor: theme.borderSubtle,
  border: "none",
});

export const groupLabel = style({
  padding: `${spacing.small} ${spacing.medium} ${spacing.xsmall}`,
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.semibold,
  color: theme.contentSecondary,
  textTransform: "uppercase",
  letterSpacing: letterSpacing.wide,
});

export const inset = style({
  paddingLeft: 40,
});

export const shortcut = style({
  marginLeft: "auto",
  color: theme.contentDisabled,
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.medium,
});
