import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const variantRecipe = recipe({
  base: { textDecoration: "none" },
  variants: {
    variant: {
      default: baseSprinkles({
        backgroundColor: "surface",
      }),
      outline: [
        baseSprinkles({
          backgroundColor: "surface",
          borderColor: "default",
        }),
        style({
          borderWidth: 1,
          borderStyle: "solid",
        }),
      ],
      raised: [
        baseSprinkles({
          boxShadow: "md",
        }),
        style({
          backgroundColor: semanticVars.surface.raised,
        }),
      ],
      sunken: baseSprinkles({
        backgroundColor: "subtle",
      }),
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
