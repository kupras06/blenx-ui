import { createFileRoute } from "@tanstack/react-router";
import { allComponents, allGuides } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Text } from "@blenx-dev/core";
import { DocsContent } from "@/views/docs/DocsContent";
import { formatLabel } from "@/views/docs/docs-utils";
import { mdxComponents } from "@/views/docs/MdxComponents";

export const Route = createFileRoute("/docs/")({
  beforeLoad: () => {
    const overview = allGuides.find(
      (g) => g._meta.path === "overview" || g.navigation.link === "/docs",
    );
    const doc = overview ?? allGuides.sort((a, b) => a.navigation.order - b.navigation.order)[0];

    const guideLinks = allGuides
      .sort((a, b) => a.navigation.order - b.navigation.order)
      .map((g) => ({
        to: g.navigation.link ?? `/docs/guides/${g._meta.path}`,
        label: g.title,
      }));

    const componentLinks = allComponents
      .sort((a, b) => a.navigation.order - b.navigation.order)
      .map((c) => ({
        to: `/docs/components/${c._meta.path}`,
        label: formatLabel(c._meta.path),
      }));

    return {
      toc: doc.toc,
      sidebarSections: [
        { title: "Guides", links: guideLinks },
        { title: "Components", links: componentLinks },
        { title: "Customization", links: [{ to: "/theme-builder", label: "Theme Builder" }] },
      ],
    };
  },
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
