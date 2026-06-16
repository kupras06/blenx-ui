import { CopyIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import { Box } from "../ui/Box/box";
import { Button } from "../ui/Button/button";
import { Text } from "../ui/Text/text";

const styles = stylex.create({
	container: {
		position: "relative",
	},
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "var(--space-2) var(--space-3)",
		backgroundColor: "var(--color-surface-sunken)",
		borderTopLeftRadius: "var(--border-radius-md)",
		borderTopRightRadius: "var(--border-radius-md)",
		borderBottom: "1px solid var(--color-border-subtle)",
	},
	codeBlock: {
		backgroundColor: "var(--color-surface-sunken)",
		padding: "var(--space-3)",
		borderBottomLeftRadius: "var(--border-radius-md)",
		borderBottomRightRadius: "var(--border-radius-md)",
		overflowX: "auto",
		fontFamily: "var(--font-mono)",
		fontSize: "13px",
		lineHeight: 1.6,
		whiteSpace: "pre",
	},
});

interface DocSourceCodeProps {
	code: string;
	title?: string;
}

function DocSourceCode({ code, title }: DocSourceCodeProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(code).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<Box style={styles.container}>
			<div {...stylex.props(styles.header)}>
				<Text variant="body2" color="secondary">
					{title || "Source"}
				</Text>
				<Button size="small" variant="ghost" onClick={handleCopy}>
					<CopyIcon size={14} />
					{copied ? "Copied!" : "Copy"}
				</Button>
			</div>
			<pre {...stylex.props(styles.codeBlock)}>
				<code>{code}</code>
			</pre>
		</Box>
	);
}

export { DocSourceCode };
