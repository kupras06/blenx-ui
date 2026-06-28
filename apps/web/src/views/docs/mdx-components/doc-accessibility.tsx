import { Box, HStack, Text, VStack } from "@blenx-dev/ui";

interface DocAccessibilityProps {
  keyboard?: string[];
  aria?: string[];
}

function DocAccessibility({ keyboard, aria }: DocAccessibilityProps) {
  if ((!keyboard || keyboard.length === 0) && (!aria || aria.length === 0)) {
    return null;
  }

  return (
    <VStack gap="md">
      {keyboard && keyboard.length > 0 && (
        <Box>
          <Text variant="h6" marginBottom="xs">
            Keyboard Support
          </Text>
          <HStack gap="xs">
            {keyboard.map((key) => (
              <Text key={key} variant="code" span>
                {key}
              </Text>
            ))}
          </HStack>
        </Box>
      )}

      {aria && aria.length > 0 && (
        <Box>
          <Text variant="h6" marginBottom="xs">
            ARIA Attributes
          </Text>
          <HStack gap="xs">
            {aria.map((attr) => (
              <Text key={attr} variant="code">
                {attr}
              </Text>
            ))}
          </HStack>
        </Box>
      )}
    </VStack>
  );
}

export { DocAccessibility };
