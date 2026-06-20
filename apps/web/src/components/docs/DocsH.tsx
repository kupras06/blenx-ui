import { useMemo, useRef, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Box, Separator, Text } from "@blenx-dev/ui/components";
import { slugify, extractTextFromChildren } from "@/lib/slug";
import type React from "react";

const styles = stylex.create({
	wrapper: {
		position: "relative",
	},
	anchor: {
		opacity: {
			default: 0,
			[":hover"]: 1,
		},
		marginLeft: 8,
		fontSize: "inherit",
		fontWeight: "inherit",
		color: {
			default: "var(--docs-heading-anchor)",
			[":hover"]: "var(--docs-heading-anchor-hover)",
		},
		textDecoration: "none",
		userSelect: "none",
	},
});

interface DocsHeadingProps {
	children: React.ReactNode;
	id?: string;
}

function useDocsHeadingId(children: React.ReactNode, explicitId?: string) {
	return useMemo(() => {
		if (explicitId) return explicitId;
		const text = extractTextFromChildren(children);
		return text ? slugify(text) : undefined;
	}, [children, explicitId]);
}

function DocsHeading({
	as,
	children,
	id: explicitId,
}: DocsHeadingProps & { as: "h1" | "h2" | "h3" }) {
	const headingId = useDocsHeadingId(children, explicitId);
	const [copied, setCopied] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

	const handleAnchorClick = () => {
		if (!headingId) return;
		const url = new URL(window.location.href);
		url.hash = headingId;
		navigator.clipboard.writeText(url.toString());
		setCopied(true);
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Box {...stylex.props(styles.wrapper)} id={headingId}>
			<Text variant={as}>
				{children}
				{headingId && as !== "h1" && (
					<a
						{...stylex.props(styles.anchor)}
						href={`#${headingId}`}
						onClick={handleAnchorClick}
						aria-label={copied ? "Copied link" : `Link to ${headingId}`}
						title={copied ? "Copied!" : "Copy link"}
					>
						#
					</a>
				)}
			</Text>
			{as === "h2" && <Separator tone="subtle" />}
		</Box>
	);
}

function DocsH1({ children, id }: DocsHeadingProps) {
	return <DocsHeading as="h1" id={id}>{children}</DocsHeading>;
}

function DocsH2({ children, id }: DocsHeadingProps) {
	return (
			<DocsHeading as="h2" id={id}>
				{children}
			</DocsHeading>
	);
}

function DocsH3({ children, id }: DocsHeadingProps) {
	return (
			<DocsHeading as="h3" id={id}>
				{children}
			</DocsHeading>
	);
}

export { DocsH1, DocsH2, DocsH3 };
