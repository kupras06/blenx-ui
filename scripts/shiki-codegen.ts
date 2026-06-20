import { codegen } from "shiki-codegen";
import { writeFileSync } from "fs";
const DEST = "./src/lib/shiki.bundle.ts";
async function run() {
  const { code } = await codegen({
    langs: ["typescript", "javascript", "bash", "json", "tsx", "css"],
    themes: ["github-dark", "github-light"],
    engine: "javascript",
    typescript: true,
  });
  writeFileSync(DEST, code, "utf8");
}

if (import.meta.main) {
  run();
}
