import { queryOptions } from "@tanstack/react-query";
import type { DocsManifest } from "./docs-meta";

export interface RegistryFile {
	target: string;
	content: string;
}

export interface RegistryJson {
	dependencies: string[];
	registryDependencies: string[];
	files: RegistryFile[];
	demo?: string;
}

async function fetchJson<T>(url: string): Promise<T> {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
	return res.json() as Promise<T>;
}

export const docsKeys = {
	all: ["docs"] as const,
	manifest: () => ["docs", "manifest"] as const,
	registry: (name: string) => ["docs", "registry", name] as const,
};

export const docsQueries = {
	manifest: () =>
		queryOptions<DocsManifest>({
			queryKey: docsKeys.manifest(),
			queryFn: () => fetchJson<DocsManifest>("/docs/components.json"),
			staleTime: 5 * 60 * 1000,
		}),
	registry: (name: string) =>
		queryOptions<RegistryJson | null>({
			queryKey: docsKeys.registry(name),
			queryFn: async () => {
				try {
					return await fetchJson<RegistryJson>(`/reg/${name}.json`);
				} catch {
					return null;
				}
			},
			staleTime: 5 * 60 * 1000,
		}),
};
