import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
import { borderRadius, borderWidth, fontSize, fontWeight, spacing } from "#theme/tokens.css";

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
  paddingTop: spacing.xxlarge,
});

export const viewportTop = style({
  display: "grid",
  gridTemplateRows: "auto 1fr",
  paddingBottom: spacing.xxlarge,
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
      padding: spacing.medium,
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
  borderTopLeftRadius: borderRadius.xlarge,
  borderTopRightRadius: borderRadius.xlarge,
});

export const popupTop = style({
  borderBottomWidth: borderWidth.thin,
  borderBottomLeftRadius: borderRadius.xlarge,
  borderBottomRightRadius: borderRadius.xlarge,
});

export const popupLeft = style({
  width: "calc(100% - 48px)",
  maxWidth: "28rem",
  borderRightWidth: borderWidth.thin,
  borderTopRightRadius: borderRadius.xlarge,
  borderBottomRightRadius: borderRadius.xlarge,
});

export const popupRight = style({
  width: "calc(100% - 48px)",
  maxWidth: "28rem",
  borderLeftWidth: borderWidth.thin,
  borderTopLeftRadius: borderRadius.xlarge,
  borderBottomLeftRadius: borderRadius.xlarge,
});

export const popupInset = style({
  borderRadius: 0,
  borderWidth: 0,
  "::before": {
    content: "none",
  },
  "@media": {
    "(min-width: 640px)": {
      borderRadius: borderRadius.xlarge,
      borderWidth: borderWidth.thin,
    },
  },
});

export const closeButton = style({
  position: "absolute",
  top: spacing.xsmall,
  insetInlineEnd: spacing.xsmall,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.small,
  padding: spacing.large,
  boxSizing: "border-box",
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: spacing.small,
  paddingLeft: spacing.large,
  paddingRight: spacing.large,
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
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
});

export const footerBare = style({
  paddingTop: spacing.medium,
  paddingBottom: spacing.large,
});

export const title = style({
  fontSize: fontSize.xlarge,
  lineHeight: 1,
  fontWeight: fontWeight.semibold,
});

export const description = style({
  fontSize: fontSize.small,
  lineHeight: 1.4,
  color: themeContract.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: spacing.large,
});
