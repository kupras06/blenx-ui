import type { PaletteScale } from "../palettes/types";
import type { DeepPartial, SemanticTokens } from "../semantic/types";

export interface ColorPair {
  base: PaletteScale;
  accent: PaletteScale;
}

export interface ThemeColors {
  primary: ColorPair;
  secondary: ColorPair;
  neutral: ColorPair;
  success: ColorPair;
  warning: ColorPair;
  danger: ColorPair;
  info: ColorPair;
}

export interface ThemeConfig {
  colors: ThemeColors;
  semantic?: DeepPartial<SemanticTokens>;
  darkSemantic?: DeepPartial<SemanticTokens>;
}
