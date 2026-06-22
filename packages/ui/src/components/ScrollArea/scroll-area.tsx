"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import clsx from "clsx";
import type React from "react";
import type { CSSProperties } from "react";
import {
  root,
  viewport,
  viewportFade,
  viewportGutter,
  contentFill,
  scrollbar,
  scrollbarHorizontal,
  scrollbarVertical,
  thumb,
} from "./scroll-area.css";
import { type NamedHeight } from "#utils/heights";

type ScrollAreaProps = ScrollAreaPrimitive.Root.Props & {
  scrollFade?: boolean;
  scrollbarGutter?: boolean;
  fill?: boolean;
  height?: NamedHeight | CSSProperties["height"];
  className?: string;
  style?: React.CSSProperties;
};

function ScrollArea({
  children,
  scrollFade = false,
  scrollbarGutter = false,
  fill = false,
  height = "60svh",
  className,
  style,
  ...props
}: ScrollAreaProps): React.ReactElement {
  const dynamicHeight: React.CSSProperties =
    typeof height === "string" ? { height, maxHeight: height } : {};
  return (
    <ScrollAreaPrimitive.Root
      className={clsx(root, className)}
      style={{ ...dynamicHeight, ...style }}
      data-slot="scroll-area-root"
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={clsx(viewport, scrollFade && viewportFade, scrollbarGutter && viewportGutter)}
        data-slot="scroll-area-viewport"
      >
        <ScrollAreaPrimitive.Content
          className={clsx(fill && contentFill)}
          data-slot="scroll-area-content"
        >
          {children}
        </ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
      <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
  );
}

type ScrollBarProps = ScrollAreaPrimitive.Scrollbar.Props & {
  className?: string;
  style?: React.CSSProperties;
};

function ScrollBar({
  orientation = "vertical",
  className,
  style,
  ...props
}: ScrollBarProps): React.ReactElement {
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={clsx(
        scrollbar,
        orientation === "horizontal" && scrollbarHorizontal,
        orientation === "vertical" && scrollbarVertical,
        className,
      )}
      style={style}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className={thumb} data-slot="scroll-area-thumb" />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };
export type { ScrollAreaProps, ScrollBarProps };
