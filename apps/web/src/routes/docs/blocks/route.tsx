import { createFileRoute, Outlet } from "@tanstack/react-router";
import { allBlocks, allBlockGroups } from "content-collections";
import type { SidebarSection } from "@/views/docs/docs-utils";

function buildBlockSections(): SidebarSection[] {
  return allBlockGroups
    .sort((a, b) => a.order - b.order)
    .map((group) => {
      const variants = allBlocks
        .filter((b) => b.group === group.slug)
        .sort((a, b) => a.order - b.order)
        .map((v) => {
          const vSlug = v._meta.path.replace(`${group.slug}/`, "");
          return {
            to: `/docs/blocks/${group.slug}/${vSlug}`,
            label: v.title,
          };
        });
      return { title: group.title, links: variants };
    });
}

export const Route = createFileRoute("/docs/blocks")({
  beforeLoad: () => ({
    sidebarSections: buildBlockSections(),
  }),
  component: () => <Outlet />,
});
