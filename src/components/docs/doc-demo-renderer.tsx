import { lazy, Suspense } from "react";
import { demoImports } from "@/docs-demo-registry";
import { Text } from "../ui/Text/text";

interface DocDemoRendererProps {
	registryName: string;
}

function DocDemoRenderer({ registryName }: DocDemoRendererProps) {
	const importFn = demoImports[registryName];

	if (!importFn) {
		return null;
	}

	const DemoComponent = lazy(async () => {
		const mod = await importFn();
		const Component = (mod as Record<string, unknown>).Demo;
		if (typeof Component === "function") {
			return { default: Component as React.ComponentType };
		}
		return { default: () => <Text>Demo not found</Text> };
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
