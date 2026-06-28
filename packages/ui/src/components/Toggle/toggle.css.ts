import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, borderWidth, fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

export const base = style({
  position: "relative",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.sm,
  whiteSpace: "nowrap",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: themeContract.borderRadius,
  fontWeight: fontWeight.medium,
  fontSize: fontSize.sm,
  lineHeight: 1.4,
  cursor: "pointer",
  userSelect: "none",
  outline: "none",
  backgroundColor: "transparent",
  transition: "box-shadow 0.15s ease",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${themeContract.focusRing}`,
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
        height: spacing.lg,
        minWidth: spacing.lg,
        paddingLeft: spacing.sm,
        paddingRight: spacing.sm,
      },
      default: {
        height: spacing.lg,
        minWidth: 36,
        paddingLeft: spacing.sm,
        paddingRight: spacing.sm,
      },
      lg: {
        height: spacing.xl,
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
      },
    },
    radius: {
      default: { borderRadius: themeContract.borderRadius },
      none: { borderRadius: 0 },
      xs: { borderRadius: borderRadius.xs },
      sm: { borderRadius: borderRadius.sm },
      md: { borderRadius: borderRadius.md },
      lg: { borderRadius: borderRadius.lg },
      xl: { borderRadius: borderRadius.xl },
      xxl: { borderRadius: borderRadius.xxl },
      full: { borderRadius: borderRadius.full },
    },
    variant: {
      default: {
        borderColor: "transparent",
        color: themeContract.contentPrimary,
        backgroundColor: themeContract.surface,
      },
      outline: {
        borderColor: themeContract.border,
        color: themeContract.contentPrimary,
        backgroundColor: themeContract.backgroundSubtle,
      },
    },
  },
});

export const pressed = {
  default: style({
    backgroundColor: themeContract.surfaceRaised,
  }),
  outline: style({
    outlineWidth: borderWidth.thin,
    backgroundColor: themeContract.surfaceOverlay,
    borderColor: themeContract.borderStrong,
  }),
};
