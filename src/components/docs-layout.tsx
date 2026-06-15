import * as stylex from "@stylexjs/stylex";
import { ClientOnly } from "@tanstack/react-router";
import { useMediaQuery } from "@uidotdev/usehooks";
import type { ReactNode } from "react";
import {
	Box,
	Container,
	Drawer,
	DrawerClose,
	DrawerPanel,
	DrawerPopup,
	HStack,
} from "@/components/ui";
import { useSidebarStore } from "@/stores/docs-sidebar";
import { DocsSidebar } from "./docs-sidebar";

const MOBILE = "@media (max-width: 639px)";

export const docLayoutStyles = stylex.create({
	main: {
		width: "100%",
		maxWidth: "100%",
		paddingBottom: "var(--space-8)",
	},

	backdrop: {
		position: "fixed",
		inset: 0,
		zIndex: 99,
		display: {
			default: "none",
			[MOBILE]: "block",
		},
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
});
function DrawerSidebar() {
	const sidebarOpen = useSidebarStore((st) => st.isOpen);
	const setOpen = useSidebarStore((st) => st.setOpen);
	return (
		<Drawer open={sidebarOpen} onOpenChange={setOpen} position="left">
			<DrawerPopup>
				<DrawerPanel>
					<DrawerClose />
					<DocsSidebar />
				</DrawerPanel>
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
					<DocsSidebar />
				</Container>
			)}
		</>
	);
}
function DocsLayout({ children }: { children: ReactNode }) {
	return (
		<Container paddingX="xxlarge">
			<HStack>
				<ClientOnly>
					<RenderSidebarNavs />
				</ClientOnly>
				<Box grow>{children}</Box>
			</HStack>
		</Container>
	);
}

export { DocsLayout };
