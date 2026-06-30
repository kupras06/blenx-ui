import { semanticVars } from "@blenx-dev/theme/contract";
import { recipe } from "@vanilla-extract/recipes";

export const alertVariants = recipe({
  variants: {
    variant: {
      info: {
        backgroundColor: semanticVars.status.infoBg,
        color: semanticVars.status.info,
        borderColor: semanticVars.status.info,
      },
      success: {
        backgroundColor: semanticVars.status.successBg,
        color: semanticVars.status.success,
        borderColor: semanticVars.status.success,
      },
      warning: {
        backgroundColor: semanticVars.status.warningBg,
        color: semanticVars.status.warning,
        borderColor: semanticVars.status.warning,
      },
      error: {
        backgroundColor: semanticVars.status.dangerBg,
        color: semanticVars.status.danger,
        borderColor: semanticVars.status.danger,
      },
    },
  },
});
