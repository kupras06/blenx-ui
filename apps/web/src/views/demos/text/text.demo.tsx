import { VStack, Text } from "@blenx-dev/core";

export function TextDemo() {
  return (
    <VStack gap="md">
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="h5">Heading 5</Text>
      <Text variant="h6">Heading 6</Text>
      <Text variant="body1">Body 1 — the quick brown fox jumps over the lazy dog.</Text>
      <Text variant="body2">Body 2 — the quick brown fox jumps over the lazy dog.</Text>
      <Text variant="body3">Body 3 — the quick brown fox jumps over the lazy dog.</Text>
      <Text variant="body4">Body 4 — the quick brown fox jumps over the lazy dog.</Text>
      <Text variant="caption">Caption text</Text>
      <Text variant="code">code block</Text>
    </VStack>
  );
}

export function TextColors() {
  return (
    <VStack gap="sm">
      <Text variant="body1" color="primary">
        Primary color
      </Text>
      <Text variant="body1" color="secondary">
        Secondary color
      </Text>
      <Text variant="body1" color="info">
        Info color
      </Text>
      <Text variant="body1" color="success">
        Success color
      </Text>
      <Text variant="body1" color="warning">
        Warning color
      </Text>
      <Text variant="body1" color="error">
        Error color
      </Text>
    </VStack>
  );
}

export function TextWeights() {
  return (
    <VStack gap="sm">
      <Text variant="body1" weight="regular">
        Regular weight
      </Text>
      <Text variant="body1" weight="medium">
        Medium weight
      </Text>
      <Text variant="body1" weight="semibold">
        Semibold weight
      </Text>
      <Text variant="body1" weight="bold">
        Bold weight
      </Text>
    </VStack>
  );
}

export const demos = [
  { name: "Default", component: TextDemo },
  { name: "Colors", component: TextColors },
  { name: "Weights", component: TextWeights },
];
