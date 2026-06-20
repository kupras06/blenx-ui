"use client";

import { useCallback, useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Box, Text } from "@blenx-dev/ui/components";;
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
	borderRadius,
	duration,
	easing,
	fontSize,
	fontWeight,
	lineHeight,
	spacing,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

interface TOCHeading {
	id: string;
	text: string;
	level: number;
}

const tocStyles = stylex.create({
	root: {
		display: "none",
		width: "220px",
		flexShrink: 0,
		position: "sticky",
		top: spacing.large,
		alignSelf: "start",
		maxHeight: "90svh",
		overflowY: "auto",
		"@media (min-width: 1024px)": {
			display: "block",
		},
	},
	title: {
		fontSize: fontSize.xsmall,
		fontWeight: fontWeight.semibold,
		letterSpacing: "0.05em",
		textTransform: "uppercase",
		color: theme.contentSecondary,
		marginBottom: spacing.medium,
	},
	list: {
		listStyle: "none",
		margin: 0,
		padding: 0,
	},
});

const itemStyles = stylex.create({
	item: {
		display: "block",
		paddingBlock: spacing["1"],
		paddingInlineEnd: spacing.small,
		fontSize: fontSize.xsmall,
		lineHeight: lineHeight.snug,
		color: theme.contentSecondary,
		textDecoration: "none",
		borderRadius: borderRadius.xsmall,
		transition: `color ${duration.fast} ${easing.standard}`,
		":hover": {
			color: theme.contentPrimary,
		},
		":focus-visible": {
			outline: `2px solid ${theme.focusRing}`,
			outlineOffset: "2px",
		},
	},
	active: {
		color: theme.primary,
		fontWeight: fontWeight.medium,
	},
	depth0: {
		paddingLeft: spacing.xsmall,
	},
	depth1: {
		paddingLeft: spacing.large,
	},
	depth2: {
		paddingLeft: spacing.xxxlarge,
	},
});

function getHeadings(): TOCHeading[] {
	const container = document.querySelector<HTMLElement>("[data-doc-content]");
	if (!container) return [];

	const elements = container.querySelectorAll<HTMLElement>(
		"h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]",
	);

	const items: TOCHeading[] = [];
	const seen = new Map<string, number>();

	elements.forEach((el) => {
		const originalId = el.id;
		let id = originalId;
		const text = el.textContent || "";

		if (seen.has(originalId)) {
			const count = seen.get(originalId)! + 1;
			seen.set(originalId, count);
			id = `${originalId}-${count}`;
			el.id = id;
		} else {
			seen.set(originalId, 0);
		}

		items.push({
			id,
			text,
			level: Number.parseInt(el.tagName[1]),
		});
	});

	return items;
}

function useActiveHeading(headings: TOCHeading[]): string {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		if (headings.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = [...entries].filter((e) => e.isIntersecting);
				visible.sort(
					(a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
				);

				if (visible.length > 0) {
					setActiveId(visible[0].target.id);
				}
			},
			{
				rootMargin: "-80px 0px -60% 0px",
				threshold: 0,
			},
		);

		const elements = headings
			.map((h) => document.getElementById(h.id))
			.filter(Boolean) as HTMLElement[];

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, [headings]);

	return activeId;
}

export function DocTOC() {
	const [headings, setHeadings] = useState<TOCHeading[]>([]);
	const [key, setKey] = useState(0);
	const activeId = useActiveHeading(headings);

	const refresh = useCallback(() => {
		setHeadings(getHeadings());
		setKey((k) => k + 1);
	}, []);

	useEffect(() => {
		const timer = setTimeout(refresh, 0);
		return () => clearTimeout(timer);
	}, [refresh]);

	useEffect(() => {
		const container = document.querySelector<HTMLElement>("[data-doc-content]");
		if (!container) return;

		const mo = new MutationObserver(refresh);
		mo.observe(container, { childList: true, subtree: true });
		return () => mo.disconnect();
	}, [refresh]);

	const handleClick = useCallback((id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
			const url = new URL(globalThis.location.href);
			url.hash = id;
			globalThis.history.replaceState({}, "", url.toString());
		}
	}, []);

	if (headings.length === 0) return;

	return (
		<Box
			{...stylex.props(tocStyles.root)}
			render={<aside />}
			aria-label="On this page"
		>
			<Text variant="caption" style={tocStyles.title}>
				On this page
			</Text>
			<Box render={<nav />} aria-label="Table of contents">
				<ul key={key} {...stylex.props(tocStyles.list)}>
					{headings
						.filter((h) => h.level > 1)
						.map((heading) => {
							const depth = Math.min(heading.level - 2, 2);
							const isActive = heading.id === activeId;
							return (
								<li key={heading.id}>
									<a
										{...stylex.props(
											itemStyles.item,
											itemStyles[`depth${depth}` as keyof typeof itemStyles],
											isActive && itemStyles.active,
										)}
										href={`#${heading.id}`}
										onClick={(e) => {
											e.preventDefault();
											handleClick(heading.id);
										}}
										aria-current={isActive ? "true" : undefined}
									>
										{heading.text}
									</a>
								</li>
							);
						})}
				</ul>
			</Box>
		</Box>
	);
}
