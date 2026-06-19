import { Stack } from "../Stack/stack";
import { Button } from "./button";

export function FullWidthStory() {
	return (
		<Stack gap="small">
			<Button fullWidth variant="solid">
				Full Width Button
			</Button>
			<Button fullWidth variant="outline">
				Full Width Outline
			</Button>
		</Stack>
	);
}
