import type { ReactNode } from "react";
import { Container, HStack, VStack } from "@/components/ui";
import { DocsSidebar } from "./docs-sidebar";

function DocsLayout({ children }: { children: ReactNode }) {
	return (
		<Container paddingX="xlarge">
			<HStack gap="xxlarge">
				<DocsSidebar />
				<VStack gap="medium" grow>
					{children}
				</VStack>
			</HStack>
		</Container>
	);
}

export { DocsLayout };
