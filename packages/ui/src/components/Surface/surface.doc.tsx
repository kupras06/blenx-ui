import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Surface } from "./surface";

export function VariantsStory() {
  return (
    <Stack gap="medium">
      <Surface variant="default" padding="medium">
        <Text variant="body2">Default surface</Text>
      </Surface>
      <Surface variant="outline" padding="medium">
        <Text variant="body2">Outline surface</Text>
      </Surface>
      <Surface variant="raised" padding="medium">
        <Text variant="body2">Raised surface</Text>
      </Surface>
      <Surface variant="sunken" padding="medium">
        <Text variant="body2">Sunken surface</Text>
      </Surface>
    </Stack>
  );
}

export function InteractiveStory() {
  return (
    <Stack gap="medium">
      <Surface variant="outline" padding="medium" interactive>
        <Text variant="body2">Interactive (hover me)</Text>
      </Surface>
    </Stack>
  );
}
