import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { useCallback, useEffect, useRef, useState } from "react";
import { estimateLanguage, highlightCode } from "@/lib/syntax-highlight";
import { Button } from "../ui";
import { Box } from "../ui/Box/box";

const MAX_LINES = 20;

const styles = stylex.create({
	container: {
		position: "relative",
		borderRadius: "var(--border-radius-md)",
		border: "1px solid var(--color-border-subtle)",
		overflow: "hidden",
		width: "100%",
	},
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: "var(--space-3)",
		paddingRight: "var(--space-2)",
		paddingTop: "var(--space-1-5)",
		paddingBottom: "var(--space-1-5)",
		backgroundColor: "var(--color-surface)",
		borderBottom: "1px solid var(--color-border-subtle)",
	},
	headerLeft: {
		display: "flex",
		alignItems: "center",
		gap: "var(--space-2)",
		minWidth: 0,
	},
	title: {
		fontFamily: "var(--font-display)",
		fontSize: "13px",
		color: "var(--color-content-secondary)",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		lineHeight: 1.4,
	},
	languageBadge: {
		fontFamily: "var(--font-mono)",
		fontSize: "11px",
		padding: "1px 6px",
		borderRadius: "var(--border-radius-sm)",
		backgroundColor: "var(--color-surface-sunken)",
		color: "var(--color-content-secondary)",
		textTransform: "uppercase",
		letterSpacing: "0.5px",
		fontWeight: 500,
		lineHeight: "18px",
		flexShrink: 0,
	},
	copyButton: {
		display: "inline-flex",
		alignItems: "center",
		gap: "var(--space-1)",
		padding: "var(--space-1) var(--space-1-5)",
		borderRadius: "var(--border-radius-sm)",
		border: "none",
		background: "none",
		cursor: "pointer",
		fontFamily: "var(--font-display)",
		fontSize: "12px",
		color: "var(--color-content-secondary)",
		transition: "color 0.15s ease",
		flexShrink: 0,
		":hover": {
			color: "var(--color-content-primary)",
			backgroundColor: "var(--color-surface-sunken)",
		},
	},
	scrollWrapper: {
		position: "relative",
		overflowX: "auto",
		overflowY: "hidden",
		backgroundColor: "var(--color-surface-sunken)",
	},
	collapseOverlay: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: "80px",
		background: "linear-gradient(transparent, var(--color-surface-sunken))",
		pointerEvents: "none",
	},
	expandButtonWrapper: {
		display: "flex",
		justifyContent: "center",
		padding: "var(--space-2)",
		borderTop: "1px solid var(--color-border-subtle)",
		backgroundColor: "var(--color-surface-sunken)",
	},
	expandButton: {
		display: "inline-flex",
		alignItems: "center",
		gap: "var(--space-1)",
		padding: "var(--space-1) var(--space-3)",
		borderRadius: "var(--border-radius-sm)",
		border: "1px solid var(--color-border-subtle)",
		background: "var(--color-surface)",
		cursor: "pointer",
		fontFamily: "var(--font-display)",
		fontSize: "12px",
		color: "var(--color-content-secondary)",
		transition: "all 0.15s ease",
		":hover": {
			color: "var(--color-content-primary)",
			borderColor: "var(--color-border)",
		},
	},
});

interface DocCodeViewProps {
	code: string;
	title?: string;
	language?: string;
}

function escapeHtml(code: string): string {
	return `<pre class="shiki"><code>${code
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")}</code></pre>`;
}

function DocCodeView({ code, title, language }: DocCodeViewProps) {
	const [copied, setCopied] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const [highlighted, setHighlighted] = useState<string | null>(null);
	const mountedRef = useRef(true);

	const lines = code.split("\n");
	const totalLines = lines.length;
	const showCollapse = totalLines > MAX_LINES;

	useEffect(() => {
		mountedRef.current = true;
		const lang = language ?? estimateLanguage(code);

		highlightCode(code, lang).then((html) => {
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

	const lang = language ?? estimateLanguage(code);

	const displayLines = showCollapse && !expanded ? lines.slice(0, MAX_LINES) : lines;
	const isCollapsed = showCollapse && !expanded;
	const displayCode = displayLines.join("\n");

	return (
		<Box style={styles.container}>
			<div {...stylex.props(styles.header)}>
				<div {...stylex.props(styles.headerLeft)}>
					{title && <span {...stylex.props(styles.title)}>{title}</span>}
					<span {...stylex.props(styles.languageBadge)}>{lang}</span>
				</div>
				<Button
					size="xsmall"
					type="button"
					variant="soft"
					{...stylex.props(styles.copyButton)}
					onClick={handleCopy}
					aria-label={copied ? "Copied" : "Copy code"}
				>
					{copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
					{copied ? "Copied" : "Copy"}
				</Button>
			</div>

			<div {...stylex.props(styles.scrollWrapper)}>
				<div
					dangerouslySetInnerHTML={{
						__html: highlighted ?? escapeHtml(displayCode),
					}}
				/>
				{isCollapsed && <div {...stylex.props(styles.collapseOverlay)} />}
			</div>

			{showCollapse && (
				<div {...stylex.props(styles.expandButtonWrapper)}>
					<Button
						size="xsmall"
						type="button"
						{...stylex.props(styles.expandButton)}
						onClick={() => setExpanded(!expanded)}
					>
						{expanded
							? "Show less"
							: `Show ${totalLines - MAX_LINES} more lines`}
					</Button>
				</div>
			)}
		</Box>
	);
}

export { DocCodeView };
