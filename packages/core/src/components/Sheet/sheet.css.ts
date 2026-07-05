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

export const viewportBottom = style({
  display: "grid",
  gridTemplateRows: "1fr auto",
  paddingTop: tokenVars.spacing.xxl,
});

export const viewportTop = style({
  display: "grid",
  gridTemplateRows: "auto 1fr",
  paddingBottom: tokenVars.spacing.xxl,
});

export const viewportLeft = style({
  display: "flex",
  justifyContent: "flex-start",
});

export const viewportRight = style({
  display: "flex",
  justifyContent: "flex-end",
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
  }),
  style({
    maxHeight: "100svh%",
    minHeight: 0,
    minWidth: 0,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    outline: "none",
    boxShadow: tokenVars.shadow.lg,
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

export const popupBottom = style({
  gridRowStart: 2,
  borderTopWidth: tokenVars.borderWidth.thin,
  borderTopLeftRadius: tokenVars.borderRadius.xl,
  borderTopRightRadius: tokenVars.borderRadius.xl,
});

export const popupTop = style({
  borderBottomWidth: tokenVars.borderWidth.thin,
  borderBottomLeftRadius: tokenVars.borderRadius.xl,
  borderBottomRightRadius: tokenVars.borderRadius.xl,
});

export const popupLeft = style({
  width: "calc(100% - 48px)",
  maxWidth: "28rem",
  borderRightWidth: tokenVars.borderWidth.thin,
  borderTopRightRadius: tokenVars.borderRadius.xl,
  borderBottomRightRadius: tokenVars.borderRadius.xl,
});

export const popupRight = style({
  width: "calc(100% - 48px)",
  maxWidth: "28rem",
  borderLeftWidth: tokenVars.borderWidth.thin,
  borderTopLeftRadius: tokenVars.borderRadius.xl,
  borderBottomLeftRadius: tokenVars.borderRadius.xl,
});

export const popupInset = style({
  borderRadius: 0,
  borderWidth: 0,
  "::before": {
    content: "none",
  },
  "@media": {
    "(min-width: 640px)": {
      borderRadius: tokenVars.borderRadius.xl,
      borderWidth: tokenVars.borderWidth.thin,
    },
  },
});

export const header = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    gap: "sm",
  }),
  style({
    padding: tokenVars.spacing.lg,
  }),
]);

export const footerDefault = style([
  baseSprinkles({
    backgroundColor: "subtle",
    py: "md",
  }),
  style({
    borderTopWidth: tokenVars.borderWidth.thin,
    borderTopStyle: "solid",
    borderTopColor: semanticVars.border.subtle,
  }),
]);

export const footerBare = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.lg,
});

export const title = style({
  fontSize: tokenVars.fontSize.xl,
  lineHeight: 1,
  fontWeight: tokenVars.fontWeight.semibold,
});

export const description = style([
  baseSprinkles({
    color: "secondary",
  }),
  style({
    fontSize: tokenVars.fontSize.sm,
    lineHeight: 1.4,
  }),
]);

export const panel = baseSprinkles({
  padding: "lg",
});
