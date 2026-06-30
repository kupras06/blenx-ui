import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const inputGroup = style({
  position: "relative",
  width: "100%",
  minWidth: 0,
  color: semanticVars.text.primary,
});

export const inputSize = style({
  vars: {
    "--autocomplete-input-padding-inline-start": "33px",
    "--autocomplete-input-padding-inline-end": "28px",
  },
});

export const inputSizeSm = style({
  paddingInlineStart: "31px",
  paddingInlineEnd: "26px",
});

export const inputSizeDefault = style({
  paddingInlineStart: "33px",
  paddingInlineEnd: "28px",
});

export const inputSizeLg = style({
  paddingInlineStart: "35px",
  paddingInlineEnd: "30px",
});

export const startAddon = style({
  pointerEvents: "none",
  position: "absolute",
  insetBlock: 0,
  insetInlineStart: tokenVars.borderWidth.thin,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  opacity: 0.8,
});

export const startAddonDefault = style({
  paddingInlineStart: "11px",
});

export const startAddonSmall = style({
  paddingInlineStart: "9px",
});

export const adornment = style({
  position: "absolute",
  top: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  transform: "translateY(-50%)",
  borderRadius: tokenVars.borderRadius.md,
  borderWidth: tokenVars.borderWidth.thin,
  borderStyle: "solid",
  borderColor: "transparent",
  opacity: 0.8,
  outline: "none",
  transitionProperty: "color, background-color, box-shadow, opacity",
  transitionDuration: "150ms",
});

export const adornmentSmall = style({
  width: "28px",
  height: "28px",
});

export const adornmentDefault = style({
  width: "32px",
  height: "32px",
});

export const adornmentEndSmall = style({
  insetInlineEnd: tokenVars.spacing["0"],
});

export const adornmentEndDefault = style({
  insetInlineEnd: tokenVars.spacing["0.5"],
});

export const positioner = style({
  outline: "none",
});

export const popupShell = style({
  position: "relative",
  display: "flex",
  maxHeight: "100%",
  minWidth: "var(--anchor-width)",
  maxWidth: "var(--available-width)",
  borderWidth: tokenVars.borderWidth.thin,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  borderRadius: tokenVars.borderRadius.lg,
  backgroundColor: semanticVars.surface.default,
  boxShadow: tokenVars.shadow.lg,
  transformOrigin: "var(--transform-origin)",
  transitionProperty: "transform, opacity",
  transitionDuration: "150ms",
});

export const popup = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  maxHeight: "min(var(--available-height), 23rem)",
  color: semanticVars.text.primary,
});

export const group = style({
  display: "flex",
  flexDirection: "column",
});

export const separator = style({
  height: "1px",
  marginBlock: tokenVars.spacing.xs,
  marginInline: tokenVars.spacing.sm,
  backgroundColor: semanticVars.border.default,
});

export const groupLabel = style({
  paddingBlock: tokenVars.spacing["1"],
  paddingInline: tokenVars.spacing["2"],
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
  color: semanticVars.text.secondary,
});

export const empty = style({
  padding: tokenVars.spacing.sm,
  textAlign: "center",
  fontSize: tokenVars.fontSize.sm,
  color: semanticVars.text.secondary,
});

export const list = style({
  padding: tokenVars.spacing.xs,
});

export const status = style({
  paddingInline: tokenVars.spacing.md,
  paddingBlock: tokenVars.spacing.sm,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
  color: semanticVars.text.secondary,
});

export const item = style({
  display: "flex",
  alignItems: "center",
  paddingInline: tokenVars.spacing.sm,
  paddingBlock: tokenVars.spacing["1"],
  borderRadius: tokenVars.borderRadius.md,
  cursor: "default",
  userSelect: "none",
  outline: "none",
  minHeight: "32px",
  fontSize: tokenVars.fontSize.md,
});
