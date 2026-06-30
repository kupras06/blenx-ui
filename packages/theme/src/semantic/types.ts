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
    primary: {
      default: string;
      hover: string;
      active: string;
    };
    primaryFg: string;
    primaryBg: {
      default: string;
      hover: string;
      active: string;
    };
    secondary: {
      default: string;
      hover: string;
      active: string;
    };
    secondaryFg: string;
    secondaryBg: {
      default: string;
      hover: string;
      active: string;
    };
    neutral: {
      default: string;
      hover: string;
      active: string;
    };
    neutralFg: string;
  };
  status: {
    success: {
      default: string;
      hover: string;
      active: string;
    };
    successBg: string;
    warning: {
      default: string;
      hover: string;
      active: string;
    };
    warningBg: string;
    danger: {
      default: string;
      hover: string;
      active: string;
    };
    dangerBg: string;
    info: {
      default: string;
      hover: string;
      active: string;
    };
    infoBg: string;
  };
  focus: {
    ring: string;
  };
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
