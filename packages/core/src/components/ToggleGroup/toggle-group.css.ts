import { style } from "@vanilla-extract/css";
import { tokenVars } from "@blenx-dev/theme/contract";

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
  gap: tokenVars.spacing.xxs,
});

export const groupOutline = style({
  gap: 0,
});

export const outlineItemHorizontal = style({
  selectors: {
    "&:first-child": {
      borderStartStartRadius: tokenVars.borderRadius.md,
      borderEndStartRadius: tokenVars.borderRadius.md,
    },
    "&:last-child": {
      borderStartEndRadius: tokenVars.borderRadius.md,
      borderEndEndRadius: tokenVars.borderRadius.md,
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
      borderStartStartRadius: tokenVars.borderRadius.md,
      borderStartEndRadius: tokenVars.borderRadius.md,
    },
    "&:last-child": {
      borderEndStartRadius: tokenVars.borderRadius.md,
      borderEndEndRadius: tokenVars.borderRadius.md,
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
