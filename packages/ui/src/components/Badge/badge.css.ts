import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const badgeRecipe = recipe({
  base: {
    display: "inline-block",
    padding: tokenVars.spacing.xs,
    borderRadius: tokenVars.borderRadius.default,
    fontSize: 12,
    lineHeight: 1.2,
  },
  variants: {
    variant: {
      default: {
        backgroundColor: semanticVars.surface.raised,
        color: semanticVars.text.primary,
      },
      primary: {
        backgroundColor: semanticVars.interactive.primary,
        color: semanticVars.interactive.primaryFg,
      },
      secondary: {
        backgroundColor: semanticVars.interactive.secondary,
        color: semanticVars.text.primary,
      },
      danger: {
        backgroundColor: semanticVars.status.danger,
        color: semanticVars.interactive.primaryFg,
      },
      sucess: {
        backgroundColor: semanticVars.status.success,
        color: semanticVars.interactive.primaryFg,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
