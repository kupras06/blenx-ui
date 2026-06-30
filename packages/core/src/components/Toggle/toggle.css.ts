import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const base = style({
  position: "relative",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  gap: tokenVars.spacing.sm,
  whiteSpace: "nowrap",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: tokenVars.borderRadius.default,
  fontWeight: tokenVars.fontWeight.medium,
  fontSize: tokenVars.fontSize.sm,
  lineHeight: 1.4,
  cursor: "pointer",
  userSelect: "none",
  outline: "none",
  backgroundColor: "transparent",
  transition: "box-shadow 0.15s ease",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
    },
    "&:disabled": {
      pointerEvents: "none",
      opacity: 0.64,
    },
  },
});

export const toggleRecipes = recipe({
  variants: {
    size: {
      sm: {
        height: tokenVars.spacing.lg,
        minWidth: tokenVars.spacing.lg,
        paddingLeft: tokenVars.spacing.sm,
        paddingRight: tokenVars.spacing.sm,
      },
      default: {
        height: tokenVars.spacing.lg,
        minWidth: 36,
        paddingLeft: tokenVars.spacing.sm,
        paddingRight: tokenVars.spacing.sm,
      },
      lg: {
        height: tokenVars.spacing.xl,
        paddingLeft: tokenVars.spacing.md,
        paddingRight: tokenVars.spacing.md,
      },
    },
    radius: {
      default: { borderRadius: tokenVars.borderRadius.default },
      none: { borderRadius: 0 },
      xs: { borderRadius: tokenVars.borderRadius.xs },
      sm: { borderRadius: tokenVars.borderRadius.sm },
      md: { borderRadius: tokenVars.borderRadius.md },
      lg: { borderRadius: tokenVars.borderRadius.lg },
      xl: { borderRadius: tokenVars.borderRadius.xl },
      xxl: { borderRadius: tokenVars.borderRadius.xxl },
      full: { borderRadius: tokenVars.borderRadius.full },
    },
    variant: {
      default: {
        borderColor: "transparent",
        color: semanticVars.text.primary,
        backgroundColor: semanticVars.surface.default,
      },
      outline: {
        borderColor: semanticVars.border.default,
        color: semanticVars.text.primary,
        backgroundColor: semanticVars.background.subtle,
      },
    },
  },
});

export const pressed = {
  default: style({
    backgroundColor: semanticVars.surface.raised,
  }),
  outline: style({
    outlineWidth: tokenVars.borderWidth.thin,
    backgroundColor: semanticVars.surface.overlay,
    borderColor: semanticVars.border.strong,
  }),
};
