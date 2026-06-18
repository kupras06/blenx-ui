import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Text } from "@/components/ui/Text/text";
import { HStack, VStack } from "@/components/ui/Stack/stack";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { heroStyles } from "./hero-01.styles";
import { ImageIcon } from "@phosphor-icons/react";
import { Box, Container } from "@/components/ui";

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
}: Props) {
	return (
		<Container>
			<div {...stylex.props(heroStyles.inner)}>
				<VStack>
					<Text variant="h1" maxWidth={"md"}>
						{headline}
					</Text>
					{subheadline && (
						<Text variant="body1" maxWidth="sm">
							{subheadline}
						</Text>
					)}
					{(primaryCta || secondaryCta) && (
						<HStack gap="small" align="center" wrap>
							{primaryCta && (
								<Button onClick={primaryCta.handleClick} fullWidth>
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
				</VStack>
				<VStack>
					{imageSrc ? (
						<img
							src={imageSrc}
							alt={imageAlt}
							{...stylex.props(heroStyles.image)}
						/>
					) : (
						<Box maxWidth="md" paddingY="massive">
							<ImageIcon size={98} />
						</Box>
					)}
				</VStack>
			</div>
		</Container>
	);
}
