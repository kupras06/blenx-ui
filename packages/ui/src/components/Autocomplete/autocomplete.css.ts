import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, borderWidth, fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

export const inputGroup = style({
  position: "relative",
  width: "100%",
  minWidth: 0,
  color: themeContract.contentPrimary,
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
  insetInlineStart: borderWidth.thin,
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
  borderRadius: borderRadius.md,
  borderWidth: borderWidth.thin,
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
  borderColor: themeContract.border,
  borderRadius: borderRadius.lg,
  backgroundColor: themeContract.surface,
  boxShadow: themeContract.shadowLg,
  transformOrigin: "var(--transform-origin)",
  transitionProperty: "transform, opacity",
  transitionDuration: "150ms",
});

export const popup = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  maxHeight: "min(var(--available-height), 23rem)",
  color: themeContract.contentPrimary,
});

export const group = style({
  display: "flex",
  flexDirection: "column",
});

export const separator = style({
  height: "1px",
  marginBlock: spacing.xs,
  marginInline: spacing.sm,
  backgroundColor: themeContract.border,
});

export const groupLabel = style({
  paddingBlock: spacing["1"],
  paddingInline: spacing["2"],
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  color: themeContract.contentSecondary,
});

export const empty = style({
  padding: spacing.sm,
  textAlign: "center",
  fontSize: fontSize.sm,
  color: themeContract.contentSecondary,
});

export const list = style({
  padding: spacing.xs,
});

export const status = style({
  paddingInline: spacing.md,
  paddingBlock: spacing.sm,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  color: themeContract.contentSecondary,
});

export const item = style({
  display: "flex",
  alignItems: "center",
  paddingInline: spacing.sm,
  paddingBlock: spacing["1"],
  borderRadius: borderRadius.md,
  cursor: "default",
  userSelect: "none",
  outline: "none",
  minHeight: "32px",
  fontSize: fontSize.md,
});
