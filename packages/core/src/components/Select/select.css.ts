import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const label = style([
  baseSprinkles({
    fontSize: "xs",
    color: "secondary",
    px: "xs",
  }),
  style({
    paddingBottom: tokenVars.spacing.xs,
    fontWeight: tokenVars.fontWeight.semibold,
  }),
]);

export const trigger = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    justify: "between",
    gap: "sm",
    width: "full",
    fontSize: "sm",
    color: "primary",
    backgroundColor: "surface",
    radius: "md",
  }),
  style({
    paddingTop: tokenVars.spacing.sm,
    paddingBottom: tokenVars.spacing.sm,
    paddingLeft: tokenVars.spacing.md,
    paddingRight: tokenVars.spacing.sm,
    lineHeight: "1.5",
    fontFamily: "inherit",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    outline: "none",
    cursor: "pointer",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&:hover": {
        borderColor: semanticVars.border.strong,
      },
      "&:focus-visible": {
        borderColor: semanticVars.interactive.primary.default,
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
      },
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&[data-placeholder]": {
        color: semanticVars.text.disabled,
      },
    },
  }),
]);

export const triggerSm = style([
  baseSprinkles({
    py: "xs",
    px: "sm",
  }),
  style({
    paddingRight: tokenVars.spacing.xs,
    fontSize: 14,
  }),
]);

export const triggerLg = style([
  baseSprinkles({
    py: "md",
    px: "lg",
  }),
  style({
    paddingRight: tokenVars.spacing.md,
    fontSize: 16,
  }),
]);

export const icon = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    color: "secondary",
    shrink: 0,
  }),
]);

export const popup = style([
  baseSprinkles({
    py: "xs",
    backgroundColor: "surface",
    radius: "lg",
    zIndex: "modal",
    overflow: "auto",
  }),
  style({
    maxHeight: 300,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    boxShadow: tokenVars.shadow.lg,
    zIndex: 1400,
    minWidth: "var(--anchor-width)",
    maxWidth: "var(--available-width)",
    outline: "none",
    selectors: {
      "&:focus-visible": {
        outline: "none",
      },
    },
  }),
]);

export const item = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    py: "xs",
    px: "sm",
    mx: "xs",
    radius: "sm",
    fontSize: "sm",
    color: "primary",
  }),
  style({
    minHeight: 32,
    lineHeight: "1.4",
    cursor: "pointer",
    userSelect: "none",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
      "&[data-highlighted]": {
        backgroundColor: semanticVars.background.subtle,
      },
      "&[data-selected]": {
        backgroundColor: semanticVars.interactive.primary.default,
        color: semanticVars.interactive.primaryFg,
      },
      "&[data-selected]:hover": {
        backgroundColor: semanticVars.interactive.primary.default,
      },
      "&[data-selected][data-highlighted]": {
        backgroundColor: semanticVars.interactive.primary.default,
      },
      "&[data-disabled]": {
        color: semanticVars.text.disabled,
        cursor: "default",
      },
      "&[data-disabled]:hover": {
        backgroundColor: "transparent",
      },
    },
  }),
]);

export const itemIndicator = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    shrink: 0,
  }),
  style({
    width: 14,
  }),
]);

export const separator = style([
  baseSprinkles({
    my: "xs",
  }),
  style({
    height: 1,
    backgroundColor: semanticVars.border.subtle,
  }),
]);

export const groupLabel = style([
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

export const scrollArrow = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    justify: "center",
    width: "full",
    color: "secondary",
  }),
  style({
    height: 24,
    cursor: "pointer",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
    },
  }),
]);
