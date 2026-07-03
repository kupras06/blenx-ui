import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    color: "secondary",
  }),
  style({
    gap: "4px",
    fontSize: 14,
  }),
]);

export const list = style([
  baseSprinkles({
    display: "flex",
    flexWrap: "wrap",
    align: "center",
    gap: "6",
    fontSize: "md",
    color: "secondary",
  }),
  style({
    "@media": {
      "screen and (min-width: 768px)": {
        gap: 10,
      },
    },
  }),
]);

export const item = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
  }),
  style({
    gap: 6,
  }),
]);

export const link = style({
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  transitionProperty: "color",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease",
  selectors: {
    "&:hover": {
      color: semanticVars.text.primary,
    },
  },
});

export const page = style([
  baseSprinkles({
    color: "primary",
  }),
  style({
    fontWeight: 400,
  }),
]);

export const separator = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
  }),
]);

export const ellipsis = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
  }),
]);

export const srOnly = style({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});
