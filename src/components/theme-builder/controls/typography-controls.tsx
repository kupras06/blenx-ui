import * as stylex from "@stylexjs/stylex";
import type { ChangeEvent } from "react";
import { spacing } from "@/lib/theme/tokens.stylex";
import { Select, Text, VStack } from "@/components/ui";
import { useThemeBuilder } from "../theme-builder-context";
import { Section } from "./section";

const styles = stylex.create({
	sliderRow: {
		display: "flex",
		flexDirection: "column",
		gap: spacing["1"],
	},
	sliderLabel: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	slider: {
		width: "100%",
		accentColor: "var(--x1732vrt)",
	},
	selectWrapper: {
		width: "100%",
	},
});

const fontFamilyOptions = [
	{ label: "DM Sans", value: '"DM Sans", system-ui, -apple-system, sans-serif' },
	{ label: "System UI", value: "system-ui, -apple-system, sans-serif" },
	{ label: "Inter", value: '"Inter", system-ui, sans-serif' },
	{ label: "Mono", value: '"DM Mono", ui-monospace, SFMono-Regular, monospace' },
];

const fontWeightOptions = [
	{ label: "Light 300", value: "300" },
	{ label: "Regular 400", value: "400" },
	{ label: "Medium 500", value: "500" },
	{ label: "Semibold 600", value: "600" },
	{ label: "Bold 700", value: "700" },
];

export function TypographyControls() {
	const tokens = useThemeBuilder((s) => s.tokens);
	const updateToken = useThemeBuilder((s) => s.updateToken);

	return (
		<Section title="Typography">
			<div {...stylex.props(styles.selectWrapper)}>
				<Select.Wrapper label="Font Family">
					<Select.Root
						value={tokens.fontFamilySans}
						onValueChange={(value) =>
							updateToken("fontFamilySans", value as string)
						}
					>
						<Select.Trigger size="sm">
							<Select.Value placeholder="Select font" />
							<Select.Icon />
						</Select.Trigger>
						<Select.Portal>
							<Select.Positioner>
								<Select.Popup>
									<Select.List>
										{fontFamilyOptions.map((opt) => (
											<Select.Item key={opt.value} value={opt.value}>
												{opt.label}
											</Select.Item>
										))}
									</Select.List>
								</Select.Popup>
							</Select.Positioner>
						</Select.Portal>
					</Select.Root>
				</Select.Wrapper>
			</div>

			<div {...stylex.props(styles.sliderRow)}>
				<div {...stylex.props(styles.sliderLabel)}>
					<Text variant="body2">Base Font Size</Text>
					<Text variant="body2" color="secondary">
						{tokens.baseFontSize}
					</Text>
				</div>
				<input
					type="range"
					min="12"
					max="20"
					step="1"
					{...stylex.props(styles.slider)}
					value={parseInt(tokens.baseFontSize)}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						updateToken("baseFontSize", `${e.target.value}px`);
					}}
				/>
			</div>

			<div {...stylex.props(styles.sliderRow)}>
				<div {...stylex.props(styles.sliderLabel)}>
					<Text variant="body2">Heading Scale</Text>
					<Text variant="body2" color="secondary">
						{tokens.headingScale.toFixed(2)}
					</Text>
				</div>
				<input
					type="range"
					min="1.0"
					max="2.0"
					step="0.05"
					{...stylex.props(styles.slider)}
					value={tokens.headingScale}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						updateToken("headingScale", parseFloat(e.target.value));
					}}
				/>
			</div>

			<div {...stylex.props(styles.selectWrapper)}>
				<Select.Wrapper label="Font Weight">
					<Select.Root
						value={String(tokens.fontWeight ?? "400")}
						onValueChange={(value) =>
							updateToken("fontWeight", value as string)
						}
					>
						<Select.Trigger size="sm">
							<Select.Value placeholder="Select weight" />
							<Select.Icon />
						</Select.Trigger>
						<Select.Portal>
							<Select.Positioner>
								<Select.Popup>
									<Select.List>
										{fontWeightOptions.map((opt) => (
											<Select.Item key={opt.value} value={opt.value}>
												{opt.label}
											</Select.Item>
										))}
									</Select.List>
								</Select.Popup>
							</Select.Positioner>
						</Select.Portal>
					</Select.Root>
				</Select.Wrapper>
			</div>
		</Section>
	);
}
