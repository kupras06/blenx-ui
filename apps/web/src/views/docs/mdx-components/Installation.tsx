import { useQuery } from "@tanstack/react-query";
import * as stylex from "@stylexjs/stylex";
import { CodeBlock } from "@/components/ui/CodeBlock/code-block";
import { Badge, HStack, Separator, Text, VStack } from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/theme/contract.stylex";
import { borderRadius, fontSize } from "@blenx-dev/ui/theme/tokens.stylex";
import { DocsH3 } from "./DocHeaders";
import { docsQueries } from "@/lib/docs-api";

interface InstallationProps {
  registryName: string;
}

function cleanTarget(target: string): string {
  return target.replace(/^@(?:ui|lib|utils|components)\//, "");
}

function Installation({ registryName }: InstallationProps) {
  const registryQuery = useQuery(docsQueries.registry(registryName));

  const cliUrl = `https://blenx-ui.vercel.app/reg/${registryName}.json`;
  const cliCode = `npx shadcn@latest add "${cliUrl}"`;
  const registry = registryQuery.data ?? null;
  const dependencies = registry?.registryDependencies ?? [];
  const files = registry?.files ?? [];

  return (
    <VStack gap="medium">
      <VStack gap="xsmall">
        <DocsH3>CLI Installation</DocsH3>
        <Text variant="body2" color="secondary">
          Install the component using the shadcn CLI:
        </Text>
        <CodeBlock language="bash" code={cliCode} />
      </VStack>

      {registry && files.length > 0 && (
        <>
          <Separator />
          <VStack gap="xsmall">
            <DocsH3>Manual Installation</DocsH3>
            <Text variant="body2" color="secondary">
              Copy the following files into your project:
            </Text>
            <ul {...stylex.props(listStyles.list)}>
              {files.map((f) => (
                <li key={f.target} {...stylex.props(listStyles.item)}>
                  <code {...stylex.props(listStyles.code)}>{cleanTarget(f.target)}</code>
                </li>
              ))}
            </ul>
          </VStack>
        </>
      )}

      {dependencies.length > 0 && (
        <VStack gap="small">
          <Text variant="h6" color="secondary">
            Dependencies
          </Text>
          <HStack>
            {dependencies.map((dep) => (
              <Badge key={dep}>{dep}</Badge>
            ))}
          </HStack>
        </VStack>
      )}
    </VStack>
  );
}

const listStyles = stylex.create({
  list: {
    margin: 0,
    paddingLeft: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
  },
  item: {
    margin: 0,
    fontFamily: "ui-monospace, SFMono-Regular, monospace",
    fontSize: fontSize.small,
  },
  code: {
    color: theme.contentSecondary,
    backgroundColor: theme.surfaceSubtle,
    padding: "1px 6px",
    borderRadius: borderRadius.small,
    fontSize: fontSize.small,
  },
});

export { Installation };
export type { InstallationProps };
