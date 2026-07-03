import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import clsx from "clsx";
import * as React from "react";
import {
  listUnderline,
  listGhost,
  listSegmented,
  tab,
  tabUnderline,
  tabGhost,
  tabSegmented,
  tabVertical,
  tabGhostActive,
  tabSegmentedActive,
  tabDisabled,
  panelVertical,
} from "./tabs.css";
import type { BaseSprinkles } from "../../utils/sprinkles.css";
import { baseSprinkles } from "../../utils/sprinkles.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";

type TabsVariant = "underline" | "ghost" | "segmented";

type TabsRootProps = TabsPrimitive.Root.Props & {
  variant?: TabsVariant;
} & BaseSprinkles;

type TabsListProps = TabsPrimitive.List.Props & BaseSprinkles;

type TabsTabProps = TabsPrimitive.Tab.Props & BaseSprinkles;

type TabsPanelProps = TabsPrimitive.Panel.Props & BaseSprinkles;

type TabsContextValue = {
  variant: TabsVariant;
};

const DEFAULT_VARIANT: TabsVariant = "underline";

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  return React.useContext(TabsContext) ?? { variant: DEFAULT_VARIANT };
}

export function Tabs({ children, className, variant = DEFAULT_VARIANT, ...props }: TabsRootProps) {
  const [sprinkles, rest] = applyBaseSprinkles<TabsPrimitive.Root.Props>({
    display: "flex",
    flexDirection: "column",
    width: "full",
    padding: "none",
    borderRadius: "none",
    ...props,
  });
  const contextValue = React.useMemo(() => ({ variant }), [variant]);

  return (
    <TabsContext.Provider value={contextValue}>
      <TabsPrimitive.Root
        className={(state) =>
          clsx(
            sprinkles,
            state.orientation === "vertical" &&
              baseSprinkles({ flexDirection: "row", alignItems: "start", gap: "lg" }),
            className,
          )
        }
        {...rest}
      >
        {children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: TabsListProps) {
  const { variant } = useTabsContext();
  const [sprinkles, rest] = applyBaseSprinkles<TabsPrimitive.List.Props>({
    display: "flex",
    padding: "none",
    borderRadius: "none",
    position: "relative",
    overflow: "hidden",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    ...props,
  });

  return (
    <TabsPrimitive.List
      className={clsx(
        sprinkles,
        variant === "underline" && listUnderline,
        variant === "ghost" && listGhost,
        variant === "segmented" && listSegmented,
        className,
      )}
      {...rest}
    />
  );
}

export function TabsTab({ className, ...props }: TabsTabProps) {
  const { variant } = useTabsContext();
  const [sprinkles, rest] = applyBaseSprinkles<TabsPrimitive.Tab.Props>({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xs",
    zIndex: "1",
    position: "relative",
    backgroundColor: "transparent",
    px: "sm",
    borderRadius: "default",
    ...props,
  });

  return (
    <TabsPrimitive.Tab
      className={(state) =>
        clsx(
          sprinkles,
          tab,
          variant === "underline" && tabUnderline,
          variant === "ghost" && tabGhost,
          variant === "segmented" && tabSegmented,
          state.orientation === "vertical" && tabVertical,
          state.active && variant === "ghost" && tabGhostActive,
          state.active && variant === "segmented" && tabSegmentedActive,
          state.disabled && tabDisabled,
          className,
        )
      }
      {...rest}
    />
  );
}

export function TabsIndicator() {
  return null;
}

function TabsPanel({ className, ...props }: TabsPanelProps) {
  const [sprinkles, rest] = applyBaseSprinkles<TabsPrimitive.Panel.Props>({
    borderRadius: "none",
    ...props,
  });
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
