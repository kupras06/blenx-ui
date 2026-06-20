import * as stylex from "@stylexjs/stylex";
import { Link, useLocation } from "@tanstack/react-router";
import { allBlocks, allBlockGroups } from "content-collections";
import { Box, Surface, Text, VStack } from "@blenx-dev/ui/components";

const styles = stylex.create({
  link: {
    textDecoration: "none",
  },
});

function BlocksSidebar({ onClose }: { onClose?: () => void }) {
  const { pathname } = useLocation();
  const groups = allBlockGroups.sort((a, b) => a.order - b.order);

  return (
    <Surface variant="sunken">
      <VStack gap="medium" padding="medium">
        {groups.map((group) => {
          const isActive = pathname.startsWith(`/blocks/${group.slug}`);
          const variants = allBlocks
            .filter((b) => b.group === group.slug)
            .sort((a, b) => a.order - b.order);
          return (
            <Box key={group.slug}>
              <Text variant="body2" weight="semibold">
                {group.title}
              </Text>
              <VStack gap="xxsmall">
                <Surface
                  variant={isActive ? "outline" : "sunken"}
                  radius="small"
                  paddingY="xxsmall"
                  paddingX="xsmall"
                  render={
                    <Link
                      {...stylex.props(styles.link)}
                      to="/docs/blocks/$group"
                      params={{ group: group.slug }}
                      onClick={onClose}
                    />
                  }
                >
                  <Text variant="body2" color={isActive ? "primary" : "secondary"}>
                    {group.title}
                  </Text>
                </Surface>
                {variants.map((variant) => {
                  const vSlug = variant._meta.path.replace(`${group.slug}/`, "");
                  const isVariantActive = pathname === `/blocks/${group.slug}/${vSlug}`;
                  return (
                    <Surface
                      key={variant._meta.path}
                      variant={isVariantActive ? "outline" : "sunken"}
                      radius="small"
                      paddingY="xxsmall"
                      paddingX="xsmall"
                      render={
                        <Link
                          {...stylex.props(styles.link)}
                          to="/docs/blocks/$group/$variant"
                          params={{ group: group.slug, variant: vSlug }}
                          onClick={onClose}
                        />
                      }
                    >
                      <Text variant="body2" color={isVariantActive ? "primary" : "secondary"}>
                        {variant.title}
                      </Text>
                    </Surface>
                  );
                })}
              </VStack>
            </Box>
          );
        })}
      </VStack>
    </Surface>
  );
}

export { BlocksSidebar };
