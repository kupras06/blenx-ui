import { CopyButton } from "@blenx-dev/core";

export function CopyButtonDemo() {
  return <CopyButton copyValue="Hello, world!" />;
}

export const demos = [{ name: "Default", component: CopyButtonDemo }];
