import { Accordion, Box, SegmentedControl, Text, VStack } from "@blenx-dev/ui/components";
import { useThemeBuilder } from "../theme-builder-context";

const radiusOptions = [
  { value: "none", label: "None" },
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
  { value: "pill", label: "Pill" },
];

export function NonColorControls() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const updateToken = useThemeBuilder((s) => s.updateToken);

  return (
    <Accordion.Item value="noncolor">
      <Accordion.Header>
        <Accordion.Trigger>Design Tokens</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <VStack>
          <Box>
            <Text variant="h5">Border Radius</Text>
            <SegmentedControl
              value={tokens.borderRadius}
              onValueChange={(value) => updateToken("borderRadius", value)}
              options={radiusOptions}
            />
          </Box>
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
