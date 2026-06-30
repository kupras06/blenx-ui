import { createVar, style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const badgeVars = {
  bg: createVar(),
  fg: createVar(),
  borderColor: createVar(),
};

export const badgeBase = style({
  display: "inline-block",
  padding: tokenVars.spacing.xs,
  borderRadius: tokenVars.borderRadius.default,
  fontSize: 12,
  lineHeight: 1.2,
  border: "1px solid transparent",
});

export const badgeSolid = style({
  backgroundColor: badgeVars.bg,
  color: badgeVars.fg,
  borderColor: badgeVars.borderColor,
});

export const badgeOutline = style({
  backgroundColor: "transparent",
  color: badgeVars.borderColor,
  borderColor: badgeVars.borderColor,
});

export const badgeSoft = style({
  backgroundColor: `color-mix(in srgb, ${badgeVars.bg} 25%, transparent)`,
  color: badgeVars.fg,
  borderColor: "transparent",
});

export const badgeDefault = style({
  vars: {
    [badgeVars.bg]: semanticVars.surface.raised,
    [badgeVars.fg]: semanticVars.text.primary,
    [badgeVars.borderColor]: semanticVars.border.default,
  },
});

export const badgePrimary = style({
  vars: {
    [badgeVars.bg]: semanticVars.interactive.primary,
    [badgeVars.fg]: semanticVars.interactive.primaryFg,
    [badgeVars.borderColor]: semanticVars.interactive.primary,
  },
});

export const badgeSecondary = style({
  vars: {
    [badgeVars.bg]: semanticVars.interactive.secondary,
    [badgeVars.fg]: semanticVars.interactive.secondaryFg,
    [badgeVars.borderColor]: semanticVars.interactive.secondary,
  },
});

export const badgeSuccess = style({
  vars: {
    [badgeVars.bg]: semanticVars.status.success,
    [badgeVars.fg]: semanticVars.text.inverse,
    [badgeVars.borderColor]: semanticVars.status.success,
  },
});

export const badgeDanger = style({
  vars: {
    [badgeVars.bg]: semanticVars.status.danger,
    [badgeVars.fg]: semanticVars.text.inverse,
    [badgeVars.borderColor]: semanticVars.status.danger,
  },
});

import { recipe } from "@vanilla-extract/recipes";
export const badgeRecipe = recipe({
  base: {
    display: "inline-block",
    padding: tokenVars.spacing.xs,
    borderRadius: tokenVars.borderRadius.default,
    fontSize: 12,
    lineHeight: 1.2,
    border: "1px solid transparent",
  },

  variants: {
    appearance: {
      solid: {},
      soft: {
        backgroundColor: "color-mix(in srgb, var(--badge-bg) 25%, transparent)",
      },
      outline: {
        backgroundColor: "transparent",
      },
    },

    variant: {
      default: {
        vars: {
          [badgeVars.bg]: semanticVars.surface.raised,
          [badgeVars.fg]: semanticVars.text.primary,
          [badgeVars.borderColor]: semanticVars.border.default,
        },
      },

      primary: {
        vars: {
          [badgeVars.bg]: semanticVars.interactive.primary,
          [badgeVars.fg]: semanticVars.interactive.primaryFg,
          [badgeVars.borderColor]: semanticVars.interactive.primary,
        },
      },

      success: {
        vars: {
          [badgeVars.bg]: semanticVars.status.success,
          [badgeVars.fg]: semanticVars.text.inverse,
          [badgeVars.borderColor]: semanticVars.status.success,
        },
      },

      danger: {
        vars: {
          [badgeVars.bg]: semanticVars.status.danger,
          [badgeVars.fg]: semanticVars.text.inverse,
          [badgeVars.borderColor]: semanticVars.status.danger,
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        appearance: "solid",
      },
      style: {
        backgroundColor: badgeVars.bg,
        color: badgeVars.fg,
        borderColor: badgeVars.borderColor,
      },
    },

    {
      variants: {
        appearance: "outline",
      },
      style: {
        backgroundColor: "transparent",
        color: badgeVars.borderColor,
        borderColor: badgeVars.borderColor,
      },
    },

    {
      variants: {
        appearance: "soft",
      },
      style: {
        backgroundColor: `color-mix(in srgb, ${badgeVars.borderColor} 25%, transparent)`,
        color: badgeVars.fg,
      },
    },
  ],

  defaultVariants: {
    appearance: "solid",
    variant: "default",
  },
});
