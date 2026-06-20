import { createFileRoute, notFound } from "@tanstack/react-router";
import { allGuides } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text, VStack } from "@blenx-dev/ui/components";
import { DocHeading } from "@/components/docs/doc-heading";

export const Route = createFileRoute("/docs/$guide")({
	component: GuideDoc,
	notFoundComponent: () => <Text variant="h2">Guide not found</Text>,
});

function GuideDoc() {
	const { guide } = Route.useParams();
	const doc = allGuides.find(
		(g) => g._meta.path === guide || g.navigation.link === `/docs/${guide}`,
	);

	if (!doc) throw notFound();

	return (
		<VStack gap="large">
			<Box>
				<DocHeading variant="h1" title={doc.title} />
				<Text variant="body2" color="secondary">
					{doc.description}
				</Text>
			</Box>
			<MDXContent code={doc.mdx} />
		</VStack>
	);
}
