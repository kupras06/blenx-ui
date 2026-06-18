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
	section: {
		display: "flex",
		flexDirection: "column",
		gap: 8,
	},
	label: {
		fontSize: 14,
		fontWeight: 600,
	},
});

export function OTPFieldDemo() {
	return (
		<div {...stylex.props(styles.wrapper)}>
			<div {...stylex.props(styles.section)}>
				<span {...stylex.props(styles.label)}>Default (6 digits)</span>
				<OTPField length={6} defaultValue="">
					<OTPFieldInput />
					<OTPFieldInput />
					<OTPFieldInput />
					<OTPFieldInput />
					<OTPFieldInput />
					<OTPFieldInput />
				</OTPField>
			</div>

			<div {...stylex.props(styles.section)}>
				<span {...stylex.props(styles.label)}>With separator (4-4-4)</span>
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
		</div>
	);
}
