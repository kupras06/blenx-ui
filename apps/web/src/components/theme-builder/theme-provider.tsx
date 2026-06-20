import type { ReactNode } from "react";
import { useMemo } from "react";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { borderRadius as radiusTokens } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import { useThemeBuilder } from "./theme-builder-context";

const radiusMap: Record<string, string> = {
	none: "0px",
	small: radiusTokens.small,
	medium: radiusTokens.medium,
	large: radiusTokens.large,
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
			[theme.primary, tokens.primary],
			[theme.primarySubtle, tokens.primarySubtle],
			[theme.secondary, tokens.secondary],
			[theme.background, tokens.background],
			[theme.backgroundSubtle, tokens.backgroundSubtle],
			[theme.surface, tokens.surface],
			[theme.surfaceSubtle, tokens.surfaceSubtle],
			[theme.surfaceRaised, tokens.surfaceRaised],
			[theme.surfaceHover, tokens.surfaceHover],
			[theme.surfaceOverlay, tokens.surfaceOverlay],
			[theme.border, tokens.border],
			[theme.borderSubtle, tokens.borderSubtle],
			[theme.borderStrong, tokens.borderStrong],
			[theme.contentPrimary, tokens.contentPrimary],
			[theme.contentSecondary, tokens.contentSecondary],
			[theme.contentDisabled, tokens.contentDisabled],
			[theme.contentOnPrimary, tokens.contentOnPrimary],
			[theme.sentimentNegative, tokens.sentimentNegative],
			[theme.sentimentNegativeSubtle, tokens.sentimentNegativeSubtle],
			[theme.sentimentPositive, tokens.sentimentPositive],
			[theme.sentimentPositiveSubtle, tokens.sentimentPositiveSubtle],
			[theme.sentimentWarning, tokens.sentimentWarning],
			[theme.sentimentWarningSubtle, tokens.sentimentWarningSubtle],
			[theme.sentimentInfo, tokens.sentimentInfo],
			[theme.sentimentInfoSubtle, tokens.sentimentInfoSubtle],
			[theme.focusRing, tokens.focusRing],
			[theme.shadowSm, tokens.shadowSm],
			[theme.shadowMd, tokens.shadowMd],
			[theme.shadowLg, tokens.shadowLg],
			[theme.shadowXl, tokens.shadowXl],
			[theme.fontSize, tokens.fontSize],
			[
				theme.borderRadius,
				radiusMap[tokens.borderRadius] ?? radiusTokens.medium,
			],
		];
		for (const [k, v] of entries) {
			vars[cx(k)] = v;
		}
		return vars;
	}, [tokens]);
	return <div style={cssVars as React.CSSProperties}>{children}</div>;
}
