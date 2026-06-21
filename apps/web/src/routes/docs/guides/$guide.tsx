import { createFileRoute, notFound } from "@tanstack/react-router";
import { allGuides } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text } from "@blenx-dev/ui/components";
import { DocsContent } from "@/views/docs/DocsContent";
import { useDocsData } from "@/views/docs/DocsDataProvider";
import { mdxComponents } from "@/views/docs/MdxComponents";
import type { TocItem } from "@/utils/extractHeadings";

export const Route = createFileRoute("/docs/guides/$guide")({
  component: GuideDoc,
  notFoundComponent: () => <Text variant="h2">Guide not found</Text>,
});

interface GuideDoc {
  title: string;
  description: string;
  mdx: string;
  toc: TocItem[];
  _meta: { path: string };
  navigation?: { link?: string };
}

function GuideDoc() {
  const { guide } = Route.useParams();
  const { setTocItems } = useDocsData();

  const doc = allGuides.find(
    (g) => g._meta.path === guide || g.navigation.link === `/docs/guides/${guide}`,
  ) as GuideDoc | undefined;

  if (doc?.toc) {
    setTocItems(doc.toc);
  } else {
    setTocItems([]);
  }

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
