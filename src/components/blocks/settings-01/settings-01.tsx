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
import { Separator } from "@/components/ui/Separator/separator";
import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/Tabs/tabs";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { settingsStyles } from "./settings-01.styles";

type Props = PropsWithStylex<{}>;

export function Settings01({ style }: Props) {
	const [language, setLanguage] = useState("en");
	const [timezone, setTimezone] = useState("UTC");

	return (
		<div {...stylex.props(settingsStyles.container, style)}>
			<Text variant="h3">Settings</Text>

			<Tabs defaultValue="general" variant="underline">
				<TabsList style={settingsStyles.tabsList}>
					<TabsTab value="general">General</TabsTab>
					<TabsTab value="security">Security</TabsTab>
					<TabsTab value="appearance">Appearance</TabsTab>
					<TabsTab value="notifications">Notifications</TabsTab>
					<TabsTab value="billing">Billing</TabsTab>
				</TabsList>

				<TabsPanel value="general">
					<Card>
						<CardHeader>
							<CardTitle>General</CardTitle>
						</CardHeader>
						<CardBody>
							<div {...stylex.props(settingsStyles.section)}>
								<div {...stylex.props(settingsStyles.fieldGroup)}>
									<Label htmlFor="settings-language">Language</Label>
									<Input
										id="settings-language"
										value={language}
										onChange={(e) => setLanguage(e.target.value)}
									/>
								</div>
								<div {...stylex.props(settingsStyles.fieldGroup)}>
									<Label htmlFor="settings-timezone">Timezone</Label>
									<Input
										id="settings-timezone"
										value={timezone}
										onChange={(e) => setTimezone(e.target.value)}
									/>
								</div>
							</div>
						</CardBody>
					</Card>
				</TabsPanel>

				<TabsPanel value="security">
					<Card>
						<CardHeader>
							<CardTitle>Security</CardTitle>
						</CardHeader>
						<CardBody>
							<div {...stylex.props(settingsStyles.section)}>
								<Button variant="outline" style={settingsStyles.fitContent}>
									Change password
								</Button>
								<Separator />
								<div {...stylex.props(settingsStyles.switchRow)}>
									<div {...stylex.props(settingsStyles.switchLabel)}>
										<Text variant="body2" weight="medium">
											Two-factor authentication
										</Text>
										<Text
											variant="caption"
											style={settingsStyles.switchDescription}
										>
											Add an extra layer of security to your account
										</Text>
									</div>
									<Switch />
								</div>
							</div>
						</CardBody>
					</Card>
				</TabsPanel>

				<TabsPanel value="appearance">
					<Card>
						<CardHeader>
							<CardTitle>Appearance</CardTitle>
						</CardHeader>
						<CardBody>
							<div {...stylex.props(settingsStyles.section)}>
								<Text variant="body2">Theme preference</Text>
								<Button variant="outline" style={settingsStyles.fitContent}>
									Toggle theme
								</Button>
								<Separator />
								<div {...stylex.props(settingsStyles.fieldGroup)}>
									<Label htmlFor="settings-font-size">Font size</Label>
									<Input id="settings-font-size" defaultValue="Medium" />
								</div>
							</div>
						</CardBody>
					</Card>
				</TabsPanel>

				<TabsPanel value="notifications">
					<Card>
						<CardHeader>
							<CardTitle>Notifications</CardTitle>
						</CardHeader>
						<CardBody>
							<div {...stylex.props(settingsStyles.section)}>
								<div {...stylex.props(settingsStyles.switchRow)}>
									<div {...stylex.props(settingsStyles.switchLabel)}>
										<Text variant="body2" weight="medium">
											Email notifications
										</Text>
										<Text
											variant="caption"
											style={settingsStyles.switchDescription}
										>
											Receive updates and alerts via email
										</Text>
									</div>
									<Switch defaultChecked />
								</div>
								<div {...stylex.props(settingsStyles.switchRow)}>
									<div {...stylex.props(settingsStyles.switchLabel)}>
										<Text variant="body2" weight="medium">
											Push notifications
										</Text>
										<Text
											variant="caption"
											style={settingsStyles.switchDescription}
										>
											Receive push notifications in your browser
										</Text>
									</div>
									<Switch defaultChecked />
								</div>
							</div>
						</CardBody>
					</Card>
				</TabsPanel>

				<TabsPanel value="billing">
					<Card>
						<CardHeader>
							<CardTitle>Billing</CardTitle>
						</CardHeader>
						<CardBody>
							<div {...stylex.props(settingsStyles.section)}>
								<div {...stylex.props(settingsStyles.billingInfo)}>
									<div {...stylex.props(settingsStyles.planRow)}>
										<Text variant="body2" weight="medium">
											Current plan
										</Text>
										<Text variant="body2">Pro</Text>
									</div>
									<div {...stylex.props(settingsStyles.planRow)}>
										<Text variant="body2" weight="medium">
											Payment method
										</Text>
										<Text variant="body2">Visa ending in 4242</Text>
									</div>
								</div>
								<Separator />
								<Button variant="outline" style={settingsStyles.fitContent}>
									Manage subscription
								</Button>
							</div>
						</CardBody>
					</Card>
				</TabsPanel>
			</Tabs>
		</div>
	);
}
