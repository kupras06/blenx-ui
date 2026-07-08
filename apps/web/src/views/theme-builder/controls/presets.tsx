import type { SemanticTokens } from "@blenx-dev/theme";
import {
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
  Button,
  ColorSwatch,
  HStack,
  Text,
  VStack,
} from "@blenx-dev/core";
import { useThemeBuilder } from "../theme-builder-context";
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

function deepMerge(target: Record<string, any>, source: Record<string, any>): Record<string, any> {
  const result = { ...target };
  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      result[key] = deepMerge(target[key] ?? {}, value);
    } else if (value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}

export function PresetControls() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const setTokens = useThemeBuilder((s) => s.setTokens);

  function applyPreset(preset: (typeof presets)[number]) {
    setTokens(
      deepMerge(structuredClone(tokens), preset.tokens as Partial<typeof tokens>) as SemanticTokens,
    );
  }

  return (
    <AccordionItem value="presets">
      <AccordionHeader>
        <AccordionTrigger>Presets</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>
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
                    {Object.entries(preset.tokens)
                      .flatMap(([g, v]) => {
                        const val = getFirstStringValue(v);
                        return val ? [[g, val]] : [];
                      })
                      .map(([g, color]) => (
                        <ColorSwatch color={color} key={`${preset.name}-${g}-${color}`} size={12} />
                      ))}
                    <Text variant="body3">{preset.label}</Text>
                  </HStack>
                </Button>
              </HStack>
            );
          })}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
