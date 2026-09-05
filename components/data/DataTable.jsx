import React from "react";

export function DataTable({ columns = [], rows = [], onRowContextMenu, onRowClick, selectedId, style, ...rest }) {
  const template = columns.map((c) => c.width || "1fr").join(" ");
  return (
    <div style={style} {...rest}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: template,
          gap: "var(--space-4)",
          padding: "var(--space-3) var(--space-5)",
          borderBottom: "var(--rule-card-header)",
          font: "var(--type-label-caps)",
          letterSpacing: "var(--tracking-caps)",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {columns.map((c) => (
          <span key={c.key} style={{ textAlign: c.align || "left" }}>
            {c.header}
          </span>
        ))}
      </div>
      {rows.map((row) => {
        const tint =
          row.urgency === "overdue"
            ? "var(--status-overdue-bg)"
            : row.urgency === "dueSoon"
            ? "var(--status-due-bg)"
            : row.id === selectedId
            ? "var(--vault-steel-tint)"
            : "transparent";
        return (
          <div
            key={row.id}
            onClick={onRowClick ? () => onRowClick(row) : undefined}
            onContextMenu={onRowContextMenu ? (e) => onRowContextMenu(e, row) : undefined}
            style={{
              display: "grid",
              gridTemplateColumns: template,
              gap: "var(--space-4)",
              alignItems: "center",
              minHeight: "var(--row-height)",
              padding: "var(--space-5)",
              borderBottom: "var(--border-row)",
              background: tint,
              cursor: onRowClick ? "pointer" : "default",
            }}
          >
            {columns.map((c) => (
              <span
                key={c.key}
                style={{
                  textAlign: c.align || "left",
                  font: c.primary ? "var(--type-table-title)" : "var(--type-table-cell)",
                  color: c.primary ? "var(--text-strong)" : c.muted ? "var(--text-muted)" : "var(--text-secondary)",
                  fontVariantNumeric: c.numeric ? "tabular-nums" : undefined,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {row[c.key]}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
