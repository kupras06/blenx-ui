import { Accordion, Button, ColorSwatch, HStack, Text, VStack } from "@blenx-dev/ui";
import { useThemeBuilder } from "../theme-builder-context";
import type { ThemeTokenGroup } from "../theme-builder-context";
import { presets } from "./presets-data";

export function PresetControls() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const updateToken = useThemeBuilder((s) => s.updateToken);

  function applyPreset(preset: (typeof presets)[number]) {
    for (const [group, subtokens] of Object.entries(preset.tokens) as [
      ThemeTokenGroup,
      Record<string, string>,
    ][]) {
      for (const [key, value] of Object.entries(subtokens)) {
        updateToken(group, key, value);
      }
    }
  }

  return (
    <Accordion.Item value="presets">
      <Accordion.Header>
        <Accordion.Trigger>Presets</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <VStack gap="xs">
          {presets.map((preset) => {
            const isActive = preset.tokens.background?.default
              ? preset.tokens.background.default ===
                (tokens.background as Record<string, string>).default
              : false;
            return (
              <HStack key={preset.name}>
                <Button
                  variant={isActive ? "solid" : "ghost"}
                  size="sm"
                  onClick={() => applyPreset(preset)}
                  style={{ flex: 1 }}
                >
                  <HStack gap="xs">
                    {Object.values(preset.tokens)
                      .flatMap((g: Record<string, string>) =>
                        Object.keys(g).length > 0 ? [Object.values(g)[0]] : [],
                      )
                      .slice(0, 5)
                      .map((color) => (
                        <ColorSwatch color={color} key={color} size={12} />
                      ))}
                    <Text variant="body3">{preset.label}</Text>
                  </HStack>
                </Button>
              </HStack>
            );
          })}
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
