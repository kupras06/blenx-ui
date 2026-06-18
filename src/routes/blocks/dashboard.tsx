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
	demoName: string;
}

const BLOCKS: BlockInfo[] = [
	{
		key: "dashboard-01",
		label: "Dashboard",
		description:
			"A SaaS dashboard with KPI metric grid, chart placeholders, and an activity table.",
		importPath: "@/components/blocks/dashboard-01/dashboard-01",
		demoName: "Dashboard01DefaultDemo",
	},
	{
		key: "profile-01",
		label: "Profile",
		description:
			"A user profile page with editable form fields, notification preference toggles, and a danger zone for account deletion.",
		importPath: "@/components/blocks/profile-01/profile-01",
		demoName: "Profile01DefaultDemo",
	},
	{
		key: "settings-01",
		label: "Settings",
		description:
			"A tabbed settings page with sections for general, appearance, notifications, privacy, and billing preferences.",
		importPath: "@/components/blocks/settings-01/settings-01",
		demoName: "Settings01DefaultDemo",
	},
];

export const Route = createFileRoute("/blocks/dashboard")({
	component: DashboardPage,
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
			return { default: (() => <Text>Demo not found</Text>) as React.ComponentType };
		}

		return {
			default: (() => (
				<>
					{items.map((d, i) => (
						<VStack key={d.name} gap="small">
							{i > 0 && <Separator tone="subtle" />}
							{i > 0 && (
								<Text variant="body2" weight="semibold" color="secondary">
									{d.name}
								</Text>
							)}
							<d.component />
						</VStack>
					))}
				</>
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

function DashboardPage() {
	const [currentBlock, setCurrentBlock] = useState(BLOCKS[0].key);

	return (
		<VStack gap="large">
			<VStack gap="small">
				<Text variant="h1">Dashboard Blocks</Text>
				<Text variant="body2" color="secondary">
					Dashboard and profile page blocks — analytics dashboard, user profile,
					and application settings.
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
									<code>{`import { ${block.demoName} } from "${block.importPath}";`}</code>
								</Surface>
							</Box>
						</VStack>
					</TabsPanel>
				))}
			</Tabs>
		</VStack>
	);
}
