import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { DocAccessibility } from "@/components/docs/doc-accessibility";
import { DocApiReference } from "@/components/docs/doc-api-reference";
import { DocCodeView } from "@/components/docs/doc-code-view";
import { DocDemoRenderer } from "@/components/docs/doc-demo-renderer";
import { DocInstallation } from "@/components/docs/doc-installation";
import { DocRelated } from "@/components/docs/doc-related";
import { Box, Separator, Surface, Text, VStack } from "@/components/ui";
import { docsQueries } from "@/lib/docs-api";
import type { DocsManifest } from "@/lib/docs-meta";

export const Route = createFileRoute("/docs/components/$component")({
	loader: async ({ params, context: { queryClient } }) => {
		const componentKey = params.component.toLowerCase();
		await Promise.all([
			queryClient.prefetchQuery(docsQueries.manifest()),
			queryClient.prefetchQuery(docsQueries.registry(componentKey)),
		]);
	},
	component: ComponentDocPage,
	notFoundComponent: () => <Text variant="h2">Component not found</Text>,
});

function ComponentDocPage() {
	const { component } = Route.useParams();
	const componentKey = component.toLowerCase();

	const { data: manifest } = useQuery(docsQueries.manifest());
	const { data: registry } = useQuery(docsQueries.registry(componentKey));

	const doc = manifest?.[componentKey as keyof DocsManifest];

	if (!doc) {
		return (
			<>
				<Text variant="h2">Component not found</Text>
				<Text variant="body2" color="secondary">
					No documentation found for "{component}".
				</Text>
			</>
		);
	}

	return (
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

			{doc.registryName && registry?.demo && (
				<Box>
					<Text variant="h2">Demo</Text>
					<Surface padding="medium" variant="sunken">
						<DocDemoRenderer registryName={doc.registryName} />
					</Surface>
					<DocCodeView code={registry.demo} title="Demo Source" />

					<Separator />
				</Box>
			)}

			<DocInstallation
				registryName={doc.registryName}
				dependencies={registry?.dependencies ?? []}
				files={registry?.files ?? []}
			/>

			<Separator tone="subtle" />

			{doc.examples.length > 0 && (
				<VStack>
					<Text variant="h2">Examples</Text>
					<DocCodeView
						files={doc.examples.map((example) => ({
							title: example.name,
							code: example.source,
						}))}
					/>
				</VStack>
			)}

			<Separator tone="subtle" />

			<DocApiReference />

			{doc.accessibility && (
				<VStack gap="medium">
					<Separator tone="subtle" />
					<Box>
						<Text variant="h2">Accessibility</Text>
						<DocAccessibility
							keyboard={doc.accessibility.keyboard}
							aria={doc.accessibility.aria}
						/>
					</Box>
				</VStack>
			)}

			{doc.related && doc.related.length > 0 && (
				<VStack>
					<Separator tone="subtle" />
					<VStack>
						<Text variant="h2">Related Components</Text>
						<DocRelated related={doc.related} />
					</VStack>
				</VStack>
			)}
		</VStack>
	);
}
