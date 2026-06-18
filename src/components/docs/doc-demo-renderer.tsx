import { lazy, Suspense } from "react";
import { demoImports } from "@/docs-demo-registry";
import { Text } from "../ui/Text/text";
import { VStack } from "../ui/Stack/stack";

export interface DemoItem {
	name: string;
	component: React.ComponentType;
}

interface DocDemoRendererProps {
	registryName: string;
}

function AllDemos({ demos }: { demos: DemoItem[] }) {
	const First = demos[0].component;

	if (demos.length === 1) {
		return <First />;
	}

	return (
		<VStack gap="large">
			<First />
			{demos.slice(1).map((demo) => (
				<VStack key={demo.name} gap="small">
					<Text variant="body2" weight="semibold" color="secondary">
						{demo.name}
					</Text>
					<demo.component />
				</VStack>
			))}
		</VStack>
	);
}

function DocDemoRenderer({ registryName }: DocDemoRendererProps) {
	const importFn = demoImports[registryName];

	if (!importFn) {
		return null;
	}

	const DemoComponent = lazy(async () => {
		const mod = await importFn();
		const m = mod as Record<string, unknown>;
		const demos = m.demos as DemoItem[] | undefined;

		if (demos && demos.length > 0) {
			return {
				default: () => <AllDemos demos={demos} />,
			};
		}

		return {
			default: () => <Text>Demo not found</Text>,
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

export { DocDemoRenderer };