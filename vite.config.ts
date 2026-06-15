import path from "node:path";
import { fileURLToPath } from "node:url";
import stylex from "@stylexjs/unplugin";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isVercel = process.env.VERCEL === "1";

const config = defineConfig(({ command, mode }) => {
	const isDev = mode === "development" || command === "serve";

	return {
		resolve: {
			tsconfigPaths: true,
		},
		server: {
			port: 3001,
		},
		plugins: [
			stylex.vite({
				useCSSLayers: true,
				dev: isDev,
				devMode: "full",
				runtimeInjection: false,
				aliases: {
					"@/*": path.join(__dirname, "./src/*"),
					"@/ui": path.join(__dirname, "./src/components/ui"),
					"@/lib/theme/*": path.join(__dirname, "./src/lib/theme/*"),
				},
			}),
			tanstackStart(),
			viteReact(),
			devtools(),
			nitro({
				preset: isVercel ? "vercel" : undefined,
			}),
		],
	};
});

export default config;
