import { Stack } from "../Stack/stack";
import { Autocomplete } from "./autocomplete";

export function DefaultStory() {
	return (
		<Stack gap="small">
			<Autocomplete placeholder="Type to search..." />
		</Stack>
	);
}

export function VariantsStory() {
	return (
		<Stack gap="small">
			<Autocomplete size="sm" placeholder="Small size" />
			<Autocomplete size="lg" placeholder="Large size" />
		</Stack>
	);
}
