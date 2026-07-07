import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const separator = recipe({
  base: [baseSprinkles({ shrink: 0 }), style({ backgroundColor: "currentColor" })],
  variants: {
    orientation: {
      horizontal: [baseSprinkles({ grow: 1 }), style({ height: 1 })],
      vertical: [baseSprinkles({ height: "full" }), style({ width: 1 })],
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
    backgroundColor: "transparent",
  }),
  style({
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
    fontWeight: "medium",
  }),
  style({
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  }),
]);
