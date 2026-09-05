import React from "react";

export function Switch({ checked = false, label, onChange, style, ...rest }) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        font: "var(--weight-regular) var(--text-sm) var(--font-sans)",
        color: "var(--text-secondary)",
        cursor: "pointer",
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          position: "relative",
          width: 24,
          height: 14,
          borderRadius: "var(--radius-pill)",
          background: checked ? "var(--vault-steel)" : "var(--steel-400)",
          transition: "background var(--transition-fast)",
          flex: "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 2,
            left: checked ? 12 : 2,
            width: 10,
            height: 10,
            borderRadius: "var(--radius-pill)",
            background: "var(--white)",
            transition: "left var(--transition-fast)",
          }}
        />
      </span>
      {label}
    </label>
  );
}
