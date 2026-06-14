import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Grid, GridItem } from "./grid";

export function ColumnsStory() {
  return (
    <Stack gap="medium">
      <Text variant="h4">3 columns</Text>
      <Grid columns={3} gap="small">
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            1
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            2
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            3
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            4
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            5
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            6
          </div>
        </GridItem>
      </Grid>
      <Text variant="h4">4 columns with spans</Text>
      <Grid columns={4} gap="small">
        <GridItem span={2}>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            Span 2
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            1 col
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            1 col
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            1 col
          </div>
        </GridItem>
        <GridItem span={3}>
          <div
            style={{
              background: "var(--surface)",
              padding: 16,
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}
          >
            Span 3
          </div>
        </GridItem>
      </Grid>
    </Stack>
  );
}
