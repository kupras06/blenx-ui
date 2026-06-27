import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vanillaExtractPlugin(), dts()],

  build: {
    target: "esnext",

    lib: {
      entry: {
        index: "src/index.ts",
        contract: "src/contract.css.ts",
        tokens: "src/tokens.css.ts",
        "light-theme": "src/light-theme.css.ts",
      },
      formats: ["es"],
    },

    rollupOptions: {
      external: ["@vanilla-extract/css"],
    },
  },
});
