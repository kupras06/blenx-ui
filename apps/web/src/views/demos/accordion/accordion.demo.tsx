import {
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
} from "@blenx-dev/core";

export function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>What is Blenx UI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <Text variant="body2">
            Blenx UI is a modern React component library built with StyleX and Base UI.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>How do I install it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <Text variant="body2">
            Install via the shadcn CLI with:{" "}
            <Text variant="code">npx shadcn@latest add button</Text>
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <Text variant="body2">
            Yes, all components are built on Base UI primitives with full ARIA support.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export const demos = [{ name: "Default", component: AccordionDemo }];
