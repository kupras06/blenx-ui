import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const backdrop = style([
  baseSprinkles({
    position: "fixed",
  }),
  style({
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
    backdropFilter: "blur(4px)",
    transitionProperty: "opacity",
    transitionDuration: "200ms",
    "@media": {
      "(prefers-reduced-motion: reduce)": {
        transitionProperty: "none",
        transitionDuration: "0ms",
      },
    },
  }),
]);

export const viewport = style({
  position: "fixed",
  inset: 0,
});

export const viewportBottom = style([
  baseSprinkles({
    display: "grid",
    paddingTop: "xxl",
  }),
  style({
    gridTemplateRows: "1fr auto",
  }),
]);

export const viewportTop = style([
  baseSprinkles({
    display: "grid",
    paddingBottom: "xxl",
  }),
  style({
    gridTemplateRows: "auto 1fr",
  }),
]);

export const viewportLeft = baseSprinkles({
  display: "flex",
  justify: "start",
});

export const viewportRight = baseSprinkles({
  display: "flex",
  justify: "end",
});

export const viewportInset = style({
  "@media": {
    "(min-width: 640px)": {
      padding: tokenVars.spacing.md,
    },
  },
});

export const popup = style([
  baseSprinkles({
    position: "relative",
    display: "flex",
    direction: "column",
    width: "full",
    backgroundColor: "surface",
    color: "primary",
    boxShadow: "lg",
    borderStyle: "solid",
  }),
  style({
    maxHeight: "100svh%",
    minHeight: 0,
    minWidth: 0,
    borderColor: semanticVars.border.default,
    outline: "none",
    willChange: "translate",
    transitionProperty: "opacity, translate",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out",
    "::before": {
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
    },
    "@media": {
      "(prefers-reduced-motion: reduce)": {
        transitionProperty: "none",
        transitionDuration: "0ms",
      },
    },
  }),
]);

export const popupBottom = style([
  baseSprinkles({
    borderTopWidth: "thin",
    borderTopLeftRadius: "xl",
    borderTopRightRadius: "xl",
  }),
  style({
    gridRowStart: 2,
  }),
]);

export const popupTop = baseSprinkles({
  borderBottomWidth: "thin",
  borderBottomLeftRadius: "xl",
  borderBottomRightRadius: "xl",
});

export const popupLeft = style([
  baseSprinkles({
    borderRightWidth: "thin",
    borderTopRightRadius: "xl",
    borderBottomRightRadius: "xl",
  }),
  style({
    width: "calc(100% - 48px)",
    maxWidth: "28rem",
  }),
]);

export const popupRight = style([
  baseSprinkles({
    borderLeftWidth: "thin",
    borderTopLeftRadius: "xl",
    borderBottomLeftRadius: "xl",
  }),
  style({
    width: "calc(100% - 48px)",
    maxWidth: "28rem",
  }),
]);

export const popupInset = style([
  baseSprinkles({
    radius: "none",
    borderWidth: "none",
  }),
  style({
    "::before": {
      content: "none",
    },
    "@media": {
      "(min-width: 640px)": {
        borderRadius: tokenVars.borderRadius.xl,
        borderWidth: tokenVars.borderWidth.thin,
      },
    },
  }),
]);

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

export const title = style([
  baseSprinkles({
    fontSize: "xl",
    fontWeight: "semibold",
  }),
  style({
    lineHeight: 1,
  }),
]);

export const description = style([
  baseSprinkles({
    color: "secondary",
    fontSize: "sm",
  }),
  style({
    lineHeight: 1.4,
  }),
]);

export const panel = baseSprinkles({
  padding: "lg",
});
