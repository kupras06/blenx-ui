import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Separator } from "./separator";

export function SeparatorDemo() {
  return (
    <VStack gap="md">
      <Text variant="h6">Horizontal</Text>
      <Separator />

      <Text variant="h6">With label</Text>
      <Separator label="Section" />

      <Text variant="h6">Strong tone</Text>
      <Separator tone="strong" />

      <Text variant="h6">Vertical</Text>
      <HStack gap="md" align="center" style={{ height: 60 }}>
        <Text variant="body2">Left</Text>
        <Separator orientation="vertical" />
        <Text variant="body2">Center</Text>
        <Separator orientation="vertical" tone="strong" />
        <Text variant="body2">Right</Text>
      </HStack>
    </VStack>
  );
}

export function SeparatorLabeled() {
  return <Separator label="Continue reading" />;
}

export const demos = [
  { name: "Default", component: SeparatorDemo },
  { name: "Labeled", component: SeparatorLabeled },
];
