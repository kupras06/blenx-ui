import * as stylex from "@stylexjs/stylex";
import { theme } from "./contract.stylex";

export const borderRadius = stylex.defineVars({
  xsmall: "2px",
  small: "4px",
  medium: "8px",
  large: "12px",
  xlarge: "16px",
  xxlarge: "24px",
  full: "999px",
});

export const fonts = stylex.defineVars({
  sans: '"DM Sans", system-ui, -apple-system, sans-serif',
  display: '"DM Sans", system-ui, sans-serif',
  heading: '"DM Sans", system-ui, sans-serif',
  body: '"DM Sans", system-ui, sans-serif',
  label: '"DM Sans", system-ui, sans-serif',
  mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
});

export const fontSize = stylex.defineVars({
  xxsmall: "10px",
  xsmall: "12px",
  small: "14px",
  medium: "16px",
  large: "18px",
  xlarge: "20px",
  xxlarge: "24px",
  xxxlarge: "30px",
  display: "36px",
  displayLg: "48px",
  hero: "60px",
});

export const fontWeight = stylex.defineVars({
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
});

export const lineHeight = stylex.defineVars({
  tight: "1.2",
  snug: "1.35",
  normal: "1.5",
  relaxed: "1.625",
  loose: "1.8",
});

export const letterSpacing = stylex.defineVars({
  tight: "-0.04em",
  snug: "-0.02em",
  normal: "0",
  wide: "0.02em",
  wider: "0.05em",
  widest: "0.1em",
});

export const spacing = stylex.defineVars({
  none: "0px",
  xxsmall: "4px",
  xsmall: "8px",
  small: "12px",
  medium: "16px",
  large: "24px",

  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "64px",
  huge: "80px",
  massive: "96px",
  titanic: "192px",

  "0": "0px",
  "0.5": "2px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "9": "36px",
  "10": "40px",
  "12": "48px",
  "16": "64px",
  "20": "80px",
  "24": "96px",
  "32": "128px",
  "40": "160px",
  "48": "192px",
});

const darkMode = "@media (prefers-color-scheme: dark)";
export const mediaQueries = stylex.defineConsts({
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
  xxl: "@media (min-width: 1536px)",
  dark: darkMode,
  darkMode,
});

// ─── Primitives ──────────────────────────────────────────────────────────────

export const primitives = stylex.create({
  trigger: {
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    font: "inherit",
    color: "inherit",
    textDecoration: "none",
    borderWidth: 0,
    WebkitTapHighlightColor: "transparent",
  },

  focusable: {
    outline: {
      default: "none",
      ":focus-visible": `2px solid ${theme.focusRing}`,
    },
  },
});

export const dataRuleQueries = stylex.defineConsts({
  dataChecked: "[data-checked]",
  dataDisabled: "[data-disabled]",
  dataFocus: "[data-focus]",
  dataPressed: "[data-pressed]",
  parentDataChecked: "[data-checked] &",
  parentDataDisabled: "[data-disabled] &",
  hasSvg: "& svg",
});

// ─── Border width ────────────────────────────────────────────────────────────
export const borderWidth = stylex.defineVars({
  hairline: "0.5px",
  thin: "1px",
  medium: "1.5px",
  thick: "2px",
  heavy: "3px",
});

// ─── Motion ──────────────────────────────────────────────────────────────────
export const duration = stylex.defineVars({
  instant: "50ms",
  fast: "100ms",
  normal: "200ms",
  slow: "300ms",
  slower: "500ms",
  lazy: "700ms",
});

export const easing = stylex.defineVars({
  linear: "linear",
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",
  enter: "cubic-bezier(0, 0, 0.2, 1)",
  exit: "cubic-bezier(0.4, 0, 1, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
});

// ─── Z-index ─────────────────────────────────────────────────────────────────
export const zIndexVars = stylex.defineVars({
  base: 0,
  raised: 100,
  floating: 1000,
  sticky: 1100,
  overlay: 1200,
  popover: 1300,
  modal: 1400,
  toast: 1500,
  tooltip: 1600,
});
