import { createFileRoute, Outlet } from "@tanstack/react-router";
import { allComponents, allGuides } from "content-collections";
import { formatLabel, type SidebarLink, type SidebarSection } from "@/views/docs/docs-utils";

const COMPLEX_COMPONENTS: Record<string, string> = {
  "data-table": "Data Table",
  calendar: "Calendar",
  "date-picker": "Calendar",
  "color-picker": "Color Picker",
};

function buildComponentSections(): SidebarSection[] {
  const guideLinks = allGuides
    .sort((a, b) => a.navigation.order - b.navigation.order)
    .map((g) => ({
      to: g.navigation.link ?? `/docs/guides/${g._meta.path}`,
      label: g.title,
    }));

  const sorted = allComponents
    .sort((a, b) => a.navigation.order - b.navigation.order)
    .map((c) => ({
      to: `/docs/components/${c._meta.path}`,
      label: formatLabel(c._meta.path),
      path: c._meta.path,
    }));

  const coreLinks = sorted.filter((c) => !COMPLEX_COMPONENTS[c.path]);
  const grouped: Record<string, SidebarLink[]> = {};
  for (const c of sorted) {
    const section = COMPLEX_COMPONENTS[c.path];
    if (section) {
      (grouped[section] ??= []).push(c);
    }
  }

  const sections: SidebarSection[] = [
    { title: "Guides", links: guideLinks },
    { title: "Core", links: coreLinks },
  ];

  for (const [title, links] of Object.entries(grouped)) {
    sections.push({ title, links });
  }

  sections.push({
    title: "Customization",
    links: [{ to: "/theme-builder", label: "Theme Builder" }],
  });

  return sections;
}

export const Route = createFileRoute("/docs/components")({
  beforeLoad: () => ({
    sidebarSections: buildComponentSections(),
  }),
  component: () => <Outlet />,
});
