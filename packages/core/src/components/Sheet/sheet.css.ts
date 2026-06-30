import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const backdrop = style({
  position: "fixed",
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
});

export const viewport = style({
  position: "fixed",
  inset: 0,
  boxSizing: "border-box",
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

export const popup = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  maxHeight: "100%",
  minHeight: 0,
  minWidth: 0,
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: semanticVars.surface.default,
  color: semanticVars.text.primary,
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
});

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

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: tokenVars.spacing.sm,
  padding: tokenVars.spacing.lg,
  boxSizing: "border-box",
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: tokenVars.spacing.sm,
  paddingLeft: tokenVars.spacing.lg,
  paddingRight: tokenVars.spacing.lg,
  boxSizing: "border-box",
  "@media": {
    "(min-width: 640px)": {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  },
});

export const footerDefault = style({
  borderTopWidth: tokenVars.borderWidth.thin,
  borderTopStyle: "solid",
  borderTopColor: semanticVars.border.subtle,
  backgroundColor: semanticVars.background.subtle,
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.md,
});

export const footerBare = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.lg,
});

export const title = style({
  fontSize: tokenVars.fontSize.xl,
  lineHeight: 1,
  fontWeight: tokenVars.fontWeight.semibold,
});

export const description = style({
  fontSize: tokenVars.fontSize.sm,
  lineHeight: 1.4,
  color: semanticVars.text.secondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: tokenVars.spacing.lg,
});
