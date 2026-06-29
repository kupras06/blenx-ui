import { style } from "@vanilla-extract/css";
import { themeContract, tokenVars } from "@blenx-dev/theme/contract";

export const swipeArea = style({
  position: "fixed",
  zIndex: 50,
  touchAction: "none",
});

export const swipeAreaBottom = style({
  left: 0,
  right: 0,
  bottom: 0,
  height: "32px",
});

export const swipeAreaTop = style({
  left: 0,
  right: 0,
  top: 0,
  height: "32px",
});

export const swipeAreaLeft = style({
  top: 0,
  bottom: 0,
  left: 0,
  width: "32px",
});

export const swipeAreaRight = style({
  top: 0,
  bottom: 0,
  right: 0,
  width: "32px",
});

export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  backgroundColor: "rgba(0, 0, 0, 0.32)",
  backdropFilter: "blur(4px)",
  transitionProperty: "opacity",
  transitionDuration: "450ms",
  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
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
  touchAction: "none",
  boxSizing: "border-box",
});

export const viewportBottom = style({
  display: "grid",
  gridTemplateRows: "1fr auto",
  paddingTop: "48px",
});

export const viewportTop = style({
  display: "grid",
  gridTemplateRows: "auto 1fr",
  paddingBottom: "48px",
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
  paddingLeft: tokenVars.spacing.md,
  paddingRight: tokenVars.spacing.md,
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
  willChange: "transform",
  transitionProperty: "transform, box-shadow, height, background-color, margin, padding",
  transitionDuration: "450ms",
  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transitionProperty: "none",
      transitionDuration: "0ms",
    },
  },
});

export const popupDefault = style({
  boxShadow: themeContract.shadowLg,
});

export const popupStraight = style({
  vars: {
    "--stack-step": "0",
  },
});

export const popupInset = style({
  borderWidth: "none",
  borderRadius: "none",
  "@media": {
    "(min-width: 640px)": {
      borderWidth: tokenVars.borderWidth.thin,
      borderRadius: tokenVars.borderRadius.xl,
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

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: tokenVars.spacing.sm,
  paddingTop: tokenVars.spacing.lg,
  paddingLeft: tokenVars.spacing.lg,
  paddingRight: tokenVars.spacing.lg,
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
  borderTopColor: themeContract.borderSubtle,
  backgroundColor: themeContract.backgroundSubtle,
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.md,
});

export const footerBare = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.lg,
});

export const title = style({
  fontSize: "20px",
  lineHeight: 1,
  fontWeight: tokenVars.fontWeight.semibold,
});

export const description = style({
  fontSize: tokenVars.fontSize.sm,
  lineHeight: 1.4,
  color: themeContract.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  paddingTop: tokenVars.spacing.lg,
  paddingLeft: tokenVars.spacing.lg,
  paddingRight: tokenVars.spacing.lg,
  paddingBottom: tokenVars.spacing.lg,
});

export const bar = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: tokenVars.spacing.sm,
  touchAction: "none",
});

export const barHorizontal = style({
  insetInline: 0,
  height: "48px",
});

export const barVertical = style({
  insetBlock: 0,
  width: "48px",
});

export const barTop = style({
  bottom: 0,
});

export const barBottom = style({
  top: 0,
});

export const barLeft = style({
  right: 0,
});

export const barRight = style({
  left: 0,
});

export const menu = style({
  display: "flex",
  flexDirection: "column",
});

export const menuItem = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  minHeight: "36px",
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  borderRadius: tokenVars.borderRadius.sm,
  border: "none",
  backgroundColor: "transparent",
  color: themeContract.contentPrimary,
  fontSize: tokenVars.fontSize.md,
  textAlign: "left",
  cursor: "default",
  outline: "none",
});

export const menuItemDestructive = style({
  color: themeContract.sentimentNegative,
});

export const separator = style({
  height: "1px",
  backgroundColor: themeContract.borderSubtle,
  marginTop: tokenVars.spacing.xs,
  marginBottom: tokenVars.spacing.xs,
});

export const menuGroup = style({
  display: "flex",
  flexDirection: "column",
});

export const menuGroupLabel = style({
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
  color: themeContract.contentSecondary,
});

export const menuTrigger = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  minHeight: "36px",
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  borderRadius: tokenVars.borderRadius.sm,
  backgroundColor: "transparent",
  border: "none",
  color: themeContract.contentPrimary,
});

export const menuTriggerIcon = style({
  marginLeft: "auto",
  marginRight: "-2px",
  opacity: 0.8,
});

export const menuCheckbox = style({
  display: "grid",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  minHeight: "36px",
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  borderRadius: tokenVars.borderRadius.sm,
  backgroundColor: "transparent",
  border: "none",
  color: themeContract.contentPrimary,
});

export const menuCheckboxDefault = style({
  gridTemplateColumns: "1rem 1fr",
  paddingRight: tokenVars.spacing.md,
});

export const menuCheckboxSwitch = style({
  gridTemplateColumns: "1fr auto",
  paddingRight: tokenVars.spacing.xs,
});

export const menuCheckboxSwitchLabel = style({
  gridColumnStart: 1,
});

export const menuCheckboxSwitchIndicator = style({
  gridColumnStart: 2,
  display: "inline-flex",
  alignItems: "center",
  padding: "2px",
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: themeContract.borderSubtle,
});

export const menuCheckboxSwitchThumb = style({
  width: "14px",
  height: "14px",
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: themeContract.background,
});

export const menuCheckboxIndicator = style({
  gridColumnStart: 1,
});

export const menuCheckboxLabel = style({
  gridColumnStart: 2,
});

export const menuRadio = style({
  display: "grid",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  minHeight: "36px",
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.md,
  borderRadius: tokenVars.borderRadius.sm,
  backgroundColor: "transparent",
  border: "none",
  color: themeContract.contentPrimary,
  gridTemplateColumns: "1rem 1fr",
});

export const menuRadioIndicator = style({
  gridColumnStart: 1,
});

export const menuRadioLabel = style({
  gridColumnStart: 2,
});
