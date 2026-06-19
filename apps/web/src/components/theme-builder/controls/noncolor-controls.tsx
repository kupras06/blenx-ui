import {
	Accordion,
	Box,
	SegmentedControl,
	Text,
	VStack,
} from "@/components/ui";
import { useThemeBuilder } from "../theme-builder-context";

const radiusOptions = [
	{ value: "none", label: "None" },
	{ value: "small", label: "Small" },
	{ value: "medium", label: "Medium" },
	{ value: "large", label: "Large" },
	{ value: "pill", label: "Pill" },
];

const spacingOptions = [
	{ value: "compact", label: "Compact" },
	{ value: "default", label: "Default" },
	{ value: "comfortable", label: "Comfortable" },
];

const shadowOptions = [
	{ value: "none", label: "None" },
	{ value: "subtle", label: "Subtle" },
	{ value: "medium", label: "Medium" },
	{ value: "strong", label: "Strong" },
];

export function NonColorControls() {
	const tokens = useThemeBuilder((s) => s.tokens);
	const updateToken = useThemeBuilder((s) => s.updateToken);

	return (
		<Accordion.Item value="noncolor">
			<Accordion.Header>
				<Accordion.Trigger>Design Tokens</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Panel>
				<VStack>
					<Box>
						<Text variant="h5">Border Radius</Text>
						<SegmentedControl
							value={tokens.radius}
							onValueChange={(value) => updateToken("radius", value)}
							options={radiusOptions}
						/>
					</Box>
					<Box>
						<Text variant="h5">Spacing</Text>
						<SegmentedControl
							value={tokens.spacing}
							onValueChange={(value) => updateToken("spacing", value)}
							options={spacingOptions}
						/>
					</Box>
					<Box>
						<Text variant="h5">Shadow Intensity</Text>
						<SegmentedControl
							value={tokens.shadowIntensity}
							onValueChange={(value) => updateToken("shadowIntensity", value)}
							options={shadowOptions}
						/>
					</Box>
				</VStack>
			</Accordion.Panel>
		</Accordion.Item>
	);
}
