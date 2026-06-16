import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DocAccessibility } from "@/components/docs/doc-accessibility";
import { DocApiReference } from "@/components/docs/doc-api-reference";
import { DocDemoRenderer } from "@/components/docs/doc-demo-renderer";
import { DocInstallation } from "@/components/docs/doc-installation";
import { DocRelated } from "@/components/docs/doc-related";
import { DocSourceCode } from "@/components/docs/doc-source-code";
import { DocsLayout } from "@/components/docs-layout";
import { Box, Separator, Surface, Text, VStack } from "@/components/ui";

interface DocsManifest {
	[key: string]: {
		title: string;
		description: string;
		category: string;
		status?: string;
		keywords?: string[];
		related?: string[];
		accessibility?: {
			keyboard?: string[];
			aria?: string[];
		};
		registryName: string;
		registry: {
			dependencies: string[];
			registryDependencies: string[];
			files: Array<{ path: string; type: string; target: string }>;
		};
		demo?: { source: string };
		examples: Array<{ name: string; source: string }>;
	};
}

export const Route = createFileRoute("/components/$component")({
	component: ComponentDocPage,
	notFoundComponent: () => (
		<DocsLayout>
			<Text variant="h2">Component not found</Text>
		</DocsLayout>
	),
});

function ComponentDocPage() {
	const { component } = Route.useParams();
	const [manifest, setManifest] = useState<DocsManifest | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/docs/components.json")
			.then((res) => res.json())
			.then((data: DocsManifest) => {
				setManifest(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<DocsLayout>
				<Text variant="body2" color="secondary">
					Loading...
				</Text>
			</DocsLayout>
		);
	}

	if (!manifest) {
		return (
			<DocsLayout>
				<Text variant="body2" color="secondary">
					Failed to load documentation data.
				</Text>
			</DocsLayout>
		);
	}

	const componentKey = component.toLowerCase();
	const doc = manifest[componentKey];

	if (!doc) {
		return (
			<DocsLayout>
				<Text variant="h2">Component not found</Text>
				<Text variant="body2" color="secondary">
					No documentation found for "{component}".
				</Text>
			</DocsLayout>
		);
	}

	return (
		<DocsLayout>
			<VStack gap="large">
				<VStack gap="small">
					<Text variant="h1">{doc.title}</Text>
					<Text variant="body2" color="secondary">
						{doc.description}
					</Text>
				</VStack>

				{doc.status && (
					<Surface padding="xsmall" variant="sunken">
						<Text variant="body2" color="secondary">
							Status: {doc.status}
						</Text>
					</Surface>
				)}

				<Separator tone="subtle" />

				{doc.demo && (
					<Box>
						<Text variant="h2">Demo</Text>
						<Surface padding="medium" variant="sunken">
							<DocDemoRenderer registryName={doc.registryName} />
						</Surface>
						<DocSourceCode code={doc.demo.source} title="Demo Source" />
					</Box>
				)}

				<Separator tone="subtle" />

				<DocInstallation
					registryName={doc.registryName}
					dependencies={doc.registry.dependencies}
					registryDependencies={doc.registry.registryDependencies}
					files={doc.registry.files}
				/>

				<Separator tone="subtle" />

				{doc.examples.length > 0 && (
					<Box>
						<Text variant="h2">Examples</Text>
						{doc.examples.map((example) => (
							<Box key={example.name}>
								<DocSourceCode code={example.source} title={example.name} />
							</Box>
						))}
					</Box>
				)}

				<Separator tone="subtle" />

				<DocApiReference />

				{doc.accessibility && (
					<>
						<Separator tone="subtle" />
						<Box>
							<Text variant="h2">Accessibility</Text>
							<DocAccessibility
								keyboard={doc.accessibility.keyboard}
								aria={doc.accessibility.aria}
							/>
						</Box>
					</>
				)}

				{doc.related && doc.related.length > 0 && (
					<>
						<Separator tone="subtle" />
						<Text variant="h2">Related Components</Text>
						<DocRelated related={doc.related} />
					</>
				)}
			</VStack>
		</DocsLayout>
	);
}
