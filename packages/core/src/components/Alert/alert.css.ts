import { semanticVars } from "@blenx-dev/theme/contract";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const alertBg = createVar();
const alertFg = createVar();
const alertBorder = createVar();

export const alertBase = style({
  backgroundColor: alertBg,
  color: alertFg,
  borderColor: alertBorder,
});

export const alertVariants = recipe({
  variants: {
    palette: {
      info: {
        vars: {
          [alertBg]: semanticVars.color.info.bg,
          [alertFg]: semanticVars.color.info.active,
          [alertBorder]: semanticVars.color.info.default,
        },
      },
      success: {
        vars: {
          [alertBg]: semanticVars.color.success.bg,
          [alertFg]: semanticVars.color.success.active,
          [alertBorder]: semanticVars.color.success.default,
        },
      },
      warning: {
        vars: {
          [alertBg]: semanticVars.color.warning.bg,
          [alertFg]: semanticVars.color.warning.active,
          [alertBorder]: semanticVars.color.warning.default,
        },
      },
      error: {
        vars: {
          [alertBg]: semanticVars.color.danger.bg,
          [alertFg]: semanticVars.color.danger.default,
          [alertBorder]: semanticVars.color.danger.default,
        },
      },
    },
  },
});
