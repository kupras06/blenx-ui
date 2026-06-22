import type { ReactNode } from "react";
import { Text } from "../Text";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { alertVariants } from "./alert.css";
import clsx from "clsx";
import { HStack, VStack } from "../Stack/stack";

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
      gap="xsmall"
      p="small"
      className={clsx(alertVariants({ variant }), className)}
    >
      {icon}
      <VStack gap="xxsmall">
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
