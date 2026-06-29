import { themeContract, tokenVars } from "@blenx-dev/theme/contract";
import { style } from "@vanilla-extract/css";

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
  padding: tokenVars.spacing.md,
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
  borderWidth: tokenVars.borderWidth.thin,
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
      padding: tokenVars.spacing.sm,
      paddingBottom: 0,
    },
  },
});

export const closeButton = style({
  position: "absolute",
  top: tokenVars.spacing.xs,
  insetInlineEnd: tokenVars.spacing.xs,
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
