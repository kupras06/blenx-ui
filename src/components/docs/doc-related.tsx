import * as stylex from "@stylexjs/stylex";
import { useNavigate } from "@tanstack/react-router";
import { Badge } from "../ui/Badge/badge";
import { HStack } from "../ui/Stack/stack";

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
		navigate({ to: `/components/${name.toLowerCase()}` });
	};

	return (
		<HStack gap="small" wrap>
			{related.map((name) => (
				<Badge
					key={name}
					variant="primary"
					radius="small"
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
