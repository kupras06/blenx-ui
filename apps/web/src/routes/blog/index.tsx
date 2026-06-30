import { createFileRoute, Link } from "@tanstack/react-router";
import { allBlogs } from "content-collections";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { Box, Container, HStack, Text, VStack } from "@blenx-dev/core";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
});

function BlogIndex() {
  const posts = allBlogs
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Container>
      <Box style={{ padding: tokenVars.spacing.xxl, maxWidth: 720, margin: "0 auto" }}>
        <Text variant="h1">Blog</Text>
        <Text variant="body2" color="secondary" style={{ marginTop: tokenVars.spacing.sm }}>
          Updates, deep dives, and announcements from the Blenx team.
        </Text>
        <VStack gap="lg" style={{ marginTop: tokenVars.spacing.xl }}>
          {posts.map((post) => (
            <Link key={post._meta.path} to="/blog/$slug" params={{ slug: post._meta.path }}>
              <Box
                style={{
                  padding: tokenVars.spacing.lg,
                  borderRadius: tokenVars.borderRadius.lg,
                  border: `1px solid ${semanticVars.border.default}`,
                  backgroundColor: semanticVars.surface.raised,
                  transition: "box-shadow 0.2s ease",
                }}
              >
                <Text variant="h2" style={{ fontSize: tokenVars.fontSize.xl }}>
                  {post.title}
                </Text>
                <HStack gap="sm" style={{ marginTop: tokenVars.spacing.xs }}>
                  <Text variant="caption" color="secondary">
                    {post.date}
                  </Text>
                  <Text variant="caption" color="secondary">
                    &middot;
                  </Text>
                  <Text variant="caption" color="secondary">
                    {post.author}
                  </Text>
                </HStack>
                <Text variant="body2" color="secondary" style={{ marginTop: tokenVars.spacing.sm }}>
                  {post.description}
                </Text>
                {post.tags.length > 0 && (
                  <HStack gap="xs" style={{ marginTop: tokenVars.spacing.sm }}>
                    {post.tags.map((tag) => (
                      <Text
                        key={tag}
                        variant="caption"
                        style={{
                          padding: "2px 8px",
                          borderRadius: tokenVars.borderRadius.full,
                          backgroundColor: semanticVars.background.subtle,
                        }}
                      >
                        {tag}
                      </Text>
                    ))}
                  </HStack>
                )}
              </Box>
            </Link>
          ))}
        </VStack>
      </Box>
    </Container>
  );
}
