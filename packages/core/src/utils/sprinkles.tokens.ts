import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const spacing = {
  none: "0",
  xxs: tokenVars.spacing.xxs,
  xs: tokenVars.spacing.xs,
  sm: tokenVars.spacing.sm,
  md: tokenVars.spacing.md,
  lg: tokenVars.spacing.lg,
  xl: tokenVars.spacing.xl,
  huge: tokenVars.spacing.huge,
  xxl: tokenVars.spacing.xxl,
  xxxl: tokenVars.spacing.xxxl,
  massive: tokenVars.spacing.massive,
  "0": tokenVars.spacing["0"],
  "3": tokenVars.spacing["3"],
  "4": tokenVars.spacing["4"],
  "6": tokenVars.spacing["6"],
  "8": tokenVars.spacing["8"],
  "10": tokenVars.spacing["10"],
  "40": tokenVars.spacing["40"],
  "48": tokenVars.spacing["48"],
};

export const containerWidths = {
  xxs: "240px",
  xs: "320px",
  sm: "480px",
  md: "640px",
  lg: "768px",
  xl: "1024px",
  xxl: "1280px",
  xxxl: "1440px",
  480: "480px",
  640: "640px",
  400: "400px",
  560: "560px",
  full: "100%",
  screen: "100%",
  viewport: "90svw",
  maxViewport: "98svw",
};

export const colors = {
  primary: semanticVars.text.primary,
  default: "currentColor",
  transparent: "transparent",
  secondary: semanticVars.text.secondary,
  disabled: semanticVars.text.disabled,
  inverse: semanticVars.text.inverse,
  link: semanticVars.color.primary.default,
  error: semanticVars.color.danger.default,
  success: semanticVars.color.success.default,
  warning: semanticVars.color.warning.default,
  info: semanticVars.color.info.default,
} as const;
export const backgroundColors = {
  primary: semanticVars.color.primary.default,
  secondary: semanticVars.color.secondary.default,
  surface: semanticVars.surface.default,
  canvas: semanticVars.background.default,
  subtle: semanticVars.background.subtle,
  default: "inherit",
  transparent: "transparent",
  error: semanticVars.color.danger.bg,
  success: semanticVars.color.success.bg,
  warning: semanticVars.color.warning.bg,
  info: semanticVars.color.info.bg,
};
export const responsiveConditions = {
  base: {},
  md: { "@media": "screen and (min-width: 768px)" },
  lg: { "@media": "screen and (min-width: 1280px)" },
} as const;
