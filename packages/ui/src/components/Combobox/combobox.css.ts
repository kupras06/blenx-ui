import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { borderRadius, borderWidth, fontSize, fontWeight, spacing } from "#theme/tokens.css";

export const inputGroup = style({
  position: "relative",
  width: "100%",
  minWidth: 0,
  color: theme.contentPrimary,
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
  insetInlineStart: borderWidth.thin,
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
  borderRadius: borderRadius.medium,
  borderWidth: borderWidth.thin,
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
  insetInlineEnd: spacing["0"],
});

export const adornmentEndDefault = style({
  insetInlineEnd: spacing["0.5"],
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
  borderWidth: borderWidth.thin,
  borderStyle: "solid",
  borderColor: theme.border,
  borderRadius: borderRadius.large,
  backgroundColor: theme.surface,
  boxShadow: theme.shadowLg,
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
  color: theme.contentPrimary,
});

export const separator = style({
  height: "1px",
  marginBlock: spacing.xsmall,
  marginInline: spacing.small,
  backgroundColor: theme.border,
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
  paddingInline: spacing.small,
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.medium,
  color: theme.contentSecondary,
});

export const empty = style({
  padding: spacing.small,
  textAlign: "center",
  fontSize: fontSize.medium,
  color: theme.contentSecondary,
});

export const row = style({
  display: "flex",
  flexDirection: "column",
});

export const value = style({
  display: "block",
});

export const list = style({
  padding: spacing.xsmall,
  selectors: {
    "&:not(:empty)": {
      scrollPaddingBlock: spacing.xsmall,
    },
    "&:has([data-slot='combobox-item'])": {
      paddingInlineEnd: spacing.small,
    },
  },
});

export const status = style({
  paddingInline: spacing.medium,
  paddingBlock: spacing.small,
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.medium,
  color: theme.contentSecondary,
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
  columnGap: spacing.small,
  minHeight: "32px",
  paddingInlineStart: spacing.small,
  paddingInlineEnd: spacing.medium,
  paddingBlock: spacing["1"],
  borderRadius: borderRadius.small,
  cursor: "default",
  userSelect: "none",
  outline: "none",
  fontSize: fontSize.medium,
  selectors: {
    "&:hover": {
      backgroundColor: theme.surfaceHover,
    },
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.64,
    },
    "&[data-highlighted]": {
      backgroundColor: theme.surfaceHover,
      color: theme.contentPrimary,
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
  gap: spacing.xxsmall,
  minHeight: "36px",
  padding: "calc(4px - 1px)",
  borderWidth: borderWidth.thin,
  borderStyle: "solid",
  borderColor: theme.border,
  borderRadius: borderRadius.large,
  backgroundColor: theme.background,
  color: theme.contentPrimary,
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
  outline: "none",
  transitionProperty: "border-color, box-shadow",
  transitionDuration: "150ms",
  selectors: {
    "&:focus-within": {
      borderColor: theme.borderStrong,
      boxShadow: `0 0 0 2px ${theme.borderStrong}`,
    },
    "&:has([aria-invalid='true'])": {
      borderColor: theme.sentimentNegative,
    },
    "&:has([aria-invalid='true']:focus-visible)": {
      borderColor: theme.sentimentNegative,
      boxShadow: `0 0 0 2px ${theme.sentimentNegative}`,
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
  paddingInlineStart: spacing.small,
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
  paddingInlineStart: spacing.xsmall,
  paddingInlineEnd: spacing.xsmall,
  fontSize: fontSize.medium,
  lineHeight: 1.5,
  color: theme.contentPrimary,
  selectors: {
    "&::placeholder": {
      color: theme.contentDisabled,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "&:has(+ [data-slot='combobox-chip'])": {
      paddingInlineStart: spacing.xxsmall,
    },
  },
});

export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: borderRadius.medium,
  backgroundColor: theme.surfaceHover,
  color: theme.contentPrimary,
  paddingInlineStart: spacing.small,
  fontSize: fontSize.small,
  fontWeight: fontWeight.medium,
  lineHeight: 1.2,
  outline: "none",
});

export const chipRemove = style({
  display: "inline-flex",
  height: "100%",
  alignItems: "center",
  flexShrink: 0,
  cursor: "pointer",
  paddingInline: spacing.xsmall,
  opacity: 0.8,
  selectors: {
    "&:hover": {
      opacity: 1,
    },
  },
});
