import type { PaletteRoles } from "../palettes/types";
import type { SemanticTokens } from "./types";

type BlenxThemeColors = {
  primary: PaletteRoles;
  secondary: PaletteRoles;
  success: PaletteRoles;
  warning: PaletteRoles;
  info: PaletteRoles;
  danger: PaletteRoles;
  neutral: PaletteRoles;
};

function toColorRole({ focus: _focus, ...role }: PaletteRoles) {
  return role;
}

export function resolveToSemanticTokens({
  primary,
  secondary,
  neutral,
  info,
  success,
  warning,
  danger,
}: BlenxThemeColors): SemanticTokens {
  return {
    background: {
      default: neutral.bg,
      subtle: neutral.bgHover,
    },
    surface: {
      default: neutral.bg,
      raised: neutral.bgActive,
      overlay: "rgba(0, 0, 0, 0.5)",
      floating: neutral.border,
    },
    text: {
      primary: neutral.textActive,
      secondary: neutral.text,
      disabled: neutral.border,
      inverse: neutral.fg,
    },
    border: {
      default: neutral.border,
      subtle: neutral.bgActive,
      strong: neutral.textActive,
    },
    color: {
      primary: toColorRole(primary),
      secondary: toColorRole(secondary),
      neutral: toColorRole(neutral),
      success: toColorRole(success),
      warning: toColorRole(warning),
      danger: toColorRole(danger),
      info: toColorRole(info),
    },
    focus: {
      ring: primary.focus,
    },
  };
}
