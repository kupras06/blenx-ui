import { Stack } from "../Stack/stack";
import { Toggle } from "./toggle";

export function VariantsStory() {
  return (
    <Stack gap="md">
      <Stack gap="sm" direction="row" align="center">
        <Toggle>Default</Toggle>
        <Toggle variant="outline">Outline</Toggle>
      </Stack>
      <Stack gap="sm" direction="row" align="center">
        <Toggle size="sm">Small</Toggle>
        <Toggle size="default">Default</Toggle>
        <Toggle size="lg">Large</Toggle>
      </Stack>
      <Stack gap="sm" direction="row" align="center">
        <Toggle disabled>Disabled</Toggle>
        <Toggle variant="outline" disabled>
          Disabled
        </Toggle>
      </Stack>
    </Stack>
  );
}
