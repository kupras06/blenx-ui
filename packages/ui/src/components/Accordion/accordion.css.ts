import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
});

export const rootVertical = style({
  flexDirection: "column",
});

export const item = style({
  borderBottomWidth: tokenVars.borderWidth.thin,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.subtle,
});

export const itemDisabled = style({
  opacity: 0.5,
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.xxs,
  width: "100%",
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.xxs,
  paddingRight: tokenVars.spacing.xxs,
  boxSizing: "border-box",
  fontSize: tokenVars.fontSize.sm,
  lineHeight: tokenVars.lineHeight.normal,
  fontWeight: tokenVars.fontWeight.medium,
  color: semanticVars.text.primary,
  backgroundColor: "transparent",
  border: "none",
  borderRadius: tokenVars.borderRadius.default,
  appearance: "none",
  fontFamily: "inherit",
  textAlign: "left",
  borderWidth: 0,
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  outline: "none",
  outlineOffset: "2px",
  transitionProperty: "background-color",
  transitionDuration: tokenVars.duration.fast,
  transitionTimingFunction: tokenVars.easing.standard,
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
    "&:focus-visible": {
      outline: `2px solid ${semanticVars.focus.ring}`,
    },
  },
});

export const triggerIcon = style({
  flexShrink: 0,
  color: semanticVars.text.secondary,
  transform: "rotate(0deg)",
  transitionProperty: "transform",
  transitionDuration: tokenVars.duration.normal,
  transitionTimingFunction: tokenVars.easing.standard,
  selectors: {
    "[data-panel-open] &": {
      transform: "rotate(180deg)",
    },
  },
});

export const panel = style({
  overflow: "hidden",
  boxSizing: "border-box",
  transitionProperty: "grid-template-rows, opacity",
  padding: tokenVars.spacing.xs,
  transitionDuration: tokenVars.duration.normal,
  transitionTimingFunction: tokenVars.easing.standard,
});
