import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, borderWidth, fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
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
  paddingTop: spacing.xxl,
});

export const viewportTop = style({
  display: "grid",
  gridTemplateRows: "auto 1fr",
  paddingBottom: spacing.xxl,
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
      padding: spacing.md,
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
  backgroundColor: themeContract.surface,
  color: themeContract.contentPrimary,
  borderStyle: "solid",
  borderColor: themeContract.border,
  outline: "none",
  boxShadow: themeContract.shadowLg,
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
  borderTopWidth: borderWidth.thin,
  borderTopLeftRadius: borderRadius.xl,
  borderTopRightRadius: borderRadius.xl,
});

export const popupTop = style({
  borderBottomWidth: borderWidth.thin,
  borderBottomLeftRadius: borderRadius.xl,
  borderBottomRightRadius: borderRadius.xl,
});

export const popupLeft = style({
  width: "calc(100% - 48px)",
  maxWidth: "28rem",
  borderRightWidth: borderWidth.thin,
  borderTopRightRadius: borderRadius.xl,
  borderBottomRightRadius: borderRadius.xl,
});

export const popupRight = style({
  width: "calc(100% - 48px)",
  maxWidth: "28rem",
  borderLeftWidth: borderWidth.thin,
  borderTopLeftRadius: borderRadius.xl,
  borderBottomLeftRadius: borderRadius.xl,
});

export const popupInset = style({
  borderRadius: 0,
  borderWidth: 0,
  "::before": {
    content: "none",
  },
  "@media": {
    "(min-width: 640px)": {
      borderRadius: borderRadius.xl,
      borderWidth: borderWidth.thin,
    },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
  padding: spacing.lg,
  boxSizing: "border-box",
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: spacing.sm,
  paddingLeft: spacing.lg,
  paddingRight: spacing.lg,
  boxSizing: "border-box",
  "@media": {
    "(min-width: 640px)": {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  },
});

export const footerDefault = style({
  borderTopWidth: borderWidth.thin,
  borderTopStyle: "solid",
  borderTopColor: themeContract.borderSubtle,
  backgroundColor: themeContract.backgroundSubtle,
  paddingTop: spacing.md,
  paddingBottom: spacing.md,
});

export const footerBare = style({
  paddingTop: spacing.md,
  paddingBottom: spacing.lg,
});

export const title = style({
  fontSize: fontSize.xl,
  lineHeight: 1,
  fontWeight: fontWeight.semibold,
});

export const description = style({
  fontSize: fontSize.sm,
  lineHeight: 1.4,
  color: themeContract.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: spacing.lg,
});
