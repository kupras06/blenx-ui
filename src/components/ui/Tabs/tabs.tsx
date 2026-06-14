import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import * as stylex from "@stylexjs/stylex";
import * as React from "react";
import { tabsStyles } from "./tabs.styles";

type TabsVariant = "underline" | "ghost" | "segmented";
type ClassNameProp<State> = string | ((state: State) => string | undefined);

type TabsRootProps = Omit<TabsPrimitive.Root.Props, "className"> & {
	className?: ClassNameProp<TabsPrimitive.Root.State>;
	variant?: TabsVariant;
};

type TabsListProps = Omit<TabsPrimitive.List.Props, "className"> & {
	className?: ClassNameProp<TabsPrimitive.List.State>;
};

type TabsTabProps = Omit<TabsPrimitive.Tab.Props, "className"> & {
	className?: ClassNameProp<TabsPrimitive.Tab.State>;
};

type TabsPanelProps = Omit<TabsPrimitive.Panel.Props, "className"> & {
	className?: ClassNameProp<TabsPrimitive.Panel.State>;
};

type TabsContextValue = {
	variant: TabsVariant;
};

const DEFAULT_VARIANT: TabsVariant = "underline";

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
	return React.useContext(TabsContext) ?? { variant: DEFAULT_VARIANT };
}

function mergeClassName<State>(
	baseClassName: string,
	className?: ClassNameProp<State>,
) {
	return (state: State) => {
		const resolvedClassName =
			typeof className === "function" ? className(state) : className;
		return [baseClassName, resolvedClassName].filter(Boolean).join(" ");
	};
}

export function Tabs({
	children,
	className,
	variant = DEFAULT_VARIANT,
	...props
}: TabsRootProps) {
	return (
		<TabsContext.Provider value={{ variant }}>
			<TabsPrimitive.Root
				className={(state) => {
					const base = stylex.props(
						tabsStyles.root,
						state.orientation === "vertical" && tabsStyles.rootVertical,
					);
					return mergeClassName(base.className ?? "", className)(state);
				}}
				{...props}
			>
				{children}
			</TabsPrimitive.Root>
		</TabsContext.Provider>
	);
}

export function TabsList({ className, ...props }: TabsListProps) {
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
				);

				return mergeClassName(base.className ?? "", className)(state);
			}}
			{...props}
		/>
	);
}

export function TabsTab({ className, ...props }: TabsTabProps) {
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
				);

				return mergeClassName(base.className ?? "", className)(state);
			}}
			{...props}
		/>
	);
}

export function TabsIndicator() {
	return null;
}

export function TabsPanel({ className, ...props }: TabsPanelProps) {
	return (
		<TabsPrimitive.Panel
			className={(state) => {
				const base = stylex.props(
					tabsStyles.panel,
					state.orientation === "vertical" && tabsStyles.panelVertical,
				);
				return mergeClassName(base.className ?? "", className)(state);
			}}
			{...props}
		/>
	);
}

export { TabsPrimitive as TabsPrimitiveBase };
