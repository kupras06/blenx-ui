import { Stack, Spinner } from "@blenx-dev/core";

export function SpinnerDemo() {
  return (
    <Stack gap="md" direction="row" align="center">
      <Spinner size={16} />
      <Spinner size={24} />
      <Spinner size={32} />
      <Spinner size={48} />
    </Stack>
  );
}

export const demos = [{ name: "Sizes", component: SpinnerDemo }];
