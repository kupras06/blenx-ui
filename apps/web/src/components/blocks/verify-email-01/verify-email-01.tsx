"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@blenx-dev/core/Button";
import { Text } from "@blenx-dev/core/Text";
import { Card, CardBody } from "@blenx-dev/core/Card";
import type { CSSProperties } from "react";
import { Alert, Box, Container, HStack, OTPField, OTPFieldInput, VStack } from "@blenx-dev/core";

const DIGIT_COUNT = 6;

type Props = {
  title?: string;
  email?: string;
  onVerify?: (code: string) => void;
  onResend?: () => void;
  resendCooldown?: number;
  style?: CSSProperties;
};

// eslint-disable-next-line max-statements
export function VerifyEmail01({
  title = "Check your email",
  email,
  onVerify,
  onResend,
  resendCooldown = 60,
}: Props) {
  const [digits, setDigits] = useState<string>("");
  const [cooldown, setCooldown] = useState(resendCooldown);
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (digits.length !== DIGIT_COUNT) {
      setError("Please enter the full verification code");
      return;
    }
    onVerify?.(digits);
    setVerified(true);
  };

  const handleResend = () => {
    if (cooldown > 0) return;
    setCooldown(resendCooldown);
    onResend?.();
    setDigits("");
    inputRefs.current[0]?.focus();
  };

  const isComplete = digits.length === DIGIT_COUNT;

  return (
    <Container size="md">
      <Card>
        <CardBody>
          <VStack>
            <Box>
              <Text variant="h3">{title}</Text>
              {email && (
                <Text variant="body2" color="secondary">
                  We&apos;ve sent a verification code to <strong>{email}</strong>. Enter the code
                  below.
                </Text>
              )}
            </Box>

            <VStack
              render={<form onSubmit={handleSubmit} aria-label="Email verification form" />}
              justify="center"
              align="center"
            >
              <OTPField length={DIGIT_COUNT} value={digits} onValueChange={setDigits}>
                <OTPFieldInput />
                <OTPFieldInput />
                <OTPFieldInput />
                <OTPFieldInput />
                <OTPFieldInput />
                <OTPFieldInput />
              </OTPField>

              {error && (
                <Alert variant="error" icon="">
                  {error}
                </Alert>
              )}
              {verified && (
                <Alert variant="success" icon="">
                  Email verified successfully!
                </Alert>
              )}

              <Button type="submit" variant="solid" fullWidth disabled={!isComplete}>
                Verify email
              </Button>
            </VStack>

            <HStack align="center" justify="center" gap="md">
              <Text variant="caption" span>
                Didn&apos;t receive the code?{" "}
              </Text>
              {cooldown > 0 ? (
                <Text variant="caption" color="secondary">
                  Resend in {cooldown}s
                </Text>
              ) : (
                <Button type="button" variant="link" size="xs" onClick={handleResend}>
                  Resend code
                </Button>
              )}
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </Container>
  );
}
