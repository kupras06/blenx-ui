import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = baseSprinkles({
  display: "flex",
  direction: "column",
  width: "full",
});

export const rootVertical = style([
  baseSprinkles({
    direction: "column",
  }),
  {
    selectors: {
      "&:first-child": {
        borderTopWidth: "thin",
        borderTopStyle: "solid",
        borderTopColor: semanticVars.border.default,
      },
    },
  },
]);

export const item = style([
  baseSprinkles({
    borderBottomWidth: "thin",
  }),
  {
    borderBottomStyle: "solid",
    borderBottomColor: semanticVars.border.default,
  },
]);

export const itemDisabled = style({
  opacity: 0.5,
});

export const trigger = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "xxs",
    width: "full",
    padding: "xs",
    fontSize: "sm",
    color: "primary",
    borderRadius: "none",
    lineHeight: "normal",
    fontWeight: "medium",
    backgroundColor: "transparent",
  }),
  style({
    paddingInlineEnd: tokenVars.spacing.xxs,
    border: "none",
    appearance: "none",
    fontFamily: "inherit",
    textAlign: "left",
    borderWidth: 0,
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    outline: "none",
    outlineOffset: "2px",
    transitionProperty: "background-color",
    transitionDuration: tokenVars.duration.fast,
    transitionTimingFunction: tokenVars.easing.standard,
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
      "&:focus-visible": {
        outline: `2px solid ${semanticVars.focus.ring}`,
      },
      // First accordion item
      [`${item}:first-child &`]: {
        borderTopLeftRadius: tokenVars.borderRadius.md,
        borderTopRightRadius: tokenVars.borderRadius.md,
      },

      // Last accordion item
      [`${item}:last-child &`]: {
        borderBottomLeftRadius: tokenVars.borderRadius.md,
        borderBottomRightRadius: tokenVars.borderRadius.md,
      },
    },
  }),
]);

export const triggerIcon = style([
  baseSprinkles({
    color: "secondary",
  }),
  style({
    flexShrink: 0,
    transform: "rotate(0deg)",
    transitionProperty: "transform",
    transitionDuration: tokenVars.duration.normal,
    transitionTimingFunction: tokenVars.easing.standard,
    selectors: {
      "[data-panel-open] &": {
        transform: "rotate(180deg)",
      },
    },
  }),
]);

export const panel = style([
  baseSprinkles({
    overflow: "hidden",
    padding: "xs",
  }),
  style({
    transitionProperty: "grid-template-rows, opacity",
    transitionDuration: tokenVars.duration.normal,
    transitionTimingFunction: tokenVars.easing.standard,
  }),
]);
