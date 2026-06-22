/* eslint-disable jsx-a11y/prefer-tag-over-role */

import {
  type ReactNode,
  type KeyboardEvent,
  type Dispatch,
  type SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import clsx from "clsx";
import { MagnifyingGlass } from "@phosphor-icons/react";
import {
  root,
  inputWrapper,
  inputIcon,
  input as inputStyle,
  list,
  empty,
  group as groupStyle,
  groupHeading,
  item,
  itemActive,
  itemDisabled,
  separator,
} from "./command.css";

interface CommandItemData {
  id: string;
  value: string;
  keywords?: string[];
  disabled: boolean;
}

interface CommandContextValue {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  filteredItems: CommandItemData[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  onItemSelect: (value: string) => void;
  registerItem: (item: CommandItemData) => () => void;
  listboxId: string;
}

const CommandContext = createContext<CommandContextValue | null>(null);

function useCommandContext() {
  const ctx = useContext(CommandContext);
  if (!ctx) {
    throw new Error("Command compound components must be used within <Command>");
  }
  return ctx;
}

interface CommandProps {
  children: ReactNode;
  onItemSelect?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

let listboxIdCounter = 0;
function nextListboxId(): string {
  return `cmd-listbox-${++listboxIdCounter}`;
}

export function Command({ children, onItemSelect, className, style }: CommandProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [items, setItems] = useState<Map<string, CommandItemData>>(new Map());
  const listboxId = useRef(nextListboxId()).current;

  const handleItemSelect = useCallback(
    (value: string) => {
      onItemSelect?.(value);
    },
    [onItemSelect],
  );

  const registerItem = useCallback((item: CommandItemData) => {
    setItems((prev) => {
      const next = new Map(prev);
      next.set(item.id, item);
      return next;
    });
    return () => {
      setItems((prev) => {
        const next = new Map(prev);
        next.delete(item.id);
        return next;
      });
    };
  }, []);

  const filteredItems = useMemo(() => {
    const allItems = [...items.values()];
    if (!query.trim()) return allItems;
    const q = query.toLowerCase().trim();
    return allItems.filter((item) => {
      if (item.disabled) return false;
      if (item.value.toLowerCase().includes(q)) return true;
      if (item.keywords?.some((k) => k.toLowerCase().includes(q))) return true;
      return false;
    });
  }, [query, items]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const contextValue = useMemo<CommandContextValue>(
    () => ({
      query,
      setQuery,
      filteredItems,
      activeIndex,
      setActiveIndex,
      onItemSelect: handleItemSelect,
      registerItem,
      listboxId,
    }),
    [query, filteredItems, activeIndex, handleItemSelect, registerItem, listboxId],
  );

  return (
    <CommandContext.Provider value={contextValue}>
      <div
        role="combobox"
        aria-expanded
        aria-haspopup="listbox"
        aria-controls={listboxId}
        className={clsx(root, className)}
        style={style}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
}

interface CommandInputProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CommandInput({
  placeholder = "Search\u2026",
  className,
  style,
}: CommandInputProps) {
  const { query, setQuery } = useCommandContext();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape" && query) {
        e.preventDefault();
        e.stopPropagation();
        setQuery("");
        return;
      }
      if (e.key === "Escape") {
        (e.target as HTMLInputElement).blur();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const list = (e.currentTarget as HTMLElement).parentElement
          ?.nextElementSibling as HTMLElement | null;
        list?.focus();
      }
    },
    [query, setQuery],
  );

  return (
    <div className={clsx(inputWrapper, className)} style={style}>
      <span className={inputIcon}>
        <MagnifyingGlass size={16} weight="regular" />
      </span>
      <input
        className={inputStyle}
        role="searchbox"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
    </div>
  );
}

interface CommandListProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CommandList({ children, className, style }: CommandListProps) {
  const { filteredItems, activeIndex, setActiveIndex, onItemSelect, listboxId } =
    useCommandContext();
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (filteredItems.length === 0) return;

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          setActiveIndex((prev) => {
            const next = prev < filteredItems.length - 1 ? prev + 1 : 0;
            return next;
          });
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          setActiveIndex((prev) => {
            const next = prev > 0 ? prev - 1 : filteredItems.length - 1;
            return next;
          });
          break;
        }
        case "Enter": {
          e.preventDefault();
          const activeItem = filteredItems[activeIndex];
          if (activeItem && !activeItem.disabled) {
            onItemSelect(activeItem.value);
          }
          break;
        }
        case "Escape": {
          e.preventDefault();
          (e.target as HTMLElement).blur();
          break;
        }
      }
    },
    [filteredItems, setActiveIndex, onItemSelect, activeIndex],
  );

  return (
    <div
      ref={listRef}
      id={listboxId}
      role="listbox"
      tabIndex={-1}
      className={clsx(list, className)}
      style={style}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}

interface CommandEmptyProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CommandEmpty({ children, className, style }: CommandEmptyProps) {
  const { query, filteredItems } = useCommandContext();

  if (query.trim() && filteredItems.length === 0) {
    return (
      <div className={clsx(empty, className)} style={style}>
        {children ?? "No results found."}
      </div>
    );
  }

  return null;
}

interface CommandGroupProps {
  heading?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CommandGroup({ heading, children, className, style }: CommandGroupProps) {
  return (
    <div role="group" aria-label={heading} className={clsx(groupStyle, className)} style={style}>
      {heading && <div className={groupHeading}>{heading}</div>}
      {children}
    </div>
  );
}

interface CommandItemProps {
  value: string;
  keywords?: string[];
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CommandItem({
  value,
  keywords,
  disabled = false,
  children,
  className,
  style,
}: CommandItemProps) {
  const { filteredItems, activeIndex, setActiveIndex, registerItem, onItemSelect } =
    useCommandContext();

  useEffect(() => {
    const unregister = registerItem({
      id: value,
      value,
      keywords,
      disabled,
    });
    return () => {
      unregister();
    };
  }, [value, keywords, disabled, registerItem]);

  const isVisible = useMemo(
    () => filteredItems.some((item) => item.id === value),
    [filteredItems, value],
  );

  const itemIndex = useMemo(
    () => filteredItems.findIndex((item) => item.id === value),
    [filteredItems, value],
  );

  const isActive = activeIndex >= 0 && itemIndex === activeIndex;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({ block: "nearest" });
    }
  }, [isActive]);

  const handleClick = useCallback(() => {
    if (!disabled) {
      onItemSelect(value);
    }
  }, [disabled, onItemSelect, value]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!disabled) {
          onItemSelect(value);
        }
      }
    },
    [disabled, onItemSelect, value],
  );

  const handleMouseEnter = useCallback(() => {
    if (!disabled && itemIndex >= 0) {
      setActiveIndex(itemIndex);
    }
  }, [disabled, setActiveIndex, itemIndex]);

  if (!isVisible) return null;

  return (
    <div
      ref={itemRef}
      role="option"
      aria-selected={isActive}
      aria-disabled={disabled}
      data-value={value}
      tabIndex={-1}
      className={clsx(item, isActive && itemActive, disabled && itemDisabled, className)}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
}

interface CommandSeparatorProps {
  className?: string;
  style?: React.CSSProperties;
}

export function CommandSeparator({ className, style }: CommandSeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={clsx(separator, className)}
      style={style}
    />
  );
}
