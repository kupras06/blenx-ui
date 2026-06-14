import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/r/$")({
	server: {
		handlers: {
			GET: async ({ params }) => {
				const __dirname = dirname(fileURLToPath(import.meta.url));
				const registryDir = resolve(__dirname, "../../../../public/reg");
				const name = (params._splat ?? "registry.json").replace(/\.json$/, "");
				const filePath = resolve(registryDir, `${name}.json`);

				if (!filePath.startsWith(registryDir)) {
					return new Response("Forbidden", { status: 403 });
				}

				try {
					const content = readFileSync(filePath, "utf-8");
					return new Response(content, {
						headers: { "Content-Type": "application/json" },
					});
				} catch {
					return new Response(`Not Found: ${filePath}`, { status: 404 });
				}
			},
		},
	},
});
