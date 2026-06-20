import { memo } from "react";
import * as stylex from "@stylexjs/stylex";
import { Text } from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { borderRadius, fontSize, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import { getComponentsForToken } from "../preview/component-token-map";
import { useThemeBuilder } from "../theme-builder-context";

const styles = stylex.create({
  panel: {
    padding: spacing["2"],
    borderRadius: borderRadius.medium,
    backgroundColor: theme.surfaceRaised,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.borderSubtle,
  },
  empty: {
    color: theme.contentDisabled,
    fontSize: fontSize.xsmall,
    textAlign: "center",
    paddingBlock: spacing["2"],
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["1"],
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 8px",
    borderRadius: borderRadius.full,
    backgroundColor: `${theme.primary}15`,
    color: theme.primary,
    fontSize: fontSize.xsmall,
    fontWeight: 500,
  },
});

const tokenLabels: Record<string, string> = {
  primary: "Primary",
  primarySubtle: "Primary Subtle",
  secondary: "Secondary",
  background: "Background",
  surface: "Surface",
  border: "Border",
  contentPrimary: "Text Primary",
  contentSecondary: "Text Secondary",
  sentimentNegative: "Danger",
  sentimentPositive: "Success",
  borderRadius: "Border Radius",
  fontSize: "Font Size",
  focusRing: "Focus Ring",
};

export const ImpactSummary = memo(() => {
  const selectedToken = useThemeBuilder((s) => s.selectedToken);

  if (!selectedToken) {
    return (
      <div {...stylex.props(styles.panel)}>
        <Text variant="body2" weight="semibold">
          Impact Map
        </Text>
        <div {...stylex.props(styles.empty)}>
          Hover a token in the Theme Variables table to see its impact
        </div>
      </div>
    );
  }

  const components = getComponentsForToken(selectedToken);
  const label = tokenLabels[selectedToken] ?? selectedToken;

  return (
    <div {...stylex.props(styles.panel)}>
      <Text variant="body2" weight="semibold">
        Impact: {label}
      </Text>
      <div style={{ marginTop: spacing["1"] }}>
        <Text variant="caption" color="secondary">
          Affects {components.length} component
          {components.length !== 1 ? "s" : ""}
        </Text>
      </div>
      <div {...stylex.props(styles.list)} style={{ marginTop: spacing["2"] }}>
        {components.map((name) => (
          <span key={name} {...stylex.props(styles.chip)}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
});
