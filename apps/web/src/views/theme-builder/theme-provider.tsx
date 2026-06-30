import type { ReactNode } from "react";
import { useMemo } from "react";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { tokenVarsDefaults } from "@blenx-dev/theme/tokens";
import { useThemeBuilder } from "./theme-builder-context";

function extractLeafVars(obj: Record<string, any>, path: string[] = []): Array<[string, string]> {
  const result: Array<[string, string]> = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && typeof value === "object") {
      result.push(...extractLeafVars(value, [...path, key]));
    } else if (typeof value === "string") {
      const cssVarName = value.replace(/^var\(|\)$/g, "");
      result.push([cssVarName, key]);
    }
  }
  return result;
}

export function ThemePreviewProvider({ children }: { children: ReactNode }) {
  const tokens = useThemeBuilder((s) => s.tokens);

  const cssVars = useMemo(() => {
    const vars: Record<string, string> = {};

    const leafMap = new Map<string, string>();
    for (const [cssVar, key] of extractLeafVars(semanticVars)) {
      leafMap.set(key, cssVar);
    }

    for (const [groupKey, group] of Object.entries(tokens) as [string, Record<string, string>][]) {
      for (const [tokenKey, value] of Object.entries(group)) {
        const lookup =
          groupKey === "shadow"
            ? `shadow${tokenKey.charAt(0).toUpperCase() + tokenKey.slice(1)}`
            : tokenKey;
        const cssVar = leafMap.get(lookup);
        if (cssVar && value) {
          vars[cssVar] = value;
        }
      }
    }

    vars[tokenVars.font.sans.replace(/^var\(|\)$/g, "")] = tokenVarsDefaults.font.sans;
    vars[tokenVars.font.body.replace(/^var\(|\)$/g, "")] = tokenVarsDefaults.font.body;
    vars[tokenVars.font.mono.replace(/^var\(|\)$/g, "")] = tokenVarsDefaults.font.mono;

    return vars;
  }, [tokens]);

  return <div style={cssVars as React.CSSProperties}>{children}</div>;
}
