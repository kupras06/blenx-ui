import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

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

export const backdrop = style([
  baseSprinkles({
    position: "fixed",
  }),
  style({
    inset: 0,
  }),
  style({
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
  }),
]);

export const viewport = style({
  position: "fixed",
  inset: 0,
  touchAction: "none",
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

export const popup = style([
  baseSprinkles({
    position: "relative",
    display: "flex",
    direction: "column",
    width: "full",
    backgroundColor: "surface",
    color: "primary",
  }),
  style({
    maxHeight: "100%",
    minHeight: 0,
    minWidth: 0,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
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

export const popupDefault = style({
  boxShadow: tokenVars.shadow.lg,
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

export const header = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    gap: "sm",
  }),
  style({
    paddingTop: tokenVars.spacing.lg,
    paddingLeft: tokenVars.spacing.lg,
    paddingRight: tokenVars.spacing.lg,
  }),
]);

export const footer = style([
  baseSprinkles({
    display: "flex",
    direction: "column-reverse",
    gap: "sm",
  }),
  style({
    paddingLeft: tokenVars.spacing.lg,
    paddingRight: tokenVars.spacing.lg,
    "@media": {
      "(min-width: 640px)": {
        flexDirection: "row",
        justifyContent: "flex-end",
      },
    },
  }),
]);

export const footerDefault = style([
  baseSprinkles({
    backgroundColor: "subtle",
    py: "md",
  }),
  style({
    borderTopWidth: tokenVars.borderWidth.thin,
    borderTopStyle: "solid",
    borderTopColor: semanticVars.border.subtle,
  }),
]);

export const footerBare = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.lg,
});

export const title = style([
  style({
    fontSize: "20px",
    lineHeight: 1,
    fontWeight: tokenVars.fontWeight.semibold,
  }),
]);

export const description = style([
  baseSprinkles({
    color: "secondary",
  }),
  style({
    fontSize: tokenVars.fontSize.sm,
    lineHeight: 1.4,
  }),
]);

export const panel = style([
  baseSprinkles({
    padding: "lg",
  }),
]);

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

export const menu = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
  }),
]);

export const menuItem = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    radius: "sm",
    color: "primary",
    fontSize: "md",
  }),
  style({
    minHeight: "36px",
    paddingTop: tokenVars.spacing.xs,
    paddingBottom: tokenVars.spacing.xs,
    paddingLeft: tokenVars.spacing.sm,
    paddingRight: tokenVars.spacing.sm,
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    cursor: "default",
    outline: "none",
  }),
]);

export const menuItemDestructive = style([
  baseSprinkles({
    color: "error",
  }),
]);

export const separator = style({
  height: "1px",
  backgroundColor: semanticVars.border.subtle,
  marginTop: tokenVars.spacing.xs,
  marginBottom: tokenVars.spacing.xs,
});

export const menuGroup = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
  }),
]);

export const menuGroupLabel = style([
  baseSprinkles({
    fontSize: "xs",
    color: "secondary",
  }),
  style({
    paddingTop: tokenVars.spacing.xs,
    paddingBottom: tokenVars.spacing.xs,
    paddingLeft: tokenVars.spacing.sm,
    paddingRight: tokenVars.spacing.sm,
    fontWeight: tokenVars.fontWeight.medium,
  }),
]);

export const menuTrigger = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    radius: "sm",
    color: "primary",
  }),
  style({
    minHeight: "36px",
    paddingTop: tokenVars.spacing.xs,
    paddingBottom: tokenVars.spacing.xs,
    paddingLeft: tokenVars.spacing.sm,
    paddingRight: tokenVars.spacing.sm,
    backgroundColor: "transparent",
    border: "none",
  }),
]);

export const menuTriggerIcon = style({
  marginLeft: "auto",
  marginRight: "-2px",
  opacity: 0.8,
});

export const menuCheckbox = style([
  baseSprinkles({
    display: "grid",
    align: "center",
    gap: "sm",
    radius: "sm",
    color: "primary",
  }),
  style({
    minHeight: "36px",
    paddingTop: tokenVars.spacing.xs,
    paddingBottom: tokenVars.spacing.xs,
    paddingLeft: tokenVars.spacing.sm,
    paddingRight: tokenVars.spacing.sm,
    backgroundColor: "transparent",
    border: "none",
  }),
]);

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
  backgroundColor: semanticVars.border.subtle,
});

export const menuCheckboxSwitchThumb = style({
  width: "14px",
  height: "14px",
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: semanticVars.background.default,
});

export const menuCheckboxIndicator = style({
  gridColumnStart: 1,
});

export const menuCheckboxLabel = style({
  gridColumnStart: 2,
});

export const menuRadio = style([
  baseSprinkles({
    display: "grid",
    align: "center",
    gap: "sm",
    radius: "sm",
    color: "primary",
  }),
  style({
    minHeight: "36px",
    paddingTop: tokenVars.spacing.xs,
    paddingBottom: tokenVars.spacing.xs,
    paddingLeft: tokenVars.spacing.sm,
    paddingRight: tokenVars.spacing.md,
    backgroundColor: "transparent",
    border: "none",
    gridTemplateColumns: "1rem 1fr",
  }),
]);

export const menuRadioIndicator = style({
  gridColumnStart: 1,
});

export const menuRadioLabel = style({
  gridColumnStart: 2,
});
