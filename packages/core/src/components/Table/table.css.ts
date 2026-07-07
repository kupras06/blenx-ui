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

export const head = baseSprinkles({
  backgroundColor: "subtle",
});

export const header = style([
  baseSprinkles({
    py: "sm",
    px: "md",
    fontSize: "md",
    color: "secondary",
    borderBottomWidth: "thin",
    fontWeight: "semibold",
    borderBottomStyle: "solid",
  }),
  style({
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
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
    borderBottomWidth: "thin",
    borderBottomStyle: "solid",
  }),
  style({
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
    borderWidth: "thin",
    borderStyle: "solid",
    overflow: "auto",
  }),
  style({
    borderColor: semanticVars.border.default,
  }),
]);

export const alignLeft = style({ textAlign: "left" });
export const alignCenter = style({ textAlign: "center" });
export const alignRight = style({ textAlign: "right" });

export const colorSecondary = baseSprinkles({
  color: "secondary",
});
