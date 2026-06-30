import type { PaletteScale } from "../palettes/types";
import type { SemanticTokens, ThemeColors } from "./types";
import { defaultScales } from "./defaults";

function scaleStep(scale: PaletteScale, step: keyof PaletteScale): string {
  return scale[step];
}

function normalizeColorful(scale: PaletteScale) {
  return {
    bg: scaleStep(scale, 2),
    hover: scaleStep(scale, 4),
    border: scaleStep(scale, 7),
    solid: scaleStep(scale, 9),
    solidHover: scaleStep(scale, 10),
    solidFg: scaleStep(scale, 12),
    text: scaleStep(scale, 11),
    focus: scaleStep(scale, 8),
  };
}

function normalizeNeutral(scale: PaletteScale) {
  return {
    bg: scaleStep(scale, 3),
    bgHover: scaleStep(scale, 4),
    step1: scaleStep(scale, 1),
    step2: scaleStep(scale, 2),
    step5: scaleStep(scale, 5),
    step6: scaleStep(scale, 6),
    step7: scaleStep(scale, 7),
    step8: scaleStep(scale, 8),
    step9: scaleStep(scale, 9),
    step10: scaleStep(scale, 10),
    step11: scaleStep(scale, 11),
    step12: scaleStep(scale, 12),
  };
}

function invertScale(scale: PaletteScale): PaletteScale {
  return {
    1: scale[12],
    2: scale[11],
    3: scale[10],
    4: scale[9],
    5: scale[8],
    6: scale[7],
    7: scale[6],
    8: scale[5],
    9: scale[4],
    10: scale[3],
    11: scale[2],
    12: scale[1],
  };
}

function getScale(colors: Partial<ThemeColors>, key: keyof ThemeColors): PaletteScale {
  return (colors[key] ?? defaultScales[key]) as PaletteScale;
}

export function resolveSemanticTokens(
  colors: Partial<ThemeColors>,
  mode: "light" | "dark",
): SemanticTokens {
  if (mode === "dark") {
    const darkColors: ThemeColors = {
      primary: invertScale(getScale(colors, "primary")),
      secondary: invertScale(getScale(colors, "secondary")),
      neutral: invertScale(getScale(colors, "neutral")),
      success: invertScale(getScale(colors, "success")),
      warning: invertScale(getScale(colors, "warning")),
      danger: invertScale(getScale(colors, "danger")),
      info: invertScale(getScale(colors, "info")),
    };
    return resolveSemanticTokens(darkColors, "light");
  }

  const primary = normalizeColorful(getScale(colors, "primary"));
  const secondary = normalizeColorful(getScale(colors, "secondary"));
  const success = normalizeColorful(getScale(colors, "success"));
  const warning = normalizeColorful(getScale(colors, "warning"));
  const danger = normalizeColorful(getScale(colors, "danger"));
  const info = normalizeColorful(getScale(colors, "info"));
  const neutral = normalizeNeutral(getScale(colors, "neutral"));

  return {
    background: {
      default: neutral.step1,
      subtle: neutral.step2,
    },
    surface: {
      default: neutral.bg,
      raised: neutral.step5,
      overlay: "rgba(0, 0, 0, 0.5)",
      floating: neutral.step7,
    },
    text: {
      primary: neutral.step11,
      secondary: neutral.step10,
      disabled: neutral.step8,
      inverse: neutral.step1,
    },
    border: {
      default: neutral.step6,
      subtle: neutral.step5,
      strong: neutral.step7,
    },
    interactive: {
      primary: primary.solid,
      primaryFg: primary.solidFg,
      primaryHover: primary.solidHover,
      primaryBg: primary.bg,
      secondary: secondary.solid,
      secondaryFg: secondary.solidFg,
      secondaryHover: secondary.solidHover,
      secondaryBg: secondary.bg,
      neutral: neutral.step9,
      neutralFg: neutral.step12,
    },
    status: {
      success: success.solid,
      successBg: success.bg,
      warning: warning.solid,
      warningBg: warning.bg,
      danger: danger.solid,
      dangerBg: danger.bg,
      info: info.solid,
      infoBg: info.bg,
    },
    focus: {
      ring: primary.focus,
    },
    shadow: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px rgba(0, 0, 0, 0.07)",
      lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
      xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
    },
  };
}
