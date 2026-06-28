import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, borderWidth, fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

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
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
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
      borderWidth: borderWidth.thin,
      borderRadius: borderRadius.xl,
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

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
  paddingTop: spacing.lg,
  paddingLeft: spacing.lg,
  paddingRight: spacing.lg,
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
  fontSize: "20px",
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
  paddingTop: spacing.lg,
  paddingLeft: spacing.lg,
  paddingRight: spacing.lg,
  paddingBottom: spacing.lg,
});

export const bar = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: spacing.sm,
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
  gap: spacing.sm,
  minHeight: "36px",
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
  borderRadius: borderRadius.sm,
  border: "none",
  backgroundColor: "transparent",
  color: themeContract.contentPrimary,
  fontSize: fontSize.md,
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
  marginTop: spacing.xs,
  marginBottom: spacing.xs,
});

export const menuGroup = style({
  display: "flex",
  flexDirection: "column",
});

export const menuGroupLabel = style({
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  color: themeContract.contentSecondary,
});

export const menuTrigger = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  minHeight: "36px",
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
  borderRadius: borderRadius.sm,
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
  gap: spacing.sm,
  minHeight: "36px",
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
  borderRadius: borderRadius.sm,
  backgroundColor: "transparent",
  border: "none",
  color: themeContract.contentPrimary,
});

export const menuCheckboxDefault = style({
  gridTemplateColumns: "1rem 1fr",
  paddingRight: spacing.md,
});

export const menuCheckboxSwitch = style({
  gridTemplateColumns: "1fr auto",
  paddingRight: spacing.xs,
});

export const menuCheckboxSwitchLabel = style({
  gridColumnStart: 1,
});

export const menuCheckboxSwitchIndicator = style({
  gridColumnStart: 2,
  display: "inline-flex",
  alignItems: "center",
  padding: "2px",
  borderRadius: borderRadius.full,
  backgroundColor: themeContract.borderSubtle,
});

export const menuCheckboxSwitchThumb = style({
  width: "14px",
  height: "14px",
  borderRadius: borderRadius.full,
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
  gap: spacing.sm,
  minHeight: "36px",
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.md,
  borderRadius: borderRadius.sm,
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
