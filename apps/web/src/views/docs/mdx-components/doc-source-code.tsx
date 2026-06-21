import { useQuery } from "@tanstack/react-query";
import { docsQueries } from "@/lib/docs-api";
import { DocCodeView } from "./doc-code-view";

interface DocSourceCodeProps {
  registryName: string;
}

function cleanTarget(target: string): string {
  return target.replace(/^@(?:ui|lib|utils|components)\//, "");
}

function DocSourceCode({ registryName }: DocSourceCodeProps) {
  const registryQuery = useQuery(docsQueries.registry(registryName));
  const registry = registryQuery.data ?? null;

  if (!registry) return null;

  const files = registry.files.map((f) => ({
    code: f.content ?? "",
    title: cleanTarget(f.target),
  }));

  if (files.length === 0) return null;

  return <DocCodeView files={files} />;
}

export { DocSourceCode };
