"use client";

import { useState } from "react";
import { Button } from "@blenx-dev/core/Button";
import { Text } from "@blenx-dev/core/Text";
import { VStack, HStack } from "@blenx-dev/core/Stack";
import { Surface } from "@blenx-dev/core/Surface";
import type { CSSProperties } from "react";
import { Icon } from "@blenx-dev/core";

type Action = {
  label: string;
  handleClick: () => void;
};

type Props = {
  icon?: React.ReactNode;
  title: string;
  message?: string;
  error?: Error | string;
  onRetry?: () => void;
  secondaryAction?: Action;
  style?: CSSProperties;
};

export function ErrorState01({ icon, title, message, error, onRetry, secondaryAction }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const errorMessage = typeof error === "string" ? error : error?.message;
  const errorStack = typeof error !== "string" ? error?.stack : undefined;

  return (
    <VStack align="center" gap="md" paddingY="huge" role="alert" aria-live="assertive">
      {icon && (
        <Icon padding="sm" backgroundColor="error" color="error" radius="full">
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
        <HStack gap="sm" align="center" wrap>
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
            size="xs"
            variant="ghost"
          >
            {showDetails ? "Hide" : "Show"} error details
          </Button>
          {showDetails && (
            <Surface variant="sunken" padding="md" maxWidth="sm">
              <Text textAlign="left" color="secondary">
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
