import type { ReactNode } from "react";
import { Text } from "../Text";

type Variant = "info" | "success" | "warning" | "error";

type Props = {
  variant?: Variant;
  icon?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const variantVars: Record<Variant, { bg: string; fg: string; border: string }> = {
  info: {
    bg: "var(--sentiment-info-subtle)",
    fg: "var(--sentiment-info)",
    border: "var(--sentiment-info)",
  },
  success: {
    bg: "var(--sentiment-positive-subtle)",
    fg: "var(--sentiment-positive)",
    border: "var(--sentiment-positive)",
  },
  warning: {
    bg: "var(--sentiment-warning-subtle)",
    fg: "var(--sentiment-warning)",
    border: "var(--sentiment-warning)",
  },
  error: {
    bg: "var(--sentiment-negative-subtle)",
    fg: "var(--sentiment-negative)",
    border: "var(--sentiment-negative)",
  },
};

function Alert({ variant = "info", icon, style, title, description, children, className }: Props) {
  const vars = variantVars[variant];
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: icon ? "flex-start" : "center",
        gap: "12px",
        padding: "12px",
        backgroundColor: vars.bg,
        border: `1px solid ${vars.border}`,
        borderRadius: "8px",
        color: vars.fg,
        fontSize: "14px",
        lineHeight: 1.5,
        ...style,
      }}
    >
      {icon}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {title ? (
          <Text variant="h6" padding="none" margin="none">
            {title}
          </Text>
        ) : null}
        {description ? <span style={{ color: vars.fg }}>{description}</span> : null}
        {children}
      </div>
    </div>
  );
}

export { Alert };
