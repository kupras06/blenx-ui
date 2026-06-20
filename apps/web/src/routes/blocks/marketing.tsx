import { lazy, Suspense, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { demoImports } from "@/docs-demo-registry";
import { DocHeading } from "@/components/docs/doc-heading";
import {
  Box,
  Separator,
  Surface,
  Text,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  VStack,
} from "@blenx-dev/ui/components";

interface BlockInfo {
  key: string;
  label: string;
  description: string;
  importPath: string;
  demoExports: string[];
}

const BLOCKS: BlockInfo[] = [
  {
    key: "hero-01",
    label: "Hero Section",
    description:
      "A marketing hero section with headline, supporting text, dual CTA buttons, and optional image.",
    importPath: "@/components/blocks/hero-01/hero-01",
    demoExports: ["Hero01DefaultDemo", "Hero01WithImageDemo"],
  },
  {
    key: "faq-01",
    label: "FAQ Section",
    description:
      "An expandable FAQ accordion with section heading, description, and optional search/filter.",
    importPath: "@/components/blocks/faq-01/faq-01",
    demoExports: ["Faq01DefaultDemo", "Faq01WithSearchDemo"],
  },
  {
    key: "pricing-01",
    label: "Pricing Page",
    description:
      "A pricing section with monthly/yearly toggle, three plan tiers, feature lists, and prominent CTA for the popular plan.",
    importPath: "@/components/blocks/pricing-01/pricing-01",
    demoExports: ["Pricing01DefaultDemo"],
  },
  {
    key: "contact-01",
    label: "Contact Page",
    description:
      "A contact form page with name, email, subject select, message textarea, success state, and optional contact information sidebar.",
    importPath: "@/components/blocks/contact-01/contact-01",
    demoExports: ["Contact01DefaultDemo", "Contact01SimpleDemo"],
  },
];

export const Route = createFileRoute("/blocks/marketing")({
  component: MarketingPage,
});

function BlockDemo({ block }: { block: BlockInfo }) {
  const importFn = demoImports[block.key];

  if (!importFn) {
    return (
      <Text variant="body2" color="secondary">
        Demo not available
      </Text>
    );
  }

  const DemoComponent = lazy(async () => {
    const mod = await importFn();
    const m = mod as Record<string, unknown>;
    const items = m.demos as { name: string; component: React.ComponentType }[] | undefined;

    if (!items || items.length === 0) {
      return {
        default: (() => <Text>Demo not found</Text>) as React.ComponentType,
      };
    }

    return {
      default: (() => (
        <VStack gap="medium">
          {items.map((d, i) => (
            <VStack key={d.name} gap="small">
              <Surface padding="medium" variant="sunken">
                <d.component />
              </Surface>
              <Box>
                <Text variant="body2" weight="semibold">
                  Import
                </Text>
                <Surface render={<pre />} padding="small" variant="sunken">
                  <code>{`import { ${block.demoExports[i]} } from "${block.importPath}";`}</code>
                </Surface>
              </Box>
            </VStack>
          ))}
        </VStack>
      )) as React.ComponentType,
    };
  });

  return (
    <Suspense
      fallback={
        <Text variant="body2" color="secondary">
          Loading demo...
        </Text>
      }
    >
      <DemoComponent />
    </Suspense>
  );
}

function MarketingPage() {
  const [currentBlock, setCurrentBlock] = useState(BLOCKS[0].key);

  return (
    <VStack gap="large">
      <VStack gap="small">
        <DocHeading variant="h1" title="Marketing Blocks" />
        <Text variant="body2" color="secondary">
          Marketing page blocks — hero, FAQ, pricing, and contact sections.
        </Text>
      </VStack>

      <Separator tone="subtle" />

      <Tabs value={currentBlock} onValueChange={setCurrentBlock}>
        <TabsList>
          {BLOCKS.map((block) => (
            <TabsTab key={block.key} value={block.key}>
              {block.label}
            </TabsTab>
          ))}
        </TabsList>

        {BLOCKS.map((block) => (
          <TabsPanel key={block.key} value={block.key}>
            <VStack gap="medium">
              <VStack gap="small">
                <DocHeading variant="h2" title={block.label}>
                  {block.label}
                </DocHeading>
                <Text variant="body2" color="secondary">
                  {block.description}
                </Text>
              </VStack>

              <BlockDemo block={block} />
            </VStack>
          </TabsPanel>
        ))}
      </Tabs>
    </VStack>
  );
}
