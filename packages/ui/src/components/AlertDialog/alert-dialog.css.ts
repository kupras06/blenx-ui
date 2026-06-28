import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderWidth, fontSize, fontWeight, lineHeight, spacing } from "@blenx-dev/theme/tokens";

export const backdrop = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.32)",
  backdropFilter: "blur(4px)",
  transitionProperty: "transform, opacity",
  transitionDuration: "200ms",
});

export const viewport = style({
  position: "fixed",
  inset: 0,
  display: "grid",
  gridTemplateRows: "1fr auto 3fr",
  justifyItems: "center",
  padding: spacing.md,
  boxSizing: "border-box",
});

export const popup = style({
  position: "relative",
  gridRowStart: 2,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "28rem",
  minHeight: 0,
  maxHeight: "calc(100svh - 80px)",
  transformOrigin: "center",
  borderWidth: borderWidth.thin,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: themeContract.borderRadius,
  backgroundColor: themeContract.surface,
  color: themeContract.contentPrimary,
  boxSizing: "border-box",
  opacity: "calc(1 - var(--nested-dialogs))",
  outline: "none",
  boxShadow: themeContract.shadowLg,
  transitionProperty: "opacity, translate",
  transitionDuration: "200ms",
  transitionTimingFunction: "ease-in-out",
  willChange: "transform",
  "::before": {
    content: '""',
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    borderRadius: "calc(16px - 1px)",
    boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
  },
});

export const viewportShellBottomStickOnMobile = style({
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      padding: spacing.sm,
      paddingBottom: 0,
    },
  },
});

export const popupBottomStickOnMobile = style({
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      maxWidth: "100%",
      maxHeight: "70svh",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
});

export const closeButton = style({
  position: "absolute",
  top: 4,
  right: 4,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xxs,
  padding: spacing.md,
  boxSizing: "border-box",
  paddingBottom: spacing.xs,
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: spacing.sm,
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
  boxSizing: "border-box",
  "@media": {
    "(min-width: 640px)": {
      flexDirection: "row",
      justifyContent: "flex-end",
      borderBottomLeftRadius: "calc(16px - 1px)",
      borderBottomRightRadius: "calc(16px - 1px)",
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
  fontSize: fontSize.lg,
  lineHeight: lineHeight.tight,
  fontWeight: fontWeight.semibold,
  color: themeContract.contentPrimary,
});

export const description = style({
  fontSize: fontSize.sm,
  lineHeight: lineHeight.normal,
  color: themeContract.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: spacing.md,
  paddingTop: spacing.xxs,
  paddingBottom: spacing.xxs,
});
