import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const header = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    gap: "sm",
    padding: "lg",
  }),
  style({
    selectors: {
      "[data-has-panel] &": {
        paddingBottom: tokenVars.spacing.sm,
      },
    },
  }),
]);

export const footer = style([
  baseSprinkles({
    display: "flex",
    direction: "column-reverse",
    gap: "sm",
    px: "lg",
  }),
  style({
    paddingBottom: "env(safe-area-inset-bottom)",
  }),
]);

export const footerDefault = style([
  baseSprinkles({
    backgroundColor: "subtle",
    py: "md",
  }),
  style({
    borderTopWidth: tokenVars.borderWidth.thin,
    borderTopStyle: "solid",
    borderTopColor: semanticVars.border.subtle,
  }),
]);

export const footerBare = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.lg,
});

export const title = style([
  baseSprinkles({
    color: "primary",
  }),
  style({
    fontSize: "20px",
    lineHeight: 1,
    fontWeight: 600,
  }),
]);

export const description = style([
  baseSprinkles({
    color: "secondary",
  }),
  style({
    fontSize: "14px",
    lineHeight: 1.4,
  }),
]);

export const panel = style([
  baseSprinkles({
    padding: "lg",
  }),
]);
