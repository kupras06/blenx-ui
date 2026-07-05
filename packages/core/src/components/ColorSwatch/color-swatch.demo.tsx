import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { ColorSwatch } from "./color-swatch";

export function ColorSwatchDemo() {
  return (
    <VStack gap="md">
      <Text variant="h6">Sizes</Text>
      <HStack align="center" gap="sm">
        <ColorSwatch color="tomato" size={12} />
        <ColorSwatch color="tomato" size={16} />
        <ColorSwatch color="tomato" size={24} />
        <ColorSwatch color="tomato" size={32} />
        <ColorSwatch color="tomato" size={48} />
      </HStack>

      <Text variant="h6">Colors</Text>
      <HStack gap="sm">
        <ColorSwatch color="#EF4444" size={24} />
        <ColorSwatch color="#F97316" size={24} />
        <ColorSwatch color="#EAB308" size={24} />
        <ColorSwatch color="#22C55E" size={24} />
        <ColorSwatch color="#3B82F6" size={24} />
        <ColorSwatch color="#6366F1" size={24} />
        <ColorSwatch color="#A855F7" size={24} />
        <ColorSwatch color="#EC4899" size={24} />
      </HStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: ColorSwatchDemo }];
