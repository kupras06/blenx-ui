import { Text } from "../Text/text";
import { Splitter } from "./splitter";

export function SplitterDemo() {
  return (
    <div style={{ height: 200 }}>
      <Splitter orientation="horizontal">
        <Splitter.Panel defaultSize={50} minSize={20}>
          <Text>Left panel</Text>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={50} minSize={20}>
          <Text>Right panel</Text>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}

export function SplitterVerticalDemo() {
  return (
    <div style={{ height: 300 }}>
      <Splitter orientation="vertical">
        <Splitter.Panel defaultSize={33} minSize={15}>
          <Text>Top panel</Text>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={33} minSize={15}>
          <Text>Middle panel</Text>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={34} minSize={15}>
          <Text>Bottom panel</Text>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}

export const demos = [
  { name: "Horizontal", component: SplitterDemo },
  { name: "Vertical", component: SplitterVerticalDemo },
];
