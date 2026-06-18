"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Text } from "@/components/ui/Text/text";
import { VStack, HStack } from "@/components/ui/Stack/stack";
import { Card, CardBody } from "@/components/ui/Card/card";
import { Surface } from "@/components/ui/Surface/surface";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { errorStateStyles } from "./error-state-01.styles";

type Action = {
	label: string;
	handleClick: () => void;
};

type Props = PropsWithStylex<{
	icon?: React.ReactNode;
	title: string;
	message?: string;
	error?: Error | string;
	onRetry?: () => void;
	secondaryAction?: Action;
	variant?: "card" | "page" | "toast";
}>;

export function ErrorState01({
	icon,
	title,
	message,
	error,
	onRetry,
	secondaryAction,
	variant = "page",
	style,
}: Props) {
	const [showDetails, setShowDetails] = useState(false);
	const errorMessage = typeof error === "string" ? error : error?.message;
	const errorStack = typeof error !== "string" ? error?.stack : undefined;

	const content = (
		<VStack
			align="center"
			gap="medium"
			style={[
				errorStateStyles.container,
				variant === "page" && errorStateStyles.page,
				variant === "toast" && errorStateStyles.toast,
				style,
			]}
			role="alert"
			aria-live="assertive"
		>
			{icon && (
				<div {...stylex.props(errorStateStyles.iconWrapper)}>{icon}</div>
			)}
			<Text variant="h3" align="center" style={errorStateStyles.title}>
				{title}
			</Text>
			{message && (
				<Text
					variant="body1"
					align="center"
					style={errorStateStyles.description}
				>
					{message}
				</Text>
			)}
			{(onRetry || secondaryAction) && (
				<HStack gap="small" align="center" wrap>
					{onRetry && (
						<Button onClick={onRetry} fullWidth>
							Try again
						</Button>
					)}
					{secondaryAction && (
						<Button
							variant="ghost"
							onClick={secondaryAction.handleClick}
							fullWidth
						>
							{secondaryAction.label}
						</Button>
					)}
				</HStack>
			)}
			{errorMessage && (
				<>
					<button
						type="button"
						onClick={() => setShowDetails(!showDetails)}
						{...stylex.props(errorStateStyles.detailsButton)}
					>
						{showDetails ? "Hide" : "Show"} error details
					</button>
					{showDetails && (
						<Surface
							variant="sunken"
							padding="medium"
							style={errorStateStyles.errorDetails}
						>
							{errorMessage}
							{errorStack ? `\n\n${errorStack}` : null}
						</Surface>
					)}
				</>
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
