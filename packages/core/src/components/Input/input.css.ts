import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const label = style([
  baseSprinkles({
    display: "inline-flex",
    color: "secondary",
  }),
  style({
    gap: 4,
  }),
  style({
    fontSize: 14,
    lineHeight: 1.4,
    fontWeight: 400,
  }),
]);

export const input = style([
  baseSprinkles({
    width: "full",
    px: "md",
    color: "primary",
    backgroundColor: "surface",
    radius: "default",
  }),
  style({
    paddingTop: tokenVars.spacing.sm,
    paddingBottom: tokenVars.spacing.sm,
    fontSize: 16,
    lineHeight: 1.5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    outline: "none",
    selectors: {
      "&::placeholder": {
        color: semanticVars.text.disabled,
      },
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&:focus-visible": {
        borderColor: semanticVars.border.strong,
        boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
      },
      "&:focus-visible[aria-invalid='true']": {
        borderColor: semanticVars.status.danger.default,
        boxShadow: `0 0 0 3px ${semanticVars.status.danger}`,
      },
    },
  }),
]);

export const inputSm = style([
  baseSprinkles({
    py: "xs",
    px: "sm",
  }),
  style({
    fontSize: 16,
  }),
]);

export const inputLg = style([
  baseSprinkles({
    py: "md",
    px: "lg",
  }),
  style({
    fontSize: 16,
  }),
]);

export const inputError = style([
  baseSprinkles({
    borderColor: "error",
  }),
]);

export const error = style([
  baseSprinkles({
    color: "error",
  }),
  style({
    fontSize: 12,
    lineHeight: 1.4,
  }),
]);
