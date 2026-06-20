"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Box, Text } from "@blenx-dev/ui/components";
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
import type { TocItem } from "@/utils/extractHeadings";

interface DocsTocProps {
  items: TocItem[];
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
    fontSize: fontSize.small,
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
  depthH2: {
    paddingLeft: spacing.xsmall,
  },
  depthH3: {
    paddingLeft: spacing.large,
  },
});

function useActiveHeading(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = [...entries].filter((e) => e.isIntersecting);
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      },
    );

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

/**
 * DocsToc – A page-specific table of contents.
 *
 * Renders H2 and H3 headings as nested links with scrollspy support
 * for active section highlighting.
 *
 * @example
 * ```tsx
 * <DocsToc items={doc.toc} />
 * ```
 *
 * Future enhancements (not implemented yet):
 * - Collapsible TOC groups
 * - Heading copy links
 * - Smooth scrolling
 * - Nested heading levels beyond H3
 */
export function DocsToc({ items }: DocsTocProps) {
  const ids = items.map((item) => item.slug);
  const activeId = useActiveHeading(ids);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const url = new URL(globalThis.location.href);
      url.hash = slug;
      globalThis.history.replaceState({}, "", url.toString());
    }

    // Copy URL to clipboard on click (future deep linking)
    const url = new URL(globalThis.location.href);
    url.hash = slug;
    navigator.clipboard.writeText(url.toString());
    setCopiedId(slug);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopiedId(null), 2000);
  }, []);

  if (items.length === 0) return null;

  return (
    <Box {...stylex.props(tocStyles.root)} render={<aside />} aria-label="On this page">
      <Text variant="caption" style={tocStyles.title}>
        On this page
      </Text>
      <Box render={<nav />} aria-label="Table of contents">
        <ul {...stylex.props(tocStyles.list)}>
          {items.map((item) => {
            const isActive = item.slug === activeId;
            const depthClass = item.depth === 3 ? "depthH3" : "depthH2";
            return (
              <li key={item.slug}>
                <a
                  {...stylex.props(
                    itemStyles.item,
                    itemStyles[depthClass],
                    isActive && itemStyles.active,
                  )}
                  href={`#${item.slug}`}
                  onClick={(e) => handleClick(e, item.slug)}
                  aria-current={isActive ? "true" : undefined}
                  title={copiedId === item.slug ? "Copied!" : `Navigate to ${item.title}`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
}
