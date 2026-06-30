import { Accordion, Button, ColorSwatch, HStack, Text, VStack } from "@blenx-dev/core";
import { useThemeBuilder } from "../theme-builder-context";
import type { ThemeTokenGroup } from "../theme-builder-context";
import { presets } from "./presets-data";

function getFirstStringValue(obj: unknown): string | null {
  if (typeof obj === "string") return obj;
  if (obj && typeof obj === "object") {
    for (const val of Object.values(obj as Record<string, unknown>)) {
      const result = getFirstStringValue(val);
      if (result) return result;
    }
  }
  return null;
}

function applyNestedTokens(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
  prefix: string,
  updateToken: (group: ThemeTokenGroup, key: string, value: string) => void,
) {
  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      applyNestedTokens(
        (target[key] as Record<string, unknown>) ?? {},
        value as Record<string, unknown>,
        prefix ? `${prefix}.${key}` : key,
        updateToken,
      );
    } else if (typeof value === "string") {
      const parts = prefix.split(".");
      if (parts.length === 1) {
        updateToken(parts[0] as ThemeTokenGroup, key, value);
      } else {
        const [group, ...rest] = parts;
        updateToken(group as ThemeTokenGroup, `${rest.join(".")}.${key}`, value);
      }
    }
  }
}

export function PresetControls() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const updateToken = useThemeBuilder((s) => s.updateToken);

  function applyPreset(preset: (typeof presets)[number]) {
    for (const [groupKey, groupValue] of Object.entries(preset.tokens)) {
      applyNestedTokens({}, groupValue as Record<string, unknown>, groupKey, updateToken);
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
              ? preset.tokens.background.default === tokens.background.default
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
                      .flatMap((g) => {
                        const val = getFirstStringValue(g);
                        return val ? [val] : [];
                      })
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
