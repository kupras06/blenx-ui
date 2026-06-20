"use client";

import { useState } from "react";
import { Button } from "@blenx-dev/ui/components/Button/button";
import { Input } from "@blenx-dev/ui/components/Input/input";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { Card, CardBody, CardHeader, CardTitle } from "@blenx-dev/ui/components/Card/card";
import { Switch } from "@blenx-dev/ui/components/Switch/switch";
import { HStack, VStack } from "@blenx-dev/ui/components/Stack/stack";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { Box, Container, Field, FieldLabel } from "@blenx-dev/ui/components";

type NotificationSetting = {
  key: string;
  title: string;
  description: string;
  enabled: boolean;
};

type UserData = {
  name: string;
  email: string;
  bio: string;
};

type Props = PropsWithStylex<{
  user?: UserData;
  notifications?: NotificationSetting[];
  onUpdateProfile?: (data: UserData) => void;
  onUpdateNotifications?: (settings: NotificationSetting[]) => void;
  onDeleteAccount?: () => void;
}>;

const defaultUser: UserData = {
  name: "Jane Doe",
  email: "jane@example.com",
  bio: "Product designer and developer",
};

const defaultNotifications: NotificationSetting[] = [
  {
    key: "email",
    title: "Email notifications",
    description: "Receive updates via email",
    enabled: true,
  },
  {
    key: "push",
    title: "Push notifications",
    description: "Receive push notifications",
    enabled: true,
  },
  {
    key: "sms",
    title: "SMS notifications",
    description: "Receive text message updates",
    enabled: false,
  },
];

export function Profile01({
  user: initialUser = defaultUser,
  notifications: initialNotifications = defaultNotifications,
  onUpdateProfile,
  onUpdateNotifications,
  onDeleteAccount,
}: Props) {
  const [user, setUser] = useState<UserData>(initialUser);
  const [notifications, setNotifications] = useState<NotificationSetting[]>(initialNotifications);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile?.(user);
  };

  const toggleNotification = (key: string) => {
    const next = notifications.map((n) => (n.key === key ? { ...n, enabled: !n.enabled } : n));
    setNotifications(next);
    onUpdateNotifications?.(next);
  };

  return (
    <Container size="lg">
      <VStack>
        <Text variant="h3">Profile</Text>
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardBody>
            <VStack render={<form onSubmit={handleSaveProfile} />}>
              <HStack>
                <Field>
                  <FieldLabel htmlFor="profile-name">Full name</FieldLabel>
                  <Input
                    id="profile-name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="profile-email">Email</FieldLabel>
                  <Input
                    id="profile-email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </Field>
              </HStack>
              <Field>
                <FieldLabel htmlFor="profile-bio">Bio</FieldLabel>
                <Input
                  id="profile-bio"
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                />
              </Field>
              <Button type="submit" variant="solid" intent="primary">
                Save changes
              </Button>
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardBody>
            <VStack gap="small">
              {notifications.map((setting) => (
                <HStack
                  key={setting.key}
                  gap="xsmall"
                  align="center"
                  justify="between"
                  paddingY="small"
                >
                  <Box>
                    <Text variant="body2" weight="medium">
                      {setting.title}
                    </Text>
                    <Text variant="caption" color="secondary">
                      {setting.description}
                    </Text>
                  </Box>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleNotification(setting.key)}
                  />
                </HStack>
              ))}
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardBody>
            <Button variant="outline">Change password</Button>
          </CardBody>
        </Card>

        <VStack withBorder padding="medium">
          <Text variant="h5" color="error">
            Danger Zone
          </Text>
          <Text variant="body2">
            Once you delete your account, there is no going back. Please be certain.
          </Text>
          <Button variant="solid" intent="danger" onClick={onDeleteAccount}>
            Delete account
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
}
