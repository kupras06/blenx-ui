import { useState } from "react";
import { Stack } from "../Stack/stack";
import { DatePicker } from "./date-picker";

export function DefaultStory() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Stack gap="md">
      <DatePicker value={date} onChange={setDate} label="Pick a date" />
    </Stack>
  );
}
