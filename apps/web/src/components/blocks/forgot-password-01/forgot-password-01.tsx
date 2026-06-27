"use client";

import { useState } from "react";
import { Button } from "@blenx-dev/ui/components/Button/button";
import { Input } from "@blenx-dev/ui/components/Input/input";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { Card, CardBody } from "@blenx-dev/ui/components/Card/card";
import type { CSSProperties } from "react";
import { Box, Container, Field, FieldLabel, HStack, VStack } from "@blenx-dev/components";

type Props = {
  title?: string;
  onSubmit?: (email: string) => void;
  backToLoginLink?: { label: string; handleClick: () => void };
  style?: CSSProperties;
};

export function ForgotPassword01({
  title = "Forgot your password?",
  onSubmit,
  backToLoginLink,
}: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    onSubmit?.(email);
    setSubmitted(true);
  };

  return (
    <Container size="md" paddingY="xlarge">
      <Card>
        <CardBody>
          {submitted ? (
            <VStack>
              <div>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <Text variant="h4">Check your email</Text>
              <Text variant="body2" color="success">
                We&apos;ve sent a password reset link to <strong>{email}</strong>. Please check your
                inbox and follow the instructions.
              </Text>
              {backToLoginLink && (
                <Button variant="ghost" onClick={backToLoginLink.handleClick}>
                  {backToLoginLink.label ?? "Back to login"}
                </Button>
              )}
            </VStack>
          ) : (
            <VStack gap="medium">
              <Box>
                <Text variant="h3" align="center">
                  {title}
                </Text>
                <Text variant="body2" color="secondary">
                  Enter the email address associated with your account and we&apos;ll send you a
                  link to reset your password.
                </Text>
              </Box>
              <VStack
                render={<form onSubmit={handleSubmit} aria-label="Forgot password form" />}
                marginY="medium"
              >
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    id="forgot-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    required
                    autoComplete="email"
                    error={error}
                  />
                  {error && (
                    <Text variant="caption" color="error">
                      {error}
                    </Text>
                  )}
                </Field>

                <Button type="submit" variant="solid" fullWidth>
                  Send reset link
                </Button>
              </VStack>

              {backToLoginLink && (
                <HStack fullWidth justify="center">
                  <Button type="button" variant="link" onClick={backToLoginLink.handleClick}>
                    {backToLoginLink.label ?? "Back to login"}
                  </Button>
                </HStack>
              )}
            </VStack>
          )}
        </CardBody>
      </Card>
    </Container>
  );
}
