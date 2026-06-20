"use client";

import { useState } from "react";
import { Button } from "@blenx-dev/ui/components/Button/button";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { VStack, HStack } from "@blenx-dev/ui/components/Stack/stack";
import { Surface } from "@blenx-dev/ui/components/Surface/surface";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { Icon } from "@blenx-dev/ui/components";

type Action = {
  label: string;
  handleClick: () => void;
};

type Props = PropsWithStylex<{
  icon?: React.ReactNode;
  title: string;
  message?: string;
  error?: Error | string;
  onRetry?: () => void;
  secondaryAction?: Action;
}>;

export function ErrorState01({ icon, title, message, error, onRetry, secondaryAction }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const errorMessage = typeof error === "string" ? error : error?.message;
  const errorStack = typeof error !== "string" ? error?.stack : undefined;

  return (
    <VStack align="center" gap="medium" paddingY="huge" role="alert" aria-live="assertive">
      {icon && (
        <Icon padding="small" backgroundColor="error" color="error" radius="full">
          {icon}
        </Icon>
      )}
      <Text variant="h3" align="center" color="error">
        {title}
      </Text>
      {message && (
        <Text variant="body1" align="center" maxWidth="sm" color="secondary">
          {message}
        </Text>
      )}
      {(onRetry || secondaryAction) && (
        <HStack gap="small" align="center" wrap>
          {onRetry && (
            <Button onClick={onRetry} fullWidth>
              Try again
            </Button>
          )}
          {secondaryAction && (
            <Button variant="ghost" onClick={secondaryAction.handleClick} fullWidth>
              {secondaryAction.label}
            </Button>
          )}
        </HStack>
      )}
      {errorMessage && (
        <>
          <Button
            onClick={() => setShowDetails(!showDetails)}
            intent="info"
            size="xsmall"
            variant="ghost"
          >
            {showDetails ? "Hide" : "Show"} error details
          </Button>
          {showDetails && (
            <Surface variant="sunken" padding="medium" maxWidth="sm">
              <Text align="left" color="secondary">
                {errorMessage}
                {errorStack ? `\n\n${errorStack}` : null}
              </Text>
            </Surface>
          )}
        </>
      )}
    </VStack>
  );
}
