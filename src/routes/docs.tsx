import { ClientOnly, createFileRoute, Outlet } from "@tanstack/react-router";
import { useMediaQuery } from "@uidotdev/usehooks";
import { DocsSidebar } from "@/components/docs-sidebar";
import {
	Box,
	Button,
	Container,
	Drawer,
	DrawerClose,
	DrawerPopup,
	HStack,
	ScrollArea,
} from "@/components/ui";
import { useSidebarStore } from "@/stores/docs-sidebar";
import { XIcon } from "@phosphor-icons/react";

export const Route = createFileRoute("/docs")({
	component: DocsLayout,
});

function DrawerSidebar() {
	const sidebarOpen = useSidebarStore((st) => st.isOpen);
	const setOpen = useSidebarStore((st) => st.setOpen);
	return (
		<Drawer open={sidebarOpen} onOpenChange={setOpen} position="left">
			<DrawerPopup>
				<DrawerClose render={<Button variant="secondary" />}>
					<XIcon />
				</DrawerClose>
				<ScrollArea height="100svh">
					<DocsSidebar onClose={() => setOpen(false)} />
				</ScrollArea>
			</DrawerPopup>
		</Drawer>
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
				<Box grow>
					<ScrollArea height="90svh">
						<Outlet />
					</ScrollArea>
				</Box>
			</HStack>
		</Container>
	);
}
