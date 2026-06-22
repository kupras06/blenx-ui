import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { borderRadius, borderWidth, spacing } from "#theme/tokens.css";

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
  padding: spacing.medium,
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
  borderColor: theme.border,
  borderRadius: borderRadius.xlarge,
  backgroundColor: theme.surface,
  color: theme.contentPrimary,
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
      padding: spacing.small,
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
  top: spacing.small,
  insetInlineEnd: spacing.small,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.small,
  padding: spacing.large,
  boxSizing: "border-box",
  selectors: {
    "[data-has-panel] &": {
      paddingBottom: spacing.small,
    },
  },
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: spacing.small,
  paddingLeft: spacing.large,
  paddingRight: spacing.large,
  boxSizing: "border-box",
  paddingBottom: "env(safe-area-inset-bottom)",
});

export const footerDefault = style({
  borderTopWidth: borderWidth.thin,
  borderTopStyle: "solid",
  borderTopColor: theme.borderSubtle,
  backgroundColor: theme.backgroundSubtle,
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
});

export const footerBare = style({
  paddingTop: spacing.medium,
  paddingBottom: spacing.large,
});

export const title = style({
  fontSize: "20px",
  lineHeight: 1,
  fontWeight: 600,
  color: theme.contentPrimary,
});

export const description = style({
  fontSize: "14px",
  lineHeight: 1.4,
  color: theme.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: spacing.large,
});
