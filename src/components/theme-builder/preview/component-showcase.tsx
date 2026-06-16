import * as stylex from "@stylexjs/stylex";
import {
	Alert,
	Avatar,
	AvatarFallback,
	Badge,
	Box,
	Button,
	Card,
	CardBody,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	HStack,
	Input,
	Progress,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	Select,
	Switch,
	Text,
	Textarea,
	VStack,
} from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs/breadcrumbs";
import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius, fontSize, spacing } from "@/lib/theme/tokens.stylex";

const styles = stylex.create({
	section: {
		marginBottom: spacing["6"],
	},
	sectionTitle: {
		fontSize: fontSize.medium,
		fontWeight: 600,
		marginBottom: spacing["3"],
		color: theme.contentPrimary,
	},
	row: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		gap: spacing["2"],
		marginBottom: spacing["3"],
	},
	formGroup: {
		display: "flex",
		flexDirection: "column",
		gap: spacing["2"],
		maxWidth: 320,
		marginBottom: spacing["3"],
	},
	alertRow: {
		display: "flex",
		flexDirection: "column",
		gap: spacing["2"],
		marginBottom: spacing["3"],
	},
	radioGroup: {
		display: "flex",
		gap: spacing["3"],
	},
	radioLabel: {
		display: "flex",
		alignItems: "center",
		gap: spacing["1"],
		fontSize: fontSize.small,
		color: theme.contentPrimary,
	},
	progressOuter: {
		width: "100%",
		height: 8,
		borderRadius: borderRadius.full,
		backgroundColor: theme.surfaceSubtle,
		overflow: "hidden",
	},
	progressInner: {
		height: "100%",
		borderRadius: borderRadius.full,
		backgroundColor: theme.primary,
		transition: "width 0.3s ease",
	},
	badgeRow: {
		display: "flex",
		gap: spacing["1"],
		flexWrap: "wrap",
		alignItems: "center",
	},
});

export function ComponentShowcase() {
	return (
		<VStack gap="large">
			{/* Buttons */}
			<VStack withBorder padding="small">
				<Text variant="h3">Buttons</Text>
				<HStack>
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="danger">Destructive</Button>
				</HStack>
				<HStack>
					<Button variant="primary" loading>
						Loading
					</Button>
					<Button variant="outline" disabled>
						Disabled
					</Button>
					<Button variant="primary" size="small">
						Small
					</Button>
					<Button variant="primary" size="medium">
						Medium
					</Button>
					<Button variant="primary" size="large">
						Large
					</Button>
				</HStack>
			</VStack>

			{/* Forms */}
			<VStack withBorder padding="small">
				<Text variant="h3">Forms</Text>
				<VStack maxWidth={"sm"}>
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
					<label {...stylex.props(styles.radioLabel)}>
						<input type="radio" name="showcase-radio" />
						Option A
					</label>
					<label {...stylex.props(styles.radioLabel)}>
						<input type="radio" name="showcase-radio" />
						Option B
					</label>
					<label {...stylex.props(styles.radioLabel)}>
						<input type="radio" name="showcase-radio" />
						Option C
					</label>
				</HStack>
				<HStack>
					<input type="checkbox" />
					<Text variant="body2">Check me</Text>
				</HStack>
			</VStack>

			{/* Navigation */}
			<div {...stylex.props(styles.section)}>
				<h3 {...stylex.props(styles.sectionTitle)}>Navigation</h3>
				<Breadcrumbs>
					<a href="#home">Home</a>
					<span>/</span>
					<a href="#category">Category</a>
					<span>/</span>
					<span>Current</span>
				</Breadcrumbs>
			</div>

			<VStack withBorder padding="xxsmall">
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
						<Button variant="primary" size="small">
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
							<Button variant="primary">Confirm</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</Box>
		</VStack>
	);
}
