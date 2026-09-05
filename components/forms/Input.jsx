import React from "react";

export function Input({ icon = null, label, hint, invalid = false, style, wrapperStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "grid", gap: "6px", ...wrapperStyle }}>
      {label ? (
        <span style={{ font: "var(--type-label-caps)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {label}
        </span>
      ) : null}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          background: "var(--white)",
          border: `var(--border-width-card) solid ${invalid ? "var(--danger)" : "var(--border-card-color)"}`,
          borderRadius: "var(--radius-md)",
          padding: "6px 12px",
          color: "var(--text-muted)",
          boxShadow: focus ? "var(--focus-ring)" : "none",
        }}
      >
        {icon}
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            minWidth: 0,
            border: 0,
            outline: "none",
            background: "transparent",
            font: "var(--weight-regular) var(--text-base) var(--font-sans)",
            color: "var(--text-strong)",
            ...style,
          }}
          {...rest}
        />
      </span>
      {hint ? (
        <span style={{ font: "var(--weight-regular) var(--text-sm) var(--font-sans)", color: invalid ? "var(--danger)" : "var(--text-muted)" }}>
          {hint}
        </span>
      ) : null}
    </label>
  );
}
