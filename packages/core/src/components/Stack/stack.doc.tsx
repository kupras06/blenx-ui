import { Card } from "../Card/card";
import { Text } from "../Text/text";
import { HStack, Stack, VStack } from "./stack";

export function VStackStory() {
  return (
    <VStack gap="sm">
      <Text variant="h4">VStack (column)</Text>
      <Card padding="sm">
        <Text variant="body2">Item 1</Text>
      </Card>
      <Card padding="sm">
        <Text variant="body2">Item 2</Text>
      </Card>
      <Card padding="sm">
        <Text variant="body2">Item 3</Text>
      </Card>
    </VStack>
  );
}

export function HStackStory() {
  return (
    <Stack gap="md">
      <Text variant="h4">HStack (row)</Text>
      <HStack gap="sm">
        <Card padding="sm">
          <Text variant="body2">Item 1</Text>
        </Card>
        <Card padding="sm">
          <Text variant="body2">Item 2</Text>
        </Card>
        <Card padding="sm">
          <Text variant="body2">Item 3</Text>
        </Card>
      </HStack>
    </Stack>
  );
}

export function GapVariantsStory() {
  return (
    <VStack gap="md">
      <Text variant="h4">Gap sizes</Text>
      {(["xxs", "xs", "small", "medium", "large"] as const).map((gap) => (
        <HStack key={gap} gap={gap}>
          <Card padding="sm">
            <Text variant="body3">{gap}</Text>
          </Card>
          <Card padding="sm">
            <Text variant="body3">Item</Text>
          </Card>
        </HStack>
      ))}
    </VStack>
  );
}
