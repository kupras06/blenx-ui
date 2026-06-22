import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
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
      boxShadow: `0 0 0 2px ${themeContract.borderStrong}`,
    },
  },
});

export const popup = style({
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.borderSubtle,
  borderRadius: borderRadius.large,
  boxShadow: themeContract.shadowXl,
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
  borderRadius: themeContract.borderRadius,
  color: themeContract.contentPrimary,
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
      backgroundColor: themeContract.backgroundSubtle,
      color: themeContract.contentPrimary,
    },
    "&:focus-visible": {
      backgroundColor: themeContract.backgroundSubtle,
      color: themeContract.contentPrimary,
      boxShadow: `0 0 0 2px ${themeContract.borderStrong} inset`,
    },
    "&:active": {
      backgroundColor: themeContract.borderSubtle,
    },
  },
});

export const itemDestructive = style({
  color: themeContract.sentimentNegative,
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.sentimentNegativeSubtle,
      color: themeContract.sentimentNegative,
    },
    "&:focus-visible": {
      backgroundColor: themeContract.sentimentNegativeSubtle,
      color: themeContract.sentimentNegative,
      boxShadow: `0 0 0 2px ${themeContract.sentimentNegative} inset`,
    },
    "&:active": {
      backgroundColor: themeContract.sentimentNegativeSubtle,
    },
  },
});

export const separator = style({
  height: 1,
  backgroundColor: themeContract.borderSubtle,
  border: "none",
});

export const groupLabel = style({
  padding: `${spacing.small} ${spacing.medium} ${spacing.xsmall}`,
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.semibold,
  color: themeContract.contentSecondary,
  textTransform: "uppercase",
  letterSpacing: letterSpacing.wide,
});

export const inset = style({
  paddingLeft: 40,
});

export const shortcut = style({
  marginLeft: "auto",
  color: themeContract.contentDisabled,
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.medium,
});
