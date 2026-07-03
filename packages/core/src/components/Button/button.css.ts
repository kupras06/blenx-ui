import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const intentVars = {
  solidBg: createVar(),
  solidFg: createVar(),
  solidHoverBg: createVar(),
  softBg: createVar(),
  softFg: createVar(),
  softHoverBg: createVar(),
  border: createVar(),
  fg: createVar(),
};

export const variant = recipe({
  base: [
    baseSprinkles({
      display: "inline-flex",
      align: "center",
      justify: "center",
      gap: "sm",
      radius: "default",
      width: "fit",
      height: "fit",
      position: "relative",
      fontSize: "md",
      fontWeight: "medium",
    }),
    style({
      borderStyle: "solid",
      borderWidth: 1,
      cursor: "pointer",
      textDecoration: "none",
      transition: "all 0.2s ease",
      selectors: {
        "&:disabled": {
          opacity: 0.4,
          cursor: "not-allowed",
        },
      },
    }),
  ],
  variants: {
    intent: {
      primary: {
        vars: {
          [intentVars.solidBg]: semanticVars.interactive.primary.default,
          [intentVars.solidFg]: semanticVars.interactive.primaryFg,
          [intentVars.solidHoverBg]: semanticVars.interactive.primary.hover,
          [intentVars.softBg]: semanticVars.interactive.primaryBg.default,
          [intentVars.softFg]: semanticVars.interactive.primary.default,
          [intentVars.softHoverBg]: semanticVars.interactive.primaryBg.hover,
          [intentVars.border]: semanticVars.interactive.primary.active,
          [intentVars.fg]: semanticVars.interactive.primary.default,
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
          [intentVars.fg]: semanticVars.text.primary,
        },
      },
      success: {
        vars: {
          [intentVars.solidBg]: semanticVars.status.success.default,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.status.success.hover,
          [intentVars.softBg]: semanticVars.status.successBg,
          [intentVars.softFg]: semanticVars.status.success.default,
          [intentVars.softHoverBg]: semanticVars.status.successBg,
          [intentVars.border]: semanticVars.status.success.active,
          [intentVars.fg]: semanticVars.status.success.default,
        },
      },
      warning: {
        vars: {
          [intentVars.solidBg]: semanticVars.status.warning.default,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.status.warning.hover,
          [intentVars.softBg]: semanticVars.status.warningBg,
          [intentVars.softFg]: semanticVars.status.warning.default,
          [intentVars.softHoverBg]: semanticVars.status.warningBg,
          [intentVars.border]: semanticVars.status.warning.active,
          [intentVars.fg]: semanticVars.status.warning.default,
        },
      },
      danger: {
        vars: {
          [intentVars.solidBg]: semanticVars.status.danger.default,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.status.danger.hover,
          [intentVars.softBg]: semanticVars.status.dangerBg,
          [intentVars.softFg]: semanticVars.status.danger.default,
          [intentVars.softHoverBg]: semanticVars.status.dangerBg,
          [intentVars.border]: semanticVars.status.danger.active,
          [intentVars.fg]: semanticVars.status.danger.default,
        },
      },
      info: {
        vars: {
          [intentVars.solidBg]: semanticVars.status.info.default,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.status.info.hover,
          [intentVars.softBg]: semanticVars.status.infoBg,
          [intentVars.softFg]: semanticVars.status.info.default,
          [intentVars.softHoverBg]: semanticVars.status.infoBg,
          [intentVars.border]: semanticVars.status.info.active,
          [intentVars.fg]: semanticVars.status.info.default,
        },
      },
      mono: {
        vars: {
          [intentVars.solidBg]: semanticVars.background.default,
          [intentVars.solidFg]: semanticVars.text.primary,
          [intentVars.solidHoverBg]: semanticVars.background.subtle,
          [intentVars.softBg]: semanticVars.background.default,
          [intentVars.softFg]: semanticVars.text.primary,
          [intentVars.softHoverBg]: semanticVars.background.subtle,
          [intentVars.border]: semanticVars.border.default,
          [intentVars.fg]: semanticVars.text.primary,
        },
      },
    },
    size: {
      xs: baseSprinkles({ fontSize: "sm", py: "xxs", px: "xs" }),
      sm: baseSprinkles({ fontSize: "sm", py: "xs", px: "sm" }),
      icon: baseSprinkles({ py: "xs", px: "xs" }),
      md: baseSprinkles({ fontSize: "md", py: "xs", px: "sm" }),
      lg: baseSprinkles({ fontSize: "lg", py: "sm", px: "md" }),
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
            borderColor: intentVars.border,
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
