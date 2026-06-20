import type React from "react";
import type { ComponentProps } from "react";
import { DocsH1, DocsH2, DocsH3 } from "./DocsH";
import { DocsParagraph } from "./DocsParagraph";
import { DocsUl, DocsOl, DocsLi } from "./DocsList";
import { DocsLink } from "./DocsLink";
import { DocsTable } from "./DocsTable";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";
import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { borderRadius, fontSize } from "@blenx-dev/ui/lib/theme/tokens.stylex";

const inlineCodeStyles = stylex.create({
	code: {
		fontFamily: "ui-monospace, SFMono-Regular, monospace",
		fontSize: fontSize.xsmall,
		backgroundColor: theme.surfaceSubtle,
		padding: "2px 6px",
		borderRadius: borderRadius.small,
		color: theme.contentPrimary,
		whiteSpace: "nowrap",
	},
});

function InlineCode(props: ComponentProps<"code">) {
	return <code {...stylex.props(inlineCodeStyles.code)} {...props} />;
}

function Pre({ children, ...props }: ComponentProps<"pre">) {
	const child = Array.isArray(children) ? children[0] : children;
	if (!child || typeof child !== "object" || !("props" in (child as object))) {
		return <pre {...props}>{children}</pre>;
	}

	const codeElement = child as React.ReactElement<ComponentProps<"code">>;
	const className = codeElement.props?.className ?? "";
	const language = className.replace(/^language-/, "");
	const code =
		typeof codeElement.props?.children === "string"
			? codeElement.props.children
			: "";

	if (!code) {
		return <pre {...props}>{children}</pre>;
	}

	return <CodeBlock code={code} language={language} />;
}

const tableHeadStyles = stylex.create({
	headerRow: {
		backgroundColor: theme.surfaceSubtle,
	},
	headerCell: {
		padding: "10px 16px",
		fontWeight: 600,
		fontSize: fontSize.small,
		textAlign: "left",
		whiteSpace: "nowrap",
		color: theme.contentPrimary,
		borderBottom: `1px solid ${theme.border}`,
	},
	cell: {
		padding: "10px 16px",
		fontSize: fontSize.small,
		borderBottom: `1px solid ${theme.borderSubtle}`,
		color: theme.contentSecondary,
		verticalAlign: "top",
		lineHeight: 1.6,
	},
});

function Th(props: ComponentProps<"th">) {
	return <th {...stylex.props(tableHeadStyles.headerCell)} {...props} />;
}

function Td(props: ComponentProps<"td">) {
	return <td {...stylex.props(tableHeadStyles.cell)} {...props} />;
}

function Thead(props: ComponentProps<"thead">) {
	return <thead {...stylex.props(tableHeadStyles.headerRow)} {...props} />;
}

function Tr(props: ComponentProps<"tr">) {
	return <tr {...props} />;
}

function Tbody(props: ComponentProps<"tbody">) {
	return <tbody {...props} />;
}

const mdxComponents = {
	h1: DocsH1,
	h2: DocsH2,
	h3: DocsH3,
	h4: DocsH3,
	h5: DocsH3,
	h6: DocsH3,
	p: DocsParagraph,
	ul: DocsUl,
	ol: DocsOl,
	li: DocsLi,
	a: DocsLink,
	pre: Pre,
	code: InlineCode,
	table: DocsTable,
	thead: Thead,
	tbody: Tbody,
	tr: Tr,
	th: Th,
	td: Td,
	Callout,
};

export { mdxComponents };
