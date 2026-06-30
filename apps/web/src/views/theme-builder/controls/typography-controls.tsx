import { Accordion, Box, Text, VStack } from "@blenx-dev/ui";

export function TypographyControls() {
  return (
    <Accordion.Item value="typography">
      <Accordion.Header>
        <Accordion.Trigger>Typography</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <VStack gap="md">
          <Box>
            <Text variant="caption" color="secondary">
              Font sizes and typography tokens are configured via tokenVars in app-theme.css.ts.
            </Text>
          </Box>
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
