import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    width: "full",
    overflow: "hidden",
    radius: "lg",
    backgroundColor: "surface",
    maxHeight: "full",
  }),
  style({
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    boxShadow: tokenVars.shadow.lg,
    outline: "none",
  }),
]);

export const inputWrapper = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    px: "sm",
  }),
  style({
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: semanticVars.border.subtle,
  }),
]);

export const inputIcon = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    shrink: 0,
    color: "disabled",
  }),
]);

export const input = style([
  baseSprinkles({
    width: "full",
    fontSize: "sm",
    color: "primary",
  }),
  style({
    height: 44,
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    selectors: {
      "&::placeholder": {
        color: semanticVars.text.disabled,
      },
    },
  }),
]);

export const list = style([
  baseSprinkles({
    overflow: "auto",
    padding: "xs",
  }),
  style({
    maxHeight: 300,
  }),
]);

export const group = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
  }),
]);

export const groupHeading = style([
  baseSprinkles({
    px: "sm",
    fontSize: "xs",
    color: "secondary",
  }),
  style({
    paddingTop: tokenVars.spacing.sm,
    paddingBottom: tokenVars.spacing.xs,
    fontWeight: tokenVars.fontWeight.semibold,
  }),
]);

export const item = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    py: "xs",
    px: "sm",
    radius: "sm",
    fontSize: "sm",
    color: "primary",
  }),
  style({
    minHeight: 32,
    lineHeight: "1.4",
    cursor: "pointer",
    userSelect: "none",
    outline: "none",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
      },
    },
  }),
]);

export const itemActive = style([
  baseSprinkles({
    backgroundColor: "subtle",
  }),
]);

export const itemDisabled = style([
  baseSprinkles({
    color: "disabled",
  }),
  style({
    cursor: "default",
    selectors: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  }),
]);

export const separator = style([
  baseSprinkles({
    marginY: "xs",
  }),
  style({
    height: 1,
    backgroundColor: semanticVars.border.subtle,
  }),
]);

export const empty = style([
  baseSprinkles({
    py: "lg",
    fontSize: "sm",
    color: "secondary",
  }),
  style({
    textAlign: "center",
  }),
]);
