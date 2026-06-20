import { createFileRoute } from "@tanstack/react-router";
import { allGuides } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text } from "@blenx-dev/ui/components";
import { DocsContent } from "@/components/docs/DocsContent";
import { mdxComponents } from "@/components/docs/MdxComponents";

export const Route = createFileRoute("/docs/")({
	component: DocsHome,
});

function DocsHome() {
	const overview = allGuides.find(
		(g) => g._meta.path === "overview" || g.navigation.link === "/docs",
	);
	const doc = overview ?? allGuides.sort((a, b) => a.navigation.order - b.navigation.order)[0];

	return (
		<DocsContent>
			<Box>
				<Text variant="h1">{doc.title}</Text>
				<Text variant="body2" color="secondary">
					{doc.description}
				</Text>
			</Box>
			<MDXContent code={doc.mdx} components={mdxComponents} />
		</DocsContent>
	);
}
