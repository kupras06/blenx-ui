import type { ReactNode } from "react";
import { Text } from "../Text";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { alertBase, alertVariants } from "./alert.css";
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

function Alert({ palette = "info", icon, title, description, children, className }: Props) {
  return (
    <HStack
      align={description ? "start" : "center"}
      gap="xs"
      p="sm"
      className={clsx(alertBase, alertVariants({ palette }), className)}
    >
      <Box p={"xxs"}>{icon}</Box>
      <VStack gap="xxs">
        {title ? (
          <Text variant="h6" padding="none" margin="none">
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
