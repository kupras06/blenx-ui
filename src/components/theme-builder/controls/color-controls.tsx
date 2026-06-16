import { Accordion, ColorPicker, Grid } from "@/components/ui";
import { useThemeBuilder } from "../theme-builder-context";

const colorTokens = [
	{ key: "primary", label: "Primary" },
	{ key: "secondary", label: "Secondary" },
	{ key: "contentAccent", label: "Accent" },
	{ key: "sentimentPositive", label: "Success" },
	{ key: "sentimentWarning", label: "Warning" },
	{ key: "sentimentNegative", label: "Danger" },
	{ key: "background", label: "Background" },
	{ key: "surface", label: "Surface" },
	{ key: "border", label: "Border" },
	{ key: "contentPrimary", label: "Text Primary" },
	{ key: "contentSecondary", label: "Text Secondary" },
] as const;

export function ColorControls() {
	const tokens = useThemeBuilder((s) => s.tokens);
	const updateTokenDebounced = useThemeBuilder((s) => s.updateTokenDebounced);

	return (
		<Accordion.Item value="colors">
			<Accordion.Header>
				<Accordion.Trigger>Colors</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Panel>
				<Grid columns={2}>
					{colorTokens.map(({ key, label }) => (
						<ColorPicker
							key={key}
							label={label}
							value={tokens[key]}
							onChange={(color) => {
								updateTokenDebounced(key, color);
							}}
						/>
					))}
				</Grid>
			</Accordion.Panel>
		</Accordion.Item>
	);
}
