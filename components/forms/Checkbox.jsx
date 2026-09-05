import React from "react";

export function Checkbox({ checked = false, indeterminate = false, label, onChange, disabled = false, style, ...rest }) {
  const mark = indeterminate ? "–" : checked ? "✓" : "";
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        font: "var(--weight-regular) var(--text-base) var(--font-sans)",
        color: disabled ? "var(--text-muted)" : "var(--text-strong)",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          width: 15,
          height: 15,
          display: "grid",
          placeItems: "center",
          borderRadius: "var(--radius-sm)",
          border: `var(--border-width-card) solid ${checked || indeterminate ? "var(--vault-steel)" : "var(--steel-400)"}`,
          background: checked || indeterminate ? "var(--vault-steel)" : "var(--white)",
          color: "var(--on-dark)",
          font: "var(--weight-bold) 10px var(--font-sans)",
          lineHeight: 1,
        }}
      >
        {mark}
      </span>
      {label}
    </label>
  );
}
