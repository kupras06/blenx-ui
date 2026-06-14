import { PaletteIcon } from "@phosphor-icons/react";
import { Stack } from "../Stack/stack";
import { Button } from "./button";

export function VariantsStory() {
	return (
		<Stack gap="medium">
			{(
				[
					"primary",
					"secondary",
					"ghost",
					"outline",
					"outline-dashed",
					"soft",
					"link",
					"danger",
					"success",
				] as const
			).map((variant) => (
				<Stack key={variant} gap="small" direction="row" align="center">
					<Button variant={variant}>Default</Button>
					<Button variant={variant} disabled>
						Disabled
					</Button>
					<Button variant={variant} loading>
						Loading
					</Button>
					<Button variant={variant} size="small">
						Small
					</Button>
					<Button variant={variant} size="large">
						Large
					</Button>
				</Stack>
			))}
		</Stack>
	);
}

export function WithIconStory() {
	return (
		<Stack gap="small" direction="row" align="center">
			<Button variant="primary">
				<PaletteIcon /> Left
			</Button>
			<Button variant="secondary">
				Right <PaletteIcon />
			</Button>
			<Button variant="ghost" size="small">
				<PaletteIcon /> Small
			</Button>
		</Stack>
	);
}

export function FullWidthStory() {
	return (
		<Stack gap="small">
			<Button fullWidth variant="primary">
				Full Width Button
			</Button>
			<Button fullWidth variant="outline">
				Full Width Outline
			</Button>
		</Stack>
	);
}
