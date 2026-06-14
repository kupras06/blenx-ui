import { useState } from "react";
import { HStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Switch } from "./switch";

export function DefaultStory() {
  const [checked, setChecked] = useState(false);
  return (
    <HStack gap="medium" align="center">
      <Switch checked={checked} onCheckedChange={setChecked} />
      <Text variant="body2">Switch is {checked ? "on" : "off"}</Text>
    </HStack>
  );
}

export function DisabledStory() {
  return (
    <HStack gap="medium" align="center">
      <Switch disabled />
      <Text variant="body2" color="disabled">
        Disabled switch
      </Text>
    </HStack>
  );
}
