"use client";

import { useState } from "react";
import { Button } from "@blenx-dev/ui/components/Button/button";
import { Input } from "@blenx-dev/ui/components/Input/input";
import { Textarea } from "@blenx-dev/ui/components/Textarea/textarea";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { Card, CardBody } from "@blenx-dev/ui/components/Card/card";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import {
  Box,
  Container,
  Field,
  FieldLabel,
  HStack,
  Icon,
  Select,
  VStack,
} from "@blenx-dev/ui/components";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";

type ContactInfo = {
  address?: string;
  phone?: string;
  email?: string;
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = PropsWithStylex<{
  title?: string;
  description?: string;
  contactInfo?: ContactInfo;
  onSubmit?: (values: FormValues) => void;
  subjects?: { value: string; label: string }[];
}>;

const defaultSubjects = [
  { value: "general", label: "General inquiry" },
  { value: "support", label: "Technical support" },
  { value: "billing", label: "Billing question" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

export function Contact01({
  title = "Get in touch",
  description = "Have a question or feedback? We'd love to hear from you.",
  contactInfo,
  onSubmit,
  subjects = defaultSubjects,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]?.value ?? "");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ name, email, subject, message });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Container render={<section />} content="center" size="full" paddingY="huge">
        <Card>
          <CardBody>
            <VStack align="center" gap="medium">
              <Icon padding="small" backgroundColor="success" color="success" radius="full">
                <PaperPlaneTiltIcon size={44} />
              </Icon>
              <Text variant="h3">Message sent!</Text>
              <Text variant="body1">
                Thank you for reaching out. We&apos;ll get back to you as soon as possible.
              </Text>
              <Button variant="ghost" onClick={() => setSubmitted(false)}>
                Send another message
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    );
  }

  return (
    <Container render={<section />} content="center" size="full" paddingY="huge">
      <VStack gap="medium" align="center" justify="center">
        <Box>
          <Text variant="h2" align="center">
            {title}
          </Text>
          <Text variant="body1" color="secondary" align="center">
            {description}
          </Text>
        </Box>
        <HStack gap="medium">
          <Card>
            <CardBody>
              <VStack render={<form onSubmit={handleSubmit} aria-label="Contact form" />}>
                <HStack>
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </Field>
                </HStack>

                <Select.Wrapper label="Subject">
                  <Select.Root
                    value={subject}
                    onValueChange={(e) => {
                      setSubject(e as string);
                    }}
                  >
                    <Select.Trigger size="sm">
                      <Select.Value placeholder="Select font" />
                      <Select.Icon />
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Positioner>
                        <Select.Popup>
                          <Select.List>
                            {subjects.map((s) => (
                              <Select.Item key={s.value} value={s.value}>
                                {s.label}
                              </Select.Item>
                            ))}
                          </Select.List>
                        </Select.Popup>
                      </Select.Positioner>
                    </Select.Portal>
                  </Select.Root>
                </Select.Wrapper>

                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                  />
                </Field>

                <Button type="submit" variant="solid" intent="primary" fullWidth>
                  Send message
                </Button>
              </VStack>
            </CardBody>
          </Card>

          {contactInfo && (
            <VStack gap="large">
              {contactInfo.address && (
                <Box>
                  <Text variant="body3">Address</Text>
                  <Text variant="h5" color="secondary">
                    {contactInfo.phone}
                  </Text>
                </Box>
              )}
              {contactInfo.phone && (
                <Box>
                  <Text variant="body3">Phone</Text>
                  <Text variant="h5" color="secondary">
                    {contactInfo.phone}
                  </Text>
                </Box>
              )}
              {contactInfo.email && (
                <Box>
                  <Text variant="body3">Email</Text>
                  <Text variant="h5" color="secondary">
                    {contactInfo.email}
                  </Text>
                </Box>
              )}
            </VStack>
          )}
        </HStack>
      </VStack>
    </Container>
  );
}
