"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Text } from "@/components/ui/Text/text";
import { Card, CardBody } from "@/components/ui/Card/card";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { verifyEmailStyles } from "./verify-email-01.styles";

const DIGIT_COUNT = 6;

type Props = PropsWithStylex<{
	title?: string;
	email?: string;
	onVerify?: (code: string) => void;
	onResend?: () => void;
	resendCooldown?: number;
}>;

// eslint-disable-next-line max-statements
export function VerifyEmail01({
	title = "Check your email",
	email,
	onVerify,
	onResend,
	resendCooldown = 60,
	style,
}: Props) {
	const [digits, setDigits] = useState<string[]>(Array(DIGIT_COUNT).fill(""));
	const [cooldown, setCooldown] = useState(resendCooldown);
	const [error, setError] = useState("");
	const [verified, setVerified] = useState(false);
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const setInputRef = useCallback(
		(index: number) => (el: HTMLInputElement | null) => {
			inputRefs.current[index] = el;
		},
		[],
	);

	useEffect(() => {
		inputRefs.current[0]?.focus();
	}, []);

	useEffect(() => {
		if (cooldown <= 0) return;
		const timer = setInterval(() => {
			setCooldown((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(timer);
	}, [cooldown]);

	const handleDigitChange = (index: number, value: string) => {
		if (value.length > 1) return;
		if (value !== "" && !/^\d$/.test(value)) return;

		setError("");
		const newDigits = [...digits];
		newDigits[index] = value;
		setDigits(newDigits);

		if (value && index < DIGIT_COUNT - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (
		index: number,
		e: React.KeyboardEvent<HTMLInputElement>,
	) => {
		if (e.key === "Backspace" && !digits[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handlePaste = (e: React.ClipboardEvent) => {
		e.preventDefault();
		const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
		if (!pasted) return;

		const newDigits = [...digits];
		for (let i = 0; i < Math.min(pasted.length, DIGIT_COUNT); i++) {
			newDigits[i] = pasted[i];
		}
		setDigits(newDigits);

		const focusIndex = Math.min(pasted.length, DIGIT_COUNT - 1);
		inputRefs.current[focusIndex]?.focus();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const code = digits.join("");
		if (code.length !== DIGIT_COUNT) {
			setError("Please enter the full verification code");
			return;
		}
		onVerify?.(code);
		setVerified(true);
	};

	const handleResend = () => {
		if (cooldown > 0) return;
		setCooldown(resendCooldown);
		onResend?.();
		setDigits(Array(DIGIT_COUNT).fill(""));
		inputRefs.current[0]?.focus();
	};

	const isComplete = digits.every((d) => d !== "");

	return (
		<div {...stylex.props(verifyEmailStyles.container, style)}>
			<Card {...stylex.props(verifyEmailStyles.card)}>
				<CardBody {...stylex.props(verifyEmailStyles.cardBody)}>
					<div {...stylex.props(verifyEmailStyles.header)}>
						<Text variant="h3">{title}</Text>
						{email && (
							<Text variant="body2" style={verifyEmailStyles.description}>
								We&apos;ve sent a verification code to <strong>{email}</strong>.
								Enter the code below.
							</Text>
						)}
					</div>

					<form
						onSubmit={handleSubmit}
						aria-label="Email verification form"
						{...stylex.props(verifyEmailStyles.form)}
					>
						<fieldset
							{...stylex.props(verifyEmailStyles.codeInputs)}
							aria-label="Verification code"
						>
							{digits.map((digit, index) => (
								<input
									key={index}
									ref={setInputRef(index)}
									type="text"
									inputMode="numeric"
									maxLength={1}
									value={digit}
									onChange={(e) => handleDigitChange(index, e.target.value)}
									onKeyDown={(e) => handleKeyDown(index, e)}
									onPaste={index === 0 ? handlePaste : undefined}
									aria-label={`Digit ${index + 1}`}
									autoComplete="one-time-code"
									{...stylex.props(
										verifyEmailStyles.digitInput,
										digit && verifyEmailStyles.digitInputFilled,
										error && verifyEmailStyles.digitInputError,
									)}
								/>
							))}
						</fieldset>

						{error && (
							<Text variant="caption" style={verifyEmailStyles.error}>
								{error}
							</Text>
						)}
						{verified && (
							<Text variant="caption" style={verifyEmailStyles.success}>
								Email verified successfully!
							</Text>
						)}

						<Button
							type="submit"
							variant="primary"
							fullWidth
							disabled={!isComplete}
						>
							Verify email
						</Button>
					</form>

					<div {...stylex.props(verifyEmailStyles.resendRow)}>
						<Text variant="caption" span>
							Didn&apos;t receive the code?{" "}
						</Text>
						{cooldown > 0 ? (
							<span {...stylex.props(verifyEmailStyles.timer)}>
								Resend in {cooldown}s
							</span>
						) : (
							<button
								type="button"
								onClick={handleResend}
								{...stylex.props(verifyEmailStyles.resendButton)}
							>
								Resend code
							</button>
						)}
					</div>
				</CardBody>
			</Card>
		</div>
	);
}
