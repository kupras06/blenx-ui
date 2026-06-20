import type { Column } from "@blenx-dev/ui/components";
import { Accordion, Table, Text } from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { componentTokenMap } from "../preview/component-token-map";
import { useThemeBuilder } from "../theme-builder-context";

interface TokenRow {
  key: string;
  label: string;
  value: string;
  components: string;
}

const displayTokens: Array<{ key: string; label: string }> = [
  { key: "primary", label: "primary" },
  { key: "primarySubtle", label: "primarySubtle" },
  { key: "secondary", label: "secondary" },
  { key: "background", label: "background" },
  { key: "backgroundSubtle", label: "backgroundSubtle" },
  { key: "surface", label: "surface" },
  { key: "surfaceSubtle", label: "surfaceSubtle" },
  { key: "surfaceRaised", label: "surfaceRaised" },
  { key: "surfaceHover", label: "surfaceHover" },
  { key: "surfaceOverlay", label: "surfaceOverlay" },
  { key: "border", label: "border" },
  { key: "borderSubtle", label: "borderSubtle" },
  { key: "borderStrong", label: "borderStrong" },
  { key: "contentPrimary", label: "contentPrimary" },
  { key: "contentSecondary", label: "contentSecondary" },
  { key: "contentDisabled", label: "contentDisabled" },
  { key: "contentAccent", label: "contentAccent" },
  { key: "contentOnPrimary", label: "contentOnPrimary" },
  { key: "sentimentNegative", label: "sentimentNegative" },
  { key: "sentimentNegativeSubtle", label: "sentimentNegativeSubtle" },
  { key: "sentimentPositive", label: "sentimentPositive" },
  { key: "sentimentPositiveSubtle", label: "sentimentPositiveSubtle" },
  { key: "sentimentWarning", label: "sentimentWarning" },
  { key: "sentimentWarningSubtle", label: "sentimentWarningSubtle" },
  { key: "sentimentInfo", label: "sentimentInfo" },
  { key: "sentimentInfoSubtle", label: "sentimentInfoSubtle" },
  { key: "focusRing", label: "focusRing" },
  { key: "shadowSm", label: "shadowSm" },
  { key: "shadowMd", label: "shadowMd" },
  { key: "shadowLg", label: "shadowLg" },
  { key: "shadowXl", label: "shadowXl" },
  { key: "fontSize", label: "fontSize" },
  { key: "borderRadius", label: "borderRadius" },
];

export function TokenTable() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const setSelectedToken = useThemeBuilder((s) => s.setSelectedToken);
  const selectedToken = useThemeBuilder((s) => s.selectedToken);

  const rowData: TokenRow[] = displayTokens.map(({ key, label }) => {
    const value =
      key === "fontSize"
        ? tokens.fontSize
        : key === "borderRadius"
          ? tokens.borderRadius
          : (tokens[key as keyof typeof tokens]?.toString() ?? "-");

    const components = Object.entries(componentTokenMap)
      .filter(([, tokenList]) => tokenList.some((t) => t.token === key))
      .map(([name]) => name)
      .join(", ");

    return { key, label, value, components: components || "-" };
  });

  const columns: Column<TokenRow>[] = [
    {
      key: "label",
      header: "Token",
      cell: (row) => (
        <Text variant="body3" color="primary">
          {row.label}
        </Text>
      ),
      cellProps: { "data-token": true },
    },
    {
      key: "value",
      header: "Value",
      cell: (row) => (
        <Text
          variant="body3"
          color="secondary"
          title={row.value.length > 30 ? row.value : undefined}
        >
          {row.value}
        </Text>
      ),
    },
    {
      key: "components",
      header: "Components",
    },
  ];

  return (
    <Accordion.Item value="variables">
      <Accordion.Header>
        <Accordion.Trigger>Theme Variables</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <Table
          columnData={columns}
          rowData={rowData}
          rowKey="key"
          getRowProps={(row) => {
            const isSelected = selectedToken === row.key;
            return {
              onMouseEnter: () => setSelectedToken(row.key as keyof typeof tokens),
              onMouseLeave: () => setSelectedToken(null),
              style: {
                cursor: "pointer",
                ...(isSelected && {
                  backgroundColor: `${theme.focusRing}15`,
                }),
              },
            };
          }}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
