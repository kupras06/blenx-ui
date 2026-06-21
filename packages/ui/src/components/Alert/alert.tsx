import { mergeProps } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";
import type { _BaseDivProps } from "#utils/stylex.utils";
import { type BoxProps } from "../Box/box";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text";
import type { ColorProps } from "#utils/base.styles";

type Props = BoxProps & {
  /** Visual variant of the alert */
  variant?: ColorProps["backgroundColor"];
  /** Optional icon to display */
  icon?: ReactNode;
  title?: string;
  description?: string;
};

/**
 * Alert component for displaying contextual feedback messages.
 *
 * Supports `info`, `success`, `warning`, and `error` variants.
 * Optionally accepts an `icon` rendered before the message content.
 */
function Alert({ variant = "info", icon, style, title, description, children, ...props }: Props) {
  const sx = stylex.props(style);
  const merged = mergeProps(props, sx);
  return (
    <HStack
      padding="small"
      align={icon ? "start" : "center"}
      {...merged}
      color={variant}
      backgroundColor={variant}
      borderColor={variant}
    >
      {icon}
      <VStack gap="none">
        {title ? (
          <Text variant="h6" padding="none" margin="none" color={variant}>
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text span color={variant} weight="regular">
            {description}
          </Text>
        ) : null}
        {children}
      </VStack>
    </HStack>
  );
}

export { Alert };
