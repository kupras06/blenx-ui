import { Stack } from "../Stack/stack";
import { Calendar } from "./calendar";

export function DefaultStory() {
  return (
    <Stack gap="sm">
      <Calendar mode="single" selected={new Date()} onSelect={() => {}} />
    </Stack>
  );
}
