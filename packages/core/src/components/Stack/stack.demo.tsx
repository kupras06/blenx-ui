import { Box } from "../Box/box";
import { Text } from "../Text/text";
import { HStack, VStack } from "./stack";

export function StackDemo() {
  return (
    <VStack gap="md">
      <Text variant="h6">VStack</Text>
      <VStack gap="xs">
        <Box backgroundColor="surface" padding="sm" radius="sm">
          <Text variant="body3">Item 1</Text>
        </Box>
        <Box backgroundColor="surface" padding="sm" radius="sm">
          <Text variant="body3">Item 2</Text>
        </Box>
        <Box backgroundColor="surface" padding="sm" radius="sm">
          <Text variant="body3">Item 3</Text>
        </Box>
      </VStack>

      <Text variant="h6">HStack</Text>
      <HStack gap="sm">
        <Box backgroundColor="surface" padding="md" radius="sm">
          <Text variant="body3">A</Text>
        </Box>
        <Box backgroundColor="surface" padding="md" radius="sm">
          <Text variant="body3">B</Text>
        </Box>
        <Box backgroundColor="surface" padding="md" radius="sm">
          <Text variant="body3">C</Text>
        </Box>
      </HStack>

      <Text variant="h6">HStack with wrap</Text>
      <HStack gap="sm" wrap>
        {Array.from({ length: 12 }, (_, i) => (
          <Box key={i} backgroundColor="surface" padding="md" radius="sm">
            <Text variant="body3">{i + 1}</Text>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
}

export function VStackDemo() {
  return (
    <VStack gap="xs">
      <Box backgroundColor="surface" padding="sm" radius="sm">
        <Text variant="body3">Row 1</Text>
      </Box>
      <Box backgroundColor="surface" padding="sm" radius="sm">
        <Text variant="body3">Row 2</Text>
      </Box>
      <Box backgroundColor="surface" padding="sm" radius="sm">
        <Text variant="body3">Row 3</Text>
      </Box>
    </VStack>
  );
}

export function HStackDemo() {
  return (
    <HStack gap="sm">
      <Box backgroundColor="surface" padding="md" radius="sm">
        <Text variant="body3">A</Text>
      </Box>
      <Box backgroundColor="surface" padding="md" radius="sm">
        <Text variant="body3">B</Text>
      </Box>
      <Box backgroundColor="surface" padding="md" radius="sm">
        <Text variant="body3">C</Text>
      </Box>
    </HStack>
  );
}

export const demos = [
  { name: "Default", component: StackDemo },
  { name: "VStack", component: VStackDemo },
  { name: "HStack", component: HStackDemo },
];
