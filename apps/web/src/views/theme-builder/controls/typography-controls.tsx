import { Accordion, HStack, Slider, Text, VStack } from "@blenx-dev/ui";
import { useThemeBuilder } from "../theme-builder-context";

export function TypographyControls() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const updateToken = useThemeBuilder((s) => s.updateToken);

  return (
    <Accordion.Item value="typography">
      <Accordion.Header>
        <Accordion.Trigger>Typography</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <VStack gap="md">
          <HStack justify="between">
            <Text variant="body2">Base Font Size</Text>
            <Text variant="body2" color="secondary">
              {tokens.fontSize}
            </Text>
          </HStack>
          <Slider
            min={12}
            max={20}
            step={1}
            value={parseInt(tokens.fontSize, 10)}
            onValueChange={(value) => updateToken("fontSize", `${value}px`)}
          />
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
