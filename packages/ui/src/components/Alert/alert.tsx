import type { ReactNode } from "react";
import { Text } from "../Text";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { alertVariants } from "./alert.css";
import clsx from "clsx";
import { HStack, VStack } from "../Stack/stack";
import { Box } from "../Box/box";

type Props = RecipeVariants<typeof alertVariants> & {
  icon?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

function Alert({ variant = "info", icon, title, description, children, className }: Props) {
  return (
    <HStack
      align={icon ? "start" : "center"}
      gap="xs"
      p="sm"
      className={clsx(alertVariants({ variant }), className)}
    >
      <Box p={"xxs"}>{icon}</Box>
      <VStack gap="xxs">
        {title ? (
          <Text variant="h6" padding="none" margin="none" color={variant}>
            {title}
          </Text>
        ) : null}
        {description ? <span style={{ color: "currentColor" }}>{description}</span> : null}
        {children}
      </VStack>
    </HStack>
  );
}

export { Alert };
