import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import {
	Card,
	CardBody,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";

export function DefaultStory() {
	return (
		<Stack gap="medium">
			<Card padding="medium">
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card description text</CardDescription>
				</CardHeader>
				<CardBody>
					<Text variant="body2">Main card content goes here.</Text>
				</CardBody>
				<CardFooter>
					<Text variant="body3" color="secondary">
						Card footer
					</Text>
				</CardFooter>
			</Card>
		</Stack>
	);
}

export function PaddingVariantsStory() {
	return (
		<Stack gap="medium">
			<Card padding="small">
				<CardHeader padding="small">
					<CardTitle>Small</CardTitle>
				</CardHeader>
				<CardBody padding="small">
					<Text variant="body2">Small padding variant</Text>
				</CardBody>
			</Card>
			<Card padding="large">
				<CardHeader padding="large">
					<CardTitle>Large</CardTitle>
				</CardHeader>
				<CardBody padding="large">
					<Text variant="body2">Large padding variant</Text>
				</CardBody>
			</Card>
		</Stack>
	);
}
