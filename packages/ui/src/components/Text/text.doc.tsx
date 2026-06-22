import { Stack } from "../Stack/stack";
import { Text } from "./text";

export function VariantsStory() {
  return (
    <Stack gap="small">
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="h5">Heading 5</Text>
      <Text variant="h6">Heading 6</Text>
      <Text variant="body1">Body 1</Text>
      <Text variant="body2">Body 2</Text>
      <Text variant="body3">Body 3</Text>
      <Text variant="body4">Body 4</Text>
      <Text variant="caption">Caption text</Text>
      <Text variant="p">Paragraph text</Text>
    </Stack>
  );
}

export function ColorsStory() {
  return (
    <Stack gap="small">
      <Text color="primary">Primary color</Text>
      <Text color="secondary">Secondary color</Text>
      <Text color="disabled">Disabled color</Text>
      <Text color="error">Error color</Text>
    </Stack>
  );
}

export function WeightsStory() {
  return (
    <Stack gap="small">
      <Text weight="regular">Regular weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </Stack>
  );
}

export function AlignmentsStory() {
  return (
    <Stack gap="small">
      <Text textAlign="left">Left aligned</Text>
      <Text textAlign="center">Center aligned</Text>
      <Text textAlign="right">Right aligned</Text>
    </Stack>
  );
}
