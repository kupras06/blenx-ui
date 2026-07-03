import { tokenVars } from "@blenx-dev/theme/contract";
import { style } from "@vanilla-extract/css";
import { baseSprinkles } from "../utils/sprinkles";

export const backdrop = style([
  baseSprinkles({
    position: "fixed",
    zIndex: "modal",
  }),
  style({
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
    backdropFilter: "blur(4px)",
    transitionProperty: "transform, opacity",
    transitionDuration: "200ms",
  }),
]);

export const viewport = style([
  baseSprinkles({
    position: "fixed",
    padding: "md",
  }),
  style({
    inset: 0,
    display: "grid",
    gridTemplateRows: "1fr auto 3fr",
    justifyItems: "center",
  }),
]);

export const popup = style([
  baseSprinkles({
    position: "relative",
    display: "flex",
    direction: "column",
    width: "full",
    radius: "default",
    backgroundColor: "surface",
    color: "primary",
    borderWidth: "thin",
    borderColor: "default",
    boxShadow: "lg",
  }),
  style({
    gridRowStart: 2,
    maxWidth: "28rem",
    minHeight: 0,
    maxHeight: "calc(100svh - 80px)",
    transformOrigin: "center",
    borderStyle: "solid",
    opacity: "calc(1 - var(--nested-dialogs))",
    outline: "none",
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
  }),
]);

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

export const closeButton = style([
  baseSprinkles({
    position: "absolute",
    top: "xs",
  }),
  style({
    insetInlineEnd: tokenVars.spacing.xs,
  }),
]);

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
