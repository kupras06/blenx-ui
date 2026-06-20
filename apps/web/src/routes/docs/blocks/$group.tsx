import { createFileRoute, redirect } from "@tanstack/react-router";
import { allBlocks, allBlockGroups } from "content-collections";
import { Text } from "@blenx-dev/ui/components";

export const Route = createFileRoute("/docs/blocks/$group")({
  component: GroupRedirect,
  notFoundComponent: () => <Text variant="h2">Block group not found</Text>,
});

function GroupRedirect() {
  const { group } = Route.useParams();

  const blockGroup = allBlockGroups.find((g) => g.slug === group);
  if (!blockGroup) return <Text variant="h2">Block group not found</Text>;

  const defaultVariant =
    allBlocks
      .filter((b) => b.group === group)
      .sort((a, b) => a.order - b.order)
      .find((b) => b.default) ??
    allBlocks.filter((b) => b.group === group).sort((a, b) => a.order - b.order)[0];

  if (!defaultVariant) return <Text variant="h2">No blocks found in this group</Text>;

  const vSlug = defaultVariant._meta.path.replace(`${group}/`, "");
  throw redirect({
    to: "/blocks/$group/$variant",
    params: { group, variant: vSlug },
  });
}
