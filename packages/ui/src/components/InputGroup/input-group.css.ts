import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, fontSize, spacing } from "@blenx-dev/theme/tokens";

export const group = style({
  position: "relative",
  display: "inline-flex",
  width: "100%",
  minWidth: 0,
  alignItems: "center",
  borderRadius: borderRadius.lg,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  color: themeContract.contentPrimary,
  fontSize: fontSize.sm,
  boxSizing: "border-box",
  minHeight: "40px",
  overflow: "hidden",
  transitionProperty: "border-color, box-shadow",
  transitionDuration: "150ms",
  selectors: {
    "&:focus-within": {
      borderColor: themeContract.borderStrong,
      boxShadow: `0 0 0 2px ${themeContract.borderStrong}`,
    },
    "&:has([aria-invalid='true'])": {
      borderColor: themeContract.sentimentNegative,
    },
    "&:has([aria-invalid='true']:focus-visible)": {
      borderColor: themeContract.sentimentNegative,
      boxShadow: `0 0 0 2px ${themeContract.sentimentNegative}`,
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
  color: themeContract.contentSecondary,
  userSelect: "none",
  fontSize: fontSize.sm,
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
  gap: spacing.sm,
  whiteSpace: "nowrap",
  lineHeight: 1,
  color: themeContract.contentSecondary,
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
  fontSize: fontSize.sm,
  color: themeContract.contentPrimary,
  boxSizing: "border-box",
  lineHeight: 1.5,
  selectors: {
    "&::placeholder": {
      color: themeContract.contentDisabled,
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
  fontSize: fontSize.sm,
  color: themeContract.contentPrimary,
  resize: "none",
  selectors: {
    "&::placeholder": {
      color: themeContract.contentDisabled,
    },
  },
});
