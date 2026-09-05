import React from "react";

export function ContextMenu({ items = [], x = 0, y = 0, onSelect, anchored = true, style, ...rest }) {
  return (
    <div
      role="menu"
      style={{
        position: anchored ? "absolute" : "relative",
        top: anchored ? y : undefined,
        left: anchored ? x : undefined,
        width: 238,
        background: "var(--surface-card)",
        border: "var(--border-width-card) solid var(--border-card-color)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-overlay)",
        padding: "4px 0",
        zIndex: 30,
        ...style,
      }}
      {...rest}
    >
      {items.map((item, i) =>
        item.separator ? (
          <span key={`sep-${i}`} style={{ display: "block", height: 1, background: "var(--border-row)", margin: "4px 0" }} />
        ) : (
          <button
            key={item.id || String(item.label)}
            type="button"
            role="menuitem"
            onClick={onSelect ? () => onSelect(item) : undefined}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--vault-steel-tint)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = item.emphasis ? "var(--vault-steel-tint)" : "transparent")}
            style={{
              display: "block",
              width: "100%",
              border: 0,
              background: item.emphasis ? "var(--vault-steel-tint)" : "transparent",
              padding: "5px var(--space-6)",
              font: `${item.emphasis ? "var(--weight-semibold)" : "var(--weight-regular)"} var(--text-base) var(--font-sans)`,
              color: item.danger ? "var(--danger)" : "var(--text-strong)",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            {item.label}
          </button>
        )
      )}
    </div>
  );
}
