import * as stylex from "@stylexjs/stylex";
import { spacing } from "@/lib/theme/tokens.stylex";
import { SegmentedControl, Text } from "@/components/ui";
import { useThemeBuilder } from "../theme-builder-context";
import { Section } from "./section";

const styles = stylex.create({
	controlRow: {
		display: "flex",
		flexDirection: "column",
		gap: spacing["1"],
	},
	currentValue: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

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
		<>
			<Section title="Radius">
				<SegmentedControl
					value={tokens.radius}
					onValueChange={(value) => updateToken("radius", value)}
					options={radiusOptions}
				/>
			</Section>

			<Section title="Spacing">
				<SegmentedControl
					value={tokens.spacing}
					onValueChange={(value) => updateToken("spacing", value)}
					options={spacingOptions}
				/>
			</Section>

			<Section title="Shadows" defaultOpen={false}>
				<div {...stylex.props(styles.controlRow)}>
					<div {...stylex.props(styles.currentValue)}>
						<Text variant="body2">Shadow Intensity</Text>
					</div>
					<SegmentedControl
						value={tokens.shadowIntensity}
						onValueChange={(value) =>
							updateToken("shadowIntensity", value)
						}
						options={shadowOptions}
					/>
				</div>
			</Section>
		</>
	);
}
