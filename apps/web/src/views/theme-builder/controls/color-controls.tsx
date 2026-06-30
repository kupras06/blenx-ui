import { Accordion, ColorPicker, Grid, VStack } from "@blenx-dev/core";
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
      "primary.default",
      "primary.hover",
      "primary.active",
      "primaryFg",
      "primaryBg.default",
      "primaryBg.hover",
      "primaryBg.active",
      "secondary.default",
      "secondary.hover",
      "secondary.active",
      "secondaryFg",
      "secondaryBg.default",
      "secondaryBg.hover",
      "secondaryBg.active",
      "neutral.default",
      "neutral.hover",
      "neutral.active",
      "neutralFg",
    ],
  },
  {
    key: "status",
    label: "Status",
    subtokens: [
      "success.default",
      "success.hover",
      "success.active",
      "successBg",
      "warning.default",
      "warning.hover",
      "warning.active",
      "warningBg",
      "danger.default",
      "danger.hover",
      "danger.active",
      "dangerBg",
      "info.default",
      "info.hover",
      "info.active",
      "infoBg",
    ],
  },
  { key: "focus", label: "Focus", subtokens: ["ring"] },
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
  const group = tokens[groupKey];

  function getTokenValue(sub: string): string {
    const parts = sub.split(".");
    let val: unknown = group;
    for (const part of parts) {
      if (val && typeof val === "object") {
        val = (val as Record<string, unknown>)[part];
      } else {
        return "";
      }
    }
    return typeof val === "string" ? val : "";
  }

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
              value={getTokenValue(sub)}
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
