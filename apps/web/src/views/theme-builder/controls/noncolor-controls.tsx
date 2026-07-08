import {
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@blenx-dev/core";

export function NonColorControls() {
  return (
    <AccordionItem value="noncolor">
      <AccordionHeader>
        <AccordionTrigger>Design Tokens</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>
        <VStack>
          <Box>
            <Text variant="caption" color="secondary">
              Border radius and other design tokens are configured via tokenVars in
              app-theme.css.ts.
            </Text>
          </Box>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
