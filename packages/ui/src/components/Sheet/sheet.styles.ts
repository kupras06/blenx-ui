import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
  borderRadius,
  borderWidth,
  fontSize,
  fontWeight,
  mediaQueries,
  spacing,
  zIndexVars,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const sheetStyles = stylex.create({
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
    backdropFilter: "blur(4px)",
    transitionProperty: {
      default: "opacity",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
    transitionDuration: {
      default: "200ms",
      "@media (prefers-reduced-motion: reduce)": "0ms",
    },
    "[data-starting-style]": {
      opacity: 0,
    },
    "[data-ending-style]": {
      opacity: 0,
    },
  },
  viewport: {
    position: "fixed",
    inset: 0,
    zIndex: zIndexVars.overlay,
    boxSizing: "border-box",
  },
  viewportBottom: {
    display: "grid",
    gridTemplateRows: "1fr auto",
    paddingTop: spacing.xxlarge,
  },
  viewportTop: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    paddingBottom: spacing.xxlarge,
  },
  viewportLeft: {
    display: "flex",
    justifyContent: "flex-start",
  },
  viewportRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  viewportInset: {
    padding: {
      default: null,
      [mediaQueries.sm]: spacing.medium,
    },
  },
  popup: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    minHeight: 0,
    minWidth: 0,
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: theme.surface,
    color: theme.contentPrimary,
    borderStyle: "solid",
    borderColor: theme.border,
    outline: "none",
    boxShadow: theme.shadowLg,
    willChange: "translate",
    transitionProperty: {
      default: "opacity, translate",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
    transitionDuration: {
      default: "200ms",
      "@media (prefers-reduced-motion: reduce)": "0ms",
    },
    transitionTimingFunction: "ease-in-out",
    "::before": {
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
    },
  },
  popupBottom: {
    gridRowStart: 2,
    borderTopWidth: borderWidth.thin,
    borderTopLeftRadius: borderRadius.xlarge,
    borderTopRightRadius: borderRadius.xlarge,
    "[data-starting-style]": {
      opacity: 0,
      translate: "0 32px",
    },
    "[data-ending-style]": {
      opacity: 0,
      translate: "0 32px",
    },
  },
  popupTop: {
    borderBottomWidth: borderWidth.thin,
    borderBottomLeftRadius: borderRadius.xlarge,
    borderBottomRightRadius: borderRadius.xlarge,
    "[data-starting-style]": {
      opacity: 0,
      translate: "0 -32px",
    },
    "[data-ending-style]": {
      opacity: 0,
      translate: "0 -32px",
    },
  },
  popupLeft: {
    width: "calc(100% - 48px)",
    maxWidth: "28rem",
    borderRightWidth: borderWidth.thin,
    borderTopRightRadius: borderRadius.xlarge,
    borderBottomRightRadius: borderRadius.xlarge,
    "[data-starting-style]": {
      opacity: 0,
      translate: "-32px 0",
    },
    "[data-ending-style]": {
      opacity: 0,
      translate: "-32px 0",
    },
  },
  popupRight: {
    width: "calc(100% - 48px)",
    maxWidth: "28rem",
    borderLeftWidth: borderWidth.thin,
    borderTopLeftRadius: borderRadius.xlarge,
    borderBottomLeftRadius: borderRadius.xlarge,
    "[data-starting-style]": {
      opacity: 0,
      translate: "32px 0",
    },
    "[data-ending-style]": {
      opacity: 0,
      translate: "32px 0",
    },
  },
  popupInset: {
    "::before": null,
    borderRadius: {
      default: 0,
      [mediaQueries.sm]: borderRadius.xlarge,
    },
    borderWidth: {
      default: 0,
      [mediaQueries.sm]: borderWidth.thin,
    },
  },
  closeButton: {
    position: "absolute",
    top: spacing.xsmall,
    insetInlineEnd: spacing.xsmall,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.small,
    padding: spacing.large,
    boxSizing: "border-box",
  },
  footer: {
    display: "flex",
    flexDirection: {
      default: "column-reverse",
      [mediaQueries.sm]: "row",
    },
    gap: spacing.small,
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
    boxSizing: "border-box",
    justifyContent: {
      [mediaQueries.sm]: "flex-end",
    },
  },
  footerDefault: {
    borderTopWidth: borderWidth.thin,
    borderTopStyle: "solid",
    borderTopColor: theme.borderSubtle,
    backgroundColor: theme.backgroundSubtle,
    paddingTop: spacing.medium,
    paddingBottom: spacing.medium,
  },
  footerBare: {
    paddingTop: spacing.medium,
    paddingBottom: spacing.large,
  },
  title: {
    fontSize: fontSize.xlarge,
    lineHeight: 1,
    fontWeight: fontWeight.semibold,
  },
  description: {
    fontSize: fontSize.small,
    lineHeight: 1.4,
    color: theme.contentSecondary,
  },
  panel: {
    boxSizing: "border-box",
    padding: spacing.large,
  },
});
