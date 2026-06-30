import { Button } from "@blenx-dev/core/Button";
import { Text } from "@blenx-dev/core/Text";
import { VStack, HStack } from "@blenx-dev/core/Stack";
import { Card, CardBody } from "@blenx-dev/core/Card";
import type { CSSProperties } from "react";
import { Box, Container } from "@blenx-dev/core";

type Action = {
  label: string;
  handleClick: () => void;
};

type Props = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: Action;
  secondaryAction?: Action;
  variant?: "card" | "page";
  style?: CSSProperties;
};

export function EmptyState01({
  icon,
  title,
  description,
  action,
  secondaryAction,
  variant,
}: Props) {
  const content = (
    <VStack align="center" gap="md">
      {icon && <Box color="secondary">{icon}</Box>}
      <Text variant="h3" weight="semibold" align="center">
        {title}
      </Text>
      {description && (
        <Text variant="body1" align="center" color="secondary">
          {description}
        </Text>
      )}
      {(action || secondaryAction) && (
        <HStack gap="sm" align="center" wrap>
          {action && (
            <Button variant="solid" onClick={action.handleClick} fullWidth>
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="soft" onClick={secondaryAction.handleClick} fullWidth>
              {secondaryAction.label}
            </Button>
          )}
        </HStack>
      )}
    </VStack>
  );

  if (variant === "card") {
    return (
      <Card>
        <CardBody>{content}</CardBody>
      </Card>
    );
  }

  return <Container>{content}</Container>;
}
