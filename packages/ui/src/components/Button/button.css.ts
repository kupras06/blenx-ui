import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const intentVars = {
  solidBg: createVar(),
  solidFg: createVar(),
  solidHoverBg: createVar(),
  softBg: createVar(),
  softFg: createVar(),
  softHoverBg: createVar(),
  border: createVar(),
  borderHover: createVar(),
  fg: createVar(),
};

export const variant = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: tokenVars.spacing.sm,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: tokenVars.borderRadius.default,
    cursor: "pointer",
    fontWeight: 500,
    width: "fit-content",
    height: "fit-content",
    fontSize: tokenVars.fontSize.md,
    fontFamily: tokenVars.font.body,
    textDecoration: "none",
    position: "relative",
    transition: "all 0.2s ease",
    selectors: {
      "&:disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },
  variants: {
    intent: {
      primary: {
        vars: {
          [intentVars.solidBg]: semanticVars.interactive.primary,
          [intentVars.solidFg]: semanticVars.interactive.primaryFg,
          [intentVars.solidHoverBg]: semanticVars.interactive.primaryHover,
          [intentVars.softBg]: semanticVars.interactive.primaryBg,
          [intentVars.softFg]: semanticVars.interactive.primary,
          [intentVars.softHoverBg]: semanticVars.interactive.primaryBg,
          [intentVars.border]: semanticVars.interactive.primary,
          [intentVars.borderHover]: semanticVars.interactive.primaryHover,
          [intentVars.fg]: semanticVars.interactive.primary,
        },
      },
      neutral: {
        vars: {
          [intentVars.solidBg]: semanticVars.surface.raised,
          [intentVars.solidFg]: semanticVars.text.primary,
          [intentVars.solidHoverBg]: semanticVars.background.subtle,
          [intentVars.softBg]: semanticVars.background.subtle,
          [intentVars.softFg]: semanticVars.text.primary,
          [intentVars.softHoverBg]: semanticVars.background.subtle,
          [intentVars.border]: semanticVars.border.default,
          [intentVars.borderHover]: semanticVars.border.strong,
          [intentVars.fg]: semanticVars.text.primary,
        },
      },
      success: {
        vars: {
          [intentVars.solidBg]: semanticVars.status.success,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.status.success,
          [intentVars.softBg]: semanticVars.status.successBg,
          [intentVars.softFg]: semanticVars.status.success,
          [intentVars.softHoverBg]: semanticVars.status.successBg,
          [intentVars.border]: semanticVars.status.success,
          [intentVars.borderHover]: semanticVars.status.success,
          [intentVars.fg]: semanticVars.status.success,
        },
      },
      warning: {
        vars: {
          [intentVars.solidBg]: semanticVars.status.warning,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.status.warning,
          [intentVars.softBg]: semanticVars.status.warningBg,
          [intentVars.softFg]: semanticVars.status.warning,
          [intentVars.softHoverBg]: semanticVars.status.warningBg,
          [intentVars.border]: semanticVars.status.warning,
          [intentVars.borderHover]: semanticVars.status.warning,
          [intentVars.fg]: semanticVars.status.warning,
        },
      },
      danger: {
        vars: {
          [intentVars.solidBg]: semanticVars.status.danger,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.status.danger,
          [intentVars.softBg]: semanticVars.status.dangerBg,
          [intentVars.softFg]: semanticVars.status.danger,
          [intentVars.softHoverBg]: semanticVars.status.dangerBg,
          [intentVars.border]: semanticVars.status.danger,
          [intentVars.borderHover]: semanticVars.status.danger,
          [intentVars.fg]: semanticVars.status.danger,
        },
      },
      info: {
        vars: {
          [intentVars.solidBg]: semanticVars.status.info,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.status.info,
          [intentVars.softBg]: semanticVars.status.infoBg,
          [intentVars.softFg]: semanticVars.status.info,
          [intentVars.softHoverBg]: semanticVars.status.infoBg,
          [intentVars.border]: semanticVars.status.info,
          [intentVars.borderHover]: semanticVars.status.info,
          [intentVars.fg]: semanticVars.status.info,
        },
      },
      mono: {
        vars: {
          [intentVars.solidBg]: "#ffffff",
          [intentVars.solidFg]: "#111111",
          [intentVars.solidHoverBg]: "#f5f5f5",
          [intentVars.softBg]: "#ffffff",
          [intentVars.softFg]: "#111111",
          [intentVars.softHoverBg]: "#f5f5f5",
          [intentVars.border]: "#d4d4d4",
          [intentVars.borderHover]: "#d4d4d4",
          [intentVars.fg]: "#111111",
        },
      },
    },
    size: {
      xs: {
        padding: `${tokenVars.spacing.xxs} ${tokenVars.spacing.xs}`,
        fontSize: tokenVars.fontSize.sm,
      },
      sm: {
        padding: `${tokenVars.spacing.xs} ${tokenVars.spacing.sm}`,
        fontSize: tokenVars.fontSize.sm,
      },
      icon: {
        padding: `${tokenVars.spacing.xs} ${tokenVars.spacing.xs}`,
      },
      md: { padding: `${tokenVars.spacing.sm} ${tokenVars.spacing.md}` },
      lg: {
        padding: `${tokenVars.spacing.md} ${tokenVars.spacing.lg}`,
        fontSize: tokenVars.fontSize.lg,
      },
    },
    variant: {
      solid: {
        backgroundColor: intentVars.solidBg,
        borderColor: intentVars.border,
        color: intentVars.solidFg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: intentVars.solidHoverBg,
          },
        },
      },
      soft: {
        backgroundColor: `color-mix(in srgb, ${intentVars.softBg} 30%, transparent)`,
        color: intentVars.solidBg,
        borderColor: "transparent",
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentVars.solidHoverBg} 20%, transparent)`,
          },
        },
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: intentVars.border,
        color: intentVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentVars.solidBg} 10%, transparent)`,
            borderColor: intentVars.borderHover,
          },
        },
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: intentVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentVars.solidBg} 12%, transparent)`,
          },
        },
      },
      link: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: intentVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
