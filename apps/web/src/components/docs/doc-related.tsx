import * as stylex from "@stylexjs/stylex";
import { useNavigate } from "@tanstack/react-router";
import { Badge, HStack } from "@blenx-dev/ui/components";

const clickableBadge = stylex.create({
  clickable: {
    cursor: "pointer",
  },
});

interface DocRelatedProps {
  related: string[];
}

function DocRelated({ related }: DocRelatedProps) {
  const navigate = useNavigate();

  if (!related || related.length === 0) {
    return null;
  }

  const handleClick = (name: string) => {
    navigate({ to: `/docs/components/${name.toLowerCase()}` });
  };

  return (
    <HStack gap="small" wrap radius="xsmall">
      {related.map((name) => (
        <Badge
          key={name}
          variant="primary"
          onClick={() => handleClick(name)}
          style={clickableBadge.clickable}
        >
          {name}
        </Badge>
      ))}
    </HStack>
  );
}

export { DocRelated };
