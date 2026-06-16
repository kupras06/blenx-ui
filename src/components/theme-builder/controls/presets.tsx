import * as stylex from "@stylexjs/stylex";
import {
	Accordion,
	Box,
	ColorSwatch,
	Grid,
	HStack,
	Surface,
	Text,
} from "@/components/ui";
import { useThemeBuilder } from "../theme-builder-context";
import { presets } from "./presets-data";

const styles = stylex.create({
	swatch: {
		width: 20,
		height: 20,
		borderRadius: 4,
		border: "1px solid rgba(0,0,0,0.08)",
	},
});

export function PresetControls() {
	const tokens = useThemeBuilder((s) => s.tokens);
	const updateToken = useThemeBuilder((s) => s.updateToken);

	const activePreset =
		presets.find((p) => {
			if (!p.tokens.primary) return p.name === "Default";
			return p.tokens.primary === tokens.primary;
		})?.name ?? "Default";

	const content = (
		<Grid columns={3}>
			{presets.map((preset) => {
				const isActive = preset.name === activePreset;
				return (
					<Surface
						render={
							<button
								type="button"
								onClick={() => {
									for (const [key, value] of Object.entries(preset.tokens)) {
										updateToken(key as keyof typeof tokens, value);
									}
								}}
							/>
						}
						padding="xsmall"
						key={preset.name}
						variant={isActive ? "sunken" : "outline"}
					>
						<HStack>
							{preset.colors.map((color) => (
								<ColorSwatch color={color} key={color} />
							))}
						</HStack>
						<Text variant="body3" weight={isActive ? "semibold" : "regular"}>
							{preset.name}
						</Text>
					</Surface>
				);
			})}
		</Grid>
	);
	return (
		<Accordion.Item value="presets">
			<Accordion.Header>
				<Accordion.Trigger>Presets</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Panel>
				<Box>{content}</Box>
			</Accordion.Panel>
		</Accordion.Item>
	);
}
