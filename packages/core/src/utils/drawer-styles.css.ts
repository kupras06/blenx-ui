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
export const drawerPopup = style([
  baseSprinkles({
    position: "relative",
    display: "flex",
    direction: "column",
    width: "full",
    backgroundColor: "surface",
    color: "primary",
    px: "md",
    borderWidth: "none",
  }),
  style({
    maxHeight: "100%",
    minHeight: 0,
    minWidth: 0,
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
  }),
]);

export const dialogPopup = style([
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
    translate: `0 calc(var(--nested-dialogs) * 1rem)`,
    scale: `calc(1 - var(--nested-dialogs) * 0.04)`,
    opacity: `calc(1 - var(--nested-dialogs) * 0.15)`,
    transitionProperty: "opacity, translate, scale",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out",
    outline: "none",
    willChange: "transform",
    "::before": {
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      borderRadius: "calc(16px - 1px)",
      boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
    },
    selectors: {
      "&[data-nested-dialog-open]::after": {
        opacity: 1,
      },
      "&[data-starting-style], &[data-ending-style]": {
        opacity: 0,
        scale: 0.96,
        translate: `0 calc(var(--nested-dialogs) * 1rem + 8px)`,
      },
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

export const drawerHeader = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    gap: "sm",
    padding: "lg",
  }),
  style({
    selectors: {
      "[data-has-panel] &": {
        paddingBottom: tokenVars.spacing.sm,
      },
    },
  }),
]);
