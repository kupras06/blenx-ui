import { Surface, Text, VStack } from "@blenx-dev/components";

function DocApiReference() {
  return (
    <VStack gap="medium">
      <Surface padding="medium" variant="sunken">
        <Text variant="body2" color="secondary">
          Coming soon — props and types will be extracted automatically from TypeScript definitions.
        </Text>
      </Surface>
    </VStack>
  );
}

export { DocApiReference };
