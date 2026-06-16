import { createHighlighter, type Highlighter } from "shiki";

type Lang = "tsx" | "ts" | "js" | "jsx" | "json" | "bash" | "css" | "html" | "md";

const LANGUAGES: Lang[] = ["tsx", "ts", "js", "jsx", "json", "bash", "css", "html", "md"];

let highlighter: Highlighter | null = null;
let initPromise: Promise<Highlighter> | null = null;

async function getHighlighter(): Promise<Highlighter> {
	if (highlighter) return highlighter;
	if (!initPromise) {
		initPromise = createHighlighter({
			themes: ["github-light", "github-dark"],
			langs: LANGUAGES,
		});
	}
	highlighter = await initPromise;
	return highlighter;
}

export async function highlightCode(
	code: string,
	language: string,
): Promise<string> {
	try {
		const hl = await getHighlighter();
		const lang = LANGUAGES.includes(language as Lang) ? language : "tsx";
		return hl.codeToHtml(code, {
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

export function estimateLanguage(code: string): string {
	if (code.startsWith("#!")) return "bash";
	if (/^[\w$-]+\s*\(\)\s*{/.test(code)) return "bash";
	if (/^\s*@(import|use|mixin)/.test(code)) return "css";
	if (/^\.[\w-]+\s*\{/.test(code)) return "css";
	if (/^[\w-]+\s*:\s/.test(code)) return "css";
	if (/import\s+(?:type\s+)?\{/.test(code)) return "tsx";
	if (/<\w+[^>]*\/?>/.test(code)) return "tsx";
	if (/interface\s+\w+/.test(code)) return "ts";
	if (/export\s+(?:default\s+)?(?:function|const)/.test(code)) return "ts";
	if (/^\s*\{/.test(code)) return "json";
	return "tsx";
}

function escapeHtml(code: string): string {
	return `<pre class="shiki"><code>${code
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")}</code></pre>`;
}
