import React from "react";

export function Tag({ children, onRemove, style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        font: "var(--weight-medium) var(--text-base)/1.2 var(--font-sans)",
        color: "var(--text-secondary)",
        background: "var(--surface-plate)",
        border: "var(--border-width-hairline) solid var(--border-hairline)",
        borderRadius: "var(--radius-sm)",
        padding: "3px 8px",
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove ? (
        <button
          type="button"
          aria-label="Remove"
          onClick={onRemove}
          style={{
            border: 0,
            background: "transparent",
            color: "var(--text-muted)",
            cursor: "pointer",
            font: "var(--weight-bold) 12px var(--font-sans)",
            lineHeight: 1,
            padding: 0,
          }}
        >
          &times;
        </button>
      ) : null}
    </span>
  );
}
