import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import * as stylex from "@stylexjs/stylex";
import * as React from "react";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { tabsStyles } from "./tabs.styles";

type TabsVariant = "underline" | "ghost" | "segmented";

type TabsRootProps = PropsWithStylex<TabsPrimitive.Root.Props> & {
	variant?: TabsVariant;
};

type TabsListProps = PropsWithStylex<TabsPrimitive.List.Props> & {};

type TabsTabProps = PropsWithStylex<TabsPrimitive.Tab.Props>;

type TabsPanelProps = PropsWithStylex<TabsPrimitive.Panel.Props>;

type TabsContextValue = {
	variant: TabsVariant;
};

const DEFAULT_VARIANT: TabsVariant = "underline";

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
	return React.useContext(TabsContext) ?? { variant: DEFAULT_VARIANT };
}

export function Tabs({
	children,
	style,
	variant = DEFAULT_VARIANT,
	...props
}: TabsRootProps) {
	const contextValue = React.useMemo(() => ({ variant }), [variant]);

	return (
		<TabsContext.Provider value={contextValue}>
			<TabsPrimitive.Root
				className={(state) => {
					const base = stylex.props(
						tabsStyles.root,
						state.orientation === "vertical" && tabsStyles.rootVertical,
						style,
					);
					return base.className ?? "";
				}}
				{...props}
			>
				{children}
			</TabsPrimitive.Root>
		</TabsContext.Provider>
	);
}

export function TabsList({ style, ...props }: TabsListProps) {
	const { variant } = useTabsContext();

	return (
		<TabsPrimitive.List
			className={(state) => {
				const isVertical = state.orientation === "vertical";

				const base = stylex.props(
					tabsStyles.list,
					isVertical && tabsStyles.listVertical,

					variant === "underline" && tabsStyles.listUnderline,
					variant === "ghost" && tabsStyles.listGhost,
					variant === "segmented" && tabsStyles.listSegmented,
					style,
				);

				return base.className;
			}}
			{...props}
		/>
	);
}

export function TabsTab({ style, ...props }: TabsTabProps) {
	const { variant } = useTabsContext();

	return (
		<TabsPrimitive.Tab
			className={(state) => {
				const base = stylex.props(
					tabsStyles.tab,
					variant === "underline" && tabsStyles.tabUnderline,
					variant === "ghost" && tabsStyles.tabGhost,
					variant === "segmented" && tabsStyles.tabSegmented,
					state.orientation === "vertical" && tabsStyles.tabVertical,
					state.active &&
						variant === "underline" &&
						tabsStyles.tabUnderlineActive,
					state.active && variant === "ghost" && tabsStyles.tabGhostActive,
					state.active &&
						variant === "segmented" &&
						tabsStyles.tabSegmentedActive,
					state.disabled && tabsStyles.tabDisabled,
					style,
				);

				return base.className ?? "";
			}}
			{...props}
		/>
	);
}

export function TabsIndicator() {
	return null;
}

function TabsPanel({ style, ...props }: TabsPanelProps) {
	return (
		<TabsPrimitive.Panel
			className={(state) => {
				const base = stylex.props(
					tabsStyles.panel,
					state.orientation === "vertical" && tabsStyles.panelVertical,
					style,
				);
				return base.className ?? "";
			}}
			{...props}
		/>
	);
}

export { TabsPanel };
