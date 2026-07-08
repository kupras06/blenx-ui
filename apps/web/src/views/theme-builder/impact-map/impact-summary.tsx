import { memo } from "react";
import { Badge, Box, Text, VStack } from "@blenx-dev/core";
import { getComponentsForToken } from "../preview/component-token-map";
import { useThemeBuilder } from "../theme-builder-context";

export const ImpactSummary = memo(() => {
  const selectedToken = useThemeBuilder((s) => s.selectedToken);

  if (!selectedToken) {
    return (
      <Box padding="sm" borderRadius="md">
        <Text variant="body2" weight="semibold">
          Impact Map
        </Text>
        <Text variant="caption" color="disabled" textAlign="center" paddingY="sm">
          Hover a token in the Theme Variables table to see its impact
        </Text>
      </Box>
    );
  }

  const components = getComponentsForToken(selectedToken);
  const parts = selectedToken.split(".");
  const label = parts.length > 1 ? `${parts[0]} › ${parts[1]}` : selectedToken;

  return (
    <Box padding="sm" borderRadius="md">
      <Text variant="body2" weight="semibold">
        Impact: {label}
      </Text>
      <Box marginTop="sm">
        <Text variant="caption" color="secondary">
          Affects {components.length} component
          {components.length !== 1 ? "s" : ""}
        </Text>
      </Box>
      <VStack marginTop="md" gap="xxs">
        {components.map((name) => (
          <Badge key={name} palette="primary" variant="soft" radius="full">
            {name}
          </Badge>
        ))}
      </VStack>
    </Box>
  );
});
