export type DocsStatus = "stable" | "beta" | "experimental";

export interface DocsAccessibility {
  keyboard?: string[];
  aria?: string[];
}

export interface DocsMeta {
  title: string;
  description: string;
  category: string;
  status?: DocsStatus;
  keywords?: string[];
  related?: string[];
  accessibility?: DocsAccessibility;
}

export interface DocsManifestExample {
  name: string;
  source: string;
}

export interface DocsManifestDemo {
  source: string;
}

export interface DocsManifestItem {
  title: string;
  description: string;
  category: string;
  status: DocsStatus | undefined;
  keywords: string[] | undefined;
  related: string[] | undefined;
  accessibility: DocsAccessibility | undefined;
  registryName: string;
  demo: DocsManifestDemo | undefined;
  examples: DocsManifestExample[];
}

export type DocsManifest = Record<string, DocsManifestItem>;
