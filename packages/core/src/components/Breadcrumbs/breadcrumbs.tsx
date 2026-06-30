"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { CaretRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { root, list, item, link, page, separator, ellipsis, srOnly } from "./breadcrumbs.css";

type NavProps = useRender.ComponentProps<"nav"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function Breadcrumb({ className, style, render, ...props }: NavProps) {
  const merged = mergeProps({ className: clsx(root, className), style }, props, {
    "aria-label": "breadcrumb",
  });
  return useRender({ defaultTagName: "nav", props: merged, render });
}

type OlProps = ComponentPropsWithoutRef<"ol"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function BreadcrumbList({ className, style, ...props }: OlProps) {
  return <ol className={clsx(list, className)} style={style} {...props} />;
}

type LiProps = ComponentPropsWithoutRef<"li"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function BreadcrumbItem({ className, style, ...props }: LiProps) {
  return <li className={clsx(item, className)} style={style} {...props} />;
}

type LinkProps = useRender.ComponentProps<"a"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function BreadcrumbLink({ className, style, render, ...props }: LinkProps) {
  const merged = mergeProps({ className: clsx(link, className), style }, props);
  return useRender({ defaultTagName: "a", props: merged, render });
}

type SpanProps = ComponentPropsWithoutRef<"span"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function BreadcrumbPage({ className, style, ...props }: SpanProps) {
  return <span className={clsx(page, className)} style={style} aria-current="page" {...props} />;
}

export function BreadcrumbSeparator({ children, className, style, ...props }: LiProps) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={clsx(separator, className)}
      style={style}
      {...props}
    >
      {children ?? <CaretRightIcon size={16} />}
    </li>
  );
}

export function BreadcrumbEllipsis({ className, style, ...props }: SpanProps) {
  return (
    <span role="presentation" className={clsx(ellipsis, className)} style={style} {...props}>
      <DotsThreeIcon size={16} />
      <span className={srOnly}>More</span>
    </span>
  );
}
