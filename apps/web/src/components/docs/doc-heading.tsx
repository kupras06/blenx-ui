"use client";

import { useMemo, useRef, useState } from "react";
import type React from "react";
import * as stylex from "@stylexjs/stylex";
import { Box, Separator, Text } from "@blenx-dev/ui/components";;
import { slugify } from "@/lib/slug";
import type { TextVariant } from "@blenx-dev/ui/components/Text/text";

const headingStyles = stylex.create({
	anchorLink: {
		opacity: {
			default: 0,
			[stylex.when.ancestor(":hover")]: 1,
		},
		color: {
			default: "red",
			[stylex.when.ancestor(":hover")]: "yello",
		},
		transition: "opacity .2s",
	},
	wrapper: {
		position: "relative",
	},
	anchorLinkVisible: {
		opacity: 1,
	},
});

interface DocHeadingProps {
	variant: Extract<TextVariant, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
	children?: React.ReactNode;
	id?: string;
	title: string;
}

export function DocHeading({
	variant,
	children,
	title,
	id: explicitId,
	...props
}: DocHeadingProps) {
	const autoId = useMemo(() => slugify(title), [title]);
	const headingId = explicitId || autoId;
	const [copied, setCopied] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

	const handleClick = () => {
		const url = new URL(globalThis.location.href);
		url.hash = headingId;
		navigator.clipboard.writeText(url.toString());
		setCopied(true);
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => setCopied(false), 2000);
	};
	return (
		<Box marginBottom="xsmall" id={headingId}>
			<Text variant={variant} {...props} marginBottom="xsmall">
				{children || title}
				<Text span style={headingStyles.anchorLink} data-slot="anchor-link">
					<a
						href={`#${headingId}`}
						aria-label={`Link to ${headingId}`}
						onClick={handleClick}
						title={copied ? "Copied link" : "Copy link to section"}
						tabIndex={0}
					>
						#{headingId}
					</a>
				</Text>
			</Text>
			<Separator tone="subtle" />
		</Box>
	);
}
