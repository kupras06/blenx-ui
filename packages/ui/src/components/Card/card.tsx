import { Surface, type SurfaceProps } from "../Surface/surface";

import { HStack, type HStackProps } from "../Stack/stack";
import { Box, type BoxProps } from "../Box/box";
import { Text, type TextProps } from "../Text";

function Card(props: SurfaceProps) {
  return <Surface p="md" withBorder variant="sunken" {...props} />;
}

function CardHeader(props: BoxProps) {
  return <Box marginBottom={"md"} {...props} />;
}

function CardBody(props: BoxProps) {
  return <Box {...props} />;
}

function CardFooter(props: HStackProps) {
  return <HStack justify="end" gap="sm" {...props} />;
}

function CardTitle(props: TextProps) {
  return <Text variant="h2" {...props} />;
}

function CardDescription(props: TextProps) {
  return <Text variant="body2" color="secondary" {...props} />;
}

export type { SurfaceProps as CardProps, TextProps as CardTitleProps };
export { Card, CardDescription, CardTitle, CardFooter, CardBody, CardHeader };
