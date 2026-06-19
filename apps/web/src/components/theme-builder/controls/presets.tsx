import {
	Accordion,
	Box,
	ColorSwatch,
	Grid,
	HStack,
	Surface,
	Text,
} from "@blenx-dev/ui/components";;
import { useThemeBuilder } from "../theme-builder-context";
import { presets } from "./presets-data";

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
								aria-label={`Update colors to ${preset.name}`}
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
