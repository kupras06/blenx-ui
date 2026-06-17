// oxlint-disable max-statements
"use client";

import * as stylex from "@stylexjs/stylex";
import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { HANDLE_SIZE, splitterStyles } from "./splitter.styles";

// ─── Public types ──────────────────────────────────────────────────────────

export interface SplitterPanelProps {
	defaultSize?: number;
	size?: number;
	minSize?: number;
	maxSize?: number;
	collapsible?: boolean;
	collapsedSize?: number;
	children?: React.ReactNode;
	style?: stylex.StyleXStyles;
}

export interface SplitterHandleProps {
	disabled?: boolean;
	style?: stylex.StyleXStyles;
}

export interface SplitterProps {
	orientation?: "horizontal" | "vertical";
	disabled?: boolean;
	storageKey?: string;
	children?: React.ReactNode;
	onResizeStart?: () => void;
	onResize?: (sizes: number[]) => void;
	onResizeEnd?: (sizes: number[]) => void;
	style?: stylex.StyleXStyles;
}

// ─── Internal types ────────────────────────────────────────────────────────

interface PanelConstraints {
	minSize: number;
	maxSize: number;
}

interface InternalCtxValue {
	orientation: "horizontal" | "vertical";
	disabled: boolean;
	sizes: number[];
	panelConstraintsRef: React.MutableRefObject<(PanelConstraints | undefined)[]>;
	panelRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
	setSizes: React.Dispatch<React.SetStateAction<number[]>>;
	handlePointerDown: (handleIndex: number, e: React.PointerEvent) => void;
	handleKeyDown: (handleIndex: number, e: React.KeyboardEvent) => void;
}

const InternalCtx = createContext<InternalCtxValue | null>(null);

function useInternalCtx(): InternalCtxValue {
	const ctx = useContext(InternalCtx);
	if (!ctx) {
		throw new Error(
			"Splitter compound components must be used within <Splitter>",
		);
	}
	return ctx;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function isPanel(
	child: React.ReactNode,
): child is React.ReactElement<SplitterPanelProps> {
	return React.isValidElement(child) && child.type === SplitterPanel;
}

function isHandle(
	child: React.ReactNode,
): child is React.ReactElement<SplitterHandleProps> {
	return React.isValidElement(child) && child.type === SplitterHandle;
}

function calculateSizes(
	panelProps: SplitterPanelProps[],
	storageKey?: string,
): number[] {
	const count = panelProps.length;

	if (count === 0) return [];

	// Restore from storage
	if (storageKey) {
		try {
			const stored = localStorage.getItem(storageKey);
			if (stored) {
				const parsed = JSON.parse(stored) as number[];
				if (Array.isArray(parsed) && parsed.length === count) {
					return parsed;
				}
			}
		} catch {
			/* Ignore */
		}
	}

	const result = Array.from({ length: count }, () => 0);
	let usedSize = 0;
	let unsetCount = count;

	for (let i = 0; i < count; i++) {
		const p = panelProps[i];
		const sz = p.size ?? p.defaultSize;
		if (sz != null) {
			result[i] = sz;
			usedSize += sz;
			unsetCount--;
		}
	}

	const equalShare = unsetCount > 0 ? (100 - usedSize) / unsetCount : 0;
	for (let i = 0; i < count; i++) {
		if (result[i] == null) {
			result[i] = equalShare;
		}
	}

	const total = result.reduce((a, b) => a + b, 0);
	if (Math.abs(total - 100) > 0.01 && total > 0) {
		for (let i = 0; i < count; i++) {
			result[i] = (result[i] / total) * 100;
		}
	}

	return result;
}

function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

// ─── Splitter ──────────────────────────────────────────────────────────────

export function Splitter({
	orientation = "horizontal",
	disabled = false,
	storageKey,
	children,
	onResizeStart,
	onResize,
	onResizeEnd,
	style,
}: SplitterProps) {
	const rootRef = useRef<HTMLDivElement>(null);
	const panelConstraintsRef = useRef<(PanelConstraints | undefined)[]>([]);
	const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
	const sizesRef = useRef<number[]>([]);
	const isFirstRender = useRef(true);

	const onResizeStartRef = useRef(onResizeStart);
	const onResizeRef = useRef(onResize);
	const onResizeEndRef = useRef(onResizeEnd);
	onResizeStartRef.current = onResizeStart;
	onResizeRef.current = onResize;
	onResizeEndRef.current = onResizeEnd;

	// Collect panel props from children (for initial size calculation)
	const panelPropsList = useMemo(() => {
		const list: SplitterPanelProps[] = [];
		React.Children.forEach(children, (child) => {
			if (isPanel(child)) {
				list.push(child.props);
			}
		});
		return list;
	}, [children]);

	const panelCount = panelPropsList.length;

	// ── State ──────────────────────────────────────────────────────────────
	const [sizes, setSizes] = useState<number[]>(() =>
		calculateSizes(panelPropsList, storageKey),
	);
	sizesRef.current = sizes;

	// Recalculate if panel count changes
	const prevPanelCount = useRef(panelCount);
	useEffect(() => {
		if (prevPanelCount.current !== panelCount) {
			prevPanelCount.current = panelCount;
			setSizes(calculateSizes(panelPropsList, storageKey));
		}
	}, [panelCount, panelPropsList, storageKey]);

	// ── Persist ────────────────────────────────────────────────────────────
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		if (storageKey) {
			try {
				localStorage.setItem(storageKey, JSON.stringify(sizes));
			} catch {
				/* Ignore */
			}
		}
	}, [storageKey, sizes]);

	// ── Pointer resize ─────────────────────────────────────────────────────
	const handlePointerDown = useCallback(
		(handleIndex: number, e: React.PointerEvent) => {
			if (disabled) return;
			e.preventDefault();

			const root = rootRef.current;
			if (!root) return;

			const rect = root.getBoundingClientRect();
			const totalPx = orientation === "horizontal" ? rect.width : rect.height;
			const startPos = orientation === "horizontal" ? e.clientX : e.clientY;

			const handleCount = panelCount - 1;
			const handlesPx = handleCount * HANDLE_SIZE;
			const availablePx = totalPx - handlesPx;

			if (availablePx <= 0) return;

			const startSizes = [...sizesRef.current];

			onResizeStartRef.current?.();

			const onMove = (ev: PointerEvent) => {
				const currentPos =
					orientation === "horizontal" ? ev.clientX : ev.clientY;
				const deltaPx = currentPos - startPos;
				const deltaPct = (deltaPx / availablePx) * 100;

				const newSizes = [...startSizes];
				let left = startSizes[handleIndex] + deltaPct;
				let right = startSizes[handleIndex + 1] - deltaPct;

				const cLeft = panelConstraintsRef.current[handleIndex];
				const cRight = panelConstraintsRef.current[handleIndex + 1];
				const minL = cLeft?.minSize ?? 0;
				const maxL = cLeft?.maxSize ?? 100;
				const minR = cRight?.minSize ?? 0;
				const maxR = cRight?.maxSize ?? 100;

				if (left < minL) {
					right += left - minL;
					left = minL;
				}
				if (left > maxL) {
					right -= left - maxL;
					left = maxL;
				}
				if (right < minR) {
					left -= minR - right;
					right = minR;
				}
				if (right > maxR) {
					left += right - maxR;
					right = maxR;
				}

				left = clamp(left, minL, maxL);
				right = clamp(right, minR, maxR);

				newSizes[handleIndex] = left;
				newSizes[handleIndex + 1] = right;

				setSizes(newSizes);
				onResizeRef.current?.(newSizes);
			};

			const onUp = () => {
				document.removeEventListener("pointermove", onMove);
				document.removeEventListener("pointerup", onUp);
				document.body.style.userSelect = "";
				document.body.style.pointerEvents = "";
				onResizeEndRef.current?.([...sizesRef.current]);
			};

			document.addEventListener("pointermove", onMove);
			document.addEventListener("pointerup", onUp);
			document.body.style.userSelect = "none";
			document.body.style.pointerEvents = "none";
		},
		[disabled, orientation, panelCount],
	);

	// ── Keyboard resize ────────────────────────────────────────────────────
	const handleKeyDown = useCallback(
		(handleIndex: number, e: React.KeyboardEvent) => {
			if (disabled) return;

			let delta = 0;
			const step = e.shiftKey ? 10 : 1;

			if (orientation === "horizontal") {
				if (e.key === "ArrowLeft") delta = -step;
				else if (e.key === "ArrowRight") delta = step;
			} else {
				if (e.key === "ArrowUp") delta = -step;
				else if (e.key === "ArrowDown") delta = step;
			}

			if (delta === 0) return;
			e.preventDefault();

			const currentSizes = sizesRef.current;
			const newSizes = [...currentSizes];
			let left = currentSizes[handleIndex] + delta;
			let right = currentSizes[handleIndex + 1] - delta;

			const cLeft = panelConstraintsRef.current[handleIndex];
			const cRight = panelConstraintsRef.current[handleIndex + 1];
			const minL = cLeft?.minSize ?? 0;
			const maxL = cLeft?.maxSize ?? 100;
			const minR = cRight?.minSize ?? 0;
			const maxR = cRight?.maxSize ?? 100;

			if (left < minL) {
				right += left - minL;
				left = minL;
			}
			if (left > maxL) {
				right -= left - maxL;
				left = maxL;
			}
			if (right < minR) {
				left -= minR - right;
				right = minR;
			}
			if (right > maxR) {
				left += right - maxR;
				right = maxR;
			}

			left = clamp(left, minL, maxL);
			right = clamp(right, minR, maxR);

			newSizes[handleIndex] = left;
			newSizes[handleIndex + 1] = right;

			setSizes(newSizes);
			onResizeRef.current?.(newSizes);
		},
		[disabled, orientation],
	);

	// ── Context value ──────────────────────────────────────────────────────
	const ctxValue = useMemo<InternalCtxValue>(
		() => ({
			orientation,
			disabled,
			sizes,
			panelConstraintsRef,
			panelRefs,
			setSizes,
			handlePointerDown,
			handleKeyDown,
		}),
		[orientation, disabled, sizes, handlePointerDown, handleKeyDown],
	);

	// ── Render children with indices ──────────────────────────────────────
	let panelIdx = 0;
	let handleIdx = 0;

	const mapped = React.Children.map(children, (child) => {
		if (isPanel(child)) {
			const idx = panelIdx++;
			return (
				<SplitterPanel
					{...(child.props as SplitterPanelProps)}
					__panelIndex={idx}
					key={child.key ?? `splitter-panel-${idx}`}
				/>
			);
		}
		if (isHandle(child)) {
			const idx = handleIdx++;
			return (
				<SplitterHandle
					{...(child.props as SplitterHandleProps)}
					__handleIndex={idx}
					key={child.key ?? `splitter-handle-${idx}`}
				/>
			);
		}
		return child;
	});

	return (
		<InternalCtx.Provider value={ctxValue}>
			<div
				ref={rootRef}
				{...stylex.props(
					splitterStyles.root,
					orientation === "horizontal"
						? splitterStyles.rootHorizontal
						: splitterStyles.rootVertical,
					disabled && splitterStyles.rootDisabled,
					style,
				)}
				data-orientation={orientation}
			>
				{mapped}
			</div>
		</InternalCtx.Provider>
	);
}

// ─── SplitterPanel ─────────────────────────────────────────────────────────

export function SplitterPanel({
	defaultSize: _defaultSize,
	size: _size,
	minSize = 0,
	maxSize = 100,
	collapsible: _collapsible = false,
	collapsedSize: _collapsedSize = 0,
	children,
	style,
	__panelIndex,
}: SplitterPanelProps & { __panelIndex?: number }) {
	const ctx = useInternalCtx();
	const index = __panelIndex!;

	// Register constraints
	useEffect(() => {
		const ref = ctx.panelConstraintsRef.current;
		ref[index] = { minSize, maxSize };
		return () => {
			ref[index] = undefined;
		};
	}, [index, minSize, maxSize, ctx.panelConstraintsRef]);

	const panelSize = ctx.sizes[index] ?? 0;

	return (
		<div
			ref={(el) => {
				ctx.panelRefs.current[index] = el;
			}}
			{...stylex.props(splitterStyles.panel, style)}
			style={{ flex: `${panelSize} 0 0` }}
			data-slot="splitter-panel"
		>
			{children}
		</div>
	);
}

// ─── SplitterHandle ────────────────────────────────────────────────────────

export function SplitterHandle({
	disabled: handleDisabled,
	style,
	__handleIndex,
}: SplitterHandleProps & { __handleIndex?: number }) {
	const ctx = useInternalCtx();
	const index = __handleIndex!;
	const [active, setActive] = useState(false);

	const onPointerDown = useCallback(
		(e: React.PointerEvent) => {
			if (handleDisabled || ctx.disabled) return;
			setActive(true);
			ctx.handlePointerDown(index, e);
		},
		[handleDisabled, ctx, index],
	);

	const onKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			ctx.handleKeyDown(index, e);
		},
		[ctx, index],
	);

	useEffect(() => {
		if (!active) return;
		const onUp = () => setActive(false);
		document.addEventListener("pointerup", onUp);
		return () => document.removeEventListener("pointerup", onUp);
	}, [active]);

	const panelSize = ctx.sizes[index] ?? 0;

		return (
			// oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
			<hr
				tabIndex={handleDisabled || ctx.disabled ? -1 : 0}
				aria-orientation={ctx.orientation}
				aria-valuenow={Math.round(panelSize)}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-disabled={handleDisabled || ctx.disabled || undefined}
				onPointerDown={onPointerDown}
				onKeyDown={onKeyDown}
				{...stylex.props(
					splitterStyles.handle,
					ctx.orientation === "horizontal"
						? splitterStyles.handleHorizontal
						: splitterStyles.handleVertical,
					active && splitterStyles.handleActive,
					(handleDisabled || ctx.disabled) && splitterStyles.handleDisabled,
					style,
				)}
				data-slot="splitter-handle"
			/>
	);
}

// ─── Namespace props ───────────────────────────────────────────────────────

Splitter.Panel = SplitterPanel;
Splitter.Handle = SplitterHandle;
