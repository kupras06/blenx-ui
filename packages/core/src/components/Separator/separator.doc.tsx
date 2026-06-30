import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Separator } from "./separator";

export function HorizontalStory() {
  return (
    <Stack gap="md">
      <Text variant="body2">Above</Text>
      <Separator orientation="horizontal" />
      <Text variant="body2">Below</Text>
    </Stack>
  );
}

export function VerticalStory() {
  return (
    <Stack direction="row" gap="md">
      <Text variant="body2">Left</Text>
      <Separator orientation="vertical" />
      <Text variant="body2">Right</Text>
    </Stack>
  );
}

export function WithLabelStory() {
  return (
    <Stack gap="md">
      <Text variant="body2">Content above</Text>
      <Separator orientation="horizontal" label="Section" />
      <Text variant="body2">Content below</Text>
    </Stack>
  );
}

export function TonesStory() {
  return (
    <Stack gap="md">
      <Text variant="body2">Subtle tone</Text>
      <Separator orientation="horizontal" tone="subtle" />
      <Text variant="body2">Strong tone</Text>
      <Separator orientation="horizontal" tone="strong" />
    </Stack>
  );
}
