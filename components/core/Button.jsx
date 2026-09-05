import React from "react";

const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  font: "var(--type-button)",
  borderRadius: "var(--radius-md)",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "background var(--transition-fast), border-color var(--transition-fast)",
};

const sizes = {
  sm: { padding: "6px 12px", fontSize: "var(--text-base)" },
  md: { padding: "9px 18px" },
  lg: { padding: "11px 22px", fontSize: "var(--text-lg)" },
};

const variants = {
  primary: {
    background: "var(--vault-steel)",
    color: "var(--on-dark)",
    border: "var(--border-width-card) solid var(--vault-steel)",
  },
  secondary: {
    background: "var(--white)",
    color: "var(--text-strong)",
    border: "var(--border-width-card) solid var(--vault-steel)",
  },
  quiet: {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "var(--border-width-card) solid var(--border-card-color)",
  },
  link: {
    background: "transparent",
    color: "var(--text-link)",
    border: "var(--border-width-card) solid transparent",
    padding: 0,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
};

export function Button({
  variant = "primary",
  size = "md",
  icon = null,
  disabled = false,
  fullWidth = false,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;

  const hoverStyle =
    !disabled && hover
      ? variant === "primary"
        ? { background: "var(--vault-steel-hover)", borderColor: "var(--vault-steel-hover)" }
        : variant === "link"
        ? {}
        : { background: "var(--vault-steel-tint)" }
      : null;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...base,
        ...(variant === "link" ? {} : sizes[size] || sizes.md),
        ...v,
        ...hoverStyle,
        width: fullWidth ? "100%" : undefined,
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
