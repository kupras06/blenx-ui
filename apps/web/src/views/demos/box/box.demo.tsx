import { HStack, VStack, Text, Box } from "@blenx-dev/core";

export function BoxDemo() {
  return (
    <VStack gap="md">
      <Box padding="md" backgroundColor="surface" radius="md">
        <Text variant="body1">Surface — md padding, md radius</Text>
      </Box>
      <Box padding="lg" backgroundColor="info" radius="lg">
        <Text variant="body1" color="inverse">
          Info background — lg padding, lg radius
        </Text>
      </Box>
      <HStack gap="md">
        <Box padding="sm" backgroundColor="success" radius="sm" flex={1}>
          <Text variant="body2" color="inverse">
            Success
          </Text>
        </Box>
        <Box padding="sm" backgroundColor="warning" radius="full" flex={1}>
          <Text variant="body2" color="inverse">
            Warning pill
          </Text>
        </Box>
        <Box padding="sm" backgroundColor="error" radius="xs" flex={1}>
          <Text variant="body2" color="inverse">
            Error
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
}

export function BoxPadding() {
  return (
    <HStack gap="md" align="start">
      <Box padding="xs" backgroundColor="surface" radius="sm">
        <Text variant="body3">xs</Text>
      </Box>
      <Box padding="sm" backgroundColor="surface" radius="sm">
        <Text variant="body3">sm</Text>
      </Box>
      <Box padding="md" backgroundColor="surface" radius="sm">
        <Text variant="body3">md</Text>
      </Box>
      <Box padding="lg" backgroundColor="surface" radius="sm">
        <Text variant="body3">lg</Text>
      </Box>
    </HStack>
  );
}

export const demos = [
  { name: "Default", component: BoxDemo },
  { name: "Paddings", component: BoxPadding },
];
