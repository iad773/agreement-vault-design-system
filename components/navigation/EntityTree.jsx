import React from "react";

export function EntityTree({ nodes = [], selectedId, onSelect, showInactive, onToggleInactive, style, ...rest }) {
  return (
    <aside
      style={{
        width: "var(--tree-width)",
        flex: "none",
        background: "var(--surface-plate)",
        borderRight: "var(--border-width-hairline) solid var(--border-card-color)",
        padding: "var(--space-5) var(--space-4)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2px var(--space-3) var(--space-4)" }}>
        <span style={{ font: "var(--type-label-caps)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Entities
        </span>
        {onToggleInactive ? (
          <label style={{ display: "flex", alignItems: "center", gap: "6px", font: "var(--weight-regular) 12px var(--font-sans)", color: "var(--text-muted)", cursor: "pointer" }}>
            <input type="checkbox" checked={!!showInactive} onChange={onToggleInactive} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
            <span aria-hidden="true" style={{ position: "relative", width: 24, height: 14, borderRadius: "var(--radius-pill)", background: showInactive ? "var(--vault-steel)" : "var(--steel-400)", flex: "none" }}>
              <span style={{ position: "absolute", top: 2, left: showInactive ? 12 : 2, width: 10, height: 10, borderRadius: "var(--radius-pill)", background: "var(--white)" }} />
            </span>
            Show inactive
          </label>
        ) : null}
      </div>
      {nodes.map((node) => {
        const selected = node.id === selectedId;
        const indent = node.depth ? 28 + (node.depth - 1) * 16 : undefined;
        return (
          <button
            key={node.id}
            type="button"
            onClick={onSelect ? () => onSelect(node) : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
              width: "100%",
              border: 0,
              borderRadius: "var(--radius-md)",
              background: selected ? "var(--surface-selected)" : "transparent",
              padding: node.depth ? `4px var(--space-3) 4px ${indent}px` : "5px var(--space-3)",
              font: `${selected ? "var(--weight-semibold)" : "var(--weight-medium)"} ${node.depth ? "var(--text-base)" : "var(--text-md)"} var(--font-sans)`,
              color: selected ? "var(--text-inverse)" : "var(--text-secondary)",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            {!node.depth ? (
              <span aria-hidden="true" style={{ color: selected ? "var(--on-dark-muted)" : "var(--steel-500)", fontSize: 9, width: 10 }}>
                {node.expanded ? "\u25BE" : "\u25B8"}
              </span>
            ) : null}
            <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{node.name}</span>
            {node.count != null ? (
              <span style={{ font: "var(--weight-regular) 12px var(--font-sans)", color: selected ? "var(--on-dark-muted)" : "var(--steel-500)" }}>
                {node.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </aside>
  );
}
