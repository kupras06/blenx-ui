import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Badge } from "./badge";

export function BadgeDemo() {
  return (
    <VStack gap="xsmall">
      <Text variant="h6">Variants</Text>
      <HStack wrap>
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </HStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: BadgeDemo }];
