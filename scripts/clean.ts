import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const REG_DIR = "public/reg";
const files = readdirSync(REG_DIR);

let count = 0;
for (const file of files) {
	if (file.endsWith(".json")) {
		const fullPath = join(REG_DIR, file);
		const content = readFileSync(fullPath, "utf8");
		const newContent = content.replaceAll("registry/.temp/", "");
		if (content !== newContent) {
			writeFileSync(fullPath, newContent, "utf8");
			count++;
		}
	}
}

console.log(`🧹 Cleaned up .temp paths in ${count} registry files`);

const TEMP_DIR = "registry/.temp";
if (require("fs").existsSync(TEMP_DIR)) {
	require("fs").rmSync(TEMP_DIR, { recursive: true, force: true });
	console.log(`🗑️ Removed ${TEMP_DIR} directory`);
}
