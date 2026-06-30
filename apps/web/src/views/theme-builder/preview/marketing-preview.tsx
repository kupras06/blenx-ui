import { memo } from "react";
import { Box, Text, VStack } from "@blenx-dev/ui";
import { Hero01, Faq01, Pricing01, Contact01 } from "@/components/blocks";

const faqItems = [
  {
    question: "How do I get started?",
    answer: "Install the CLI and run `npx blenx init` to set up your project.",
  },
  {
    question: "Is it accessible?",
    answer: "Yes, all components follow WAI-ARIA guidelines and are built on Base UI.",
  },
  {
    question: "Can I customize the theme?",
    answer: "Absolutely. Use the Theme Builder to create custom color palettes and tokens.",
  },
  {
    question: "How do I update components?",
    answer: "Since you own the source, you can update by re-running the CLI add command.",
  },
];

export const MarketingPreview = memo(() => (
  <VStack gap="lg">
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Hero
      </Text>
      <Hero01
        headline="Build Something Great"
        subheadline="A modern UI component library for React."
      />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        FAQ
      </Text>
      <Faq01 items={faqItems} />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Pricing
      </Text>
      <Pricing01 />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Contact
      </Text>
      <Contact01 />
    </Box>
  </VStack>
));
