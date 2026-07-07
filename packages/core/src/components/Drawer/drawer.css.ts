import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const swipeArea = style([
  baseSprinkles({ position: "fixed" }),
  style({
    zIndex: 50,
    touchAction: "none",
  }),
]);

export const swipeAreaBottom = style([
  baseSprinkles({ left: "0", right: "0", bottom: "0" }),
  style({ height: "32px" }),
]);

export const swipeAreaTop = style([
  baseSprinkles({ left: "0", right: "0", top: "0" }),
  style({ height: "32px" }),
]);

export const swipeAreaLeft = style([
  baseSprinkles({ top: "0", bottom: "0", left: "0" }),
  style({ width: "32px" }),
]);

export const swipeAreaRight = style([
  baseSprinkles({ top: "0", bottom: "0", right: "0" }),
  style({ width: "32px" }),
]);

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

export const viewport = style([
  baseSprinkles({ position: "fixed" }),
  style({
    inset: 0,
    touchAction: "none",
  }),
]);

export const viewportBottom = style([
  baseSprinkles({ display: "grid", paddingTop: "48" }),
  style({ gridTemplateRows: "1fr auto" }),
]);

export const viewportTop = style([
  baseSprinkles({ display: "grid", paddingBottom: "48" }),
  style({ gridTemplateRows: "auto 1fr" }),
]);

export const viewportLeft = baseSprinkles({
  display: "flex",
  justify: "start",
});

export const viewportRight = baseSprinkles({
  display: "flex",
  justify: "end",
});

export const viewportInset = baseSprinkles({
  px: "md",
});

export const popupDefault = baseSprinkles({
  boxShadow: "lg",
});

export const popupStraight = style({
  vars: {
    "--stack-step": "0",
  },
});

export const popupInset = style([
  baseSprinkles({ borderWidth: "none", radius: "none" }),
  style({
    "@media": {
      "(min-width: 640px)": {
        borderRadius: tokenVars.borderRadius.xl,
      },
    },
  }),
]);

export const popupBottom = style([
  baseSprinkles({ borderRadiusTop: "xl" }),
  style({ gridRowStart: 2 }),
]);

export const popupTop = baseSprinkles({
  borderRadiusBottom: "xl",
});

export const popupLeft = style([
  baseSprinkles({ borderRadiusRight: "xl" }),
  style({
    width: "calc(100% - 48px)",
    maxWidth: "28rem",
  }),
]);

export const popupRight = style([
  baseSprinkles({ borderRadiusLeft: "xl" }),
  style({
    width: "calc(100% - 48px)",
    maxWidth: "28rem",
  }),
]);

export const footerDefault = style([
  baseSprinkles({
    backgroundColor: "subtle",
    py: "md",
    borderTopWidth: "thin",
    borderTopStyle: "solid",
  }),
  style({
    borderTopColor: semanticVars.border.subtle,
  }),
]);

export const footerBare = baseSprinkles({
  paddingRight: "md",
  paddingBottom: "lg",
});

export const title = style([
  baseSprinkles({ fontWeight: "semibold" }),
  style({
    fontSize: "20px",
    lineHeight: 1,
  }),
]);

export const description = style([
  baseSprinkles({
    color: "secondary",
    fontSize: "sm",
  }),
  style({
    lineHeight: 1.4,
  }),
]);

export const panel = baseSprinkles({
  padding: "lg",
  borderWidth: "none",
});

export const bar = style([
  baseSprinkles({
    position: "absolute",
    display: "flex",
    align: "center",
    justify: "center",
    padding: "sm",
  }),
  style({ touchAction: "none" }),
]);

export const barHorizontal = style({
  insetInline: 0,
  height: "48px",
});

export const barVertical = style({
  insetBlock: 0,
  width: "48px",
});

export const barTop = baseSprinkles({
  bottom: "0",
});

export const barBottom = baseSprinkles({
  top: "0",
});

export const barLeft = baseSprinkles({
  right: "0",
});

export const barRight = baseSprinkles({
  left: "0",
});

export const menu = baseSprinkles({
  display: "flex",
  direction: "column",
});

export const menuItem = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    radius: "sm",
    color: "primary",
    fontSize: "md",
    py: "xs",
    px: "sm",
    backgroundColor: "transparent",
    cursor: "default",
  }),
  style({
    minHeight: "36px",
    border: "none",
    textAlign: "left",
    outline: "none",
  }),
]);

export const menuItemDestructive = baseSprinkles({
  color: "error",
});

export const separator = style([
  baseSprinkles({
    marginTop: "xs",
    marginBottom: "xs",
  }),
  style({
    height: "1px",
    backgroundColor: semanticVars.border.subtle,
  }),
]);

export const menuGroup = baseSprinkles({
  display: "flex",
  direction: "column",
});

export const menuGroupLabel = baseSprinkles({
  fontSize: "xs",
  color: "secondary",
  py: "xs",
  px: "sm",
  fontWeight: "medium",
});

export const menuTrigger = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    radius: "sm",
    color: "primary",
    py: "xs",
    px: "sm",
    backgroundColor: "transparent",
  }),
  style({
    minHeight: "36px",
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
    py: "xs",
    px: "sm",
    backgroundColor: "transparent",
  }),
  style({
    minHeight: "36px",
    border: "none",
  }),
]);

export const menuCheckboxDefault = style([
  baseSprinkles({ paddingRight: "md" }),
  style({ gridTemplateColumns: "1rem 1fr" }),
]);

export const menuCheckboxSwitch = style([
  baseSprinkles({ paddingRight: "xs" }),
  style({ gridTemplateColumns: "1fr auto" }),
]);

export const menuCheckboxSwitchLabel = style({
  gridColumnStart: 1,
});

export const menuCheckboxSwitchIndicator = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    padding: "2",
    radius: "full",
  }),
  style({
    gridColumnStart: 2,
    backgroundColor: semanticVars.border.subtle,
  }),
]);

export const menuCheckboxSwitchThumb = style([
  baseSprinkles({
    radius: "full",
    backgroundColor: "canvas",
  }),
  style({
    width: "14px",
    height: "14px",
  }),
]);

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
    py: "xs",
    paddingLeft: "sm",
    paddingRight: "md",
    backgroundColor: "transparent",
  }),
  style({
    minHeight: "36px",
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
