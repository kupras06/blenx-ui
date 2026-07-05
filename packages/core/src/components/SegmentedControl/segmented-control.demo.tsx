import { useState } from "react";
import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { SegmentedControl } from "./segmented-control";

export function SegmentedControlDemo() {
  const [value, setValue] = useState("day");

  return (
    <VStack gap="md">
      <Text>Selected: {value}</Text>
      <SegmentedControl
        value={value}
        onValueChange={setValue}
        options={[
          { value: "day", label: "Day" },
          { value: "week", label: "Week" },
          { value: "month", label: "Month" },
        ]}
      />
    </VStack>
  );
}

export const demos = [{ name: "Default", component: SegmentedControlDemo }];
