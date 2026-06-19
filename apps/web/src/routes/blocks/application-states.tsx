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
} from "@/components/ui";

interface BlockInfo {
	key: string;
	label: string;
	description: string;
	importPath: string;
	demoExports: string[];
}

const BLOCKS: BlockInfo[] = [
	{
		key: "empty-state-01",
		label: "Empty State",
		description:
			"An empty state block for use when no data exists. Supports card and page variants with optional action buttons.",
		importPath: "@/components/blocks/empty-state-01/empty-state-01",
		demoExports: ["EmptyState01Demo"],
	},
	{
		key: "loading-state-01",
		label: "Loading State",
		description:
			"A loading/skeleton block for use while content is being fetched. Supports text, card, table, and avatar patterns.",
		importPath: "@/components/blocks/loading-state-01/loading-state-01",
		demoExports: [
			"LoadingState01TextDemo",
			"LoadingState01CardDemo",
			"LoadingState01TableDemo",
			"LoadingState01AvatarDemo",
			"LoadingState01AllDemo",
		],
	},
	{
		key: "error-state-01",
		label: "Error State",
		description:
			"An error state block for displaying errors with retry action and expandable debug details. Supports card, page, and toast variants.",
		importPath: "@/components/blocks/error-state-01/error-state-01",
		demoExports: [
			"ErrorState01PageDemo",
			"ErrorState01CardDemo",
			"ErrorState01ToastDemo",
		],
	},
];

export const Route = createFileRoute("/blocks/application-states")({
	component: ApplicationStatesPage,
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

function ApplicationStatesPage() {
	const [currentBlock, setCurrentBlock] = useState(BLOCKS[0].key);

	return (
		<VStack gap="large">
			<VStack gap="small">
				<DocHeading variant="h1" title="Application State Blocks" />
				<Text variant="body2" color="secondary">
					Blocks for communicating application states — empty, loading, and
					error.
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
								<DocHeading variant="h2" title={block.label} />
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
