import { CaretDownIcon } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
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

const HEX_REGEX = /^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

type Props = {
	value: string;
	onChange: (color: string) => void;
	label?: string;
};

export function ColorPicker({ value, onChange, label }: Props) {
	const [open, setOpen] = useState(false);
	const [internalValue, setInternalValue] = useState(value);
	const lastValidRef = useRef(value);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const prevValueRef = useRef(value);

	useEffect(() => {
		if (prevValueRef.current !== value) {
			prevValueRef.current = value;
			setInternalValue(value);
			lastValidRef.current = value;
		}
	}, [value]);

	const handleOpenChange = useCallback((nextOpen: boolean) => {
		if (!nextOpen && triggerRef.current) {
			triggerRef.current.focus();
		}
		setOpen(nextOpen);
	}, []);

	const handleHexInputChange = useCallback(
		(newColor: string) => {
			setInternalValue(newColor);
			if (HEX_REGEX.test(newColor)) {
				lastValidRef.current = newColor;
				onChange(newColor);
			}
		},
		[onChange],
	);

	const revertToLastValid = useCallback(() => {
		setInternalValue(lastValidRef.current);
		onChange(lastValidRef.current);
	}, [onChange]);

	return (
		<Field>
			<Popover open={open} onOpenChange={handleOpenChange}>
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
					aria-label={label ? `${label} color picker` : "Color picker"}
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
								<HexAlphaColorPicker
									color={internalValue}
									onChange={(color) => {
										setInternalValue(color);
										lastValidRef.current = color;
										onChange(color);
									}}
								/>
								<Input
									size="sm"
									render={
										<HexColorInput
											color={internalValue}
											onChange={handleHexInputChange}
											onBlur={() => {
												if (!HEX_REGEX.test(internalValue)) {
													revertToLastValid();
												}
											}}
											prefixed
											aria-label="Hex color value"
										/>
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
