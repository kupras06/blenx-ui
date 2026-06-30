import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Textarea } from "./textarea";

export function SizesStory() {
  return (
    <Stack gap="md">
      <Text variant="h4">Sizes</Text>
      <Textarea size="sm" placeholder="Small textarea" />
      <Textarea size="default" placeholder="Default textarea" />
      <Textarea size="lg" placeholder="Large textarea" />
    </Stack>
  );
}

export function DisabledStory() {
  return (
    <Stack gap="md">
      <Text variant="h4">Disabled</Text>
      <Textarea placeholder="Disabled textarea" disabled />
    </Stack>
  );
}
