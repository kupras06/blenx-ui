import { useQuery } from "@tanstack/react-query";
import { Badge, HStack, Separator, Text, VStack } from "@blenx-dev/core";
import { DocsH3 } from "./DocHeaders";
import { docsQueries } from "@/lib/docs-api";
import { CodeSnippet } from "./CodeBlock";
import { DocCodeView } from "./doc-code-view";

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

  const files = (registry?.files ?? []).map((f) => ({
    code: f.content ?? "",
    title: cleanTarget(f.target),
  }));

  return (
    <VStack gap="md">
      <VStack gap="xs">
        <DocsH3>CLI Installation</DocsH3>
        <Text variant="body2" color="secondary">
          Install the component using the shadcn CLI:
        </Text>
        <CodeSnippet language="bash" code={cliCode} />
      </VStack>

      {files.length > 0 && (
        <>
          <Separator />
          <VStack gap="xs">
            <DocsH3>Manual Installation</DocsH3>
            <Text variant="body2" color="secondary">
              Copy the source files into your project:
            </Text>
            <DocCodeView files={files} />
          </VStack>
        </>
      )}

      {dependencies.length > 0 && (
        <VStack gap="sm">
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

export { Installation };
export type { InstallationProps };
