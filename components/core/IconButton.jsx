import React from "react";

export function IconButton({ label, icon, size = 32, tone = "default", onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: { color: "var(--text-muted)", background: "transparent" },
    onDark: { color: "var(--on-dark-muted)", background: "transparent" },
  };
  const t = tones[tone] || tones.default;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size,
        height: size,
        display: "grid",
        placeItems: "center",
        border: "var(--border-width-hairline) solid transparent",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        transition: "background var(--transition-fast)",
        ...t,
        background: hover
          ? tone === "onDark"
            ? "rgba(255,255,255,0.10)"
            : "var(--surface-hover)"
          : t.background,
        ...style,
      }}
      {...rest}
    >
      {icon}
    </button>
  );
}
