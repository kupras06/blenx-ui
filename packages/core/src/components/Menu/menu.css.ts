import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const trigger = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    radius: "md",
  }),
  style({
    cursor: "pointer",
    backgroundColor: "transparent",
    appearance: "none",
    border: "none",
    padding: 0,
    outline: "none",
    borderWidth: 0,
    fontFamily: "inherit",
    fontSize: "inherit",
    color: "inherit",
    transition: "background-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
      },
    },
  }),
]);

export const popup = style([
  baseSprinkles({
    backgroundColor: "surface",
    radius: "lg",
    zIndex: "floating",
    padding: "xs",
    display: "flex",
    gap: "1",
    direction: "column",
    overflow: "hidden",
  }),
  style({
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: semanticVars.border.subtle,
    boxShadow: tokenVars.shadow.xl,
    zIndex: 1000,
    minWidth: 224,
    outline: "none",
  }),
]);

export const item = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    radius: "default",
    color: "primary",
    fontSize: "sm",
  }),
  style({
    minHeight: 24,
    padding: `${tokenVars.spacing.xs} ${tokenVars.spacing.sm}`,
    fontWeight: tokenVars.fontWeight.medium,
    lineHeight: 1.2,
    textDecoration: "none",
    textAlign: "left",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    appearance: "none",
    outline: "none",
    transition: "background-color 0.15s ease, color 0.15s ease",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.text.primary,
      },
      "&:focus-visible": {
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.text.primary,
        boxShadow: `0 0 0 2px ${semanticVars.border.strong} inset`,
      },
      "&:active": {
        backgroundColor: semanticVars.border.subtle,
      },
    },
  }),
]);

export const itemDestructive = style([
  baseSprinkles({
    color: "error",
  }),
  style({
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.status.dangerBg,
        color: semanticVars.status.danger.default,
      },
      "&:focus-visible": {
        backgroundColor: semanticVars.status.dangerBg,
        color: semanticVars.status.danger.default,
        boxShadow: `0 0 0 2px ${semanticVars.status.danger} inset`,
      },
      "&:active": {
        backgroundColor: semanticVars.status.dangerBg,
      },
    },
  }),
]);

export const separator = style({
  height: 1,
  backgroundColor: semanticVars.border.subtle,
  border: "none",
});

export const groupLabel = style([
  baseSprinkles({
    fontSize: "xs",
    color: "secondary",
  }),
  style({
    padding: `${tokenVars.spacing.sm} ${tokenVars.spacing.md} ${tokenVars.spacing.xs}`,
    fontWeight: tokenVars.fontWeight.semibold,
    textTransform: "uppercase",
    letterSpacing: tokenVars.letterSpacing.wide,
  }),
]);

export const inset = style({
  paddingLeft: 40,
});

export const shortcut = style([
  baseSprinkles({
    color: "disabled",
    fontSize: "xs",
  }),
  style({
    marginLeft: "auto",
    fontWeight: tokenVars.fontWeight.medium,
  }),
]);
