import { useEffect } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allGuides } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text } from "@blenx-dev/ui/components";
import { DocsContent } from "@/components/docs/DocsContent";
import { mdxComponents } from "@/components/docs/MdxComponents";
import { useDocsTocStore } from "@/stores/docs-toc";
import type { TocItem } from "@/utils/extractHeadings";

export const Route = createFileRoute("/docs/$guide")({
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
  const doc = allGuides.find(
    (g) => g._meta.path === guide || g.navigation.link === `/docs/${guide}`,
  ) as GuideDoc | undefined;

  const setItems = useDocsTocStore((st) => st.setItems);

  useEffect(() => {
    if (doc?.toc) {
      setItems(doc.toc);
    } else {
      setItems([]);
    }
  }, [doc, setItems]);

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
