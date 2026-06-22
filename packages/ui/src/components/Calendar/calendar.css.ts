import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
import { fontSize, fontWeight, spacing } from "#theme/tokens.css";

export const root = style({
  display: "inline-block",
  width: "100%",
});

export const months = style({
  display: "flex",
  flexDirection: "column",
});

export const monthCaption = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  paddingBottom: spacing.small,
  minHeight: 40,
});

export const captionLabel = style({
  fontSize: fontSize.medium,
  fontWeight: fontWeight.semibold,
  color: themeContract.contentPrimary,
  margin: 0,
  padding: 0,
});

export const nav = style({
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  inset: 0,
  padding: spacing.xsmall,
  pointerEvents: "none",
  zIndex: 10,
});

export const buttonNav = style({
  pointerEvents: "auto",
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  font: "inherit",
  WebkitTapHighlightColor: "transparent",
  width: 28,
  height: 28,
  borderRadius: themeContract.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: themeContract.contentSecondary,
  cursor: "pointer",
  flexShrink: 0,
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.backgroundSubtle,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${themeContract.focusRing}`,
    },
  },
});

export const monthGrid = style({
  width: "100%",
  borderCollapse: "collapse",
});

export const weekday = style({
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.medium,
  color: themeContract.contentSecondary,
  textAlign: "center",
  verticalAlign: "middle",
  padding: spacing.xxsmall,
  width: 40,
  height: 32,
  boxSizing: "border-box",
});

export const day = style({
  textAlign: "center",
  verticalAlign: "middle",
  padding: 1,
  width: 40,
  height: 40,
  boxSizing: "border-box",
});

export const dayButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  minWidth: 32,
  minHeight: 32,
  maxWidth: 36,
  maxHeight: 36,
  borderRadius: themeContract.borderRadius,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  fontSize: fontSize.small,
  color: themeContract.contentPrimary,
  outline: "none",
  margin: "0 auto",
  padding: 0,
  fontFamily: "inherit",
  lineHeight: 1,
  transitionProperty: "background-color, color",
  transitionDuration: "100ms",
  transitionTimingFunction: "ease",
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.backgroundSubtle,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${themeContract.focusRing}`,
    },
  },
});

export const dayButtonSelected = style({
  backgroundColor: themeContract.primary,
  color: themeContract.contentOnPrimary,
  fontWeight: fontWeight.semibold,
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.primary,
    },
  },
});

export const dayButtonToday = style({
  fontWeight: fontWeight.semibold,
});

export const dayButtonDisabled = style({
  color: themeContract.contentDisabled,
  cursor: "not-allowed",
  opacity: 0.5,
  selectors: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

export const dayButtonOutside = style({
  color: themeContract.contentDisabled,
  opacity: 0.5,
});

export const footer = style({
  paddingTop: spacing.small,
});

export const dropdowns = style({
  display: "flex",
  gap: spacing.xsmall,
  alignItems: "center",
});

export const dropdown = style({
  appearance: "none",
  backgroundColor: themeContract.backgroundSubtle,
  border: `1px solid ${themeContract.border}`,
  borderRadius: themeContract.borderRadius,
  color: themeContract.contentPrimary,
  fontSize: fontSize.small,
  padding: `${spacing.xxsmall} ${spacing.small}`,
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": {
      borderColor: themeContract.borderStrong,
      boxShadow: `0 0 0 2px ${themeContract.borderStrong}`,
    },
  },
});
