import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const header = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    gap: "xxs",
    padding: "md",
    py: "xs",
  }),
]);

export const footer = style([
  baseSprinkles({
    display: "flex",
    direction: "column-reverse",
    gap: "sm",
    px: "md",
  }),
  style({
    "@media": {
      "(min-width: 640px)": {
        flexDirection: "row",
        justifyContent: "flex-end",
        borderBottomLeftRadius: "calc(16px - 1px)",
        borderBottomRightRadius: "calc(16px - 1px)",
      },
    },
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

export const panel = style([
  baseSprinkles({
    padding: "md",
    py: "xxs",
  }),
]);
