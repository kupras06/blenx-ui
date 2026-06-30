import { createTheme } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "./contract.css";
import { tokenVarsDefaults } from "./tokens-defaults";
import { resolveSemanticTokens } from "./semantic/resolve";
import type { ThemeConfig } from "./semantic/types";

function mergeDeep<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = { ...target };
  for (const key of Object.keys(source) as (keyof T)[]) {
    const val = source[key];
    if (val !== undefined && typeof val === "object" && !Array.isArray(val)) {
      result[key] = mergeDeep(result[key] as any, val as any);
    } else if (val !== undefined) {
      (result as any)[key] = val;
    }
  }
  return result;
}

export function createBlenxTheme(config?: ThemeConfig) {
  const colors = config?.colors;

  const lightSemantic = resolveSemanticTokens(colors ?? {}, "light");
  const darkSemantic = resolveSemanticTokens(colors ?? {}, "dark");

  const resolvedLight = config?.semantic
    ? mergeDeep(lightSemantic, config.semantic as any)
    : lightSemantic;
  const resolvedDark = mergeDeep(
    darkSemantic,
    mergeDeep(config?.semantic ?? ({} as any), config?.darkSemantic ?? ({} as any)),
  );

  const lightClass = createTheme(semanticVars, resolvedLight);
  const darkClass = createTheme(semanticVars, resolvedDark);
  const tokenThemeClass = createTheme(tokenVars, tokenVarsDefaults);

  return {
    lightClass,
    darkClass,
    tokenThemeClass,
  };
}
