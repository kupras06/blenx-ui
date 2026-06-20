import { createFileRoute, notFound } from "@tanstack/react-router";
import { allComponents } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text } from "@blenx-dev/ui/components";
import { DocsContent } from "@/components/docs/DocsContent";
import { mdxComponents } from "@/components/docs/MdxComponents";

export const Route = createFileRoute("/docs/components/$component")({
  component: ComponentDoc,
  notFoundComponent: () => <Text variant="h2">Component not found</Text>,
});

function ComponentDoc() {
  const { component } = Route.useParams();
  const doc = allComponents.find(
    (g) => g._meta.path === component || g.navigation.link === `/docs/components/${component}`,
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
