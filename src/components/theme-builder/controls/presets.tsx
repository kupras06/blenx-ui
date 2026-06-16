import * as stylex from "@stylexjs/stylex";
import { Text } from "@/components/ui";
import { spacing } from "@/lib/theme/tokens.stylex";
import { useThemeBuilder } from "../theme-builder-context";
import { presets } from "./presets-data";
import { Section } from "./section";

const styles = stylex.create({
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gap: spacing["2"],
	},
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing["1"],
		padding: spacing["2"],
		borderRadius: spacing["2"],
		cursor: "pointer",
		border: "1px solid transparent",
		background: "none",
		position: "relative",
		transition: "border-color 0.15s ease",
		":hover": {
			borderColor: "var(--xrvdk6j)",
		},
	},
	cardActive: {
		borderColor: "var(--x1732vrt)",
	},
	swatchRow: {
		display: "flex",
		gap: spacing["1"],
	},
	swatch: {
		width: 20,
		height: 20,
		borderRadius: 4,
		border: "1px solid rgba(0,0,0,0.08)",
	},
	name: {
		fontSize: "12px",
		lineHeight: 1,
	},
});

interface PresetControlsProps {
	noSection?: boolean;
}

export function PresetControls({ noSection }: PresetControlsProps) {
	const tokens = useThemeBuilder((s) => s.tokens);
	const updateToken = useThemeBuilder((s) => s.updateToken);

	const activePreset =
		presets.find((p) => {
			if (!p.tokens.primary) return p.name === "Default";
			return p.tokens.primary === tokens.primary;
		})?.name ?? "Default";

	const content = (
		<div {...stylex.props(styles.grid)}>
			{presets.map((preset) => {
				const isActive = preset.name === activePreset;
				return (
					<button
						key={preset.name}
						type="button"
						{...stylex.props(styles.card, isActive && styles.cardActive)}
						onClick={() => {
							for (const [key, value] of Object.entries(preset.tokens)) {
								updateToken(key as keyof typeof tokens, value);
							}
						}}
					>
						<div {...stylex.props(styles.swatchRow)}>
							{preset.colors.map((color) => (
								<span
									key={`${color}_`}
									{...stylex.props(styles.swatch)}
									style={{ backgroundColor: color }}
								/>
							))}
						</div>
						<Text variant="caption" weight={isActive ? "semibold" : "regular"}>
							{preset.name}
						</Text>
					</button>
				);
			})}
		</div>
	);

	if (noSection) return content;

	return <Section title="Presets">{content}</Section>;
}
