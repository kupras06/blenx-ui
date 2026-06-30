import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const shell = style({
  display: "inline-flex",
  width: "100%",
  position: "relative",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: semanticVars.border.default,
  borderRadius: tokenVars.borderRadius.default,
  backgroundColor: semanticVars.surface.default,
  color: semanticVars.text.primary,
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  boxSizing: "border-box",
  outline: "none",
  transitionProperty: "box-shadow, border-color",
  transitionDuration: "150ms",
  selectors: {
    "&:has(:focus-visible)": {
      borderColor: semanticVars.border.strong,
      boxShadow: `0 0 0 3px ${semanticVars.border.strong}`,
    },
    "&:has([aria-invalid])": {
      borderColor: semanticVars.status.danger,
    },
    "&:has([aria-invalid]:focus-visible)": {
      boxShadow: `0 0 0 3px ${semanticVars.status.danger}`,
    },
    "&:has(:disabled)": {
      opacity: 0.64,
    },
  },
});

export const textarea = style({
  fieldSizing: "content",
  minHeight: "70px",
  width: "100%",
  borderRadius: "inherit",
  borderWidth: 0,
  paddingTop: "calc(12px - 1px)",
  paddingBottom: "calc(12px - 1px)",
  paddingLeft: "calc(12px - 1px)",
  paddingRight: "calc(12px - 1px)",
  fontSize: "16px",
  lineHeight: 1.5,
  outline: "none",
  resize: "none",
  color: semanticVars.text.primary,
  backgroundColor: "transparent",
});

export const textareaSm = style({
  minHeight: "66px",
  paddingTop: "calc(8px - 1px)",
  paddingBottom: "calc(8px - 1px)",
  paddingLeft: "calc(10px - 1px)",
  paddingRight: "calc(10px - 1px)",
});

export const textareaLg = style({
  minHeight: "74px",
  paddingTop: "calc(16px - 1px)",
  paddingBottom: "calc(16px - 1px)",
});
