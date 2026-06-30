import { recipe } from "@vanilla-extract/recipes";
import { semanticVars } from "@blenx-dev/theme/contract";

export const variantRecipe = recipe({
  base: { textDecoration: "none" },
  variants: {
    variant: {
      default: {
        backgroundColor: semanticVars.surface.default,
      },
      outline: {
        backgroundColor: semanticVars.surface.default,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: semanticVars.border.default,
      },
      raised: {
        backgroundColor: semanticVars.surface.raised,
        boxShadow: semanticVars.shadow.md,
      },
      sunken: {
        backgroundColor: semanticVars.background.subtle,
      },
    },
    interactive: {
      true: {
        cursor: "pointer",
        selectors: {
          "&:hover": {
            backgroundColor: semanticVars.background.subtle,
          },
          "&:focus-visible": {
            outline: `2px solid ${semanticVars.focus.ring}`,
            outlineOffset: "2px",
          },
        },
      },
    },
  },
});
