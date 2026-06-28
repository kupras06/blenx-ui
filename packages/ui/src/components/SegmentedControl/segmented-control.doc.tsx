import { Stack } from "../Stack/stack";
import { SegmentedControl } from "./segmented-control";

export function DefaultStory() {
  return (
    <Stack gap="md">
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
        value="sm"
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
