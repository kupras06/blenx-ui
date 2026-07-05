import { VStack } from "../Stack/stack";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function ToggleGroupDemo() {
  return (
    <VStack gap="md">
      <ToggleGroup>
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline">
        <ToggleGroupItem value="x">Option X</ToggleGroupItem>
        <ToggleGroupItem value="y">Option Y</ToggleGroupItem>
        <ToggleGroupItem value="z">Option Z</ToggleGroupItem>
      </ToggleGroup>
    </VStack>
  );
}

export function ToggleGroupVerticalDemo() {
  return (
    <VStack gap="md">
      <ToggleGroup orientation="vertical">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup orientation="vertical" variant="outline">
        <ToggleGroupItem value="x">Option X</ToggleGroupItem>
        <ToggleGroupItem value="y">Option Y</ToggleGroupItem>
        <ToggleGroupItem value="z">Option Z</ToggleGroupItem>
      </ToggleGroup>
    </VStack>
  );
}

export const demos = [
  { name: "Horizontal", component: ToggleGroupDemo },
  { name: "Vertical", component: ToggleGroupVerticalDemo },
];
