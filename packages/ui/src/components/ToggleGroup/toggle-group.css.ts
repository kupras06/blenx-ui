import { style } from "@vanilla-extract/css";
import { borderRadius, spacing } from "@blenx-dev/theme/tokens";

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
  gap: spacing.xxs,
});

export const groupOutline = style({
  gap: 0,
});

export const outlineItemHorizontal = style({
  selectors: {
    "&:first-child": {
      borderStartStartRadius: borderRadius.md,
      borderEndStartRadius: borderRadius.md,
    },
    "&:last-child": {
      borderStartEndRadius: borderRadius.md,
      borderEndEndRadius: borderRadius.md,
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
      borderStartStartRadius: borderRadius.md,
      borderStartEndRadius: borderRadius.md,
    },
    "&:last-child": {
      borderEndStartRadius: borderRadius.md,
      borderEndEndRadius: borderRadius.md,
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
