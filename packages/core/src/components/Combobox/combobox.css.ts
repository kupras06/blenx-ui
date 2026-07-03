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

export const group = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
  }),
]);

export const groupLabel = style([
  baseSprinkles({
    px: "sm",
    fontSize: "xs",
    color: "secondary",
  }),
  style({
    paddingBlock: "6px",
    fontWeight: tokenVars.fontWeight.medium,
  }),
]);

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

export const row = style([
  baseSprinkles({
    direction: "column",
  }),
]);

export const value = style([
  baseSprinkles({
    grow: 1,
    color: "primary",
  }),
  style({
    display: "block",
  }),
]);

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
  }),
  style({
    paddingInline: tokenVars.spacing.md,
    paddingBlock: tokenVars.spacing.sm,
    fontSize: tokenVars.fontSize.xs,
    fontWeight: tokenVars.fontWeight.medium,
    selectors: {
      "&:empty": {
        margin: 0,
        padding: 0,
      },
    },
  }),
]);

export const item = style({
  display: "grid",
  gridTemplateColumns: "1rem 1fr",
  alignItems: "center",
  columnGap: tokenVars.spacing.sm,
  minHeight: "32px",
  paddingInlineStart: tokenVars.spacing.sm,
  paddingInlineEnd: tokenVars.spacing.md,
  paddingBlock: tokenVars.spacing["1"],
  borderRadius: tokenVars.borderRadius.sm,
  cursor: "default",
  userSelect: "none",
  outline: "none",
  fontSize: tokenVars.fontSize.md,
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
});

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
  }),
  style({
    minWidth: 0,
    minHeight: "36px",
    padding: "calc(4px - 1px)",
    borderWidth: tokenVars.borderWidth.thin,
    borderStyle: "solid",
    borderColor: semanticVars.border.default,
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
        borderColor: semanticVars.status.danger.default,
      },
      "&:has([aria-invalid='true']:focus-visible)": {
        borderColor: semanticVars.status.danger.default,
        boxShadow: `0 0 0 2px ${semanticVars.status.danger}`,
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

export const chipsStartAddon = style({
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  opacity: 0.8,
  paddingInlineStart: tokenVars.spacing.sm,
});

export const chipsStartAddonSm = style({
  paddingInlineStart: "6px",
});

export const chipsInput = style([
  baseSprinkles({
    fontSize: "md",
    color: "primary",
  }),
  style({
    flex: "1 1 0%",
    minWidth: "3rem",
    borderWidth: 0,
    outline: "none",
    backgroundColor: "transparent",
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
  }),
  style({
    fontWeight: tokenVars.fontWeight.medium,
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
  }),
  style({
    height: "100%",
    cursor: "pointer",
    opacity: 0.8,
    selectors: {
      "&:hover": {
        opacity: 1,
      },
    },
  }),
]);
