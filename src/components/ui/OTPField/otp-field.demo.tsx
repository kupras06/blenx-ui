"use client";

import * as stylex from "@stylexjs/stylex";
import { OTPField, OTPFieldInput, OTPFieldSeparator } from "./otp-field";

const styles = stylex.create({
	wrapper: {
		display: "flex",
		flexDirection: "column",
		gap: 24,
		padding: 32,
		maxWidth: 400,
	},
});

export function OTPFieldDemo() {
	return (
		<div {...stylex.props(styles.wrapper)}>
			<OTPField length={6} defaultValue="">
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
			</OTPField>
		</div>
	);
}

export function OTPFieldGroupedDemo() {
	return (
		<div {...stylex.props(styles.wrapper)}>
			<OTPField length={12} defaultValue="" validationType="alphanumeric">
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldSeparator />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldSeparator />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
				<OTPFieldInput />
			</OTPField>
		</div>
	);
}

export const demos = [
	{ name: "Default", component: OTPFieldDemo },
	{ name: "Grouped", component: OTPFieldGroupedDemo },
];
