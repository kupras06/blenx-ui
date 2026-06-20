import { Grid } from "../Grid/grid";
import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Input } from "./input";

export function InputDemo() {
  return (
    <VStack gap="medium">
      <Grid columns={3}>
        <Text variant="h6">Sizes</Text>
        <Input size="sm" placeholder="Small input" />
        <Input placeholder="Default input" />
        <Input size="lg" placeholder="Large input" />
      </Grid>

      <Grid columns={3}>
        <Text variant="h6">With Error</Text>
        <Input error="This field is required" placeholder="Email address" />
      </Grid>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: InputDemo }];
