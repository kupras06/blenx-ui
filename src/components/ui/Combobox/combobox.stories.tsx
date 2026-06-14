import { Stack } from "../Stack/stack";
import Combobox from "./combobox";

export function DefaultStory() {
  return (
    <Stack gap="small">
      <Combobox placeholder="Search or type..." showTrigger />
    </Stack>
  );
}

export function SizesStory() {
  return (
    <Stack gap="small">
      <Combobox size={12} placeholder="Small combobox" />
      <Combobox size={28} placeholder="Large combobox" />
    </Stack>
  );
}
