import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const group = style([
  baseSprinkles({
    position: "relative",
    display: "inline-flex",
    width: "full",
    align: "center",
    radius: "lg",
    color: "primary",
    fontSize: "sm",
    overflow: "hidden",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  style({
    borderColor: semanticVars.border.default,
    minHeight: "40px",
    transitionProperty: "border-color, box-shadow",
    transitionDuration: "150ms",
    selectors: {
      "&:focus-within": {
        borderColor: semanticVars.border.strong,
        boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
      },
      "&:has([aria-invalid='true'])": {
        borderColor: semanticVars.color.danger.default,
      },
      "&:has([aria-invalid='true']:focus-visible)": {
        borderColor: semanticVars.color.danger.default,
        boxShadow: `0 0 0 2px ${semanticVars.color.danger}`,
      },
      "&:has(:disabled)": {
        opacity: 0.64,
        cursor: "not-allowed",
      },
      "&:has([data-align='block-start'], [data-align='block-end'])": {
        flexDirection: "column",
      },
    },
  }),
]);

export const addon = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    justify: "center",
    shrink: 0,
    color: "secondary",
    fontSize: "sm",
    cursor: "text",
  }),
  style({
    userSelect: "none",
    selectors: {
      "&:has(:last-child[data-slot='badge'])": {
        marginInlineStart: 0,
      },
    },
  }),
]);

export const addonInlineStart = style([
  baseSprinkles({
    paddingTop: "0",
    paddingBottom: "0",
    paddingLeft: "8",
    paddingRight: "4",
  }),
  style({ alignSelf: "center" }),
]);

export const addonInlineEnd = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    paddingLeft: "4",
    paddingRight: "4",
  }),
  style({
    order: 1,
    alignSelf: "stretch",
  }),
]);

export const addonBlockStart = style([
  baseSprinkles({
    width: "full",
    justify: "start",
    paddingTop: "4",
    paddingLeft: "4",
    paddingRight: "4",
  }),
  style({ order: -1 }),
]);

export const addonBlockEnd = style([
  baseSprinkles({
    width: "full",
    justify: "start",
    paddingBottom: "4",
    paddingLeft: "4",
    paddingRight: "4",
  }),
  style({ order: 1 }),
]);

export const text = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    color: "secondary",
  }),
  style({
    whiteSpace: "nowrap",
    lineHeight: 1,
  }),
]);

export const menu = baseSprinkles({
  display: "flex",
  direction: "column",
});

export const input = style([
  baseSprinkles({
    flex: 1,
    color: "primary",
    fontSize: "sm",
    width: "full",
    height: "full",
    paddingTop: "8",
    paddingBottom: "6",
    paddingLeft: "8",
    paddingRight: "8",
    borderWidth: "none",
  }),
  style({
    minWidth: 0,
    border: "none",
    outline: "none",
    backgroundColor: "inherit",
    lineHeight: 1.5,
    selectors: {
      "&::placeholder": {
        color: semanticVars.text.disabled,
      },
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
  }),
]);

export const textarea = style([
  baseSprinkles({
    flex: 1,
    color: "primary",
    fontSize: "sm",
    width: "full",
    paddingTop: "8",
    paddingBottom: "8",
    paddingLeft: "10",
    paddingRight: "10",
    borderWidth: "none",
  }),
  style({
    minWidth: 0,
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    resize: "none",
    selectors: {
      "&::placeholder": {
        color: semanticVars.text.disabled,
      },
    },
  }),
]);
