import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Input } from "./input";

export function InputDemo() {
  return (
    <VStack gap="md">
      <VStack gap="md" padding="md">
        <Text variant="h6">Size</Text>
        <Input size="sm" placeholder="Small input" />
        <Input placeholder="Default input" />
        <Input size="lg" placeholder="Large input" />
      </VStack>
      <VStack gap="md" padding="md">
        <Text variant="h4">States</Text>
        <Input placeholder="Normal input" />
        <Input placeholder="Disabled input" disabled />
        <Input placeholder="With error" error="This field is required" />
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: InputDemo }];
