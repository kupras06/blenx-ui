import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";

export type StackProps = Omit<BoxProps, "display"> & {
  wrap?: boolean;
};

export function Stack({ wrap, ...props }: StackProps) {
  return <Box display="flex" {...(wrap ? { flexWrap: "wrap" } : {})} gap="md" {...props} />;
}

type VStackProps = Omit<StackProps, "direction">;

export function VStack(props: VStackProps) {
  return <Stack direction="column" {...props} />;
}

export type HStackProps = Omit<StackProps, "direction">;

export function HStack(props: HStackProps) {
  return <Stack direction="row" {...props} />;
}
