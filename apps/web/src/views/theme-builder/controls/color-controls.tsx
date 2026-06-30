import { Accordion, ColorPicker, Grid, VStack } from "@blenx-dev/ui";
import { useThemeBuilder } from "../theme-builder-context";
import type { ThemeTokens } from "../theme-builder-context";

const tokenGroups: { key: keyof ThemeTokens; label: string; subtokens: string[] }[] = [
  { key: "background", label: "Background", subtokens: ["default", "subtle"] },
  { key: "surface", label: "Surface", subtokens: ["default", "raised", "overlay", "floating"] },
  { key: "text", label: "Text", subtokens: ["primary", "secondary", "disabled", "inverse"] },
  { key: "border", label: "Border", subtokens: ["default", "subtle", "strong"] },
  {
    key: "interactive",
    label: "Interactive",
    subtokens: [
      "primary",
      "primaryFg",
      "primaryHover",
      "primaryBg",
      "secondary",
      "secondaryFg",
      "secondaryHover",
      "secondaryBg",
      "neutral",
      "neutralFg",
    ],
  },
  {
    key: "status",
    label: "Status",
    subtokens: [
      "success",
      "successBg",
      "warning",
      "warningBg",
      "danger",
      "dangerBg",
      "info",
      "infoBg",
    ],
  },
  { key: "focus", label: "Focus", subtokens: ["ring"] },
  { key: "shadow", label: "Shadow", subtokens: ["sm", "md", "lg", "xl"] },
];

function ColorGroupControl({
  groupKey,
  subtokens,
}: {
  groupKey: keyof ThemeTokens;
  subtokens: string[];
}) {
  const tokens = useThemeBuilder((s) => s.tokens);
  const updateToken = useThemeBuilder((s) => s.updateToken);
  const group = tokens[groupKey] as Record<string, string>;

  return (
    <Accordion.Item value={groupKey}>
      <Accordion.Header>
        <Accordion.Trigger>{groupKey}</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <Grid columns={2}>
          {subtokens.map((sub) => (
            <ColorPicker
              key={sub}
              label={sub}
              value={group[sub]}
              onChange={(color) => updateToken(groupKey, sub, color)}
            />
          ))}
        </Grid>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function ColorControls() {
  return (
    <Accordion.Root defaultValue={["background", "text", "interactive"]}>
      <VStack gap="xs">
        {tokenGroups.map((group) => (
          <ColorGroupControl key={group.key} groupKey={group.key} subtokens={group.subtokens} />
        ))}
      </VStack>
    </Accordion.Root>
  );
}
