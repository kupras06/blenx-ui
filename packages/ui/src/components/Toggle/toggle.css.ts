import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme } from "#theme/contract.css";
import { borderRadius, borderWidth, fontSize, fontWeight, spacing } from "#theme/tokens.css";

export const base = style({
  position: "relative",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.small,
  whiteSpace: "nowrap",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: theme.borderRadius,
  fontWeight: fontWeight.medium,
  fontSize: fontSize.small,
  lineHeight: 1.4,
  cursor: "pointer",
  userSelect: "none",
  outline: "none",
  backgroundColor: "transparent",
  transition: "box-shadow 0.15s ease",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${theme.focusRing}`,
    },
    "&:disabled": {
      pointerEvents: "none",
      opacity: 0.64,
    },
  },
});

export const size = recipe({
  variants: {
    size: {
      sm: {
        height: spacing.large,
        minWidth: spacing.large,
        paddingLeft: spacing.small,
        paddingRight: spacing.small,
      },
      default: {
        height: spacing.large,
        minWidth: 36,
        paddingLeft: spacing.small,
        paddingRight: spacing.small,
      },
      lg: {
        height: spacing.xlarge,
        paddingLeft: spacing.medium,
        paddingRight: spacing.medium,
      },
    },
  },
});

export const variant = recipe({
  variants: {
    variant: {
      default: {
        borderColor: "transparent",
        color: theme.contentPrimary,
        backgroundColor: theme.surface,
      },
      outline: {
        borderColor: theme.border,
        color: theme.contentPrimary,
        backgroundColor: theme.backgroundSubtle,
      },
    },
  },
});

export const pressed = {
  default: style({
    backgroundColor: theme.surfaceRaised,
  }),
  outline: style({
    outlineWidth: borderWidth.thin,
    backgroundColor: theme.surfaceOverlay,
    borderColor: theme.borderStrong,
  }),
};

export const radius = recipe({
  variants: {
    radius: {
      none: { borderRadius: 0 },
      xsmall: { borderRadius: borderRadius.xsmall },
      small: { borderRadius: borderRadius.small },
      medium: { borderRadius: borderRadius.medium },
      large: { borderRadius: borderRadius.large },
      xlarge: { borderRadius: borderRadius.xlarge },
      xxlarge: { borderRadius: borderRadius.xxlarge },
      full: { borderRadius: borderRadius.full },
    },
  },
});
