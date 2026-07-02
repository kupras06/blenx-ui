import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import clsx from "clsx";
import * as React from "react";
import {
  root,
  rootVertical,
  list,
  listUnderline,
  listGhost,
  listSegmented,
  tab,
  tabUnderline,
  tabGhost,
  tabSegmented,
  tabVertical,
  tabUnderlineActive,
  tabGhostActive,
  tabSegmentedActive,
  tabDisabled,
  panelVertical,
} from "./tabs.css";
import type { BaseSprinkles } from "../../utils/sprinkles.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";

type TabsVariant = "underline" | "ghost" | "segmented";

type TabsRootProps = TabsPrimitive.Root.Props & {
  variant?: TabsVariant;
};

type TabsListProps = TabsPrimitive.List.Props;

type TabsTabProps = TabsPrimitive.Tab.Props;

type TabsPanelProps = TabsPrimitive.Panel.Props & BaseSprinkles;

type TabsContextValue = {
  variant: TabsVariant;
};

const DEFAULT_VARIANT: TabsVariant = "underline";

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  return React.useContext(TabsContext) ?? { variant: DEFAULT_VARIANT };
}

export function Tabs({ children, variant = DEFAULT_VARIANT, ...props }: TabsRootProps) {
  const contextValue = React.useMemo(() => ({ variant }), [variant]);

  return (
    <TabsContext.Provider value={contextValue}>
      <TabsPrimitive.Root
        className={(state) => clsx(root, state.orientation === "vertical" && rootVertical)}
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
      className={clsx(
        list,
        variant === "underline" && listUnderline,
        variant === "ghost" && listGhost,
        variant === "segmented" && listSegmented,
        className,
      )}
      {...props}
    />
  );
}

export function TabsTab({ className, ...props }: TabsTabProps) {
  const { variant } = useTabsContext();

  return (
    <TabsPrimitive.Tab
      className={(state) =>
        clsx(
          tab,
          variant === "underline" && tabUnderline,
          variant === "ghost" && tabGhost,
          variant === "segmented" && tabSegmented,
          state.orientation === "vertical" && tabVertical,
          state.active && variant === "underline" && tabUnderlineActive,
          state.active && variant === "ghost" && tabGhostActive,
          state.active && variant === "segmented" && tabSegmentedActive,
          state.disabled && tabDisabled,
          className,
        )
      }
      {...props}
    />
  );
}

export function TabsIndicator() {
  return null;
}

function TabsPanel({ className, ...props }: TabsPanelProps) {
  const [sprinkles, rest] = applyBaseSprinkles<TabsPrimitive.Panel.Props>(props);
  return (
    <TabsPrimitive.Panel
      className={(state) =>
        clsx(sprinkles, state.orientation === "vertical" && panelVertical, className)
      }
      {...rest}
    />
  );
}

export { TabsPanel };
