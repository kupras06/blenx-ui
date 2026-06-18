import { Button } from "../Button/button";
import {
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "./drawer";

export function BottomStory() {
	return (
		<Drawer position="bottom">
			<DrawerTrigger render={<Button>Open Bottom Drawer</Button>} />
			<DrawerPopup showBar showCloseButton>
				<DrawerHeader>
					<DrawerTitle>Bottom Drawer</DrawerTitle>
					<DrawerDescription>Drawer description</DrawerDescription>
				</DrawerHeader>
				<DrawerPanel>
					<div>Drawer content goes here.</div>
				</DrawerPanel>
				<DrawerFooter>
					<DrawerClose render={<Button variant="soft">Cancel</Button>} />
					<Button variant="solid">Save</Button>
				</DrawerFooter>
			</DrawerPopup>
		</Drawer>
	);
}

export function RightStory() {
	return (
		<Drawer position="right">
			<DrawerTrigger render={<Button>Open Right Drawer</Button>} />
			<DrawerPopup showCloseButton>
				<DrawerHeader>
					<DrawerTitle>Side Drawer</DrawerTitle>
				</DrawerHeader>
				<DrawerPanel>
					<div>Side drawer content.</div>
				</DrawerPanel>
			</DrawerPopup>
		</Drawer>
	);
}
