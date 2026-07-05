import { Box, Text, Grid, GridItem } from "@blenx-dev/core";

export function GridDemo() {
  return (
    <Grid columns={3} gap="sm">
      {Array.from({ length: 6 }, (_, i) => (
        <GridItem key={i}>
          <Box backgroundColor="surface" padding="md" radius="sm">
            <Text>{i + 1}</Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export function GridSpansDemo() {
  return (
    <Grid columns={4} gap="sm">
      <GridItem span={2}>
        <Box backgroundColor="surface" padding="md" radius="sm">
          <Text>Span 2</Text>
        </Box>
      </GridItem>
      <GridItem>
        <Box backgroundColor="surface" padding="md" radius="sm">
          <Text>1</Text>
        </Box>
      </GridItem>
      <GridItem>
        <Box backgroundColor="surface" padding="md" radius="sm">
          <Text>1</Text>
        </Box>
      </GridItem>
      <GridItem>
        <Box backgroundColor="surface" padding="md" radius="sm">
          <Text>1</Text>
        </Box>
      </GridItem>
      <GridItem span={3}>
        <Box backgroundColor="surface" padding="md" radius="sm">
          <Text>Span 3</Text>
        </Box>
      </GridItem>
    </Grid>
  );
}

export const demos = [
  { name: "Default", component: GridDemo },
  { name: "Spans", component: GridSpansDemo },
];
