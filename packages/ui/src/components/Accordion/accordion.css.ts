import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
import {
  borderWidth,
  duration,
  easing,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
} from "#theme/tokens.css";

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
  borderBottomWidth: borderWidth.thin,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.borderSubtle,
});

export const itemDisabled = style({
  opacity: 0.5,
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.xxsmall,
  width: "100%",
  paddingTop: spacing.xsmall,
  paddingBottom: spacing.xsmall,
  paddingLeft: spacing.xxsmall,
  paddingRight: spacing.xxsmall,
  boxSizing: "border-box",
  fontSize: fontSize.small,
  lineHeight: lineHeight.normal,
  fontWeight: fontWeight.medium,
  color: themeContract.contentPrimary,
  backgroundColor: "transparent",
  border: "none",
  borderRadius: themeContract.borderRadius,
  appearance: "none",
  fontFamily: "inherit",
  textAlign: "left",
  borderWidth: 0,
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  outline: "none",
  outlineOffset: "2px",
  transitionProperty: "background-color",
  transitionDuration: duration.fast,
  transitionTimingFunction: easing.standard,
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.surfaceHover,
    },
    "&:focus-visible": {
      outline: `2px solid ${themeContract.focusRing}`,
    },
  },
});

export const triggerIcon = style({
  flexShrink: 0,
  color: themeContract.contentSecondary,
  transform: "rotate(0deg)",
  transitionProperty: "transform",
  transitionDuration: duration.normal,
  transitionTimingFunction: easing.standard,
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
  padding: spacing.xsmall,
  transitionDuration: duration.normal,
  transitionTimingFunction: easing.standard,
});
