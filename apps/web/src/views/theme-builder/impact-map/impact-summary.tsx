import { memo } from "react";
import { Text, VStack } from "@blenx-dev/ui";
import { getComponentsForToken } from "../preview/component-token-map";
import { useThemeBuilder } from "../theme-builder-context";
import { impactPanel, impactEmpty, impactChip } from "@/lib/styles.css";

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
  const parts = selectedToken.split(".");
  const label = parts.length > 1 ? `${parts[0]} › ${parts[1]}` : selectedToken;

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
      <VStack marginTop={"4"}>
        {components.map((name) => (
          <div key={name} className={impactChip}>
            {name}
          </div>
        ))}
      </VStack>
    </div>
  );
});
