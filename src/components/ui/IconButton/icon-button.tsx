import { Button, type ButtonProps } from "../Button/button";


type IconButtonProps = Omit<ButtonProps,'size'> 
export function IconButton(props: IconButtonProps) {
	return (
		<Button {...props} size="icon" />
	);
}

export type { IconButtonProps };
