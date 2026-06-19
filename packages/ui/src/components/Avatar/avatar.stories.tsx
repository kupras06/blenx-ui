import { Stack } from "../Stack/stack";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function SizesStory() {
	return (
		<Stack gap="medium" direction="row" align="center">
			<Avatar size="small">
				<AvatarFallback>JD</AvatarFallback>
			</Avatar>
			<Avatar size="medium">
				<AvatarFallback>AB</AvatarFallback>
			</Avatar>
			<Avatar size="large">
				<AvatarFallback>CD</AvatarFallback>
			</Avatar>
			<Avatar size="xlarge">
				<AvatarFallback>EF</AvatarFallback>
			</Avatar>
		</Stack>
	);
}

export function WithImageStory() {
	return (
		<Stack gap="medium" direction="row" align="center">
			<Avatar size="large">
				<AvatarImage
					src="https://i.pravatar.cc/150?u=avatar"
					alt="User avatar"
				/>
				<AvatarFallback>JD</AvatarFallback>
			</Avatar>
		</Stack>
	);
}
