import {
	Alert,
	Avatar,
	AvatarFallback,
	Badge,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	Button,
	Card,
	CardBody,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Checkbox,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	HStack,
	Input,
	Label,
	Progress,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	RadioGroup,
	RadioGroupItem,
	Select,
	Switch,
	Text,
	Textarea,
	VStack,
} from "@/components/ui";

import { memo } from "react";

export const ComponentShowcase = memo(() => (
	<VStack gap="large">
		<VStack withBorder padding="small">
			<Text variant="h3">Buttons</Text>
			<HStack>
				<Button variant="solid">Primary</Button>
				<Button variant="soft">Secondary</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="outline">Outline</Button>
				<Button intent="danger">Destructive</Button>
			</HStack>
			<HStack>
				<Button variant="solid" loading>
					Loading
				</Button>
				<Button variant="outline" disabled>
					Disabled
				</Button>
				<Button variant="solid" size="small">
					Small
				</Button>
				<Button variant="solid" size="medium">
					Medium
				</Button>
				<Button variant="solid" size="large">
					Large
				</Button>
			</HStack>
		</VStack>

		{/* Forms */}
		<VStack withBorder padding="small">
			<Text variant="h3">Forms</Text>
			<VStack maxWidth="sm">
				<Input placeholder="Enter text..." size="default" />
				<Textarea placeholder="Textarea..." rows={3} />
				<Select.Root defaultValue="option1">
					<Select.Trigger size="sm">
						<Select.Value placeholder="Select option" />
						<Select.Icon />
					</Select.Trigger>
					<Select.Portal>
						<Select.Positioner>
							<Select.Popup>
								<Select.List>
									<Select.Item value="option1">Option 1</Select.Item>
									<Select.Item value="option2">Option 2</Select.Item>
									<Select.Item value="option3">Option 3</Select.Item>
								</Select.List>
							</Select.Popup>
						</Select.Positioner>
					</Select.Portal>
				</Select.Root>
			</VStack>
			<HStack align="center">
				<Switch defaultChecked />
				<Text variant="body2">Toggle me</Text>
			</HStack>
			<HStack>
				<RadioGroup defaultValue="option1">
					<Label>
						<RadioGroupItem value="option1" /> Option A
					</Label>
					<Label>
						<RadioGroupItem value="option2" /> Option B
					</Label>
					<Label>
						<RadioGroupItem value="option3" /> Option C
					</Label>
				</RadioGroup>
			</HStack>
			<HStack>
				<Label>
					<Checkbox />
					Check me
				</Label>
			</HStack>
		</VStack>

		{/* Navigation */}
		<Box withBorder padding="small">
			<Text variant="h3">Navigation</Text>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="#home">Home</BreadcrumbLink>
						<BreadcrumbSeparator />
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="#category">Category</BreadcrumbLink>
						<BreadcrumbSeparator />
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbPage>Current</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</Box>

		<VStack withBorder padding="small">
			<Text variant="h3">Feedback</Text>
			<Alert variant="info">This is an info message.</Alert>
			<Alert variant="success">Operation completed successfully!</Alert>
			<Alert variant="warning">Please review your settings.</Alert>
			<Alert variant="error">Something went wrong.</Alert>
			<Progress value={60}>
				<ProgressLabel>Progress</ProgressLabel>
				<ProgressTrack>
					<ProgressIndicator />
				</ProgressTrack>
			</Progress>
		</VStack>

		{/* Data Display */}
		<VStack>
			<Text variant="h3">Data Display</Text>
			<Card>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card description goes here.</CardDescription>
				</CardHeader>
				<CardBody>
					<Text variant="body2">
						This is the main card content. It uses real production Card
						components.
					</Text>
				</CardBody>
				<CardFooter>
					<Button variant="ghost" size="small">
						Action
					</Button>
					<Button variant="solid" size="small">
						Save
					</Button>
				</CardFooter>
			</Card>
			<HStack>
				<Badge variant="default">Default</Badge>
				<Badge variant="primary">Primary</Badge>
				<Badge variant="secondary">Secondary</Badge>
			</HStack>
			<Avatar size="medium">
				<AvatarFallback>JD</AvatarFallback>
			</Avatar>
		</VStack>

		{/* Overlays */}
		<Box>
			<Text variant="h3">Overlays</Text>
			<Dialog>
				<DialogTrigger>
					<Button variant="outline">Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Confirm Action</DialogTitle>
						<DialogDescription>
							Are you sure you want to proceed with this action?
						</DialogDescription>
					</DialogHeader>
					<DialogFooter variant="default">
						<DialogTrigger>
							<Button variant="ghost">Cancel</Button>
						</DialogTrigger>
						<Button slot="primary">Confirm</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</Box>
	</VStack>
));
