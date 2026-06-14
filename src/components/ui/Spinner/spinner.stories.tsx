import { Stack } from "../Stack/stack";
import { Spinner } from "./spinner";

export function SizesStory() {
	return (
		<Stack gap="medium" direction="row" align="center">
			<Spinner size={16} />
			<Spinner size={24} />
			<Spinner size={32} />
			<Spinner size={48} />
		</Stack>
	);
}
