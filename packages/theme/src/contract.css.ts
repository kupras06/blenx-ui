import { createThemeContract } from "@vanilla-extract/css";
// Shared shape — mirrors PaletteRoles' ColorState from Layer 3
// so state data isn't lost as it flows up through the layers.
export interface ColorStateVars {
  default: string | null;
  hover: string | null;
  active: string | null;
}
// ---------------------------------------------------------------
// 1. One shape, reused for every color role (brand + status + neutral)
// ---------------------------------------------------------------
const colorRole = () => ({
  default: null, // solid bg (or text-only accent color)
  hover: null,
  active: null,
  bg: null, // soft/tinted background (e.g. "soft" button, badges)
  bgHover: null,
  bgActive: null,
  fg: null, // foreground/text/icon ON the solid `default` bg
  text: null, // this color used AS text/link (e.g. links, accents)
  textActive: null, // pressed/active state of `text` (e.g. visited/active link)
  border: null, // this color used as a border (inputs, focus outlines etc.)
});

export type ColorRole = ReturnType<typeof colorRole>;

// ---------------------------------------------------------------
// 2. Roles are just an array — add a color, nothing else changes
// ---------------------------------------------------------------
const colorRoleNames = [
  "primary",
  "secondary",
  "neutral", // yes — neutral gets the same shape too, no special-casing
  "success",
  "warning",
  "danger",
  "info",
] as const;

export type ColorRoleName = (typeof colorRoleNames)[number];

const color = colorRoleNames.reduce(
  (acc, name) => {
    acc[name] = colorRole();
    return acc;
  },
  {} as Record<ColorRoleName, ColorRole>,
);

// ---------------------------------------------------------------
// 3. Full contract
// ---------------------------------------------------------------
export const semanticVars = createThemeContract({
  background: {
    default: null,
    subtle: null,
  },
  surface: {
    default: null,
    raised: null,
    overlay: null,
    floating: null,
  },
  text: {
    primary: null,
    secondary: null,
    disabled: null,
    inverse: null,
  },
  border: {
    default: null,
    subtle: null,
    strong: null,
  },
  focus: {
    ring: null,
  },
  color, // primary, secondary, neutral, success, warning, danger, info — identical shape
});

export const tokenVars = createThemeContract({
  font: {
    sans: null,
    body: null,
    mono: null,
  },
  shadow: { sm: null, md: null, lg: null, xl: null },
  fontSize: {
    xxs: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    xxxl: null,
    display: null,
    displayLg: null,
    hero: null,
  },
  fontWeight: {
    regular: null,
    medium: null,
    semibold: null,
    bold: null,
    extrabold: null,
  },
  lineHeight: {
    tight: null,
    snug: null,
    normal: null,
    relaxed: null,
    loose: null,
  },
  letterSpacing: {
    tight: null,
    snug: null,
    normal: null,
    wide: null,
    wider: null,
    widest: null,
  },
  spacing: {
    none: null,
    xxs: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    xxxl: null,
    huge: null,
    massive: null,
    titanic: null,
    "0": null,
    "0.5": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    "10": null,
    "12": null,
    "16": null,
    "20": null,
    "24": null,
    "32": null,
    "40": null,
    "48": null,
  },
  borderRadius: {
    xxs: null,
    xxxl: null,
    default: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    full: null,
  },
  borderWidth: {
    hairline: null,
    thin: null,
    medium: null,
    thick: null,
    heavy: null,
  },
  duration: {
    instant: null,
    fast: null,
    normal: null,
    slow: null,
    slower: null,
    lazy: null,
  },
  easing: {
    linear: null,
    standard: null,
    enter: null,
    exit: null,
    spring: null,
    bounce: null,
  },
});
