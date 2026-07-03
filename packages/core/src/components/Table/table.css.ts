import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    width: "full",
    color: "secondary",
  }),
  style({
    borderCollapse: "collapse",
  }),
]);

export const head = style([
  baseSprinkles({
    backgroundColor: "subtle",
  }),
]);

export const header = style([
  baseSprinkles({
    py: "sm",
    px: "md",
    fontSize: "md",
    color: "secondary",
  }),
  style({
    fontWeight: 600,
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: semanticVars.border.default,
    whiteSpace: "nowrap",
    userSelect: "none",
  }),
]);

export const row = style({
  transition: "background-color 0.15s ease",
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
  },
});

export const cell = style([
  baseSprinkles({
    py: "sm",
    px: "md",
    fontSize: "md",
  }),
  style({
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: semanticVars.border.subtle,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
]);

export const wrapper = style([
  baseSprinkles({
    radius: "default",
    maxWidth: "full",
  }),
  style({
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    overflowX: "auto",
  }),
]);

export const alignLeft = style({ textAlign: "left" });
export const alignCenter = style({ textAlign: "center" });
export const alignRight = style({ textAlign: "right" });

export const colorSecondary = style([
  baseSprinkles({
    color: "secondary",
  }),
]);
