"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button/button";
import { Input } from "@/components/ui/Input/input";
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
import {
	Box,
	Container,
	Field,
	FieldLabel,
	HStack,
	VStack,
} from "@/components/ui";

export function Settings01() {
	const [language, setLanguage] = useState("en");
	const [timezone, setTimezone] = useState("UTC");

	return (
		<Container size="lg">
			<Text variant="h3">Settings</Text>

			<Tabs defaultValue="general" variant="underline">
				<TabsList>
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
							<VStack>
								<Field>
									<FieldLabel htmlFor="settings-language">Language</FieldLabel>
									<Input
										id="settings-language"
										value={language}
										onChange={(e) => setLanguage(e.target.value)}
									/>
								</Field>
								<Field>
									<FieldLabel htmlFor="settings-timezone">Timezone</FieldLabel>
									<Input
										id="settings-timezone"
										value={timezone}
										onChange={(e) => setTimezone(e.target.value)}
									/>
								</Field>
							</VStack>
						</CardBody>
					</Card>
				</TabsPanel>

				<TabsPanel value="security">
					<Card>
						<CardHeader>
							<CardTitle>Security</CardTitle>
						</CardHeader>
						<CardBody>
							<VStack>
								<Box>
									<Button variant="outline">Change password</Button>
								</Box>
								<Separator />
								<HStack align="center" justify="between">
									<Box>
										<Text variant="body2" weight="medium">
											Two-factor authentication
										</Text>
										<Text variant="caption" color="secondary">
											Add an extra layer of security to your account
										</Text>
									</Box>
									<Switch />
								</HStack>
							</VStack>
						</CardBody>
					</Card>
				</TabsPanel>

				<TabsPanel value="appearance">
					<Card>
						<CardHeader>
							<CardTitle>Appearance</CardTitle>
						</CardHeader>
						<CardBody>
							<VStack>
								<Text variant="body2">Theme preference</Text>
								<Box>
									<Button variant="outline">Toggle theme</Button>
								</Box>
								<Separator />
								<Field>
									<FieldLabel htmlFor="settings-font-size">
										Font size
									</FieldLabel>
									<Input id="settings-font-size" defaultValue="Medium" />
								</Field>
							</VStack>
						</CardBody>
					</Card>
				</TabsPanel>

				<TabsPanel value="notifications">
					<Card>
						<CardHeader>
							<CardTitle>Notifications</CardTitle>
						</CardHeader>
						<CardBody>
							<VStack>
								<HStack justify="between">
									<Box>
										<Text variant="body2" weight="medium">
											Email notifications
										</Text>
										<Text variant="caption" color="secondary">
											Receive updates and alerts via email
										</Text>
									</Box>
									<Switch defaultChecked />
								</HStack>
								<HStack justify="between">
									<Box>
										<Text variant="body2" weight="medium">
											Push notifications
										</Text>
										<Text variant="caption" color="secondary">
											Receive push notifications in your browser
										</Text>
									</Box>
									<Switch defaultChecked />
								</HStack>
							</VStack>
						</CardBody>
					</Card>
				</TabsPanel>

				<TabsPanel value="billing">
					<Card>
						<CardHeader>
							<CardTitle>Billing</CardTitle>
						</CardHeader>
						<CardBody>
							<VStack gap="small">
								<VStack>
									<HStack justify="between">
										<Text variant="body2" weight="medium">
											Current plan
										</Text>
										<Text variant="body2">Pro</Text>
									</HStack>
									<HStack justify="between">
										<Text variant="body2" weight="medium">
											Payment method
										</Text>
										<Text variant="body2">Visa ending in 4242</Text>
									</HStack>
								</VStack>
								<Separator />
								<Box>
									<Button variant="outline">Manage subscription</Button>
								</Box>
							</VStack>
						</CardBody>
					</Card>
				</TabsPanel>
			</Tabs>
		</Container>
	);
}
