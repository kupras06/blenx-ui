import { style } from "@vanilla-extract/css";
import { tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const groupBase = style([
  baseSprinkles({
    display: "inline-flex",
    position: "relative",
  }),
]);

export const groupHorizontal = style([
  baseSprinkles({
    direction: "row",
    align: "center",
  }),
]);

export const groupVertical = style([
  baseSprinkles({
    direction: "column",
    align: "center",
  }),
]);

export const groupDefault = style([
  baseSprinkles({
    gap: "xxs",
  }),
]);

export const groupOutline = style([
  baseSprinkles({
    gap: "0",
  }),
]);

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
