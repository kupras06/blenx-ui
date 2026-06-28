import { Button } from "@blenx-dev/ui/components/Button/button";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { HStack, VStack, Stack } from "@blenx-dev/ui/components/Stack/stack";
import { ImageIcon } from "@phosphor-icons/react";
import { Container, Icon } from "@blenx-dev/ui";
import { heroImage } from "@/lib/styles.css";

type Cta = {
  label: string;
  handleClick?: () => void;
};

type Props = {
  headline: string;
  subheadline?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  imageSrc?: string;
  imageAlt?: string;
  backgroundVariant?: "default" | "muted" | "accent";
  style?: React.CSSProperties;
};

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
      <Stack
        align="center"
        gap={"xxxl"}
        direction={{
          base: "column",
          lg: "row",
        }}
      >
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
            <HStack gap="sm" align="center" wrap>
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
            <img src={imageSrc} alt={imageAlt} className={heroImage} />
          ) : (
            <Icon maxWidth="md" paddingY="massive" color="secondary">
              <ImageIcon size={98} />
            </Icon>
          )}
        </VStack>
      </Stack>
    </Container>
  );
}
