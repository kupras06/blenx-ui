import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Flask, WarningCircle } from "@phosphor-icons/react";
import { DocAccessibility } from "@/components/docs/doc-accessibility";
import { DocApiReference } from "@/components/docs/doc-api-reference";
import { DocHeading } from "@/components/docs/doc-heading";
import { DocCodeView } from "@/components/docs/doc-code-view";
import { DocDemoRenderer } from "@/components/docs/doc-demo-renderer";
import { DocInstallation } from "@/components/docs/doc-installation";
import { DocRelated } from "@/components/docs/doc-related";
import { Alert, Box, Separator, Surface, Text, VStack } from "@blenx-dev/ui/components";;
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
				<DocHeading variant="h1" title={doc.title}>
					{doc.title}
				</DocHeading>
				<Text variant="body2" color="secondary">
					{doc.description}
				</Text>
			</VStack>

			{doc.status === "beta" && (
				<Alert variant="warning" icon={<WarningCircle size={20} />}>
					<Text variant="body2">
						<strong>Beta:</strong> This component is stable for most use cases,
						but the API may change in minor updates.
					</Text>
				</Alert>
			)}
			{doc.status === "experimental" && (
				<Alert variant="error" icon={<Flask size={20} />}>
					<Text variant="body2">
						<strong>Experimental:</strong> This component is a work in progress.
						Expect breaking changes and incomplete features.
					</Text>
				</Alert>
			)}

			<Separator tone="subtle" />

			{doc.registryName && registry?.demo && (
				<VStack marginY="medium">
					<DocHeading variant="h2" title="Demo" />
					<Surface padding="medium" variant="sunken">
						<DocDemoRenderer registryName={doc.registryName} />
					</Surface>
					<DocCodeView code={registry.demo} title="Demo Source" />
					<Separator />
				</VStack>
			)}

			<DocInstallation
				registryName={doc.registryName}
				dependencies={registry?.dependencies ?? []}
				files={registry?.files ?? []}
			/>

			<Separator tone="subtle" />

			{doc.examples.length > 0 && (
				<VStack>
					<DocHeading variant="h2" title="Examples" />
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
						<DocHeading variant="h2" title="Accessibility" />
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
						<DocHeading variant="h2" title="Related Components" />
						<DocRelated related={doc.related} />
					</VStack>
				</VStack>
			)}
			<Box />
		</VStack>
	);
}
