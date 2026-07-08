import {
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@blenx-dev/core";

export function TypographyControls() {
  return (
    <AccordionItem value="typography">
      <AccordionHeader>
        <AccordionTrigger>Typography</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>
        <VStack gap="md">
          <Box>
            <Text variant="caption" color="secondary">
              Font sizes and typography tokens are configured via tokenVars in app-theme.css.ts.
            </Text>
          </Box>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
