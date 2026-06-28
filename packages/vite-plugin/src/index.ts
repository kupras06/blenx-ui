import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import type { Plugin } from "vite";

const blenxPackages = ["@blenx-dev/ui", "@blenx-dev/theme"];

function blenx(): Plugin[] {
  return [
    {
      name: "@blenx-dev/vite-plugin",
      config() {
        return {
          optimizeDeps: {
            exclude: blenxPackages,
          },
          ssr: {
            noExternal: blenxPackages,
          },
        };
      },
    },
    ...vanillaExtractPlugin(),
  ];
}

export { blenx };
