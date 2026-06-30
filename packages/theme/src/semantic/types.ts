import type { PaletteScale } from "../palettes/types";

export interface SemanticTokens {
  background: {
    default: string;
    subtle: string;
  };
  surface: {
    default: string;
    raised: string;
    overlay: string;
    floating: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
  };
  border: {
    default: string;
    subtle: string;
    strong: string;
  };
  interactive: {
    primary: string;
    primaryFg: string;
    primaryHover: string;
    primaryBg: string;
    secondary: string;
    secondaryFg: string;
    secondaryHover: string;
    secondaryBg: string;
    neutral: string;
    neutralFg: string;
  };
  status: {
    success: string;
    successBg: string;
    warning: string;
    warningBg: string;
    danger: string;
    dangerBg: string;
    info: string;
    infoBg: string;
  };
  focus: {
    ring: string;
  };
  shadow: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

export interface ThemeColors {
  primary: PaletteScale;
  secondary: PaletteScale;
  neutral: PaletteScale;
  success: PaletteScale;
  warning: PaletteScale;
  danger: PaletteScale;
  info: PaletteScale;
}

export interface ThemeConfig {
  colors?: Partial<ThemeColors>;
  semantic?: DeepPartial<SemanticTokens>;
  darkSemantic?: DeepPartial<SemanticTokens>;
}
