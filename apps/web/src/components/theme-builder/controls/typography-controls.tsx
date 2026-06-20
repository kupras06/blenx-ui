import { Accordion, HStack, Select, Slider, Text, VStack } from "@blenx-dev/ui/components";
import { useThemeBuilder } from "../theme-builder-context";

const fontFamilyOptions = [
  {
    label: "DM Sans",
    value: '"DM Sans", system-ui, -apple-system, sans-serif',
  },
  { label: "System UI", value: "system-ui, -apple-system, sans-serif" },
  { label: "Inter", value: '"Inter", system-ui, sans-serif' },
  {
    label: "Mono",
    value: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
  },
];

const fontWeightOptions = [
  { label: "Light 300", value: "300" },
  { label: "Regular 400", value: "400" },
  { label: "Medium 500", value: "500" },
  { label: "Semibold 600", value: "600" },
  { label: "Bold 700", value: "700" },
];

export function TypographyControls() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const updateToken = useThemeBuilder((s) => s.updateToken);

  return (
    <Accordion.Item value="typography">
      <Accordion.Header>
        <Accordion.Trigger>Typography</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <VStack gap="medium">
          <Select.Wrapper label="Font Family">
            <Select.Root
              value={tokens.fontFamilySans}
              onValueChange={(value) => updateToken("fontFamilySans", value as string)}
            >
              <Select.Trigger size="sm">
                <Select.Value placeholder="Select font" />
                <Select.Icon />
              </Select.Trigger>
              <Select.Portal>
                <Select.Positioner>
                  <Select.Popup>
                    <Select.List>
                      {fontFamilyOptions.map((opt) => (
                        <Select.Item key={opt.value} value={opt.value}>
                          {opt.label}
                        </Select.Item>
                      ))}
                    </Select.List>
                  </Select.Popup>
                </Select.Positioner>
              </Select.Portal>
            </Select.Root>
          </Select.Wrapper>
          <VStack gap="xxsmall">
            <HStack justify="between">
              <Text variant="body2">Base Font Size</Text>
              <Text variant="body2" color="secondary">
                {tokens.baseFontSize}
              </Text>
            </HStack>
            <Slider
              min={12}
              max={20}
              step={1}
              value={parseInt(tokens.baseFontSize, 10)}
              onValueChange={(value) => updateToken("baseFontSize", `${value}px`)}
            />
          </VStack>

          <Select.Wrapper label="Font Weight">
            <Select.Root
              value={String(tokens.fontWeight ?? "400")}
              onValueChange={(value) => updateToken("fontWeight", value as string)}
            >
              <Select.Trigger size="sm">
                <Select.Value placeholder="Select weight" />
                <Select.Icon />
              </Select.Trigger>
              <Select.Portal>
                <Select.Positioner>
                  <Select.Popup>
                    <Select.List>
                      {fontWeightOptions.map((opt) => (
                        <Select.Item key={opt.value} value={opt.value}>
                          {opt.label}
                        </Select.Item>
                      ))}
                    </Select.List>
                  </Select.Popup>
                </Select.Positioner>
              </Select.Portal>
            </Select.Root>
          </Select.Wrapper>
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
