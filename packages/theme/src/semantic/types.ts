import type { ColorRole, ColorRoleName } from "../contract.css";

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
    accent: string;
    disabled: string;
    inverse: string;
  };
  border: {
    default: string;
    subtle: string;
    strong: string;
  };

  focus: {
    ring: string;
  };
  color: Record<ColorRoleName, ColorRole>;
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
