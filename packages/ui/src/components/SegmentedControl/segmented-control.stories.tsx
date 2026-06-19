import { Stack } from "../Stack/stack";
import { SegmentedControl } from "./segmented-control";

export function DefaultStory() {
	return (
		<Stack gap="medium">
			<SegmentedControl
				value="day"
				onValueChange={() => {}}
				options={[
					{ value: "day", label: "Day" },
					{ value: "week", label: "Week" },
					{ value: "month", label: "Month" },
				]}
			/>
			<SegmentedControl
				value="small"
				onValueChange={() => {}}
				variant="default"
				options={[
					{ value: "small", label: "Small" },
					{ value: "medium", label: "Medium" },
					{ value: "large", label: "Large" },
				]}
			/>
		</Stack>
	);
}
