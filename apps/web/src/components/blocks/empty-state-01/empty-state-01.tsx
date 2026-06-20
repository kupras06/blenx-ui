import { Button } from "@blenx-dev/ui/components/Button/button";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { VStack, HStack } from "@blenx-dev/ui/components/Stack/stack";
import { Card, CardBody } from "@blenx-dev/ui/components/Card/card";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { Box, Container } from "@blenx-dev/ui/components";;

type Action = {
	label: string;
	handleClick: () => void;
};

type Props = PropsWithStylex<{
	icon?: React.ReactNode;
	title: string;
	description?: string;
	action?: Action;
	secondaryAction?: Action;
	variant?: "card" | "page";
}>;

export function EmptyState01({
	icon,
	title,
	description,
	action,
	secondaryAction,
	variant,
}: Props) {
	const content = (
		<VStack align="center" gap="medium">
			{icon && <Box color="secondary">{icon}</Box>}
			<Text variant="h3" weight="semibold" align="center">
				{title}
			</Text>
			{description && (
				<Text variant="body1" align="center" color="secondary">
					{description}
				</Text>
			)}
			{(action || secondaryAction) && (
				<HStack gap="small" align="center" wrap>
					{action && (
						<Button variant="solid" onClick={action.handleClick} fullWidth>
							{action.label}
						</Button>
					)}
					{secondaryAction && (
						<Button
							variant="soft"
							onClick={secondaryAction.handleClick}
							fullWidth
						>
							{secondaryAction.label}
						</Button>
					)}
				</HStack>
			)}
		</VStack>
	);

	if (variant === "card") {
		return (
			<Card>
				<CardBody>{content}</CardBody>
			</Card>
		);
	}

	return <Container>{content}</Container>;
}
