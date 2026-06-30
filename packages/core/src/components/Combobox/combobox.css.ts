import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const inputGroup = style({
  position: "relative",
  width: "100%",
  minWidth: 0,
  color: semanticVars.text.primary,
});

export const inputSm = style({
  paddingInlineStart: "30px",
  paddingInlineEnd: "26px",
});

export const inputDefault = style({
  paddingInlineStart: "32px",
  paddingInlineEnd: "28px",
});

export const inputLg = style({
  paddingInlineStart: "34px",
  paddingInlineEnd: "30px",
});

export const startAddon = style({
  pointerEvents: "none",
  position: "absolute",
  insetBlock: 0,
  insetInlineStart: tokenVars.borderWidth.thin,
  display: "flex",
  alignItems: "center",
  opacity: 0.8,
});

export const startAddonSm = style({
  paddingInlineStart: "9px",
});

export const startAddonDefault = style({
  paddingInlineStart: "11px",
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

export const adornmentSm = style({
  width: "28px",
  height: "28px",
});

export const adornmentDefault = style({
  width: "32px",
  height: "32px",
});

export const adornmentEndSm = style({
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
  "::before": {
    content: '""',
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
  },
});

export const popup = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  maxHeight: "min(var(--available-height), 23rem)",
  color: semanticVars.text.primary,
});

export const separator = style({
  height: "1px",
  marginBlock: tokenVars.spacing.xs,
  marginInline: tokenVars.spacing.sm,
  backgroundColor: semanticVars.border.default,
  selectors: {
    "&:last-child": {
      display: "none",
    },
  },
});

export const group = style({
  display: "flex",
  flexDirection: "column",
});

export const groupLabel = style({
  paddingBlock: "6px",
  paddingInline: tokenVars.spacing.sm,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
  color: semanticVars.text.secondary,
});

export const empty = style({
  padding: tokenVars.spacing.sm,
  textAlign: "center",
  fontSize: tokenVars.fontSize.md,
  color: semanticVars.text.secondary,
});

export const row = style({
  display: "flex",
  flexDirection: "column",
});

export const value = style({
  display: "block",
});

export const list = style({
  padding: tokenVars.spacing.xs,
  selectors: {
    "&:not(:empty)": {
      scrollPaddingBlock: tokenVars.spacing.xs,
    },
    "&:has([data-slot='combobox-item'])": {
      paddingInlineEnd: tokenVars.spacing.sm,
    },
  },
});

export const status = style({
  paddingInline: tokenVars.spacing.md,
  paddingBlock: tokenVars.spacing.sm,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
  color: semanticVars.text.secondary,
  selectors: {
    "&:empty": {
      margin: 0,
      padding: 0,
    },
  },
});

export const item = style({
  display: "grid",
  gridTemplateColumns: "1rem 1fr",
  alignItems: "center",
  columnGap: tokenVars.spacing.sm,
  minHeight: "32px",
  paddingInlineStart: tokenVars.spacing.sm,
  paddingInlineEnd: tokenVars.spacing.md,
  paddingBlock: tokenVars.spacing["1"],
  borderRadius: tokenVars.borderRadius.sm,
  cursor: "default",
  userSelect: "none",
  outline: "none",
  fontSize: tokenVars.fontSize.md,
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.64,
    },
    "&[data-highlighted]": {
      backgroundColor: semanticVars.background.subtle,
      color: semanticVars.text.primary,
    },
  },
});

export const itemIndicator = style({
  gridColumn: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const itemContent = style({
  gridColumn: "2",
});

export const chips = style({
  position: "relative",
  display: "inline-flex",
  width: "100%",
  minWidth: 0,
  flexWrap: "wrap",
  alignItems: "center",
  gap: tokenVars.spacing.xxs,
  minHeight: "36px",
  padding: "calc(4px - 1px)",
  borderWidth: tokenVars.borderWidth.thin,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  borderRadius: tokenVars.borderRadius.lg,
  backgroundColor: semanticVars.background.default,
  color: semanticVars.text.primary,
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
  outline: "none",
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
    "&:has([data-size='sm'])": {
      minHeight: "32px",
    },
    "&:has([data-size='lg'])": {
      minHeight: "40px",
    },
  },
});

export const chipsStartAddon = style({
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  opacity: 0.8,
  paddingInlineStart: tokenVars.spacing.sm,
});

export const chipsStartAddonSm = style({
  paddingInlineStart: "6px",
});

export const chipsInput = style({
  flex: "1 1 0%",
  minWidth: "3rem",
  borderWidth: 0,
  outline: "none",
  backgroundColor: "transparent",
  paddingBlock: "6px",
  paddingInlineStart: tokenVars.spacing.xs,
  paddingInlineEnd: tokenVars.spacing.xs,
  fontSize: tokenVars.fontSize.md,
  lineHeight: 1.5,
  color: semanticVars.text.primary,
  selectors: {
    "&::placeholder": {
      color: semanticVars.text.disabled,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "&:has(+ [data-slot='combobox-chip'])": {
      paddingInlineStart: tokenVars.spacing.xxs,
    },
  },
});

export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: tokenVars.borderRadius.md,
  backgroundColor: semanticVars.background.subtle,
  color: semanticVars.text.primary,
  paddingInlineStart: tokenVars.spacing.sm,
  fontSize: tokenVars.fontSize.sm,
  fontWeight: tokenVars.fontWeight.medium,
  lineHeight: 1.2,
  outline: "none",
});

export const chipRemove = style({
  display: "inline-flex",
  height: "100%",
  alignItems: "center",
  flexShrink: 0,
  cursor: "pointer",
  paddingInline: tokenVars.spacing.xs,
  opacity: 0.8,
  selectors: {
    "&:hover": {
      opacity: 1,
    },
  },
});
