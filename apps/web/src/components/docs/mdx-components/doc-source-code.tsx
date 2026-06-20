import { useEffect, useState } from "react";
import { DocCodeView } from "./doc-code-view";

interface RegistryFile {
  target: string;
  content?: string;
}

interface RegistryMeta {
  name: string;
  files: RegistryFile[];
}

interface DocSourceCodeProps {
  registryName: string;
}

function cleanTarget(target: string): string {
  return target.replace(/^@(?:ui|lib|utils|components)\//, "");
}

function DocSourceCode({ registryName }: DocSourceCodeProps) {
  const [registry, setRegistry] = useState<RegistryMeta | null>(null);

  useEffect(() => {
    fetch(`/reg/${registryName}.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        setRegistry(data);
      })
      .catch(() => {});
  }, [registryName]);

  if (!registry) return null;

  const files = registry.files.map((f) => ({
    code: f.content ?? "",
    title: cleanTarget(f.target),
  }));

  if (files.length === 0) return null;

  return <DocCodeView files={files} />;
}

export { DocSourceCode };
