import { HStack, VStack, Text, Badge } from "@blenx-dev/core";

export function BadgeDemo() {
  return (
    <VStack gap="xs">
      <Text variant="h6">Solid</Text>
      <HStack wrap>
        <Badge palette="default">Default</Badge>
        <Badge palette="primary">Primary</Badge>
        <Badge>Secondary</Badge>
        <Badge palette="danger">Danger</Badge>
        <Badge palette="success">Success</Badge>
      </HStack>

      <Text variant="h6">Outline</Text>
      <HStack wrap>
        <Badge palette="default" variant="outline">
          Default
        </Badge>
        <Badge palette="primary" variant="outline">
          Primary
        </Badge>
        <Badge variant="outline">Secondary</Badge>
        <Badge palette="danger" variant="outline">
          Danger
        </Badge>
        <Badge palette="success" variant="outline">
          Success
        </Badge>
      </HStack>

      <Text variant="h6">Soft</Text>
      <HStack wrap>
        <Badge palette="default" variant="soft">
          Default
        </Badge>
        <Badge palette="primary" variant="soft">
          Primary
        </Badge>
        <Badge variant="soft">Secondary</Badge>
        <Badge palette="danger" variant="soft">
          Danger
        </Badge>
        <Badge palette="success" variant="soft">
          Success
        </Badge>
      </HStack>
    </VStack>
  );
}
export function BadgeDemoSolid() {
  return (
    <HStack wrap>
      <Badge palette="default">Default</Badge>
      <Badge palette="primary">Primary</Badge>
      <Badge>Secondary</Badge>
      <Badge palette="danger">Danger</Badge>
      <Badge palette="success">Success</Badge>
    </HStack>
  );
}
export const demos = [{ name: "Default", component: BadgeDemo }];
