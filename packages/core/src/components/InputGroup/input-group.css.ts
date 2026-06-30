import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const group = style({
  position: "relative",
  display: "inline-flex",
  width: "100%",
  minWidth: 0,
  alignItems: "center",
  borderRadius: tokenVars.borderRadius.lg,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  color: semanticVars.text.primary,
  fontSize: tokenVars.fontSize.sm,
  boxSizing: "border-box",
  minHeight: "40px",
  overflow: "hidden",
  transitionProperty: "border-color, box-shadow",
  transitionDuration: "150ms",
  selectors: {
    "&:focus-within": {
      borderColor: semanticVars.border.strong,
      boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
    },
    "&:has([aria-invalid='true'])": {
      borderColor: semanticVars.status.danger.default,
    },
    "&:has([aria-invalid='true']:focus-visible)": {
      borderColor: semanticVars.status.danger.default,
      boxShadow: `0 0 0 2px ${semanticVars.status.danger}`,
    },
    "&:has(:disabled)": {
      opacity: 0.64,
      cursor: "not-allowed",
    },
    "&:has([data-align='block-start'], [data-align='block-end'])": {
      flexDirection: "column",
    },
  },
});

export const addon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "text",
  flexShrink: 0,
  color: semanticVars.text.secondary,
  userSelect: "none",
  fontSize: tokenVars.fontSize.sm,
  selectors: {
    "&:has(:last-child[data-slot='badge'])": {
      marginInlineStart: 0,
    },
  },
});

export const addonInlineStart = style({
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: "8px",
  paddingRight: "4px",
  alignSelf: "center",
});

export const addonInlineEnd = style({
  order: 1,
  paddingLeft: "4px",
  paddingRight: "4px",
  alignSelf: "stretch",
  display: "flex",
  alignItems: "center",
});

export const addonBlockStart = style({
  order: -1,
  width: "100%",
  justifyContent: "flex-start",
  paddingTop: "4px",
  paddingLeft: "4px",
  paddingRight: "4px",
});

export const addonBlockEnd = style({
  order: 1,
  width: "100%",
  justifyContent: "flex-start",
  paddingBottom: "4px",
  paddingLeft: "4px",
  paddingRight: "4px",
});

export const text = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  whiteSpace: "nowrap",
  lineHeight: 1,
  color: semanticVars.text.secondary,
});

export const menu = style({
  display: "flex",
  flexDirection: "column",
});

export const input = style({
  flex: 1,
  minWidth: 0,
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  backgroundColor: "inherit",
  paddingTop: "8px",
  paddingBottom: "6px",
  paddingLeft: "8px",
  paddingRight: "8px",
  borderWidth: 0,
  fontSize: tokenVars.fontSize.sm,
  color: semanticVars.text.primary,
  boxSizing: "border-box",
  lineHeight: 1.5,
  selectors: {
    "&::placeholder": {
      color: semanticVars.text.disabled,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const textarea = style({
  flex: 1,
  minWidth: 0,
  width: "100%",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  paddingTop: "8px",
  paddingBottom: "8px",
  borderWidth: 0,
  paddingLeft: "10px",
  paddingRight: "10px",
  fontSize: tokenVars.fontSize.sm,
  color: semanticVars.text.primary,
  resize: "none",
  selectors: {
    "&::placeholder": {
      color: semanticVars.text.disabled,
    },
  },
});
