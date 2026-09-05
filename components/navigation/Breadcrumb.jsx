import React from "react";

export function Breadcrumb({ items = [], onNavigate, style, ...rest }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ font: "var(--weight-regular) var(--text-base) var(--font-sans)", color: "var(--text-muted)", ...style }}
      {...rest}
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={item.id || String(item.label)}>
            {last ? (
              <span style={{ font: "var(--weight-semibold) var(--text-base) var(--font-sans)", color: "var(--text-strong)" }}>{item.label}</span>
            ) : (
              <button
                type="button"
                onClick={onNavigate ? () => onNavigate(item) : undefined}
                style={{ border: 0, background: "transparent", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }}
              >
                {item.label}
              </button>
            )}
            {!last ? <span aria-hidden="true" style={{ color: "var(--steel-400)", margin: "0 6px" }}>&gt;</span> : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
