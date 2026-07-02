import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Badge,
  HStack,
  Separator,
  Text,
  VStack,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
} from "@blenx-dev/core";
import { DocsH3 } from "./DocHeaders";
import { docsQueries } from "@/lib/docs-api";
import { expandRunnerCommandsToArray } from "@/lib/expand-commands";
import { CodeSnippet } from "./CodeBlock";
import { DocCodeView } from "./doc-code-view";
import type { ExpandedCommand } from "@/lib/expand-commands";

interface InstallationProps {
  registryName: string;
}

function cleanTarget(target: string): string {
  return target.replace(/^@(?:ui|lib|utils|components)\//, "");
}

function Installation({ registryName }: InstallationProps) {
  const registryQuery = useQuery(docsQueries.registry(registryName));

  const cliUrl = `https://blenx-ui.vercel.app/reg/${registryName}.json`;
  const commands: ExpandedCommand[] = expandRunnerCommandsToArray(
    `npx shadcn@latest add "${cliUrl}"`,
  );
  const [activeRunner, setActiveRunner] = useState(commands[0]?.label ?? "");
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
        <Tabs value={activeRunner} onValueChange={setActiveRunner}>
          <TabsList>
            {commands.map((c) => (
              <TabsTab key={c.label} value={c.label}>
                {c.label}
              </TabsTab>
            ))}
          </TabsList>
          {commands.map((c) => (
            <TabsPanel key={c.label} value={c.label}>
              <CodeSnippet language="bash" code={c.command} />
            </TabsPanel>
          ))}
        </Tabs>
      </VStack>

      {files.length > 0 && (
        <>
          <Separator />
          <VStack gap="xs" maxWidth={"viewport"}>
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
