import { HStack } from "../Stack/stack";
import { ColorSwatch } from "./color-swatch";

export function DefaultStory() {
  return (
    <HStack gap="medium" align="center">
      <ColorSwatch color="#C9822A" size={24} />
      <ColorSwatch color="#27AE60" size={24} />
      <ColorSwatch color="#2980B9" size={24} />
      <ColorSwatch color="#D63031" size={24} />
      <ColorSwatch color="#243142" size={24} />
    </HStack>
  );
}

export function SizesStory() {
  return (
    <HStack gap="medium" align="center">
      <ColorSwatch color="#C9822A" size={16} />
      <ColorSwatch color="#C9822A" size={24} />
      <ColorSwatch color="#C9822A" size={32} />
      <ColorSwatch color="#C9822A" size={48} />
    </HStack>
  );
}
