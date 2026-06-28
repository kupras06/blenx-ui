import { style } from "@vanilla-extract/css";
import { themeContract } from "./contract.css";

export const borderRadius = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  xxl: "24px",
  full: "999px",
} as const;

export const fonts = {
  sans: '"DM Sans", system-ui, -apple-system, sans-serif',
  display: '"DM Sans", system-ui, sans-serif',
  heading: '"DM Sans", system-ui, sans-serif',
  body: '"DM Sans", system-ui, sans-serif',
  label: '"DM Sans", system-ui, sans-serif',
  mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
} as const;

export const fontSize = {
  xxs: "10px",
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  xxl: "24px",
  xxxl: "30px",
  display: "36px",
  displayLg: "48px",
  hero: "60px",
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
} as const;

export const lineHeight = {
  tight: "1.2",
  snug: "1.35",
  normal: "1.5",
  relaxed: "1.625",
  loose: "1.8",
} as const;

export const letterSpacing = {
  tight: "-0.04em",
  snug: "-0.02em",
  normal: "0",
  wide: "0.02em",
  wider: "0.05em",
  widest: "0.1em",
} as const;

export const spacing = {
  none: "0px",
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "64px",
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
} as const;

export const mediaQueries = {
  sm: "screen and (min-width: 640px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 1024px)",
  xl: "screen and (min-width: 1280px)",
  xxl: "screen and (min-width: 1536px)",
  dark: "(prefers-color-scheme: dark)",
} as const;

export const primitives = {
  trigger: style({
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    font: "inherit",
    color: "inherit",
    textDecoration: "none",
    borderWidth: 0,
    WebkitTapHighlightColor: "transparent",
  }),
  focusable: style({
    outline: "none",
    selectors: {
      "&:focus-visible": {
        outline: `2px solid ${themeContract.focusRing}`,
      },
    },
  }),
};

export const borderWidth = {
  hairline: "0.5px",
  thin: "1px",
  medium: "1.5px",
  thick: "2px",
  heavy: "3px",
} as const;

export const duration = {
  instant: "50ms",
  fast: "100ms",
  normal: "200ms",
  slow: "300ms",
  slower: "500ms",
  lazy: "700ms",
} as const;

export const easing = {
  linear: "linear",
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",
  enter: "cubic-bezier(0, 0, 0.2, 1)",
  exit: "cubic-bezier(0.4, 0, 1, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
} as const;

export const zIndex = {
  base: 0,
  raised: 100,
  floating: 1000,
  sticky: 1100,
  overlay: 1200,
  popover: 1300,
  modal: 1400,
  toast: 1500,
  tooltip: 1600,
} as const;
