import { useState } from "react";
import { VStack, Text, SegmentedControl } from "@blenx-dev/core";

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
