import { style } from "@vanilla-extract/css";
import { borderRadius, spacing } from "#theme/tokens.css";

export const groupBase = style({
  display: "inline-flex",
  position: "relative",
});

export const groupHorizontal = style({
  flexDirection: "row",
  alignItems: "center",
});

export const groupVertical = style({
  flexDirection: "column",
  alignItems: "center",
});

export const groupDefault = style({
  gap: spacing.xxsmall,
});

export const groupOutline = style({
  gap: 0,
});

export const outlineItemHorizontal = style({
  selectors: {
    "&:first-child": {
      borderStartStartRadius: borderRadius.medium,
      borderEndStartRadius: borderRadius.medium,
    },
    "&:last-child": {
      borderStartEndRadius: borderRadius.medium,
      borderEndEndRadius: borderRadius.medium,
    },
    "&:not(:first-child)": {
      borderInlineStartWidth: 0,
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
    },
    "&:not(:last-child)": {
      borderInlineEndWidth: 0,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
    },
    "&:focus-visible": {
      zIndex: 10,
    },
  },
});

export const outlineItemVertical = style({
  selectors: {
    "&:first-child": {
      borderStartStartRadius: borderRadius.medium,
      borderStartEndRadius: borderRadius.medium,
    },
    "&:last-child": {
      borderEndStartRadius: borderRadius.medium,
      borderEndEndRadius: borderRadius.medium,
    },
    "&:not(:first-child)": {
      borderBlockStartWidth: 0,
      borderStartStartRadius: 0,
      borderStartEndRadius: 0,
    },
    "&:not(:last-child)": {
      borderBlockEndWidth: 0,
      borderEndStartRadius: 0,
      borderEndEndRadius: 0,
    },
    "&:focus-visible": {
      zIndex: 10,
    },
  },
});
