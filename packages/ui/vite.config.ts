import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import stylex from "@stylexjs/unplugin";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    stylex.vite({
      useCSSLayers: true,
    }),
    vanillaExtractPlugin(),
    dts({
      entryRoot: "src",
      outDirs: "dist",
    }),
  ],

  build: {
    target: "esnext",
    minify: false,

    cssCodeSplit: false,

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
        /react-colorful/,
        /react-day-picker/,
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
