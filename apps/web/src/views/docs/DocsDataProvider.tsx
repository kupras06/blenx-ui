import type { UseQueryResult } from "@tanstack/react-query";
import { create, StoreApi } from "zustand";
import { createContext } from "zustand-utils";
import type { TocItem } from "@/utils/extractHeadings";
import type { DocsManifestItem } from "@/lib/docs-meta";
import { docsQueries, RegistryJson } from "@/lib/docs-api";
import { queryClient } from "@/lib/query-client";
import { allComponents, allGuides } from "content-collections";

export interface SidebarLink {
  to: string;
  label: string;
}
export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}
interface DocsDataState {
  manifest: UseQueryResult<DocsManifestItem>["data"];
  manifestLoading: UseQueryResult<DocsManifestItem>["isLoading"];
  tocItems: TocItem[];
  currentDoc: DocsManifestItem | null;
  guideLinks: SidebarLink[];
  componentLinks: SidebarLink[];
  allSections: SidebarSection[];
}

interface DocsDataStateActions {
  getRegistry: (name: string) => Promise<RegistryJson>;
  setTocItems: (items: TocItem[]) => void;
  setCurrentDoc: (doc: DocsManifestItem | null) => void;
}
const staticSections: SidebarSection[] = [
  {
    title: "Customization",
    links: [{ to: "/theme-builder", label: "Theme Builder" }],
  },
];

function formatLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

interface DocsDataProviderStore extends DocsDataState, DocsDataStateActions {}
function createDocsDataStore() {
  const guideLinks: SidebarLink[] = allGuides
    .sort((a, b) => a.navigation.order - b.navigation.order)
    .map((g) => ({
      to: g.navigation.link ?? `/docs/guides/${g._meta.path}`,
      label: g.title,
    }));

  const componentLinks: SidebarLink[] = allComponents
    .sort((a, b) => a.navigation.order - b.navigation.order)
    .map((c) => ({
      to: `/docs/components/${c._meta.path}`,
      label: formatLabel(c._meta.path),
    }));

  const allSections: SidebarSection[] = [
    { title: "Guides", links: guideLinks },
    { title: "Components", links: componentLinks },
    ...staticSections,
  ];
  return create<DocsDataProviderStore>((set) => ({
    manifest: undefined,
    guideLinks,
    componentLinks,
    allSections,
    manifestLoading: false,
    currentDoc: null,
    tocItems: [],
    getRegistry: (name: string) => queryClient.ensureQueryData(docsQueries.registry(name)),
    setTocItems: (items: TocItem[]) =>
      set({
        tocItems: items,
      }),
    setCurrentDoc: (doc: DocsManifestItem | null) =>
      set({
        currentDoc: doc,
      }),
  }));
}

const { Provider: DocsDataProvider, useStore: useDocsData } =
  createContext<StoreApi<DocsDataProviderStore>>();

export { DocsDataProvider, useDocsData };

function DocsDataProviderWithQuery({ children }: { children: React.ReactNode }) {
  return <DocsDataProvider createStore={createDocsDataStore}>{children}</DocsDataProvider>;
}

export { DocsDataProviderWithQuery };
