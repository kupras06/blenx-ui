import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import contentCollections from "@content-collections/vite";
const isVercel = process.env.VERCEL === "1";

const config = defineConfig(() => {
  return {
    resolve: {
      tsconfigPaths: true,
    },
    server: {
      port: 3001,
    },
    plugins: [
      vanillaExtractPlugin(),
      contentCollections(),
      tanstackStart(),
      viteReact(),
      nitro({
        preset: isVercel ? "vercel" : undefined,
      }),
    ],
  };
});

export default config;
