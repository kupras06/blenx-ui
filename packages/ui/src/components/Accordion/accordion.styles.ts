import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
  borderRadius,
  borderWidth,
  duration,
  easing,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

const dataPanelOpen = "[data-panel-open] &";

export const accordionStyles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
  },
  rootVertical: {
    flexDirection: "column",
  },
  item: {
    borderBottomWidth: borderWidth.thin,
    borderBottomStyle: "solid",
    borderBottomColor: theme.borderSubtle,
  },
  itemDisabled: {
    opacity: 0.5,
  },
  header: {
    margin: 0,
  },
  trigger: {
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
    width: "100%",
    paddingTop: spacing.medium,
    paddingBottom: spacing.medium,
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
    boxSizing: "border-box",
    fontSize: fontSize.small,
    lineHeight: lineHeight.normal,
    fontWeight: fontWeight.medium,
    color: theme.contentPrimary,
    backgroundColor: "transparent",
    border: "none",
    borderRadius: borderRadius.small,
    appearance: "none",
    fontFamily: "inherit",
    textAlign: "left",
    borderWidth: 0,
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    outline: {
      default: "none",
      ":focus-visible": `2px solid ${theme.focusRing}`,
    },
    outlineOffset: "2px",
    ":hover": {
      backgroundColor: theme.surfaceHover,
    },
    transitionProperty: "background-color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
  },
  triggerOpen: {},
  triggerIcon: {
    flexShrink: 0,
    color: theme.contentSecondary,
    transform: "rotate(0deg)",
    transitionProperty: "transform",
    transitionDuration: duration.normal,
    transitionTimingFunction: easing.standard,
    [dataPanelOpen]: {
      transform: "rotate(180deg)",
    },
  },
  triggerIconOpen: {},
  panel: {
    overflow: "hidden",
    boxSizing: "border-box",
    transitionProperty: "grid-template-rows, opacity",
    padding: spacing.medium,
    transitionDuration: duration.normal,
    transitionTimingFunction: easing.standard,
  },
  panelOpen: {},
});
