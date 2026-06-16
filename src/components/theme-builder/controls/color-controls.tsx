import * as stylex from "@stylexjs/stylex";
import { ColorPicker } from "@/components/ui";
import { spacing } from "@/lib/theme/tokens.stylex";
import { useThemeBuilder } from "../theme-builder-context";
import { Section } from "./section";

const styles = stylex.create({
	group: {
		display: "flex",
		flexDirection: "column",
		gap: spacing["2"],
	},
});

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

interface ColorControlsProps {
	noSection?: boolean;
}

export function ColorControls({ noSection }: ColorControlsProps) {
	const tokens = useThemeBuilder((s) => s.tokens);
	const updateTokenDebounced = useThemeBuilder((s) => s.updateTokenDebounced);

	const content = (
		<div {...stylex.props(styles.group)}>
			{colorTokens.map(({ key, label }) => (
				<ColorPicker
					key={key}
					label={label}
					value={tokens[key as keyof typeof tokens]}
					onChange={(color) => {
						updateTokenDebounced(key as keyof typeof tokens, color);
					}}
				/>
			))}
		</div>
	);

	if (noSection) return content;

	return <Section title="Colors">{content}</Section>;
}
