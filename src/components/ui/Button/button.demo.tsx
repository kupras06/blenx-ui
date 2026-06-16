import { CaretRightIcon, PlayIcon } from "@phosphor-icons/react";
import { HStack, Stack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Button } from "./button";

function ButtonDemo() {
	return (
		<VStack gap="medium">
			<Stack gap="small">
				<Text variant="h6">Variants</Text>
				<HStack wrap>
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="link">Link</Button>
					<Button variant="danger">Danger</Button>
				</HStack>
			</Stack>

			<Stack gap="small">
				<Text variant="h6">Sizes</Text>
				<HStack wrap>
					<Button size="small">Small</Button>
					<Button size="medium">Medium</Button>
					<Button size="large">Large</Button>
				</HStack>
			</Stack>

			<Stack gap="small">
				<Text variant="h6">With Icons</Text>
				<HStack wrap>
					<Button>
						<PlayIcon />
						Play
					</Button>
					<Button variant="outline">
						Next
						<CaretRightIcon />
					</Button>
				</HStack>
			</Stack>
		</VStack>
	);
}

export { ButtonDemo as Demo };
