import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { borderRadius, fontSize, spacing } from "#theme/tokens.css";

export const group = style({
  position: "relative",
  display: "inline-flex",
  width: "100%",
  minWidth: 0,
  alignItems: "center",
  borderRadius: borderRadius.large,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.border,
  color: theme.contentPrimary,
  fontSize: fontSize.small,
  boxSizing: "border-box",
  minHeight: "40px",
  overflow: "hidden",
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
  color: theme.contentSecondary,
  userSelect: "none",
  fontSize: fontSize.small,
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
  gap: spacing.small,
  whiteSpace: "nowrap",
  lineHeight: 1,
  color: theme.contentSecondary,
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
  fontSize: fontSize.small,
  color: theme.contentPrimary,
  boxSizing: "border-box",
  lineHeight: 1.5,
  selectors: {
    "&::placeholder": {
      color: theme.contentDisabled,
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
  fontSize: fontSize.small,
  color: theme.contentPrimary,
  resize: "none",
  selectors: {
    "&::placeholder": {
      color: theme.contentDisabled,
    },
  },
});
