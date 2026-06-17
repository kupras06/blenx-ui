import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import {
	Button,
	HStack,
	ScrollArea,
	SegmentedControl,
	Surface,
	Text,
} from "../ui";


interface CodeFile {
	code: string;
	title?: string;
	language?: string;
}

interface DocCodeViewProps {
	code?: string;
	title?: string;
	language?: string;
	files?: CodeFile[];
}

function escapeHtml(code: string): string {
	return `<pre class="shiki"><code>${code
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")}</code></pre>`;
}

function DocCodeView({ code, title, language, files }: DocCodeViewProps) {
	const activeFiles =
		files || (code != null ? [{ code, title, language }] : []);
	const [activeIndex, setActiveIndex] = useState(0);
	const activeFile = activeFiles[activeIndex] || {
		code: "",
		title: "",
		language: "typescript",
	};

	const [copied, setCopied] = useState(false);
	const [highlighted, setHighlighted] = useState<string | null>(null);
	const mountedRef = useRef(true);

	useEffect(() => {
		mountedRef.current = true;
		const lang = activeFile.language ?? "typescript";

		highlightCode(activeFile.code, lang).then((html) => {
			if (mountedRef.current) {
				setHighlighted(html);
			}
		});

		return () => {
			mountedRef.current = false;
		};
	}, [activeFile.code, activeFile.language]);

	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(activeFile.code).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}, [activeFile.code]);

	const lang = activeFile.language ?? "typescript";
	const isMultiFile = activeFiles.length > 1;

	return (
		<Surface variant="sunken">
			{isMultiFile ? (
				<Surface radius="xsmall">
					<HStack justify="between" padding="xxsmall">
						<SegmentedControl
							variant="default"
							value={activeIndex.toString()}
							radius="xsmall"
							onValueChange={(value) => {
								setActiveIndex(Number(value));
								setHighlighted(null);
							}}
							options={activeFiles.map((file, idx) => ({
								value: `${idx}`,
								label: file.title || `File ${idx + 1}`,
							}))}
						/>
						<Button
							type="button"
							size="xsmall"
							radius="xsmall"
							onClick={handleCopy}
							aria-label={copied ? "Copied" : "Copy code"}
						>
							{copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
							{copied ? "Copied" : "Copy"}
						</Button>
					</HStack>
				</Surface>
			) : (
				<HStack justify="between">
					<HStack>
						{activeFile.title && (
							<Text variant="caption" color="secondary">
								{activeFile.title}
							</Text>
						)}
						<Text variant="caption">{lang}</Text>
					</HStack>
					<Button
						type="button"
						onClick={handleCopy}
						size="xsmall"
						aria-label={copied ? "Copied" : "Copy code"}
					>
						{copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
						{copied ? "Copied" : "Copy"}
					</Button>
				</HStack>
			)}

			<ScrollArea height={"80svh"}>
				<div
					// biome-ignore lint/security/noDangerouslySetInnerHtml: dangerouslySetInnerHTML
					dangerouslySetInnerHTML={{
						__html: highlighted ?? escapeHtml(activeFile.code),
					}}
				/>
			</ScrollArea>
		</Surface>
	);
}

export { DocCodeView };
