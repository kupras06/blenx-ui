import type { ReactNode } from "react";
import { useMemo } from "react";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius as radiusTokens } from "@blenx-dev/theme/tokens";
import { useThemeBuilder } from "./theme-builder-context";

const radiusMap: Record<string, string> = {
  none: "0px",
  small: radiusTokens.sm,
  medium: radiusTokens.md,
  large: radiusTokens.lg,
  pill: radiusTokens.full,
};

function cx(name: string) {
  return name.slice(4, -1);
}

export function ThemePreviewProvider({ children }: { children: ReactNode }) {
  const tokens = useThemeBuilder((s) => s.tokens);

  const cssVars = useMemo(() => {
    const vars: Record<string, string> = {};
    const entries: Array<[string, string]> = [
      [themeContract.primary, tokens.primary],
      [themeContract.primarySubtle, tokens.primarySubtle],
      [themeContract.secondary, tokens.secondary],
      [themeContract.background, tokens.background],
      [themeContract.backgroundSubtle, tokens.backgroundSubtle],
      [themeContract.surface, tokens.surface],
      [themeContract.surfaceSubtle, tokens.surfaceSubtle],
      [themeContract.surfaceRaised, tokens.surfaceRaised],
      [themeContract.surfaceHover, tokens.surfaceHover],
      [themeContract.surfaceOverlay, tokens.surfaceOverlay],
      [themeContract.border, tokens.border],
      [themeContract.borderSubtle, tokens.borderSubtle],
      [themeContract.borderStrong, tokens.borderStrong],
      [themeContract.contentPrimary, tokens.contentPrimary],
      [themeContract.contentSecondary, tokens.contentSecondary],
      [themeContract.contentDisabled, tokens.contentDisabled],
      [themeContract.contentOnPrimary, tokens.contentOnPrimary],
      [themeContract.sentimentNegative, tokens.sentimentNegative],
      [themeContract.sentimentNegativeSubtle, tokens.sentimentNegativeSubtle],
      [themeContract.sentimentPositive, tokens.sentimentPositive],
      [themeContract.sentimentPositiveSubtle, tokens.sentimentPositiveSubtle],
      [themeContract.sentimentWarning, tokens.sentimentWarning],
      [themeContract.sentimentWarningSubtle, tokens.sentimentWarningSubtle],
      [themeContract.sentimentInfo, tokens.sentimentInfo],
      [themeContract.sentimentInfoSubtle, tokens.sentimentInfoSubtle],
      [themeContract.focusRing, tokens.focusRing],
      [themeContract.shadowSm, tokens.shadowSm],
      [themeContract.shadowMd, tokens.shadowMd],
      [themeContract.shadowLg, tokens.shadowLg],
      [themeContract.shadowXl, tokens.shadowXl],
      [themeContract.fontSize, tokens.fontSize],
      [themeContract.borderRadius, radiusMap[tokens.borderRadius] ?? radiusTokens.md],
    ];
    for (const [k, v] of entries) {
      vars[cx(k)] = v;
    }
    return vars;
  }, [tokens]);
  return <div style={cssVars as React.CSSProperties}>{children}</div>;
}
