import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allBlogs } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { Box, Container, HStack, Text } from "@blenx-dev/ui";
import { mdxComponents } from "@/views/docs/MdxComponents";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    const post = allBlogs.find((x) => x._meta.path === params.slug);
    if (!post) throw notFound();
    return { toc: post.toc };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = allBlogs.find((x) => x._meta.path === slug);
  if (!post) throw notFound();

  return (
    <Container size="2xl" px={"xl"} py="md">
      <Link
        to="/blog"
        style={{
          color: semanticVars.text.secondary,
          fontSize: tokenVars.fontSize.sm,
          textDecoration: "none",
        }}
      >
        &larr; Back to blog
      </Link>
      <Box>
        <Text variant="h1">{post.title}</Text>
        <HStack gap="sm">
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
        <Text variant="body2" color="secondary" marginTop={"md"}>
          {post.description}
        </Text>
      </Box>
      <Box marginTop={"lg"}>
        <MDXContent code={post.mdx} components={mdxComponents} />
      </Box>
    </Container>
  );
}
