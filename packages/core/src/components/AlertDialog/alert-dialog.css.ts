import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

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
  paddingTop: "md",
  paddingBottom: "lg",
});

export const title = baseSprinkles({
  fontSize: "lg",
  color: "primary",
  lineHeight: "tight",
  fontWeight: "semibold",
});

export const description = baseSprinkles({
  fontSize: "sm",
  color: "secondary",
  lineHeight: "normal",
});

export const panel = baseSprinkles({
  padding: "md",
  py: "xxs",
});
