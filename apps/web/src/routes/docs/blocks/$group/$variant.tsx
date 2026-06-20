import { useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allBlocks, allBlockGroups } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Separator, Text, VStack } from "@blenx-dev/ui/components";
import { DocsContent } from "@/components/docs/DocsContent";
import { mdxComponents } from "@/components/docs/MdxComponents";
import { useDocsTocStore } from "@/stores/docs-toc";
import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { borderRadius, fontSize, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const Route = createFileRoute("/docs/blocks/$group/$variant")({
  component: BlockVariantPage,
  notFoundComponent: () => <Text variant="h2">Block not found</Text>,
});

const styles = stylex.create({
  nav: {
    display: "flex",
    gap: spacing.xsmall,
    flexWrap: "wrap",
    paddingBottom: spacing.medium,
  },
  navLink: {
    textDecoration: "none",
    color: theme.contentSecondary,
    fontSize: fontSize.small,
    padding: "4px 12px",
    borderRadius: borderRadius.small,
    border: `1px solid ${theme.border}`,
  },
  navLinkActive: {
    backgroundColor: theme.surfacePrimary,
    color: theme.contentPrimary,
    borderColor: theme.borderActive,
  },
});

function BlockVariantPage() {
  const { group, variant } = Route.useParams();
  const setItems = useDocsTocStore((st) => st.setItems);

  const blockGroup = allBlockGroups.find((g) => g.slug === group);
  const doc = allBlocks.find((b) => b.group === group && b._meta.path === `${group}/${variant}`);

  const variants = allBlocks.filter((b) => b.group === group).sort((a, b) => a.order - b.order);

  useEffect(() => {
    if (doc?.toc) {
      setItems(doc.toc);
    } else {
      setItems([]);
    }
  }, [doc, setItems]);

  if (!blockGroup || !doc) throw notFound();

  return (
    <DocsContent>
      <VStack gap="medium">
        <VStack gap="small">
          <Text variant="h1">{blockGroup.title}</Text>
          <Text variant="body2" color="secondary">
            {blockGroup.description}
          </Text>
        </VStack>

        <Separator tone="subtle" />

        <nav {...stylex.props(styles.nav)}>
          {variants.map((v) => {
            const isActive = v._meta.path === doc._meta.path;
            const vSlug = v._meta.path.replace(`${group}/`, "");
            return (
              <Link
                key={v._meta.path}
                to="/blocks/$group/$variant"
                params={{ group, variant: vSlug }}
                {...stylex.props(styles.navLink, isActive && styles.navLinkActive)}
              >
                {v.title}
              </Link>
            );
          })}
        </nav>

        <MDXContent code={doc.mdx} components={mdxComponents} />
      </VStack>
    </DocsContent>
  );
}
