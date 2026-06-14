import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import Breadcrumbs from "./breadcrumbs";

export function DefaultStory() {
	return (
		<Stack gap="small">
			<Text variant="body2">Navigation path</Text>
			<Breadcrumbs>
				<a href="#home-url">Home</a>
				<span id="home-url">/</span>
				<a href="#category-url">Category</a>
				<span id="category-url">/</span>
				<span>Current page</span>
			</Breadcrumbs>
		</Stack>
	);
}
