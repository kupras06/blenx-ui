import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, borderWidth, spacing } from "@blenx-dev/theme/tokens";

export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  backgroundColor: "rgba(0, 0, 0, 0.32)",
  backdropFilter: "blur(4px)",
  transitionProperty: "opacity, transform",
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
  zIndex: 51,
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
  minWidth: 0,
  maxWidth: "32rem",
  maxHeight: "100%",
  minHeight: 0,
  transformOrigin: "center",
  borderWidth: borderWidth.thin,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: borderRadius.xl,
  backgroundColor: themeContract.surface,
  color: themeContract.contentPrimary,
  boxSizing: "border-box",
  opacity: "calc(1 - var(--nested-dialogs))",
  outline: "none",
  transitionProperty: "transform, opacity",
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
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transitionProperty: "none",
      transitionDuration: "0ms",
    },
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
      maxHeight: "90svh",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
});

export const closeButton = style({
  position: "absolute",
  top: spacing.sm,
  insetInlineEnd: spacing.sm,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
  padding: spacing.lg,
  boxSizing: "border-box",
  selectors: {
    "[data-has-panel] &": {
      paddingBottom: spacing.sm,
    },
  },
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: spacing.sm,
  paddingLeft: spacing.lg,
  paddingRight: spacing.lg,
  boxSizing: "border-box",
  paddingBottom: "env(safe-area-inset-bottom)",
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
  fontSize: "20px",
  lineHeight: 1,
  fontWeight: 600,
  color: themeContract.contentPrimary,
});

export const description = style({
  fontSize: "14px",
  lineHeight: 1.4,
  color: themeContract.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: spacing.lg,
});
