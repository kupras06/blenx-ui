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
  }),
  style({
    pointerEvents: "none",
    insetBlock: 0,
    insetInlineStart: tokenVars.borderWidth.thin,
    zIndex: 1,
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
    radius: "md",
  }),
  style({
    top: "50%",
    flexShrink: 0,
    transform: "translateY(-50%)",
    borderWidth: tokenVars.borderWidth.thin,
    borderStyle: "solid",
    borderColor: "transparent",
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
  }),
  style({
    maxHeight: "100%",
    minWidth: "var(--anchor-width)",
    maxWidth: "var(--available-width)",
    borderWidth: tokenVars.borderWidth.thin,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
    boxShadow: tokenVars.shadow.lg,
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

export const group = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
  }),
]);

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

export const groupLabel = style({
  paddingBlock: tokenVars.spacing["1"],
  paddingInline: tokenVars.spacing["2"],
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
  color: semanticVars.text.secondary,
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

export const list = style({
  padding: tokenVars.spacing.xs,
});

export const status = style([
  baseSprinkles({
    color: "secondary",
  }),
  style({
    paddingInline: tokenVars.spacing.md,
    paddingBlock: tokenVars.spacing.sm,
    fontSize: tokenVars.fontSize.xs,
    fontWeight: tokenVars.fontWeight.medium,
  }),
]);

export const item = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    color: "primary",
  }),
  style({
    paddingInline: tokenVars.spacing.sm,
    paddingBlock: tokenVars.spacing["1"],
    borderRadius: tokenVars.borderRadius.md,
    cursor: "default",
    userSelect: "none",
    outline: "none",
    minHeight: "32px",
    fontSize: tokenVars.fontSize.md,
  }),
]);
