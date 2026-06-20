import { createFileRoute, notFound } from "@tanstack/react-router";
import { allGuides } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text } from "@blenx-dev/ui/components";
import { DocsContent } from "@/components/docs/DocsContent";
import { mdxComponents } from "@/components/docs/MdxComponents";

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
