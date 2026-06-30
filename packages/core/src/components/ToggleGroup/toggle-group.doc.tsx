import { Stack } from "../Stack/stack";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function DefaultStory() {
  return (
    <Stack gap="md">
      <ToggleGroup>
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
    </Stack>
  );
}

export function OutlineStory() {
  return (
    <Stack gap="md">
      <ToggleGroup variant="outline">
        <ToggleGroupItem value="x">Option X</ToggleGroupItem>
        <ToggleGroupItem value="y">Option Y</ToggleGroupItem>
        <ToggleGroupItem value="z">Option Z</ToggleGroupItem>
      </ToggleGroup>
    </Stack>
  );
}

export function VerticalStory() {
  return (
    <Stack gap="md">
      <ToggleGroup orientation="vertical">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
    </Stack>
  );
}
