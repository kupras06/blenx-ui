import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { borderWidth, fontSize, fontWeight, lineHeight, spacing } from "#theme/tokens.css";

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
  padding: spacing.medium,
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
  transformOrigin: "center",
  borderWidth: borderWidth.thin,
  borderStyle: "solid",
  borderColor: theme.border,
  borderRadius: theme.borderRadius,
  backgroundColor: theme.surface,
  color: theme.contentPrimary,
  boxSizing: "border-box",
  opacity: "calc(1 - var(--nested-dialogs))",
  outline: "none",
  boxShadow: theme.shadowLg,
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
  top: 4,
  right: 4,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.small,
  padding: spacing.large,
  boxSizing: "border-box",
  paddingBottom: spacing.small,
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
      borderBottomLeftRadius: "calc(16px - 1px)",
      borderBottomRightRadius: "calc(16px - 1px)",
    },
  },
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
  fontSize: fontSize.large,
  lineHeight: lineHeight.tight,
  fontWeight: fontWeight.semibold,
  color: theme.contentPrimary,
});

export const description = style({
  fontSize: fontSize.small,
  lineHeight: lineHeight.normal,
  color: theme.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: spacing.large,
  paddingTop: spacing.xsmall,
  paddingBottom: spacing.xsmall,
});
