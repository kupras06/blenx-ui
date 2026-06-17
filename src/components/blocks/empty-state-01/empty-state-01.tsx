import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Text } from "@/components/ui/Text/text";
import { VStack, HStack } from "@/components/ui/Stack/stack";
import { Card, CardBody } from "@/components/ui/Card/card";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { emptyStateStyles } from "./empty-state-01.styles";

type Action = {
	label: string;
	onClick: () => void;
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
	variant = "page",
	style,
}: Props) {
	const content = (
		<VStack
			align="center"
			gap="medium"
			style={stylex.props(
				emptyStateStyles.container,
				variant === "page" && emptyStateStyles.page,
				style,
			)}
		>
			{icon && (
				<div {...stylex.props(emptyStateStyles.iconWrapper)}>{icon}</div>
			)}
			<Text
				variant="h3"
				weight="semibold"
				align="center"
				style={emptyStateStyles.title}
			>
				{title}
			</Text>
			{description && (
				<Text
					variant="body1"
					align="center"
					style={emptyStateStyles.description}
				>
					{description}
				</Text>
			)}
			{(action || secondaryAction) && (
				<HStack
					gap="small"
					align="center"
					wrap
					style={emptyStateStyles.actions}
				>
					{action && (
						<Button
							variant="primary"
							onClick={action.onClick}
							style={emptyStateStyles.actionFullWidth}
						>
							{action.label}
						</Button>
					)}
					{secondaryAction && (
						<Button
							variant="ghost"
							onClick={secondaryAction.onClick}
							style={emptyStateStyles.actionFullWidth}
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

	return content;
}
