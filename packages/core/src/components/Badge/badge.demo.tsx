import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Badge } from "./badge";

export function BadgeDemo() {
  return (
    <VStack gap="xs">
      <Text variant="h6">Solid</Text>
      <HStack wrap>
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge>Secondary</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="success">Success</Badge>
      </HStack>

      <Text variant="h6">Outline</Text>
      <HStack wrap>
        <Badge variant="default" appearance="outline">
          Default
        </Badge>
        <Badge variant="primary" appearance="outline">
          Primary
        </Badge>
        <Badge appearance="outline">Secondary</Badge>
        <Badge variant="danger" appearance="outline">
          Danger
        </Badge>
        <Badge variant="success" appearance="outline">
          Success
        </Badge>
      </HStack>

      <Text variant="h6">Soft</Text>
      <HStack wrap>
        <Badge variant="default" appearance="soft">
          Default
        </Badge>
        <Badge variant="primary" appearance="soft">
          Primary
        </Badge>
        <Badge appearance="soft">Secondary</Badge>
        <Badge variant="danger" appearance="soft">
          Danger
        </Badge>
        <Badge variant="success" appearance="soft">
          Success
        </Badge>
      </HStack>
    </VStack>
  );
}
export function BadgeDemoSolid() {
  return (
    <HStack wrap>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge>Secondary</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="success">Success</Badge>
    </HStack>
  );
}
export const demos = [{ name: "Default", component: BadgeDemo }];
