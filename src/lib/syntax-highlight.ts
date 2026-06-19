import { codeToHtml } from "../../shiki.bundle";

type Lang =
	| "typescript"
	| "ts"
	| "js"
	| "jsx"
	| "json"
	| "bash"
	| "css"
	| "html"
	| "md";

const LANGUAGES = new Set<Lang>([
	"typescript",
	"ts",
	"js",
	"jsx",
	"json",
	"bash",
	"css",
	"html",
	"md",
]);

export async function highlightCode(
	code: string,
	language: string,
): Promise<string> {
	try {
		const lang = LANGUAGES.has(language as Lang) ? language : "typescript";
		return codeToHtml(code, {
			lang,
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
		});
	} catch {
		return escapeHtml(code);
	}
}

function escapeHtml(code: string): string {
	return `<pre class="shiki shiki-themes"><code>${code
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")}</code></pre>`;
}
