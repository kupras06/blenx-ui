import { lazy, Suspense } from "react";
import { demoImports } from "@/docs-demo-registry";
import { Separator, Text, VStack } from "@blenx-dev/ui/components";

export interface DemoItem {
  name: string;
  component: React.ComponentType;
}

interface DocDemoRendererProps {
  registryName: string;
}

function AllDemos({ demos }: { demos: DemoItem[] }) {
  return (
    <>
      {demos.map((d, i) => (
        <VStack key={d.name} gap="small">
          {i > 0 && <Separator tone="subtle" />}
          {i > 0 && (
            <Text variant="body2" weight="semibold" color="secondary">
              {d.name}
            </Text>
          )}
          <d.component />
        </VStack>
      ))}
    </>
  );
}

function DocDemoRenderer({ registryName }: DocDemoRendererProps) {
  const importFn = demoImports[registryName];

  if (!importFn) {
    return null;
  }

  const DemoComponent = lazy(async () => {
    const mod = await importFn();
    const m = mod as Record<string, unknown>;
    const demos = m.demos as DemoItem[] | undefined;

    if (demos && demos.length > 0) {
      return {
        default: () => <AllDemos demos={demos} />,
      };
    }

    return {
      default: () => <Text>Demo not found</Text>,
    };
  });

  return (
    <Suspense
      fallback={
        <Text variant="body2" color="secondary">
          Loading demo...
        </Text>
      }
    >
      <DemoComponent />
    </Suspense>
  );
}

export { DocDemoRenderer };
