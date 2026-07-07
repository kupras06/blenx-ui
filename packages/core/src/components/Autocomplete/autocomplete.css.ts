import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles.css";

export const inputGroup = style([
  baseSprinkles({
    position: "relative",
    width: "full",
    color: "primary",
  }),
  style({
    minWidth: 0,
  }),
]);

export const inputSize = style({
  vars: {
    "--autocomplete-input-padding-inline-start": "33px",
    "--autocomplete-input-padding-inline-end": "28px",
  },
});

export const inputSizeSm = style({
  paddingInlineStart: "31px",
  paddingInlineEnd: "26px",
});

export const inputSizeDefault = style({
  paddingInlineStart: "33px",
  paddingInlineEnd: "28px",
});

export const inputSizeLg = style({
  paddingInlineStart: "35px",
  paddingInlineEnd: "30px",
});

export const startAddon = style([
  baseSprinkles({
    position: "absolute",
    display: "flex",
    align: "center",
    zIndex: "1",
  }),
  style({
    pointerEvents: "none",
    insetBlock: 0,
    insetInlineStart: tokenVars.borderWidth.thin,
    opacity: 0.8,
  }),
]);

export const startAddonDefault = style({
  paddingInlineStart: "11px",
});

export const startAddonSmall = style({
  paddingInlineStart: "9px",
});

export const adornment = style([
  baseSprinkles({
    position: "absolute",
    display: "inline-flex",
    align: "center",
    justify: "center",
    borderStyle: "solid",
    borderWidth: "thin",
    radius: "md",
    borderColor: "transparent",
    flexShrink: 0,
  }),
  style({
    top: "50%",
    transform: "translateY(-50%)",
    opacity: 0.8,
    outline: "none",
    transitionProperty: "color, background-color, box-shadow, opacity",
    transitionDuration: "150ms",
  }),
]);

export const adornmentSmall = style({
  width: "28px",
  height: "28px",
});

export const adornmentDefault = style({
  width: "32px",
  height: "32px",
});

export const adornmentEndSmall = style({
  insetInlineEnd: tokenVars.spacing["0"],
});

export const adornmentEndDefault = style({
  insetInlineEnd: tokenVars.spacing["0.5"],
});

export const positioner = style({
  outline: "none",
});

export const popupShell = style([
  baseSprinkles({
    position: "relative",
    display: "flex",
    radius: "lg",
    backgroundColor: "surface",
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: "default",
    boxShadow: "lg",
  }),
  style({
    maxHeight: "100%",
    minWidth: "var(--anchor-width)",
    maxWidth: "var(--available-width)",
    transformOrigin: "var(--transform-origin)",
    transitionProperty: "transform, opacity",
    transitionDuration: "150ms",
  }),
]);

export const popup = style([
  baseSprinkles({
    display: "flex",
    grow: 1,
    direction: "column",
    color: "primary",
  }),
  style({
    maxHeight: "min(var(--available-height), 23rem)",
  }),
]);

export const group = baseSprinkles({
  display: "flex",
  direction: "column",
});

export const separator = style([
  baseSprinkles({
    marginY: "xs",
    mx: "sm",
  }),
  style({
    height: "1px",
    backgroundColor: semanticVars.border.default,
  }),
]);

export const groupLabel = baseSprinkles({
  py: "1",
  px: "2",
  fontSize: "xs",
  fontWeight: "medium",
  color: "secondary",
});

export const empty = style([
  baseSprinkles({
    padding: "sm",
    fontSize: "sm",
    color: "secondary",
  }),
  style({
    textAlign: "center",
  }),
]);

export const list = baseSprinkles({
  padding: "xs",
});

export const status = baseSprinkles({
  color: "secondary",
  px: "md",
  py: "sm",
  fontSize: "xs",
  fontWeight: "medium",
});

export const item = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    color: "primary",
    px: "sm",
    py: "1",
    radius: "md",
    fontSize: "md",
    cursor: "default",
  }),
  style({
    userSelect: "none",
    outline: "none",
    minHeight: "32px",
  }),
]);
