import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius, fontSize, spacing } from "@/lib/theme/tokens.stylex";
import {
	Avatar,
	AvatarFallback,
	Badge,
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
	Input,
	Select,
	Switch,
	Text,
	Textarea,
	VStack,
} from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs/breadcrumbs";

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
	alert: {
		padding: spacing["3"],
		borderRadius: borderRadius.medium,
		fontSize: fontSize.small,
		borderWidth: 1,
		borderStyle: "solid",
	},
	alertInfo: {
		backgroundColor: theme.sentimentInfoSubtle,
		borderColor: theme.sentimentInfo,
		color: theme.sentimentInfo,
	},
	alertSuccess: {
		backgroundColor: theme.sentimentPositiveSubtle,
		borderColor: theme.sentimentPositive,
		color: theme.sentimentPositive,
	},
	alertWarning: {
		backgroundColor: theme.sentimentWarningSubtle,
		borderColor: theme.sentimentWarning,
		color: theme.sentimentWarning,
	},
	alertError: {
		backgroundColor: theme.sentimentNegativeSubtle,
		borderColor: theme.sentimentNegative,
		color: theme.sentimentNegative,
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
			<div {...stylex.props(styles.section)}>
				<h3 {...stylex.props(styles.sectionTitle)}>Buttons</h3>
				<div {...stylex.props(styles.row)}>
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="danger">Destructive</Button>
				</div>
				<div {...stylex.props(styles.row)}>
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
				</div>
			</div>

			{/* Forms */}
			<div {...stylex.props(styles.section)}>
				<h3 {...stylex.props(styles.sectionTitle)}>Forms</h3>
				<div {...stylex.props(styles.formGroup)}>
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
				</div>
				<div {...stylex.props(styles.row)}>
					<Switch defaultChecked />
					<Text variant="body2">Toggle me</Text>
				</div>
				<div {...stylex.props(styles.radioGroup)}>
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
				</div>
				<label {...stylex.props(styles.radioLabel)}>
					<input type="checkbox" />
					Check me
				</label>
			</div>

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

			{/* Feedback */}
			<div {...stylex.props(styles.section)}>
				<h3 {...stylex.props(styles.sectionTitle)}>Feedback</h3>
				<div {...stylex.props(styles.alertRow)}>
					<div {...stylex.props(styles.alert, styles.alertInfo)}>
						This is an info message.
					</div>
					<div {...stylex.props(styles.alert, styles.alertSuccess)}>
						Operation completed successfully!
					</div>
					<div {...stylex.props(styles.alert, styles.alertWarning)}>
						Please review your settings.
					</div>
					<div {...stylex.props(styles.alert, styles.alertError)}>
						Something went wrong.
					</div>
				</div>
				<div>
					<Text variant="body2" style={{ marginBottom: spacing["2"] }}>
						Progress
					</Text>
					<div {...stylex.props(styles.progressOuter)}>
						<div
							{...stylex.props(styles.progressInner)}
							style={{ width: "60%" }}
						/>
					</div>
				</div>
			</div>

			{/* Data Display */}
			<div {...stylex.props(styles.section)}>
				<h3 {...stylex.props(styles.sectionTitle)}>Data Display</h3>
				<Card padding="medium" style={{ marginBottom: spacing["3"] }}>
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
				<div {...stylex.props(styles.badgeRow)}>
					<Badge variant="default">Default</Badge>
					<Badge variant="primary">Primary</Badge>
					<Badge variant="secondary">Secondary</Badge>
				</div>
				<Avatar size="medium" style={{ marginTop: spacing["2"] }}>
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
			</div>

			{/* Overlays */}
			<div {...stylex.props(styles.section)}>
				<h3 {...stylex.props(styles.sectionTitle)}>Overlays</h3>
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
			</div>
		</VStack>
	);
}
