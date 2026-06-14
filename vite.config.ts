import path from "node:path";
import { fileURLToPath } from "node:url";
import { cloudflare } from "@cloudflare/vite-plugin";
import stylex from "@stylexjs/unplugin";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const config = defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	server: {
		port: 3001,
	},
	plugins: [
		stylex.vite({
			useCSSLayers: true,
			dev: process.env.NODE_ENV === "development",
			runtimeInjection: process.env.NODE_ENV === "development",
			aliases: {
				"@/*": path.join(__dirname, "./src/*"),
				"@/ui": path.join(__dirname, "./src/components/ui"),
				"@/lib/theme/*": path.join(__dirname, "./src/lib/theme/*"),
			},
		}),
		tanstackStart(),
		viteReact(),
		devtools(),
		cloudflare({ viteEnvironment: { name: "ssr" } }),
	],
});

export default config;
