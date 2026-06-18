import {
	PaperPlaneTiltIcon,
	TrashIcon,
	ArrowClockwiseIcon,
	BellIcon,
} from "@phosphor-icons/react";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { IconButton } from "./icon-button";

export function IconButtonDemo() {
	return (
		<VStack gap="medium">
			<VStack gap="small">
				<Text variant="h6">Variants</Text>
				<HStack wrap>
					<IconButton aria-label="Send" variant="solid">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Send" variant="soft">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Send" variant="outline">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Send" variant="ghost">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Send" variant="soft">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Send" variant="link">
						<PaperPlaneTiltIcon />
					</IconButton>
				</HStack>
			</VStack>

			<VStack gap="small">
				<Text variant="h6">Intents</Text>
				<HStack wrap>
					<IconButton aria-label="Send" intent="primary">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Delete" intent="danger">
						<TrashIcon />
					</IconButton>
					<IconButton aria-label="Success" intent="success">
						<BellIcon />
					</IconButton>
					<IconButton aria-label="Warning" intent="warning">
						<BellIcon />
					</IconButton>
					<IconButton aria-label="Info" intent="info">
						<BellIcon />
					</IconButton>
				</HStack>
			</VStack>

			<VStack gap="small">
				<Text variant="h6">Variant + Intent</Text>
				<HStack wrap>
					<IconButton aria-label="Delete" variant="ghost" intent="danger">
						<TrashIcon />
					</IconButton>
					<IconButton aria-label="Delete" variant="outline" intent="danger">
						<TrashIcon />
					</IconButton>
					<IconButton aria-label="Delete" variant="soft" intent="danger">
						<TrashIcon />
					</IconButton>
				</HStack>
			</VStack>

			<VStack gap="small">
				<Text variant="h6">Sizes</Text>
				<HStack wrap align="center">
					<IconButton aria-label="Send" variant="outline">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Send" variant="outline">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Send" variant="outline">
						<PaperPlaneTiltIcon />
					</IconButton>
					<IconButton aria-label="Send" variant="outline">
						<PaperPlaneTiltIcon />
					</IconButton>
				</HStack>
			</VStack>

			<VStack gap="small">
				<Text variant="h6">States</Text>
				<HStack wrap>
					<IconButton aria-label="Refresh" loading>
						<ArrowClockwiseIcon />
					</IconButton>
					<IconButton aria-label="Send" disabled>
						<PaperPlaneTiltIcon />
					</IconButton>
				</HStack>
			</VStack>
		</VStack>
	);
}

export const demos = [{ name: "Default", component: IconButtonDemo }];
