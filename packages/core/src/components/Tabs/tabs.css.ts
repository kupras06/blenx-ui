import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const rootVertical = style({});

export const listUnderline = baseSprinkles({
  display: "flex",
  align: "stretch",
  padding: "0",
});

export const listVertical = style([
  baseSprinkles({
    direction: "column",
    align: "stretch",
    borderRightWidth: "thin",
    borderRightStyle: "solid",
  }),
  style({
    minWidth: 220,
    borderRightColor: semanticVars.border.subtle,
  }),
]);

export const tabActiveVertical = style([
  baseSprinkles({
    color: "primary",
    backgroundColor: "subtle",
    fontWeight: "semibold",
  }),
  style({
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: semanticVars.color.secondary.default,
  }),
]);

export const listGhost = baseSprinkles({
  display: "flex",
  gap: "sm",
});

export const tabGhost = style([
  baseSprinkles({
    radius: "md",
    color: "secondary",
    py: "sm",
    px: "md",
  }),
  style({
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
    },
  }),
]);

export const tabGhostActive = baseSprinkles({
  backgroundColor: "subtle",
  color: "primary",
  fontWeight: "semibold",
});

export const listSegmented = style([
  baseSprinkles({
    display: "flex",
    gap: "xxs",
    padding: "xxs",
    radius: "lg",
    backgroundColor: "subtle",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  style({
    borderColor: semanticVars.border.subtle,
  }),
]);

export const tabSegmented = style([
  baseSprinkles({
    radius: "md",
    color: "secondary",
    py: "sm",
    px: "md",
  }),
  style({
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.surface.default,
      },
    },
  }),
]);

export const tabSegmentedActive = style([
  baseSprinkles({
    backgroundColor: "surface",
    fontWeight: "semibold",
  }),
  style({
    color: semanticVars.color.primary.fg,
  }),
]);

export const tab = style([
  baseSprinkles({ borderBottomStyle: "solid", cursor: "pointer" }),
  style({
    minHeight: 36,
    appearance: "none",
    outline: "none",
    border: "none",
    borderBottomColor: semanticVars.border.default,
    textDecoration: "none",
    whiteSpace: "nowrap",
    userSelect: "none",
    font: "inherit",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.color.primary.text,
      },
      "&:active": {
        backgroundColor: semanticVars.surface.overlay,
        color: semanticVars.color.primary.text,
      },
    },
    fontFamily: tokenVars.font.body,
    WebkitTapHighlightColor: "transparent",
    transition: `color ${tokenVars.duration.normal} ${tokenVars.easing.standard}, background-color ${tokenVars.duration.normal} ${tokenVars.easing.standard}, box-shadow ${tokenVars.duration.normal} ${tokenVars.easing.standard}`,
  }),
]);

export const tabDefault = style([
  baseSprinkles({
    color: "secondary",
    fontSize: "sm",
    position: "relative",
    py: "sm",
    backgroundColor: "transparent",
    px: "md",
    fontWeight: "medium",
  }),
  style({
    lineHeight: 1.2,
    minHeight: 40,
    selectors: {
      "&:hover": {
        color: semanticVars.text.primary,
        backgroundColor: semanticVars.background.subtle,
      },
      "&:focus-visible": {
        boxShadow: `inset 0 -2px 0 ${semanticVars.color.secondary}`,
      },
    },
  }),
]);

export const tabVertical = baseSprinkles({
  width: "full",
  justify: "start",
});

export const tabActive = baseSprinkles({
  color: "primary",
  fontWeight: "semibold",
});

export const tabDisabled = style([
  baseSprinkles({ cursor: "not-allowed" }),
  style({ opacity: 0.45 }),
]);

export const tabUnderline = style([
  baseSprinkles({
    fontSize: "sm",
    backgroundColor: "transparent",
    py: "sm",
    px: "0",
    borderBottomWidth: "thin",
    borderBottomRightRadius: "none",
    borderBottomLeftRadius: "none",
    fontWeight: "medium",
  }),
  style({
    selectors: {
      "&:hover": {
        color: semanticVars.text.primary,
      },
      "&[data-active]": {
        fontWeight: tokenVars.fontWeight.semibold,
        borderBottomStyle: "solid",

        borderBottomColor: semanticVars.text.primary,
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.color.primary.text,
      },
    },
  }),
]);

export const indicator = style([
  baseSprinkles({
    position: "absolute",
  }),
  style({
    pointerEvents: "none",
  }),
]);

export const indicatorDefault = style({
  display: "none",
});

export const indicatorUnderline = style([
  baseSprinkles({
    radius: "full",
  }),
  style({
    backgroundColor: semanticVars.color.secondary.default,
  }),
]);

export const panelVertical = baseSprinkles({
  grow: 1,
});
