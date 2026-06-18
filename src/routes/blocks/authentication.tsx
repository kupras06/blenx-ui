import { lazy, Suspense, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { demoImports } from "@/docs-demo-registry";
import {
	Box,
	Separator,
	Surface,
	Text,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	VStack,
} from "@/components/ui";

interface BlockInfo {
	key: string;
	label: string;
	description: string;
	importPath: string;
	demoExports: string[];
}

const BLOCKS: BlockInfo[] = [
	{
		key: "login-01",
		label: "Sign In",
		description:
			"A sign-in form with email/password fields, social login options, and links to password reset and registration.",
		importPath: "@/components/blocks/login-01/login-01",
		demoExports: ["Login01DefaultDemo"],
	},
	{
		key: "login-02",
		label: "Multi-step Sign In",
		description:
			"An email-first sign-in flow supporting both password and magic-link authentication.",
		importPath: "@/components/blocks/login-02/login-02",
		demoExports: ["Login02PasswordFlowDemo", "Login02MagicLinkDemo"],
	},
	{
		key: "signup-01",
		label: "Sign Up",
		description:
			"A registration form with name, email, password fields, social sign-up options, and terms acceptance.",
		importPath: "@/components/blocks/signup-01/signup-01",
		demoExports: ["Signup01DefaultDemo"],
	},
	{
		key: "forgot-password-01",
		label: "Forgot Password",
		description:
			"A password reset form that accepts an email address and displays a success confirmation after submission.",
		importPath: "@/components/blocks/forgot-password-01/forgot-password-01",
		demoExports: ["ForgotPassword01DefaultDemo"],
	},
	{
		key: "verify-email-01",
		label: "Verify Email",
		description:
			"A 6-digit OTP verification form with auto-advancing inputs, resend cooldown, and email display.",
		importPath: "@/components/blocks/verify-email-01/verify-email-01",
		demoExports: ["VerifyEmail01DefaultDemo"],
	},
];

export const Route = createFileRoute("/blocks/authentication")({
	component: AuthenticationPage,
});

function BlockDemo({ block }: { block: BlockInfo }) {
	const importFn = demoImports[block.key];

	if (!importFn) {
		return (
			<Text variant="body2" color="secondary">
				Demo not available
			</Text>
		);
	}

	const DemoComponent = lazy(async () => {
		const mod = await importFn();
		const m = mod as Record<string, unknown>;
		const items = m.demos as
			| { name: string; component: React.ComponentType }[]
			| undefined;

		if (!items || items.length === 0) {
			return { default: (() => <Text>Demo not found</Text>) as React.ComponentType };
		}

		return {
			default: (() => (
				<VStack gap="medium">
					{items.map((d, i) => (
						<VStack key={d.name} gap="small">
							<Surface padding="medium" variant="sunken">
								<d.component />
							</Surface>
							<Box>
								<Text variant="body2" weight="semibold">
									Import
								</Text>
								<Surface render={<pre />} padding="small" variant="sunken">
									<code>{`import { ${block.demoExports[i]} } from "${block.importPath}";`}</code>
								</Surface>
							</Box>
						</VStack>
					))}
				</VStack>
			)) as React.ComponentType,
		};
	});

	return (
		<Suspense
			fallback={
				<Text variant="body2" color="secondary">
					Loading demo...
				</Text>
			}
		>
			<DemoComponent />
		</Suspense>
	);
}

function AuthenticationPage() {
	const [currentBlock, setCurrentBlock] = useState(BLOCKS[0].key);

	return (
		<VStack gap="large">
			<VStack gap="small">
				<Text variant="h1">Authentication Blocks</Text>
				<Text variant="body2" color="secondary">
					Authentication page blocks — sign in, sign up, password reset, and
					email verification.
				</Text>
			</VStack>

			<Separator tone="subtle" />

			<Tabs value={currentBlock} onValueChange={setCurrentBlock}>
				<TabsList>
					{BLOCKS.map((block) => (
						<TabsTab key={block.key} value={block.key}>
							{block.label}
						</TabsTab>
					))}
				</TabsList>

				{BLOCKS.map((block) => (
					<TabsPanel key={block.key} value={block.key}>
						<VStack gap="medium">
							<VStack gap="small">
								<Text variant="h2">{block.label}</Text>
								<Text variant="body2" color="secondary">
									{block.description}
								</Text>
							</VStack>

							<BlockDemo block={block} />
						</VStack>
					</TabsPanel>
				))}
			</Tabs>
		</VStack>
	);
}
