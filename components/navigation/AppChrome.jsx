import React from "react";

export function AppChrome({ brandName, mark, badge, actions, style, ...rest }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)",
        height: "var(--chrome-height)",
        padding: "0 var(--space-9)",
        background: "var(--surface-inverse)",
        ...style,
      }}
      {...rest}
    >
      {mark || (
        <span
          aria-hidden="true"
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "3.5px solid var(--on-dark)",
            display: "grid",
            placeItems: "center",
            flex: "none",
          }}
        >
          <span style={{ width: 7, height: 7, background: "var(--on-dark)", display: "block" }} />
        </span>
      )}
      <span style={{ font: "var(--weight-black) 15px var(--font-slab)", color: "var(--text-inverse)" }}>{brandName}</span>
      {badge}
      <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>{actions}</span>
    </header>
  );
}
