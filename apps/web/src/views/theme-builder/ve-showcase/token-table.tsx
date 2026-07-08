import {
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  Text,
} from "@blenx-dev/core";
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

  return (
    <AccordionItem value="variables">
      <AccordionHeader>
        <AccordionTrigger>Theme Variables</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell data-token>Token</TableHeaderCell>
              <TableHeaderCell>Value</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => {
              const isSelected = selectedToken === row.id;
              return (
                <TableRow
                  key={row.id}
                  onMouseEnter={() => setSelectedToken(row.id)}
                  onMouseLeave={() => setSelectedToken(null)}
                  style={{
                    cursor: "pointer",
                    ...(isSelected && {
                      backgroundColor: `${semanticVars.focus.ring}15`,
                    }),
                  }}
                >
                  <TableCell data-token>
                    <Text variant="body3" color="primary">
                      {row.label}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text
                      variant="body3"
                      color="secondary"
                      title={row.value.length > 30 ? row.value : undefined}
                    >
                      {row.value}
                    </Text>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </AccordionPanel>
    </AccordionItem>
  );
}
