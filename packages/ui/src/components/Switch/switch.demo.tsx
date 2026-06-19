import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Switch } from "./switch";

export function SwitchDemo() {
	return (
		<VStack gap="medium">
			<HStack gap="medium" align="center">
				<Switch defaultChecked />
				<Text variant="body2">Airplane Mode</Text>
			</HStack>
			<HStack gap="medium" align="center">
				<Switch />
				<Text variant="body2">Wi-Fi</Text>
			</HStack>
			<HStack gap="medium" align="center">
				<Switch disabled />
				<Text variant="body2" color="secondary">
					Bluetooth (disabled)
				</Text>
			</HStack>
		</VStack>
	);
}

export const demos = [{ name: "Default", component: SwitchDemo }];
