import { createVar } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles.css";

export const badgeVars = {
  bg: createVar(),
  fg: createVar(),
  borderColor: createVar(),
};
export const badgeRecipe = recipe({
  base: baseSprinkles({
    display: "inline-block",
    padding: "xs",
    borderRadius: "default",
    fontSize: "sm",
    lineHeight: "normal",
    borderWidth: "thin",
    borderColor: "transparent",
  }),
  variants: {
    appearance: {
      solid: {
        backgroundColor: badgeVars.bg,
        color: badgeVars.fg,
      },
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
          [badgeVars.bg]: semanticVars.color.primary.bgActive,
          [badgeVars.fg]: semanticVars.text.primary,
          [badgeVars.borderColor]: semanticVars.border.default,
        },
      },

      primary: {
        vars: {
          [badgeVars.bg]: semanticVars.color.primary.default,
          [badgeVars.fg]: semanticVars.color.primary.fg,
          [badgeVars.borderColor]: semanticVars.color.primary.default,
        },
      },

      secondary: {
        vars: {
          [badgeVars.bg]: semanticVars.color.secondary.default,
          [badgeVars.fg]: semanticVars.color.secondary.fg,
          [badgeVars.borderColor]: semanticVars.color.secondary.default,
        },
      },

      success: {
        vars: {
          [badgeVars.bg]: semanticVars.color.success.default,
          [badgeVars.fg]: semanticVars.text.inverse,
          [badgeVars.borderColor]: semanticVars.color.success.default,
        },
      },

      danger: {
        vars: {
          [badgeVars.bg]: semanticVars.color.danger.default,
          [badgeVars.fg]: semanticVars.text.inverse,
          [badgeVars.borderColor]: semanticVars.color.danger.default,
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
