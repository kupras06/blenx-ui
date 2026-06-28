import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Surface } from "./surface";

export function VariantsStory() {
  return (
    <Stack gap="md">
      <Surface variant="default" padding="md">
        <Text variant="body2">Default surface</Text>
      </Surface>
      <Surface variant="outline" padding="md">
        <Text variant="body2">Outline surface</Text>
      </Surface>
      <Surface variant="raised" padding="md">
        <Text variant="body2">Raised surface</Text>
      </Surface>
      <Surface variant="sunken" padding="md">
        <Text variant="body2">Sunken surface</Text>
      </Surface>
    </Stack>
  );
}

export function InteractiveStory() {
  return (
    <Stack gap="md">
      <Surface variant="outline" padding="md" interactive>
        <Text variant="body2">Interactive (hover me)</Text>
      </Surface>
    </Stack>
  );
}
