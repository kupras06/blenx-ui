import { CaretDownIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import { Button } from "../Button/button";
import { ColorSwatch } from "../ColorSwatch/color-swatch";
import { Field, FieldLabel } from "../Field/field";
import { Input } from "../Input/input";
import {
	Popover,
	PopoverArrow,
	PopoverCompound,
	PopoverPopup,
	PopoverPositioner,
	PopoverTrigger,
} from "../Popover/popover";
import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";

type Props = {
	value: string;
	onChange: (color: string) => void;
	label?: string;
};

export function ColorPicker({ value, onChange, label }: Props) {
	const [open, setOpen] = useState(false);
	const triggerRef = useRef<HTMLButtonElement>(null);

	return (
		<Field>
			<Popover open={open} onOpenChange={setOpen}>
				{label && (
					<FieldLabel
						onClick={() => {
							triggerRef.current?.click();
							triggerRef.current?.focus();
						}}
					>
						{label}
					</FieldLabel>
				)}
				<PopoverTrigger
					ref={triggerRef}
					render={<Button type="button" variant="outline" />}
				>
					<ColorSwatch color={value} size={20} />
					<Text variant="body2">{value}</Text>
					<CaretDownIcon />
				</PopoverTrigger>
				<PopoverCompound.Portal>
					<PopoverPositioner sideOffset={6} side="bottom" align="start">
						<PopoverPopup>
							<PopoverArrow />
							<VStack gap="xsmall">
								<HexAlphaColorPicker color={value} onChange={onChange} />
								<Input
									size="sm"
									render={
										<HexColorInput color={value} onChange={onChange} prefixed />
									}
								/>
							</VStack>
						</PopoverPopup>
					</PopoverPositioner>
				</PopoverCompound.Portal>
			</Popover>
		</Field>
	);
}
