import { createFileRoute, notFound } from "@tanstack/react-router";
import { allGuides } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text } from "@blenx-dev/components";
import { DocsContent } from "@/views/docs/DocsContent";
import { mdxComponents } from "@/views/docs/MdxComponents";

export const Route = createFileRoute("/docs/guides/$guide")({
  beforeLoad: ({ params }) => {
    const guide = allGuides.find((x) => x._meta.path === params.guide);
    if (!guide) throw notFound();
    return { toc: guide.toc };
  },
  component: GuideDoc,
  notFoundComponent: () => <Text variant="h2">Guide not found</Text>,
});

function GuideDoc() {
  const { guide } = Route.useParams();

  const doc = allGuides.find((x) => x._meta.path === guide);
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
