import { Text } from "../Text/text";
import { Accordion } from "./accordion";

export function AccordionDemo() {
	return (
		<Accordion.Root>
			<Accordion.Item value="item-1">
				<Accordion.Header>
					<Accordion.Trigger>What is Blenx UI?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<Text variant="body2">
						Blenx UI is a modern React component library built with StyleX and
						Base UI.
					</Text>
				</Accordion.Panel>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Header>
					<Accordion.Trigger>How do I install it?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<Text variant="body2">
						Install via the shadcn CLI with:{" "}
						<Text variant="code">npx shadcn@latest add button</Text>
					</Text>
				</Accordion.Panel>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Header>
					<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<Text variant="body2">
						Yes, all components are built on Base UI primitives with full ARIA
						support.
					</Text>
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion.Root>
	);
}

export const demos = [{ name: "Default", component: AccordionDemo }];
