import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Text } from "@/components/ui/Text/text";
import { HStack } from "@/components/ui/Stack/stack";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { heroStyles } from "./hero-01.styles";

type Cta = {
	label: string;
	handleClick?: () => void;
};

type Props = PropsWithStylex<{
	headline: string;
	subheadline?: string;
	primaryCta?: Cta;
	secondaryCta?: Cta;
	imageSrc?: string;
	imageAlt?: string;
	backgroundVariant?: "default" | "muted" | "accent";
}>;

export function Hero01({
	headline,
	subheadline,
	primaryCta,
	secondaryCta,
	imageSrc,
	imageAlt = "",
	backgroundVariant = "default",
	style,
}: Props) {
	return (
		<section
			{...stylex.props(
				heroStyles.section,
				backgroundVariant === "muted" && heroStyles.muted,
				backgroundVariant === "accent" && heroStyles.accent,
				style,
			)}
		>
			<div {...stylex.props(heroStyles.inner)}>
				<div {...stylex.props(heroStyles.textColumn)}>
					<Text variant="h1" style={heroStyles.headline}>
						{headline}
					</Text>
					{subheadline && (
						<Text variant="body1" style={heroStyles.subheadline}>
							{subheadline}
						</Text>
					)}
					{(primaryCta || secondaryCta) && (
						<HStack gap="small" align="center" wrap >
							{primaryCta && (
								<Button
									onClick={primaryCta.handleClick}fullWidth
								>
									{primaryCta.label}
								</Button>
							)}
							{secondaryCta && (
								<Button
									variant="ghost"
									onClick={secondaryCta.handleClick}
									fullWidth
								>
									{secondaryCta.label}
								</Button>
							)}
						</HStack>
					)}
				</div>
				<div {...stylex.props(heroStyles.imageColumn)}>
					{imageSrc ? (
						<img
							src={imageSrc}
							alt={imageAlt}
							{...stylex.props(heroStyles.image)}
						/>
					) : (
						<div {...stylex.props(heroStyles.imagePlaceholder)}>
							<svg
								width="64"
								height="64"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
							>
								<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
								<circle cx="8.5" cy="8.5" r="1.5" />
								<polyline points="21 15 16 10 5 21" />
							</svg>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
