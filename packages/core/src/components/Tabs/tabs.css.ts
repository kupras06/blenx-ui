import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style({
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
});

export const rootVertical = style({});

export const list = style({
  position: "relative",
  overflow: "hidden",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
});

export const listDefault = style({
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.subtle,
});

export const listUnderline = style([
  baseSprinkles({
    display: "flex",
    align: "stretch",
    gap: "lg",
    padding: "0",
  }),
  style({
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: semanticVars.border.subtle,
  }),
]);

export const listUnderlineVertical = style([
  baseSprinkles({
    direction: "column",
    align: "stretch",
    gap: "0",
    px: "sm",
    padding: "0",
    borderRadius: "none",
    backgroundColor: "transparent",
  }),
  style({
    alignSelf: "auto",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: semanticVars.border.subtle,
  }),
]);

export const listVertical = style([
  baseSprinkles({
    direction: "column",
    align: "stretch",
  }),
  style({
    minWidth: 220,
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: semanticVars.border.subtle,
  }),
]);

export const tabActiveVertical = style([
  baseSprinkles({
    color: "primary",
    backgroundColor: "subtle",
  }),
  style({
    fontWeight: tokenVars.fontWeight.semibold,
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: semanticVars.interactive.secondary.default,
  }),
]);

export const tabUnderlineActive = style([
  baseSprinkles({
    color: "primary",
  }),
  style({
    fontWeight: tokenVars.fontWeight.semibold,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: semanticVars.text.primary,
  }),
]);

export const listGhost = style([
  baseSprinkles({
    display: "flex",
    gap: "sm",
  }),
]);

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

export const tabGhostActive = style([
  baseSprinkles({
    backgroundColor: "subtle",
    color: "primary",
  }),
  style({
    fontWeight: tokenVars.fontWeight.semibold,
  }),
]);

export const listSegmented = style([
  baseSprinkles({
    display: "flex",
    gap: "xxs",
    padding: "xxs",
    radius: "lg",
    backgroundColor: "subtle",
  }),
  style({
    borderWidth: 1,
    borderStyle: "solid",
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
  }),
  style({
    color: semanticVars.interactive.primaryFg,
    fontWeight: tokenVars.fontWeight.semibold,
  }),
]);

export const tab = style({
  position: "relative",
  minHeight: 36,
  backgroundColor: "transparent",
  cursor: "pointer",
  appearance: "none",
  outline: "none",
  borderWidth: 0,
  border: "none",
  textDecoration: "none",
  whiteSpace: "nowrap",
  userSelect: "none",
  font: "inherit",
  fontFamily: tokenVars.font.body,
  WebkitTapHighlightColor: "transparent",
  transition: `color ${tokenVars.duration.normal} ${tokenVars.easing.standard}, background-color ${tokenVars.duration.normal} ${tokenVars.easing.standard}, box-shadow ${tokenVars.duration.normal} ${tokenVars.easing.standard}`,
});

export const tabDefault = style([
  baseSprinkles({
    color: "secondary",
    fontSize: "sm",
    position: "relative",
    py: "sm",
    backgroundColor: "transparent",
    px: "md",
    borderRadius: "none",
  }),
  style({
    fontWeight: tokenVars.fontWeight.medium,
    lineHeight: 1.2,
    minHeight: 40,
    selectors: {
      "&:hover": {
        color: semanticVars.text.primary,
        backgroundColor: semanticVars.background.subtle,
      },
      "&:focus-visible": {
        boxShadow: `inset 0 -2px 0 ${semanticVars.interactive.secondary}`,
      },
    },
  }),
]);

export const tabVertical = style([
  baseSprinkles({
    width: "full",
    justify: "start",
  }),
]);

export const tabActive = style([
  baseSprinkles({
    color: "primary",
  }),
  style({
    fontWeight: tokenVars.fontWeight.semibold,
  }),
]);

export const tabDisabled = style({
  opacity: 0.45,
  cursor: "not-allowed",
});

export const tabActiveDefault = style([
  baseSprinkles({
    color: "primary",
  }),
  style({
    fontWeight: tokenVars.fontWeight.semibold,
    backgroundColor: "transparent",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: semanticVars.interactive.secondary.default,
  }),
]);

export const tabUnderline = style([
  baseSprinkles({
    color: "secondary",
    fontSize: "sm",
    backgroundColor: "transparent",
    py: "sm",
    px: "0",
    borderRadius: "none",
  }),
  style({
    fontWeight: tokenVars.fontWeight.medium,
    selectors: {
      "&:hover": {
        color: semanticVars.text.primary,
      },
    },
  }),
]);

export const indicator = style([
  baseSprinkles({
    position: "absolute",
    zIndex: "base",
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
    zIndex: "base",
    radius: "full",
  }),
  style({
    backgroundColor: semanticVars.interactive.secondary.default,
  }),
]);

export const panelVertical = style([
  baseSprinkles({
    grow: 1,
  }),
]);
