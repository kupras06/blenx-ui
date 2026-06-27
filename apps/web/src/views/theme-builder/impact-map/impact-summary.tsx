import { memo } from "react";
import { Text } from "@blenx-dev/components";
import { getComponentsForToken } from "../preview/component-token-map";
import { useThemeBuilder } from "../theme-builder-context";
import { impactPanel, impactEmpty, impactList, impactChip } from "@/lib/styles.css";

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
      <div className={impactPanel}>
        <Text variant="body2" weight="semibold">
          Impact Map
        </Text>
        <div className={impactEmpty}>
          Hover a token in the Theme Variables table to see its impact
        </div>
      </div>
    );
  }

  const components = getComponentsForToken(selectedToken);
  const label = tokenLabels[selectedToken] ?? selectedToken;

  return (
    <div className={impactPanel}>
      <Text variant="body2" weight="semibold">
        Impact: {label}
      </Text>
      <div style={{ marginTop: 8 }}>
        <Text variant="caption" color="secondary">
          Affects {components.length} component
          {components.length !== 1 ? "s" : ""}
        </Text>
      </div>
      <div className={impactList} style={{ marginTop: 16 }}>
        {components.map((name) => (
          <span key={name} className={impactChip}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
});
