import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const trigger = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    radius: "md",
    padding: "0",
    borderWidth: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  }),
  style({
    appearance: "none",
    border: "none",
    outline: "none",
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
    borderWidth: "thin",
    borderStyle: "solid",
    boxShadow: "xl",
  }),
  style({
    borderColor: semanticVars.border.subtle,
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
    fontWeight: "medium",
    backgroundColor: "transparent",
    cursor: "pointer",
  }),
  style({
    minHeight: 24,
    padding: `${tokenVars.spacing.xs} ${tokenVars.spacing.sm}`,
    lineHeight: 1.2,
    textDecoration: "none",
    textAlign: "left",
    border: "none",
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
        backgroundColor: semanticVars.color.danger.bg,
        color: semanticVars.color.danger.default,
      },
      "&:focus-visible": {
        backgroundColor: semanticVars.color.danger.bg,
        color: semanticVars.color.danger.default,
        boxShadow: `0 0 0 2px ${semanticVars.color.danger} inset`,
      },
      "&:active": {
        backgroundColor: semanticVars.color.danger.bg,
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
    fontWeight: "semibold",
    letterSpacing: "wide",
  }),
  style({
    padding: `${tokenVars.spacing.sm} ${tokenVars.spacing.md} ${tokenVars.spacing.xs}`,
    textTransform: "uppercase",
  }),
]);

export const inset = baseSprinkles({
  paddingLeft: "40",
});

export const shortcut = style([
  baseSprinkles({
    color: "disabled",
    fontSize: "xs",
    fontWeight: "medium",
  }),
  style({
    marginLeft: "auto",
  }),
]);
