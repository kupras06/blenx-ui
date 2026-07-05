import { HStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Switch } from "./switch";

export function SwitchDemo() {
  return (
    <HStack gap="md">
      <HStack gap="md" align="center">
        <Switch defaultChecked />
        <Text variant="body2">Airplane Mode</Text>
      </HStack>
      <HStack gap="md" align="center">
        <Switch />
        <Text variant="body2">Wi-Fi</Text>
      </HStack>
      <HStack gap="md" align="center">
        <Switch disabled />
        <Text variant="body2" color="secondary">
          Bluetooth (disabled)
        </Text>
      </HStack>
    </HStack>
  );
}

export const demos = [{ name: "Default", component: SwitchDemo }];
