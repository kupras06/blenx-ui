import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const REG_DIR = "apps/web/public/reg";
const files = readdirSync(REG_DIR);

let count = 0;
for (const file of files) {
  if (file.endsWith(".json")) {
    const fullPath = join(REG_DIR, file);
    let content = readFileSync(fullPath, "utf-8");
    const newContent = content.replaceAll("packages/registry/.temp/", "");
    if (content !== newContent) {
      writeFileSync(fullPath, newContent, "utf-8");
      count++;
    }
  }
}

console.log(`🧹 Cleaned up .temp paths in ${count} registry files`);

const TEMP_DIR = "packages/registry/.temp";
if (require("fs").existsSync(TEMP_DIR)) {
  require("fs").rmSync(TEMP_DIR, { recursive: true, force: true });
  console.log(`🗑️ Removed ${TEMP_DIR} directory`);
}
