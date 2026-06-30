import { Accordion, Box, Text, VStack } from "@blenx-dev/ui";

export function NonColorControls() {
  return (
    <Accordion.Item value="noncolor">
      <Accordion.Header>
        <Accordion.Trigger>Design Tokens</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <VStack>
          <Box>
            <Text variant="caption" color="secondary">
              Border radius and other design tokens are configured via tokenVars in
              app-theme.css.ts.
            </Text>
          </Box>
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
