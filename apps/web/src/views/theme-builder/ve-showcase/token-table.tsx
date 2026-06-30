import type { Column } from "@blenx-dev/ui";
import { Accordion, Table, Text } from "@blenx-dev/ui";
import { semanticVars } from "@blenx-dev/theme/contract";
import { useThemeBuilder } from "../theme-builder-context";

interface TokenRow {
  id: string;
  label: string;
  value: string;
}

function flattenTokens(tokens: Record<string, any>, prefix = ""): TokenRow[] {
  const rows: TokenRow[] = [];
  for (const [key, value] of Object.entries(tokens)) {
    const label = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object") {
      rows.push(...flattenTokens(value, label));
    } else {
      rows.push({ id: label, label, value: String(value) });
    }
  }
  return rows;
}

export function TokenTable() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const setSelectedToken = useThemeBuilder((s) => s.setSelectedToken);
  const selectedToken = useThemeBuilder((s) => s.selectedToken);

  const rowData = flattenTokens(tokens);

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
          rowKey="id"
          getRowProps={(row) => {
            const isSelected = selectedToken === row.id;
            return {
              onMouseEnter: () => setSelectedToken(row.id),
              onMouseLeave: () => setSelectedToken(null),
              style: {
                cursor: "pointer",
                ...(isSelected && {
                  backgroundColor: `${semanticVars.focus.ring}15`,
                }),
              },
            };
          }}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
