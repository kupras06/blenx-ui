import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { Button } from "../Button/button";
import { Box } from "../Box/box";
import { ScrollArea } from "../ScrollArea/scroll-area";

interface CodeBlockProps {
	code: string;
	language?: string;
}

function escapeHtml(code: string): string {
	return `<pre class="shiki"><code>${code
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")}</code></pre>`;
}

function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
	const [highlighted, setHighlighted] = useState<string | null>(null);
	const [copied, setCopied] = useState(false);
	const mountedRef = useRef(true);
	useEffect(() => {
		mountedRef.current = true;
		highlightCode(code, language).then((html) => {
			if (mountedRef.current) {
				setHighlighted(html);
			}
		});
		return () => {
			mountedRef.current = false;
		};
	}, [code, language]);

	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(code).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}, [code]);

	return (
		<Box >
			<ScrollArea fill>
			<Box paddingY="medium">
				<Box position="absolute" right="small" top="large">
				<Button
					type="button"
					size="xsmall"
					radius="xsmall"
					variant={copied ? "solid" : "soft"}
					onClick={handleCopy}
					aria-label={copied ? "Copied" : "Copy code"}
				>
					{copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
					{copied ? "Copied" : "Copy"}
				</Button>
			</Box>
			<div
				dangerouslySetInnerHTML={{
					__html: highlighted ?? escapeHtml(code),
				}}
			/>
			</Box>
		</ScrollArea>
		</Box>
	);
}

export { CodeBlock };
export type { CodeBlockProps };
