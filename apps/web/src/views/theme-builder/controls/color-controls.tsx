import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
  Grid,
  VStack,
} from "@blenx-dev/core";
import { ColorPicker } from "@blenx-dev/color-picker";
import { useThemeBuilder } from "../theme-builder-context";
import type { ThemeTokens } from "../theme-builder-context";

const colorRoles = [
  "primary",
  "secondary",
  "neutral",
  "success",
  "warning",
  "danger",
  "info",
] as const;
const colorSubtokenKeys = [
  "default",
  "hover",
  "active",
  "bg",
  "bgHover",
  "bgActive",
  "fg",
  "text",
  "textActive",
  "border",
];

const tokenGroups: { key: keyof ThemeTokens; label: string; subtokens: string[] }[] = [
  { key: "background", label: "Background", subtokens: ["default", "subtle"] },
  { key: "surface", label: "Surface", subtokens: ["default", "raised", "overlay", "floating"] },
  { key: "text", label: "Text", subtokens: ["primary", "secondary", "disabled", "inverse"] },
  { key: "border", label: "Border", subtokens: ["default", "subtle", "strong"] },
  {
    key: "color",
    label: "Color",
    subtokens: colorRoles.flatMap((role) => colorSubtokenKeys.map((sub) => `${role}.${sub}`)),
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
    <AccordionItem value={groupKey}>
      <AccordionHeader>
        <AccordionTrigger>{groupKey}</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>
        <Grid columns={2}>
          {subtokens.map((sub) => (
            <ColorPicker
              key={`${groupKey}.${sub}`}
              label={sub}
              value={getTokenValue(sub)}
              onChange={(color: string) => updateToken(groupKey, sub, color)}
            />
          ))}
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
}

export function ColorControls() {
  return (
    <Accordion defaultValue={["background", "text", "color"]}>
      <VStack gap="none">
        {tokenGroups.map((group) => (
          <ColorGroupControl key={group.key} groupKey={group.key} subtokens={group.subtokens} />
        ))}
      </VStack>
    </Accordion>
  );
}
