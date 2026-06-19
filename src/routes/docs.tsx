import { ClientOnly, createFileRoute, Outlet } from "@tanstack/react-router";
import { useMediaQuery } from "@uidotdev/usehooks";
import { DocsSidebar } from "@/components/docs-sidebar";
import { DocTOC } from "@/components/docs/doc-toc";
import {
	Box,
	Container,
	HStack,
	ScrollArea,
	Sheet,
	SheetPopup,
} from "@/components/ui";
import { useSidebarStore } from "@/stores/docs-sidebar";

export const Route = createFileRoute("/docs")({
	component: DocsLayout,
});

function DrawerSidebar() {
	const sidebarOpen = useSidebarStore((st) => st.isOpen);
	const setOpen = useSidebarStore((st) => st.setOpen);
	return (
		<Sheet open={sidebarOpen} onOpenChange={setOpen}>
			<SheetPopup side="left">
				<ScrollArea height="100svh">
					<DocsSidebar onClose={() => setOpen(false)} />
				</ScrollArea>
			</SheetPopup>
		</Sheet>
	);
}
function RenderSidebarNavs() {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

	return (
		<>
			{isSmallDevice ? (
				<DrawerSidebar />
			) : (
				<Container size="xxs">
					<ScrollArea height="90svh">
						<DocsSidebar />
					</ScrollArea>
				</Container>
			)}
		</>
	);
}
function DocsLayout() {
	return (
		<Container padding="medium">
			<HStack>
				<ClientOnly>
					<RenderSidebarNavs />
				</ClientOnly>
				<Box grow maxWidth='viewport'>
					<ScrollArea height="90svh">
							<Outlet />
					</ScrollArea>
				</Box>
				<ClientOnly>
					<DocTOC />
				</ClientOnly>
			</HStack>
		</Container>
	);
}
