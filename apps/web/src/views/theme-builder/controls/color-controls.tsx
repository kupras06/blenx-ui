import { Accordion, ColorPicker, Grid } from "@blenx-dev/components";
import { useThemeBuilder } from "../theme-builder-context";
import type { ThemeTokens } from "../theme-builder-context";

const colorTokens = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "contentAccent", label: "Accent" },
  { key: "sentimentPositive", label: "Success" },
  { key: "sentimentWarning", label: "Warning" },
  { key: "sentimentNegative", label: "Danger" },
  { key: "background", label: "Background" },
  { key: "surface", label: "Surface" },
  { key: "border", label: "Border" },
  { key: "contentPrimary", label: "Text Primary" },
  { key: "contentSecondary", label: "Text Secondary" },
] as const;

function ColorControlItem({ tokenKey, label }: { tokenKey: keyof ThemeTokens; label: string }) {
  const value = useThemeBuilder((s) => s.tokens[tokenKey as keyof typeof s.tokens] as string);
  const updateTokenDebounced = useThemeBuilder((s) => s.updateTokenDebounced);

  return (
    <ColorPicker
      label={label}
      value={value}
      onChange={(color) => {
        updateTokenDebounced(tokenKey, color);
      }}
    />
  );
}

export function ColorControls() {
  return (
    <Accordion.Item value="colors">
      <Accordion.Header>
        <Accordion.Trigger>Colors</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <Grid columns={2}>
          {colorTokens.map(({ key, label }) => (
            <ColorControlItem key={key} tokenKey={key} label={label} />
          ))}
        </Grid>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
