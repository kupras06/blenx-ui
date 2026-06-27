import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    dts({
      entryRoot: "src",
      outDirs: "dist",
      exclude: ["**/*.demo.*", "**/*.doc.*"],
    }),
  ],

  build: {
    target: "esnext",
    minify: false,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },

    rollupOptions: {
      external: [
        /^react$/,
        /^react-dom$/,
        /^react\/jsx-runtime$/,
        /^@stylexjs\/stylex$/,
        /^@base-ui\/react/,
        /^@phosphor-icons\/react/,
        /^@tanstack\/react-table/,
        /^@tanstack\/react-query/,
        /^@vanilla-extract\/recipes/,
        /^@vanilla-extract\/css/,
        /^@vanilla-extract\/recipes/,
        /^@vanilla-extract\/sprinkles/,
        /react-colorful/,
        /react-day-picker/,
        /clsx/,
      ],

      output: {
        preserveModules: true,
        preserveModulesRoot: "src",

        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",

        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
