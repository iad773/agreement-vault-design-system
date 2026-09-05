import React from "react";

export function Card({ title, meta, rule = true, padded = false, children, style, ...rest }) {
  return (
    <section
      style={{
        background: "var(--surface-card)",
        border: "var(--border-card)",
        borderRadius: "var(--radius-md)",
        ...style,
      }}
      {...rest}
    >
      {title ? (
        <header
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "var(--space-7)",
            padding: "var(--space-5) var(--space-10)",
            borderBottom: rule ? "var(--rule-card-header)" : "var(--border-row)",
          }}
        >
          <h2 style={{ margin: 0, font: "var(--type-card-title)", color: "var(--text-strong)" }}>{title}</h2>
          {meta ? (
            <span style={{ font: "var(--weight-regular) var(--text-sm) var(--font-sans)", color: "var(--text-muted)" }}>
              {meta}
            </span>
          ) : null}
        </header>
      ) : null}
      <div style={padded ? { padding: "var(--space-6) var(--space-10)" } : undefined}>{children}</div>
    </section>
  );
}
