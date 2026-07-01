import { createFileRoute, notFound } from "@tanstack/react-router";
import { allComponents } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Badge, Box, HStack, Text } from "@blenx-dev/core";
import { DocsContent } from "@/views/docs/DocsContent";
import { mdxComponents } from "@/views/docs/MdxComponents";

const PACKAGE_LABELS: Record<string, string> = {
  "data-table": "@blenx-dev/datatable",
  calendar: "@blenx-dev/calendar",
  "date-picker": "@blenx-dev/calendar",
  "color-picker": "@blenx-dev/color-picker",
};

function getPackageLabel(path: string): string | null {
  return PACKAGE_LABELS[path] ?? null;
}

export const Route = createFileRoute("/docs/components/$component")({
  beforeLoad: ({ params }) => {
    const doc = allComponents.find(
      (g) =>
        g._meta.path === params.component ||
        g.navigation.link === `/docs/components/${params.component}`,
    );
    if (!doc) throw notFound();
    return { toc: doc.toc };
  },
  component: ComponentDoc,
  notFoundComponent: () => <Text variant="h2">Component not found</Text>,
});

function ComponentDoc() {
  const { component } = Route.useParams();

  const doc = allComponents.find(
    (g) => g._meta.path === component || g.navigation.link === `/docs/components/${component}`,
  );

  if (!doc) throw notFound();

  const pkgLabel = getPackageLabel(component);

  return (
    <DocsContent>
      <Box>
        <HStack gap="sm" align="center">
          <Text variant="h1">{doc.title}</Text>
          {pkgLabel && (
            <Badge variant="default" appearance="soft" radius="default">
              {pkgLabel}
            </Badge>
          )}
        </HStack>
        <Text variant="body2" color="secondary">
          {doc.description}
        </Text>
      </Box>
      <MDXContent code={doc.mdx} components={mdxComponents} />
    </DocsContent>
  );
}
