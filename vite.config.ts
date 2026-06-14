import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import stylex from "@stylexjs/unplugin";
import path from "node:path";
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@/*": path.join(__dirname, "./src/*"),
      "@/ui": path.join(__dirname, "./src/components/ui"),
      "@/ui/*": path.join(__dirname, "./src/components/ui/*"),
      "@/lib/theme/*": path.join(__dirname, "./src/lib/theme/*")
    }
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
        "@/*": [path.join(__dirname, "./src/*")],
        "@/ui": [path.join(__dirname, "./src/components/ui")],
        "@/ui/*": [path.join(__dirname, "./src/components/ui/*")],
        "@/lib/theme/*": [path.join(__dirname, "./src/lib/theme/*")],

      },
      unstable_moduleResolution: {
        type: "commonJS",
        rootDir: path.join(__dirname, "../.."), // monorepo root
      },
    }),
    devtools(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
