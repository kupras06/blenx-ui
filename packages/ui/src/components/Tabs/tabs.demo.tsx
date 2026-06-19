import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Tabs, TabsList, TabsPanel, TabsTab } from "./tabs";

export function TabsDemo() {
	return (
		<VStack gap="medium">
			<Tabs defaultValue="tab1">
				<TabsList>
					<TabsTab value="tab1">Overview</TabsTab>
					<TabsTab value="tab2">Usage</TabsTab>
					<TabsTab value="tab3">API</TabsTab>
				</TabsList>
				<TabsPanel value="tab1">
					<Text variant="body2">
						Welcome to the component overview. Here you will find a summary of
						features and capabilities.
					</Text>
				</TabsPanel>
				<TabsPanel value="tab2">
					<Text variant="body2">
						Usage examples and code snippets to help you integrate the component
						into your project.
					</Text>
				</TabsPanel>
				<TabsPanel value="tab3">
					<Text variant="body2">
						Detailed API reference including props, types, and methods.
					</Text>
				</TabsPanel>
			</Tabs>
		</VStack>
	);
}

export const demos = [{ name: "Default", component: TabsDemo }];
