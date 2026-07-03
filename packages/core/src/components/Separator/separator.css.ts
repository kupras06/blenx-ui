import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const separator = recipe({
  base: {
    flexShrink: 0,
    backgroundColor: "currentColor",
  },
  variants: {
    orientation: {
      horizontal: { flexGrow: 1, height: 1 },
      vertical: { width: 1, height: "full" },
    },
    tone: {
      subtle: { color: semanticVars.border.subtle },
      strong: { color: semanticVars.border.strong },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    tone: "strong",
  },
});

export const withLabel = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    width: "full",
  }),
  style({
    backgroundColor: "transparent",
    selectors: {
      "&::before": {
        content: '""',
        flex: 1,
        height: 1,
        backgroundColor: "currentColor",
        opacity: 1,
      },
      "&::after": {
        content: '""',
        flex: 1,
        height: 1,
        backgroundColor: "currentColor",
        opacity: 1,
      },
    },
  }),
]);

export const label = style([
  baseSprinkles({
    px: "xs",
    color: "secondary",
    fontSize: "xs",
  }),
  style({
    fontWeight: tokenVars.fontWeight.medium,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  }),
]);
