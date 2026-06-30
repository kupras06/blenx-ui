import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: tokenVars.spacing.md,
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
  gap: tokenVars.spacing.lg,
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
  borderBottomColor: semanticVars.border.subtle,
  borderRadius: 0,
});

export const listUnderline = style({
  display: "flex",
  alignItems: "stretch",
  gap: tokenVars.spacing.lg,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.subtle,
  padding: 0,
});

export const listUnderlineVertical = style({
  flexDirection: "column",
  alignSelf: "auto",
  alignItems: "stretch",
  gap: 0,
  padding: 0,
  paddingRight: tokenVars.spacing.sm,
  backgroundColor: "transparent",
  borderRightWidth: 1,
  borderRightStyle: "solid",
  borderRightColor: semanticVars.border.subtle,
  borderRadius: 0,
});

export const listVertical = style({
  flexDirection: "column",
  alignItems: "stretch",
  minWidth: 220,
  borderRightWidth: 1,
  borderRightStyle: "solid",
  borderRightColor: semanticVars.border.subtle,
});

export const tabActiveVertical = style({
  color: semanticVars.text.primary,
  fontWeight: tokenVars.fontWeight.semibold,
  backgroundColor: semanticVars.background.subtle,
  borderRightWidth: 2,
  borderRightStyle: "solid",
  borderRightColor: semanticVars.interactive.secondary,
});

export const tabUnderlineActive = style({
  color: semanticVars.text.primary,
  fontWeight: tokenVars.fontWeight.semibold,
  borderBottomWidth: 2,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.text.primary,
});

export const listGhost = style({
  display: "flex",
  gap: tokenVars.spacing.sm,
});

export const tabGhost = style({
  padding: `${tokenVars.spacing.sm} ${tokenVars.spacing.md}`,
  borderRadius: tokenVars.borderRadius.md,
  color: semanticVars.text.secondary,
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
  },
});

export const tabGhostActive = style({
  backgroundColor: semanticVars.background.subtle,
  color: semanticVars.text.primary,
  fontWeight: tokenVars.fontWeight.semibold,
});

export const listSegmented = style({
  display: "flex",
  gap: tokenVars.spacing.xxs,
  padding: tokenVars.spacing.xxs,
  backgroundColor: semanticVars.background.subtle,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: semanticVars.border.subtle,
  borderRadius: tokenVars.borderRadius.lg,
});

export const tabSegmented = style({
  padding: `${tokenVars.spacing.sm} ${tokenVars.spacing.md}`,
  borderRadius: tokenVars.borderRadius.md,
  color: semanticVars.text.secondary,
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.surface.default,
    },
  },
});

export const tabSegmentedActive = style({
  backgroundColor: semanticVars.surface.default,
  color: semanticVars.interactive.primaryFg,
  fontWeight: tokenVars.fontWeight.semibold,
});

export const tab = style({
  position: "relative",
  zIndex: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: tokenVars.spacing.xs,
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
  fontFamily: tokenVars.font.body,
  WebkitTapHighlightColor: "transparent",
  transition: `color ${tokenVars.duration.normal} ${tokenVars.easing.standard}, background-color ${tokenVars.duration.normal} ${tokenVars.easing.standard}, box-shadow ${tokenVars.duration.normal} ${tokenVars.easing.standard}`,
});

export const tabDefault = style({
  position: "relative",
  padding: `${tokenVars.spacing.sm} ${tokenVars.spacing.md}`,
  borderRadius: 0,
  color: semanticVars.text.secondary,
  fontSize: tokenVars.fontSize.sm,
  fontWeight: tokenVars.fontWeight.medium,
  lineHeight: 1.2,
  minHeight: 40,
  backgroundColor: "transparent",
  selectors: {
    "&:hover": {
      color: semanticVars.text.primary,
      backgroundColor: semanticVars.background.subtle,
    },
    "&:focus-visible": {
      boxShadow: `inset 0 -2px 0 ${semanticVars.interactive.secondary}`,
    },
  },
});

export const tabVertical = style({
  width: "100%",
  justifyContent: "flex-start",
});

export const tabActive = style({
  color: semanticVars.text.primary,
  fontWeight: tokenVars.fontWeight.semibold,
});

export const tabDisabled = style({
  opacity: 0.45,
  cursor: "not-allowed",
});

export const tabActiveDefault = style({
  color: semanticVars.text.primary,
  fontWeight: tokenVars.fontWeight.semibold,
  backgroundColor: "transparent",
  borderBottomWidth: 2,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.interactive.secondary,
});

export const tabUnderline = style({
  padding: `${tokenVars.spacing.sm} 0`,
  borderRadius: 0,
  color: semanticVars.text.secondary,
  fontSize: tokenVars.fontSize.sm,
  fontWeight: tokenVars.fontWeight.medium,
  backgroundColor: "transparent",
  selectors: {
    "&:hover": {
      color: semanticVars.text.primary,
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
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: semanticVars.interactive.secondary,
});

export const panel = style({
  minWidth: 0,
  paddingTop: tokenVars.spacing.lg,
  outline: "none",
});

export const panelVertical = style({
  flex: 1,
});
