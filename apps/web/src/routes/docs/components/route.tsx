import { createFileRoute, Outlet } from "@tanstack/react-router";
import { allComponents, allGuides } from "content-collections";
import { formatLabel, type SidebarSection } from "@/views/docs/docs-utils";

function buildComponentSections(): SidebarSection[] {
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

  return [
    { title: "Guides", links: guideLinks },
    { title: "Components", links: componentLinks },
    { title: "Customization", links: [{ to: "/theme-builder", label: "Theme Builder" }] },
  ];
}

export const Route = createFileRoute("/docs/components")({
  beforeLoad: () => ({
    sidebarSections: buildComponentSections(),
  }),
  component: () => <Outlet />,
});
