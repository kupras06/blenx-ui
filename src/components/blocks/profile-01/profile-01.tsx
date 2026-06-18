"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Input, Label } from "@/components/ui/Input/input";
import { Text } from "@/components/ui/Text/text";
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
} from "@/components/ui/Card/card";
import { Switch } from "@/components/ui/Switch/switch";
import { VStack } from "@/components/ui/Stack/stack";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { profileStyles } from "./profile-01.styles";

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
	style,
}: Props) {
	const [user, setUser] = useState<UserData>(initialUser);
	const [notifications, setNotifications] =
		useState<NotificationSetting[]>(initialNotifications);

	const handleSaveProfile = (e: React.FormEvent) => {
		e.preventDefault();
		onUpdateProfile?.(user);
	};

	const toggleNotification = (key: string) => {
		const next = notifications.map((n) =>
			n.key === key ? { ...n, enabled: !n.enabled } : n,
		);
		setNotifications(next);
		onUpdateNotifications?.(next);
	};

	return (
		<div {...stylex.props(profileStyles.container, style)}>
			<Text variant="h3">Profile</Text>

			<Card>
				<CardHeader>
					<CardTitle>Personal Information</CardTitle>
				</CardHeader>
				<CardBody>
					<form
						onSubmit={handleSaveProfile}
						{...stylex.props(profileStyles.formSection)}
					>
						<div {...stylex.props(profileStyles.formRow)}>
							<div {...stylex.props(profileStyles.fieldGroup)}>
								<Label htmlFor="profile-name">Full name</Label>
								<Input
									id="profile-name"
									value={user.name}
									onChange={(e) => setUser({ ...user, name: e.target.value })}
								/>
							</div>
							<div {...stylex.props(profileStyles.fieldGroup)}>
								<Label htmlFor="profile-email">Email</Label>
								<Input
									id="profile-email"
									type="email"
									value={user.email}
									onChange={(e) => setUser({ ...user, email: e.target.value })}
								/>
							</div>
						</div>
						<div {...stylex.props(profileStyles.fieldGroup)}>
							<Label htmlFor="profile-bio">Bio</Label>
							<Input
								id="profile-bio"
								value={user.bio}
								onChange={(e) => setUser({ ...user, bio: e.target.value })}
							/>
						</div>
						<Button
							type="submit"
							variant="solid"
							intent="primary"
							style={profileStyles.fitContent}
						>
							Save changes
						</Button>
					</form>
				</CardBody>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Notifications</CardTitle>
				</CardHeader>
				<CardBody>
					<VStack gap="small">
						{notifications.map((setting) => (
							<div key={setting.key} {...stylex.props(profileStyles.switchRow)}>
								<div {...stylex.props(profileStyles.switchLabel)}>
									<Text variant="body2" weight="medium">
										{setting.title}
									</Text>
									<Text
										variant="caption"
										style={profileStyles.switchDescription}
									>
										{setting.description}
									</Text>
								</div>
								<Switch
									checked={setting.enabled}
									onCheckedChange={() => toggleNotification(setting.key)}
								/>
							</div>
						))}
					</VStack>
				</CardBody>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Account</CardTitle>
				</CardHeader>
				<CardBody>
					<VStack gap="medium">
						<Button variant="outline" style={profileStyles.fitContent}>
							Change password
						</Button>
					</VStack>
				</CardBody>
			</Card>

			<div {...stylex.props(profileStyles.dangerZone)}>
				<Text variant="h5" style={profileStyles.dangerHeader}>
					Danger Zone
				</Text>
				<Text variant="body2">
					Once you delete your account, there is no going back. Please be
					certain.
				</Text>
				<Button
					variant="solid"
					intent="danger"
					onClick={onDeleteAccount}
					style={profileStyles.fitContent}
				>
					Delete account
				</Button>
			</div>
		</div>
	);
}
