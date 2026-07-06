import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

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
    fontSize: "lg",
    color: "primary",
  }),
  style({
    lineHeight: tokenVars.lineHeight.tight,
    fontWeight: tokenVars.fontWeight.semibold,
  }),
]);

export const description = style([
  baseSprinkles({
    fontSize: "sm",
    color: "secondary",
  }),
  style({
    lineHeight: tokenVars.lineHeight.normal,
  }),
]);

export const panel = baseSprinkles({
  padding: "md",
  py: "xxs",
});
