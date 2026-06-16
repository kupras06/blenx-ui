import { Button } from "../Button/button";
import { Text } from "../Text/text";
import {
	Card,
	CardBody,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";

function CardDemo() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Getting Started</CardTitle>
				<CardDescription>
					Learn how to install and use Blenx UI components in your project.
				</CardDescription>
			</CardHeader>
			<CardBody>
				<Text variant="body2">
					Blenx UI provides a set of accessible, styleable React components
					built on Base UI primitives and styled with StyleX.
				</Text>
			</CardBody>
			<CardFooter>
				<Button variant="outline" size="small">
					Read docs
				</Button>
				<Button size="small">Install</Button>
			</CardFooter>
		</Card>
	);
}

export { CardDemo as Demo };
