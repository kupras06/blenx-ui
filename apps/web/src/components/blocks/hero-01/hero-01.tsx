import * as stylex from "@stylexjs/stylex";
import { Button } from "@blenx-dev/ui/components/Button/button";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { HStack, VStack } from "@blenx-dev/ui/components/Stack/stack";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { heroStyles } from "./hero-01.styles";
import { ImageIcon } from "@phosphor-icons/react";
import { Container, Icon } from "@blenx-dev/ui/components";

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
    <Container content="center">
      <div {...stylex.props(heroStyles.inner)}>
        <VStack>
          <Text variant="h1" maxWidth="md">
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
                <Button variant="ghost" onClick={secondaryCta.handleClick} fullWidth>
                  {secondaryCta.label}
                </Button>
              )}
            </HStack>
          )}
        </VStack>
        <VStack>
          {imageSrc ? (
            <img src={imageSrc} alt={imageAlt} {...stylex.props(heroStyles.image)} />
          ) : (
            <Icon maxWidth="md" paddingY="massive" color="secondary">
              <ImageIcon size={98} />
            </Icon>
          )}
        </VStack>
      </div>
    </Container>
  );
}
