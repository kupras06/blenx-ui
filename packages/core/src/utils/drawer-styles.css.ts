import { tokenVars } from "@blenx-dev/theme/contract";
import { style } from "@vanilla-extract/css";
import { baseSprinkles } from "../utils/sprinkles";

export const backdrop = style([
  baseSprinkles({
    position: "fixed",
  }),
  style({
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
    backdropFilter: "blur(4px)",
    transitionProperty: "transform, opacity",
    transitionDuration: "200ms",
    opacity: "calc(.32 + var(--nested-dialogs) * .18)",
  }),
]);

export const viewport = style([
  baseSprinkles({
    position: "fixed",
    padding: "md",
    zIndex: "modal",
    display: "grid",
  }),
  style({
    inset: 0,
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
    borderWidth: "none",
    boxShadow: "lg",
  }),
  style({
    gridRowStart: 2,
    maxWidth: "28rem",
    minHeight: 0,
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
export const footer = style([
  baseSprinkles({
    display: "flex",
    justify: "end",
    gap: "sm",
    px: "lg",
    borderRadiusTop: "none",
    borderRadius: "default",
  }),
  style({
    "@media": {
      "(min-width: 640px)": {
        flexDirection: "row",
        justifyContent: "flex-end",
      },
    },
  }),
]);
