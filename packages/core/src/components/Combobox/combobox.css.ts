import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

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

export const inputSm = style({
  paddingInlineStart: "30px",
  paddingInlineEnd: "26px",
});

export const inputDefault = style({
  paddingInlineStart: "32px",
  paddingInlineEnd: "28px",
});

export const inputLg = style({
  paddingInlineStart: "34px",
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

export const startAddonSm = style({
  paddingInlineStart: "9px",
});

export const startAddonDefault = style({
  paddingInlineStart: "11px",
});

export const adornment = style([
  baseSprinkles({
    position: "absolute",
    display: "inline-flex",
    align: "center",
    justify: "center",
    radius: "md",
    borderWidth: "thin",
    borderStyle: "solid",
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

export const adornmentSm = style({
  width: "28px",
  height: "28px",
});

export const adornmentDefault = style({
  width: "32px",
  height: "32px",
});

export const adornmentEndSm = style({
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
    overflow: "hidden",
    borderWidth: "thin",
    borderColor: "default",
    borderStyle: "solid",
    boxShadow: "lg",
  }),
  style({
    maxHeight: "100%",
    minWidth: "var(--anchor-width)",
    maxWidth: "var(--available-width)",
    transformOrigin: "var(--transform-origin)",
    transitionProperty: "transform, opacity",
    transitionDuration: "150ms",
    "::before": {
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
    },
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

export const separator = style([
  baseSprinkles({
    marginY: "xs",
    mx: "sm",
  }),
  style({
    height: "1px",
    backgroundColor: semanticVars.border.default,
    selectors: {
      "&:last-child": {
        display: "none",
      },
    },
  }),
]);

export const group = baseSprinkles({
  display: "flex",
  direction: "column",
});

export const groupLabel = baseSprinkles({
  px: "sm",
  fontSize: "xs",
  color: "secondary",
  py: "6",
  fontWeight: "medium",
});

export const empty = style([
  baseSprinkles({
    padding: "sm",
    fontSize: "md",
    color: "secondary",
  }),
  style({
    textAlign: "center",
  }),
]);

export const row = baseSprinkles({
  direction: "column",
});

export const value = baseSprinkles({
  grow: 1,
  color: "primary",
  display: "block",
});

export const list = style([
  baseSprinkles({
    padding: "xs",
  }),
  style({
    selectors: {
      "&:not(:empty)": {
        scrollPaddingBlock: tokenVars.spacing.xs,
      },
      "&:has([data-slot='combobox-item'])": {
        paddingInlineEnd: tokenVars.spacing.sm,
      },
    },
  }),
]);

export const status = style([
  baseSprinkles({
    color: "secondary",
    display: "flex",
    align: "center",
    justify: "center",
    shrink: 0,
    px: "md",
    py: "sm",
    fontSize: "xs",
    fontWeight: "medium",
  }),
  style({
    selectors: {
      "&:empty": {
        margin: 0,
        padding: 0,
      },
    },
  }),
]);

export const item = style([
  baseSprinkles({
    display: "grid",
    align: "center",
    paddingLeft: "sm",
    paddingRight: "md",
    py: "1",
    radius: "sm",
    fontSize: "md",
    cursor: "default",
  }),
  style({
    gridTemplateColumns: "1rem 1fr",
    columnGap: tokenVars.spacing.sm,
    minHeight: "32px",
    userSelect: "none",
    outline: "none",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
      "&[data-disabled]": {
        pointerEvents: "none",
        opacity: 0.64,
      },
      "&[data-highlighted]": {
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.text.primary,
      },
    },
  }),
]);

export const itemIndicator = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    shrink: 0,
  }),
  style({
    gridColumn: "1",
  }),
]);

export const itemContent = style({
  gridColumn: "2",
});

export const chips = style([
  baseSprinkles({
    position: "relative",
    display: "inline-flex",
    width: "full",
    flexWrap: "wrap",
    align: "center",
    gap: "xxs",
    radius: "lg",
    backgroundColor: "canvas",
    color: "primary",
    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: "default",
  }),
  style({
    minWidth: 0,
    minHeight: "36px",
    padding: "calc(4px - 1px)",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
    outline: "none",
    transitionProperty: "border-color, box-shadow",
    transitionDuration: "150ms",
    selectors: {
      "&:focus-within": {
        borderColor: semanticVars.border.strong,
        boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
      },
      "&:has([aria-invalid='true'])": {
        borderColor: semanticVars.color.danger.default,
      },
      "&:has([aria-invalid='true']:focus-visible)": {
        borderColor: semanticVars.color.danger.default,
        boxShadow: `0 0 0 2px ${semanticVars.color.danger}`,
      },
      "&:has(:disabled)": {
        opacity: 0.64,
        cursor: "not-allowed",
      },
      "&:has([data-size='sm'])": {
        minHeight: "32px",
      },
      "&:has([data-size='lg'])": {
        minHeight: "40px",
      },
    },
  }),
]);

export const chipsStartAddon = style([
  baseSprinkles({
    display: "flex",
    shrink: 0,
    align: "center",
    paddingLeft: "sm",
  }),
  style({
    opacity: 0.8,
  }),
]);

export const chipsStartAddonSm = style({
  paddingInlineStart: "6px",
});

export const chipsInput = style([
  baseSprinkles({
    fontSize: "md",
    color: "primary",
    backgroundColor: "transparent",
    borderWidth: "none",
  }),
  style({
    flex: "1 1 0%",
    minWidth: "3rem",
    outline: "none",
    paddingBlock: "6px",
    paddingInlineStart: tokenVars.spacing.xs,
    paddingInlineEnd: tokenVars.spacing.xs,
    lineHeight: 1.5,
    selectors: {
      "&::placeholder": {
        color: semanticVars.text.disabled,
      },
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&:has(+ [data-slot='combobox-chip'])": {
        paddingInlineStart: tokenVars.spacing.xxs,
      },
    },
  }),
]);

export const chip = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    radius: "md",
    backgroundColor: "subtle",
    color: "primary",
    px: "sm",
    fontSize: "sm",
    fontWeight: "medium",
  }),
  style({
    lineHeight: 1.2,
    outline: "none",
  }),
]);

export const chipRemove = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    shrink: 0,
    px: "xs",
    cursor: "pointer",
  }),
  style({
    height: "100%",
    opacity: 0.8,
    selectors: {
      "&:hover": {
        opacity: 1,
      },
    },
  }),
]);
