import { useState } from "react";
import { Stack } from "../Stack/stack";
import { ColorPicker } from "./color-picker";

export function DefaultStory() {
  const [color, setColor] = useState("#C9822A");
  return (
    <Stack gap="md">
      <ColorPicker value={color} onChange={setColor} label="Accent Color" />
    </Stack>
  );
}
