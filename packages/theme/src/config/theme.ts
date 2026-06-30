import { createTheme } from "@vanilla-extract/css";
import type { PaletteRoles, PaletteScale } from "../palettes/types";
import { semanticVars } from "../contract.css";
import { resolveToSemanticTokens } from "../semantic/resolve";
import type { ThemeConfig } from "./types";
type PaletteKind = "colorful" | "neutral";
function blendScale(
  base: PaletteScale,
  alpha: PaletteScale,
  kind: PaletteKind = "colorful",
): PaletteRoles {
  const borderStep = kind === "neutral" ? 6 : 7;
  const borderHoverStep = kind === "neutral" ? 7 : 8;
  return {
    // bg/border/text states intentionally pull from the alpha scale where possible —
    // alpha steps composite correctly over arbitrary underlying surfaces
    // (nested cards, dark mode auto-adapt). solid/solidFg use the opaque base
    // scale since filled elements don't need to blend with what's beneath them.
    bg: {
      default: alpha[3],
      hover: alpha[4],
      active: alpha[5],
    },
    border: {
      default: base[borderStep],
      hover: base[borderHoverStep],
      active: base[borderHoverStep], // no distinct active step in Radix scales; reuse hover
    },
    text: {
      default: base[11],
      hover: base[12], // slight contrast bump on hover (e.g. links)
      active: base[12],
    },
    solid: {
      default: base[9],
      hover: base[10],
      active: base[10], // Radix has no step 10.5; active reuses hover step
    },
    solidFg: base[12],
    focus: base[8],
  };
}

export function genPalleteFromRadix<T extends string>(
  prefix: T,
  colors: Record<`${T}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`, string>,
): PaletteScale {
  return {
    1: colors[`${prefix}1`],
    2: colors[`${prefix}2`],
    3: colors[`${prefix}3`],
    4: colors[`${prefix}4`],
    5: colors[`${prefix}5`],
    6: colors[`${prefix}6`],
    7: colors[`${prefix}7`],
    8: colors[`${prefix}8`],
    9: colors[`${prefix}9`],
    10: colors[`${prefix}10`],
    11: colors[`${prefix}11`],
    12: colors[`${prefix}12`],
  };
}
export function createBlenxTheme(config: ThemeConfig) {
  const resolvedTheme = resolveToSemanticTokens({
    primary: blendScale(config.colors.primary.base, config.colors.primary.accent),
    secondary: blendScale(config.colors.secondary.base, config.colors.secondary.accent),
    info: blendScale(config.colors.info.base, config.colors.info.accent),
    success: blendScale(config.colors.success.base, config.colors.success.accent),
    danger: blendScale(config.colors.danger.base, config.colors.danger.accent),
    neutral: blendScale(config.colors.neutral.base, config.colors.neutral.accent),
    warning: blendScale(config.colors.warning.base, config.colors.warning.accent),
  });

  const themeClass = createTheme(semanticVars, resolvedTheme);

  return {
    themeClass,
  };
}
