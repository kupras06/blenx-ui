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
  }),
  style({
    borderWidth: 1,
    borderStyle: "solid",
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
        borderColor: semanticVars.status.danger.default,
      },
      "&:has([aria-invalid='true']:focus-visible)": {
        borderColor: semanticVars.status.danger.default,
        boxShadow: `0 0 0 2px ${semanticVars.status.danger}`,
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
  }),
  style({
    cursor: "text",
    userSelect: "none",
    selectors: {
      "&:has(:last-child[data-slot='badge'])": {
        marginInlineStart: 0,
      },
    },
  }),
]);

export const addonInlineStart = style({
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: "8px",
  paddingRight: "4px",
  alignSelf: "center",
});

export const addonInlineEnd = style([
  baseSprinkles({
    display: "flex",
    align: "center",
  }),
  style({
    order: 1,
    paddingLeft: "4px",
    paddingRight: "4px",
    alignSelf: "stretch",
  }),
]);

export const addonBlockStart = style([
  baseSprinkles({
    width: "full",
    justify: "start",
  }),
  style({
    order: -1,
    paddingTop: "4px",
    paddingLeft: "4px",
    paddingRight: "4px",
  }),
]);

export const addonBlockEnd = style([
  baseSprinkles({
    width: "full",
    justify: "start",
  }),
  style({
    order: 1,
    paddingBottom: "4px",
    paddingLeft: "4px",
    paddingRight: "4px",
  }),
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

export const menu = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
  }),
]);

export const input = style([
  baseSprinkles({
    flex: 1,
    color: "primary",
    fontSize: "sm",
  }),
  style({
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
  }),
  style({
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
    resize: "none",
    selectors: {
      "&::placeholder": {
        color: semanticVars.text.disabled,
      },
    },
  }),
]);
