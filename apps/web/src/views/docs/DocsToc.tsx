"use client";

import { useCallback } from "react";
import { Box, Container, CopyButton, Text, VStack } from "@blenx-dev/ui";
import type { TocItem } from "@/utils/extractHeadings";
import { HStack } from "@blenx-dev/ui";
import { useRouterState } from "@tanstack/react-router";

interface DocsTocProps {
  items: TocItem[];
}

function useActiveHeading(): string {
  const activeId = useRouterState({
    select: (state) => state.location.hash,
  });
  return activeId;
}

export function DocsToc({ items }: DocsTocProps) {
  const activeId = useActiveHeading();
  const handleClick = useCallback((slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const url = new URL(globalThis.location.href);
      url.hash = slug;
      globalThis.history.replaceState({}, "", url.toString());
    }
  }, []);
  if (items.length === 0) return null;

  return (
    <Container size="xxs" centered render={<aside />} aria-label="On this page">
      <Box render={<nav />} aria-label="Table of contents">
        <VStack gap="none">
          {items.map((item) => {
            const isActive = item.slug === activeId;
            const copyValue = new URL(globalThis.location.href);
            copyValue.hash = item.slug;
            return (
              <HStack render={<li />} key={item.slug} justify="between" align="center">
                <Text
                  color={isActive ? "primary" : "secondary"}
                  render={
                    <a
                      href={`#${item.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.slug);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      title={`Navigate to ${item.title}`}
                    />
                  }
                >
                  {item.title}
                </Text>
                <CopyButton
                  padding="none"
                  variant="ghost"
                  color="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.slug);
                  }}
                  copyValue={copyValue.toString()}
                />
              </HStack>
            );
          })}
        </VStack>
      </Box>
    </Container>
  );
}
