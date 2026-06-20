import { Card } from "../Card/card";
import { Text } from "../Text/text";
import { HStack, Stack, VStack } from "./stack";

export function VStackStory() {
  return (
    <VStack gap="small">
      <Text variant="h4">VStack (column)</Text>
      <Card padding="small">
        <Text variant="body2">Item 1</Text>
      </Card>
      <Card padding="small">
        <Text variant="body2">Item 2</Text>
      </Card>
      <Card padding="small">
        <Text variant="body2">Item 3</Text>
      </Card>
    </VStack>
  );
}

export function HStackStory() {
  return (
    <Stack gap="medium">
      <Text variant="h4">HStack (row)</Text>
      <HStack gap="small">
        <Card padding="small">
          <Text variant="body2">Item 1</Text>
        </Card>
        <Card padding="small">
          <Text variant="body2">Item 2</Text>
        </Card>
        <Card padding="small">
          <Text variant="body2">Item 3</Text>
        </Card>
      </HStack>
    </Stack>
  );
}

export function GapVariantsStory() {
  return (
    <VStack gap="medium">
      <Text variant="h4">Gap sizes</Text>
      {(["xxsmall", "xsmall", "small", "medium", "large"] as const).map((gap) => (
        <HStack key={gap} gap={gap}>
          <Card padding="small">
            <Text variant="body3">{gap}</Text>
          </Card>
          <Card padding="small">
            <Text variant="body3">Item</Text>
          </Card>
        </HStack>
      ))}
    </VStack>
  );
}
