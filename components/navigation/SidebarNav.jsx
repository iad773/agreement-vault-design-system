import React from "react";

export function SidebarNav({ items = [], activeId, onSelect, footer, style, ...rest }) {
  return (
    <nav
      style={{
        width: "var(--sidebar-width)",
        flex: "none",
        background: "var(--surface-plate)",
        borderRight: "var(--border-width-hairline) solid var(--border-card-color)",
        padding: "var(--space-6) var(--space-4)",
        display: "flex",
        flexDirection: "column",
        gap: "1px",
        ...style,
      }}
      {...rest}
    >
      {items.map((item) => {
        if (item.divider) return <span key={item.id} style={{ height: 1, background: "var(--border-hairline)", margin: "var(--space-4) var(--space-2)" }} />;
        const active = item.id === activeId;
        if (item.child) {
          return (
            <button
              key={item.id}
              type="button"
              onClick={onSelect ? () => onSelect(item) : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                padding: "4px var(--space-5) 4px 28px",
                border: 0,
                background: "transparent",
                font: "var(--weight-regular) var(--text-base) var(--font-sans)",
                color: "var(--text-muted)",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <span aria-hidden="true" style={{ width: 6, height: 6, background: "var(--steel-400)", flex: "none" }} />
              {item.label}
            </button>
          );
        }
        return (
          <button
            key={item.id}
            type="button"
            onClick={onSelect ? () => onSelect(item) : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              padding: "6px var(--space-5)",
              border: 0,
              borderRadius: "var(--radius-md)",
              background: active ? "var(--surface-selected)" : "transparent",
              font: `${active ? "var(--weight-semibold)" : "var(--weight-medium)"} var(--text-lg) var(--font-sans)`,
              color: active ? "var(--text-inverse)" : "var(--text-secondary)",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            {item.icon}
            {item.label}
            {item.badge ? <span style={{ marginLeft: "auto" }}>{item.badge}</span> : null}
          </button>
        );
      })}
      {footer ? <div style={{ marginTop: "auto" }}>{footer}</div> : null}
    </nav>
  );
}
