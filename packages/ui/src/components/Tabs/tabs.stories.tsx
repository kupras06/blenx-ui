import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Tabs, TabsList, TabsPanel, TabsTab } from "./tabs";

export function UnderlineStory() {
	return (
		<Stack gap="medium">
			<Text variant="h4">Underline variant</Text>
			<Tabs defaultValue="tab1">
				<TabsList>
					<TabsTab value="tab1">Tab 1</TabsTab>
					<TabsTab value="tab2">Tab 2</TabsTab>
					<TabsTab value="tab3" disabled>
						Disabled
					</TabsTab>
				</TabsList>
				<TabsPanel value="tab1">
					<Text variant="body2">Tab 1 content</Text>
				</TabsPanel>
				<TabsPanel value="tab2">
					<Text variant="body2">Tab 2 content</Text>
				</TabsPanel>
			</Tabs>
		</Stack>
	);
}

export function GhostStory() {
	return (
		<Stack gap="medium">
			<Text variant="h4">Ghost variant</Text>
			<Tabs defaultValue="tab1" variant="ghost">
				<TabsList>
					<TabsTab value="tab1">Tab 1</TabsTab>
					<TabsTab value="tab2">Tab 2</TabsTab>
					<TabsTab value="tab3">Tab 3</TabsTab>
				</TabsList>
				<TabsPanel value="tab1">
					<Text variant="body2">Ghost tab content</Text>
				</TabsPanel>
			</Tabs>
		</Stack>
	);
}

export function SegmentedStory() {
	return (
		<Stack gap="medium">
			<Text variant="h4">Segmented variant</Text>
			<Tabs defaultValue="tab1" variant="segmented">
				<TabsList>
					<TabsTab value="tab1">Tab 1</TabsTab>
					<TabsTab value="tab2">Tab 2</TabsTab>
					<TabsTab value="tab3">Tab 3</TabsTab>
				</TabsList>
				<TabsPanel value="tab1">
					<Text variant="body2">Segmented tab content</Text>
				</TabsPanel>
			</Tabs>
		</Stack>
	);
}
