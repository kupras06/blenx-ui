type Props = {
  color: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
};

export function ColorSwatch({ color, size = 16, style, className }: Props) {
  return (
    <span
      className={className}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: 4,
        ...style,
      }}
    />
  );
}
