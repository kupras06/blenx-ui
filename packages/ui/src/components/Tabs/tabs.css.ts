import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
import {
  borderRadius,
  duration,
  easing,
  fontSize,
  fonts,
  fontWeight,
  spacing,
} from "#theme/tokens.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.medium,
  width: "100%",
  border: "none",
  backgroundColor: "transparent",
  padding: 0,
  borderRadius: 0,
  outline: "none",
});

export const rootVertical = style({
  flexDirection: "row",
  alignItems: "flex-start",
  gap: spacing.large,
});

export const list = style({
  position: "relative",
  display: "flex",
  overflow: "hidden",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  padding: 0,
  borderRadius: 0,
});

export const listDefault = style({
  flexDirection: "row",
  alignItems: "stretch",
  gap: 0,
  padding: 0,
  backgroundColor: "transparent",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.borderSubtle,
  borderRadius: 0,
});

export const listUnderline = style({
  display: "flex",
  alignItems: "stretch",
  gap: spacing.large,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.borderSubtle,
  padding: 0,
});

export const listUnderlineVertical = style({
  flexDirection: "column",
  alignSelf: "auto",
  alignItems: "stretch",
  gap: 0,
  padding: 0,
  paddingRight: spacing.small,
  backgroundColor: "transparent",
  borderRightWidth: 1,
  borderRightStyle: "solid",
  borderRightColor: themeContract.borderSubtle,
  borderRadius: 0,
});

export const listVertical = style({
  flexDirection: "column",
  alignItems: "stretch",
  minWidth: 220,
  borderRightWidth: 1,
  borderRightStyle: "solid",
  borderRightColor: themeContract.borderSubtle,
});

export const tabActiveVertical = style({
  color: themeContract.contentPrimary,
  fontWeight: fontWeight.semibold,
  backgroundColor: themeContract.backgroundSubtle,
  borderRightWidth: 2,
  borderRightStyle: "solid",
  borderRightColor: themeContract.secondary,
});

export const tabUnderlineActive = style({
  color: themeContract.contentPrimary,
  fontWeight: fontWeight.semibold,
  borderBottomWidth: 2,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.contentPrimary,
});

export const listGhost = style({
  display: "flex",
  gap: spacing.small,
});

export const tabGhost = style({
  padding: `${spacing.small} ${spacing.medium}`,
  borderRadius: borderRadius.medium,
  color: themeContract.contentSecondary,
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.backgroundSubtle,
    },
  },
});

export const tabGhostActive = style({
  backgroundColor: themeContract.backgroundSubtle,
  color: themeContract.contentPrimary,
  fontWeight: fontWeight.semibold,
});

export const listSegmented = style({
  display: "flex",
  gap: spacing.xxsmall,
  padding: spacing.xxsmall,
  backgroundColor: themeContract.backgroundSubtle,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.borderSubtle,
  borderRadius: borderRadius.large,
});

export const tabSegmented = style({
  padding: `${spacing.small} ${spacing.medium}`,
  borderRadius: borderRadius.medium,
  color: themeContract.contentSecondary,
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.surface,
    },
  },
});

export const tabSegmentedActive = style({
  backgroundColor: themeContract.surface,
  color: themeContract.contentOnPrimary,
  fontWeight: fontWeight.semibold,
});

export const tab = style({
  position: "relative",
  zIndex: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.xsmall,
  minHeight: 36,
  backgroundColor: "transparent",
  cursor: "pointer",
  appearance: "none",
  outline: "none",
  borderWidth: 0,
  border: "none",
  textDecoration: "none",
  whiteSpace: "nowrap",
  userSelect: "none",
  font: "inherit",
  fontFamily: fonts.display,
  WebkitTapHighlightColor: "transparent",
  transition: `color ${duration.normal} ${easing.standard}, background-color ${duration.normal} ${easing.standard}, box-shadow ${duration.normal} ${easing.standard}`,
});

export const tabDefault = style({
  position: "relative",
  padding: `${spacing.small} ${spacing.medium}`,
  borderRadius: 0,
  color: themeContract.contentSecondary,
  fontSize: fontSize.small,
  fontWeight: fontWeight.medium,
  lineHeight: 1.2,
  minHeight: 40,
  backgroundColor: "transparent",
  selectors: {
    "&:hover": {
      color: themeContract.contentPrimary,
      backgroundColor: themeContract.backgroundSubtle,
    },
    "&:focus-visible": {
      boxShadow: `inset 0 -2px 0 ${themeContract.secondary}`,
    },
  },
});

export const tabVertical = style({
  width: "100%",
  justifyContent: "flex-start",
});

export const tabActive = style({
  color: themeContract.contentPrimary,
  fontWeight: fontWeight.semibold,
});

export const tabDisabled = style({
  opacity: 0.45,
  cursor: "not-allowed",
});

export const tabActiveDefault = style({
  color: themeContract.contentPrimary,
  fontWeight: fontWeight.semibold,
  backgroundColor: "transparent",
  borderBottomWidth: 2,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.secondary,
});

export const tabUnderline = style({
  padding: `${spacing.small} 0`,
  borderRadius: 0,
  color: themeContract.contentSecondary,
  fontSize: fontSize.small,
  fontWeight: fontWeight.medium,
  backgroundColor: "transparent",
  selectors: {
    "&:hover": {
      color: themeContract.contentPrimary,
    },
  },
});

export const indicator = style({
  position: "absolute",
  pointerEvents: "none",
});

export const indicatorDefault = style({
  display: "none",
});

export const indicatorUnderline = style({
  zIndex: 0,
  borderRadius: borderRadius.full,
  backgroundColor: themeContract.secondary,
});

export const panel = style({
  minWidth: 0,
  paddingTop: spacing.large,
  outline: "none",
});

export const panelVertical = style({
  flex: 1,
});
