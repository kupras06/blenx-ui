import { CopyButton } from "./copy-button";

export function CopyButtonDemo() {
  return <CopyButton copyValue="Hello, world!" />;
}

export const demos = [{ name: "Default", component: CopyButtonDemo }];
