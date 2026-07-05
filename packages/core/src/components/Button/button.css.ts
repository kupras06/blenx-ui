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
          [intentVars.solidBg]: semanticVars.color.primary.default,
          [intentVars.solidFg]: semanticVars.color.primary.fg,
          [intentVars.solidHoverBg]: semanticVars.color.primary.hover,
          [intentVars.softBg]: semanticVars.color.primary.bg,
          [intentVars.softFg]: semanticVars.color.primary.default,
          [intentVars.softHoverBg]: semanticVars.color.primary.bgHover,
          [intentVars.border]: semanticVars.color.primary.active,
          [intentVars.fg]: semanticVars.color.primary.default,
        },
      },
      neutral: {
        vars: {
          [intentVars.solidBg]: semanticVars.surface.default,
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
          [intentVars.solidBg]: semanticVars.color.success.default,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.color.success.hover,
          [intentVars.softBg]: semanticVars.color.success.bg,
          [intentVars.softFg]: semanticVars.color.success.default,
          [intentVars.softHoverBg]: semanticVars.color.success.bg,
          [intentVars.border]: semanticVars.color.success.active,
          [intentVars.fg]: semanticVars.color.success.default,
        },
      },
      warning: {
        vars: {
          [intentVars.solidBg]: semanticVars.color.warning.default,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.color.warning.hover,
          [intentVars.softBg]: semanticVars.color.warning.bg,
          [intentVars.softFg]: semanticVars.color.warning.default,
          [intentVars.softHoverBg]: semanticVars.color.warning.bg,
          [intentVars.border]: semanticVars.color.warning.active,
          [intentVars.fg]: semanticVars.color.warning.default,
        },
      },
      danger: {
        vars: {
          [intentVars.solidBg]: semanticVars.color.danger.default,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.color.danger.hover,
          [intentVars.softBg]: semanticVars.color.danger.bg,
          [intentVars.softFg]: semanticVars.color.danger.default,
          [intentVars.softHoverBg]: semanticVars.color.danger.bg,
          [intentVars.border]: semanticVars.color.danger.active,
          [intentVars.fg]: semanticVars.color.danger.default,
        },
      },
      info: {
        vars: {
          [intentVars.solidBg]: semanticVars.color.info.active,
          [intentVars.solidFg]: semanticVars.text.inverse,
          [intentVars.solidHoverBg]: semanticVars.color.info.hover,
          [intentVars.softBg]: semanticVars.color.info.bg,
          [intentVars.softFg]: semanticVars.color.info.default,
          [intentVars.softHoverBg]: semanticVars.color.info.bg,
          [intentVars.border]: semanticVars.color.info.active,
          [intentVars.fg]: semanticVars.color.info.default,
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
      md: baseSprinkles({ fontSize: "md", py: "sm", px: "md" }),
      lg: baseSprinkles({ fontSize: "lg", py: "md", px: "lg" }),
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
