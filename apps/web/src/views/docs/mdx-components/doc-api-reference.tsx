import { Surface, Text, VStack } from "@blenx-dev/core";

function DocApiReference() {
  return (
    <VStack gap="md">
      <Surface padding="md" variant="sunken">
        <Text variant="body2" color="secondary">
          Coming soon — props and types will be extracted automatically from TypeScript definitions.
        </Text>
      </Surface>
    </VStack>
  );
}

export { DocApiReference };
