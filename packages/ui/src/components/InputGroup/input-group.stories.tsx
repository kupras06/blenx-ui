import { MagnifyingGlassIcon, UserIcon } from "@phosphor-icons/react";
import { Button } from "../Button/button";
import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "./input-group";

export function DefaultStory() {
	return (
		<Stack gap="medium">
			<Text variant="h4">With icon and button</Text>
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<MagnifyingGlassIcon size={16} />
				</InputGroupAddon>
				<InputGroupInput placeholder="Search..." />
				<InputGroupAddon align="inline-end">
					<Button size="small" variant="ghost">
						Go
					</Button>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupAddon align="block-start">
					<MagnifyingGlassIcon size={16} />
				</InputGroupAddon>
				<InputGroupTextarea placeholder="Search..." />
				<InputGroupAddon align="block-end">
					<Button size="small" variant="ghost">
						Go
					</Button>
				</InputGroupAddon>
			</InputGroup>
			<Text variant="h4">With text addon</Text>
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<UserIcon size={16} />
				</InputGroupAddon>
				<InputGroupInput placeholder="Username" aria-invalid />
				<InputGroupAddon align="inline-end">
					<InputGroupText>@example.com</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
		</Stack>
	);
}
