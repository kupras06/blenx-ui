import { lazy, Suspense, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { demoImports } from "@/docs-demo-registry";
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
} from "@/components/ui";

interface BlockInfo {
	key: string;
	label: string;
	description: string;
	importPath: string;
	demoName?: string;
}

const BLOCKS: BlockInfo[] = [
	{
		key: "hero-01",
		label: "Hero Section",
		description:
			"A marketing hero section with headline, supporting text, dual CTA buttons, and optional image.",
		importPath: "@/components/blocks/hero-01/hero-01",
		demoName: "Default",
	},
	{
		key: "faq-01",
		label: "FAQ Section",
		description:
			"An expandable FAQ accordion with section heading, description, and optional search/filter.",
		importPath: "@/components/blocks/faq-01/faq-01",
		demoName: "Default",
	},
	{
		key: "pricing-01",
		label: "Pricing Page",
		description:
			"A pricing section with monthly/yearly toggle, three plan tiers, feature lists, and prominent CTA for the popular plan.",
		importPath: "@/components/blocks/pricing-01/pricing-01",
	},
	{
		key: "contact-01",
		label: "Contact Page",
		description:
			"A contact form page with name, email, subject select, message textarea, success state, and optional contact information sidebar.",
		importPath: "@/components/blocks/contact-01/contact-01",
		demoName: "Default",
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
		const items = m.demos as
			| { name: string; component: React.ComponentType }[]
			| undefined;

		if (!items || items.length === 0) {
			return { default: (() => <Text>Demo not found</Text>) as never };
		}

		if (items.length === 1) {
			return { default: items[0].component as React.ComponentType };
		}

		const First = items[0].component;
		const rest = items.slice(1);
		return {
			default: (() => (
				<VStack gap="large">
					<First />
					{rest.map((d) => (
						<VStack key={d.name} gap="small">
							<Text variant="body2" weight="semibold" color="secondary">
								{d.name}
							</Text>
							<d.component />
						</VStack>
					))}
				</VStack>
			)) as never,
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
				<Text variant="h1">Marketing Blocks</Text>
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
								<Text variant="h2">{block.label}</Text>
								<Text variant="body2" color="secondary">
									{block.description}
								</Text>
							</VStack>

							<Surface padding="medium" variant="sunken">
								<BlockDemo block={block} />
							</Surface>

							<Separator tone="subtle" />

							<Box>
								<Text variant="body2" weight="semibold">
									Import
								</Text>
								<Surface render={<pre />} padding="small" variant="sunken">
									<code>{`import { demos } from "${block.importPath}";`}</code>
								</Surface>
							</Box>
						</VStack>
					</TabsPanel>
				))}
			</Tabs>
		</VStack>
	);
}
