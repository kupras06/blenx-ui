import { createFileRoute, notFound } from "@tanstack/react-router";
import { allComponents } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text } from "@blenx-dev/ui/components";
import { DocsContent } from "@/views/docs/DocsContent";
import { useDocsData } from "@/views/docs/DocsDataProvider";
import { mdxComponents } from "@/views/docs/MdxComponents";
import type { TocItem } from "@/utils/extractHeadings";

export const Route = createFileRoute("/docs/components/$component")({
  component: ComponentDoc,
  notFoundComponent: () => <Text variant="h2">Component not found</Text>,
});

interface ComponentDocData {
  title: string;
  description: string;
  mdx: string;
  toc: TocItem[];
  _meta: { path: string };
  navigation?: { link?: string };
}

function ComponentDoc() {
  const { component } = Route.useParams();
  const { setTocItems } = useDocsData();

  const doc = allComponents.find(
    (g) => g._meta.path === component || g.navigation.link === `/docs/components/${component}`,
  ) as ComponentDocData | undefined;

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
