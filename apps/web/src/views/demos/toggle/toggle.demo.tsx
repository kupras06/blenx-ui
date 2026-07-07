import { Stack, Toggle } from "@blenx-dev/core";

export function ToggleDemo() {
  return (
    <Stack gap="md">
      <Stack gap="sm" direction="row" align="center">
        <Toggle>Default</Toggle>
        <Toggle variant="outline">Outline</Toggle>
      </Stack>
      <Stack gap="sm" direction="row" align="center">
        <Toggle size="sm">Small</Toggle>
        <Toggle size="default">Default</Toggle>
        <Toggle size="lg">Large</Toggle>
      </Stack>
      <Stack gap="sm" direction="row" align="center">
        <Toggle disabled>Disabled</Toggle>
        <Toggle variant="outline" disabled>
          Disabled
        </Toggle>
      </Stack>
    </Stack>
  );
}

const palettes = [
  "primary",
  "secondary",
  "neutral",
  "success",
  "warning",
  "danger",
  "info",
] as const;

export function PaletteDefaultStory() {
  return (
    <Stack gap="md">
      {palettes.map((p) => (
        <Stack key={p} gap="sm" direction="row" align="center">
          <Toggle palette={p} style={{ minWidth: 100 }}>
            {p}
          </Toggle>
          <Toggle palette={p} disabled style={{ minWidth: 100 }}>
            {p}
          </Toggle>
        </Stack>
      ))}
    </Stack>
  );
}

export function PaletteOutlineStory() {
  return (
    <Stack gap="md">
      {palettes.map((p) => (
        <Stack key={p} gap="sm" direction="row" align="center">
          <Toggle palette={p} variant="outline" style={{ minWidth: 100 }}>
            {p}
          </Toggle>
          <Toggle palette={p} variant="outline" disabled style={{ minWidth: 100 }}>
            {p}
          </Toggle>
        </Stack>
      ))}
    </Stack>
  );
}

export const demos = [
  { name: "Variants", component: ToggleDemo },
  { name: "Palette (default)", component: PaletteDefaultStory },
  { name: "Palette (outline)", component: PaletteOutlineStory },
];
