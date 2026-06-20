import { CodeBlock } from "@/components/ui/CodeBlock/code-block";
import { DocCodeView } from "./doc-code-view";
import { HStack, VStack, Text, Separator, Badge } from "@blenx-dev/ui/components";

interface RegistryFile {
  target: string;
  content: string;
}

interface DocInstallationProps {
  registryName: string;
  dependencies: string[];
  files: RegistryFile[];
}

function cleanTarget(target: string): string {
  return target.replace(/^@(?:ui|lib|utils|components)\//, "");
}

function DocInstallation({ registryName, dependencies, files }: DocInstallationProps) {
  const cliUrl = `https://blenx-ui.vercel.app/reg/${registryName}.json`;
  const cliCode = `npx shadcn@latest add "${cliUrl}"`;

  return (
    <VStack gap="medium">
      <VStack gap="xsmall">
        <Text variant="h3">CLI Installation</Text>
        <Text variant="body2" color="secondary">
          Install the component using the shadcn CLI:
        </Text>
        <CodeBlock language="bash" code={cliCode} />
      </VStack>

      <Separator />

      <VStack gap="xsmall">
        <Text variant="h3">Manual Installation</Text>
        <VStack gap="medium">
          <DocCodeView
            files={files.map((f) => ({
              code: f.content,
              title: cleanTarget(f.target),
            }))}
          />
        </VStack>
      </VStack>

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

export { DocInstallation };
