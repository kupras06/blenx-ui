import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const footer = baseSprinkles({
  display: "flex",
  justify: "end",
  gap: "sm",
  px: "lg",
  borderRadiusTop: "none",
  borderRadius: "default",
});

export const footerDefault = style([
  baseSprinkles({
    backgroundColor: "subtle",
    py: "md",
    borderTopWidth: "thin",
    borderTopStyle: "solid",
  }),
  style({
    borderTopColor: semanticVars.border.subtle,
  }),
]);

export const footerBare = baseSprinkles({
  paddingTop: "lg",
  paddingBottom: "lg",
});

export const title = style([
  baseSprinkles({
    color: "primary",
    fontWeight: "semibold",
  }),
  style({
    fontSize: "20px",
    lineHeight: 1,
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

export const panel = baseSprinkles({
  padding: "lg",
});
