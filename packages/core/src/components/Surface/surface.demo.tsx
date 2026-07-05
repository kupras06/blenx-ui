import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Surface } from "./surface";

export function SurfaceDemo() {
  return (
    <VStack gap="md">
      <Text variant="h6">Variants</Text>
      <HStack gap="md" wrap>
        <Surface variant="default" padding="lg" radius="md">
          <Text variant="body2">Default</Text>
        </Surface>
        <Surface variant="outline" padding="lg" radius="md">
          <Text variant="body2">Outline</Text>
        </Surface>
        <Surface variant="raised" padding="lg" radius="md">
          <Text variant="body2">Raised</Text>
        </Surface>
        <Surface variant="sunken" padding="lg" radius="md">
          <Text variant="body2">Sunken</Text>
        </Surface>
      </HStack>

      <Text variant="h6">Interactive</Text>
      <HStack gap="md">
        <Surface variant="default" interactive padding="lg" radius="md">
          <Text variant="body2">Click me</Text>
        </Surface>
        <Surface variant="outline" interactive padding="lg" radius="md">
          <Text variant="body2">Hover me</Text>
        </Surface>
        <Surface variant="raised" interactive padding="lg" radius="md">
          <Text variant="body2">Focus me</Text>
        </Surface>
      </HStack>
    </VStack>
  );
}

export function SurfaceVariants() {
  return (
    <HStack gap="md" wrap>
      <Surface variant="default" padding="lg" radius="md">
        <Text variant="body2">Default</Text>
      </Surface>
      <Surface variant="outline" padding="lg" radius="md">
        <Text variant="body2">Outline</Text>
      </Surface>
      <Surface variant="raised" padding="lg" radius="md">
        <Text variant="body2">Raised</Text>
      </Surface>
      <Surface variant="sunken" padding="lg" radius="md">
        <Text variant="body2">Sunken</Text>
      </Surface>
    </HStack>
  );
}

export const demos = [
  { name: "Default", component: SurfaceDemo },
  { name: "Variants", component: SurfaceVariants },
];
