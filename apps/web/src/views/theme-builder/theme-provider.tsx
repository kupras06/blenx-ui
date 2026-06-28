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

const contractKeyToVarName = (contractValue: string): string => {
  return contractValue.replace(/^var\(|\)$/g, "");
};

export function ThemePreviewProvider({ children }: { children: ReactNode }) {
  const tokens = useThemeBuilder((s) => s.tokens);

  const cssVars = useMemo(() => {
    const vars: Record<string, string> = {};
    const entries: Array<[string, string]> = [
      [themeContract.primary, tokens.primary],
      [themeContract.primarySubtle, tokens.primarySubtle],
      [themeContract.primaryHover, tokens.primaryHover],
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
      [themeContract.contentAccent, tokens.contentAccent],
      [themeContract.contentOnPrimary, tokens.contentOnPrimary],
      [themeContract.sentimentNegative, tokens.sentimentNegative],
      [themeContract.sentimentNegativeSubtle, tokens.sentimentNegativeSubtle],
      [themeContract.sentimentNegativeHover, tokens.sentimentNegativeHover],
      [themeContract.sentimentPositive, tokens.sentimentPositive],
      [themeContract.sentimentPositiveSubtle, tokens.sentimentPositiveSubtle],
      [themeContract.sentimentPositiveHover, tokens.sentimentPositiveHover],
      [themeContract.sentimentWarning, tokens.sentimentWarning],
      [themeContract.sentimentWarningSubtle, tokens.sentimentWarningSubtle],
      [themeContract.sentimentWarningHover, tokens.sentimentWarningHover],
      [themeContract.sentimentInfo, tokens.sentimentInfo],
      [themeContract.sentimentInfoSubtle, tokens.sentimentInfoSubtle],
      [themeContract.sentimentInfoHover, tokens.sentimentInfoHover],
      [themeContract.focusRing, tokens.focusRing],
      [themeContract.shadowSm, tokens.shadowSm],
      [themeContract.shadowMd, tokens.shadowMd],
      [themeContract.shadowLg, tokens.shadowLg],
      [themeContract.shadowXl, tokens.shadowXl],
      [themeContract.fontSize, tokens.fontSize],
      [themeContract.borderRadius, radiusMap[tokens.borderRadius] ?? radiusTokens.md],
      [themeContract.hoverOverlay, tokens.hoverOverlay],
      [themeContract.hoverOverlaySoft, tokens.hoverOverlaySoft],
    ];
    for (const [k, v] of entries) {
      vars[contractKeyToVarName(k)] = v;
    }
    return vars;
  }, [tokens]);
  return <div style={cssVars as React.CSSProperties}>{children}</div>;
}
