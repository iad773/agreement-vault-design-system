import React from "react";

const markers = {
  finding: { shape: "square", filled: true, color: "var(--steel-900)" },
  check: { shape: "square", filled: false, color: "var(--warning)" },
  overdue: { shape: "circle", filled: true, color: "var(--danger)" },
  upcoming: { shape: "circle", filled: false, color: "var(--warning)" },
};

export function Marker({ kind = "finding", size = 10 }) {
  const m = markers[kind] || markers.finding;
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        flex: "none",
        boxSizing: "border-box",
        borderRadius: m.shape === "circle" ? "50%" : 0,
        background: m.filled ? m.color : "transparent",
        border: m.filled ? "none" : `2.5px solid ${m.color}`,
      }}
    />
  );
}

export function FindingRow({ kind = "finding", severity = "neutral", headline, detail, timing, action, onAction, style, ...rest }) {
  const surface =
    severity === "overdue" ? "var(--status-overdue-bg)" : severity === "warning" ? "var(--status-due-bg)" : "transparent";
  const timingColor =
    severity === "overdue" ? "var(--status-overdue-fg)" : severity === "warning" ? "var(--status-due-fg)" : "var(--text-strong)";
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "16px 1fr 210px 150px",
        alignItems: "center",
        gap: "var(--space-6)",
        padding: "13px var(--space-10)",
        borderBottom: "var(--border-row)",
        background: surface,
        ...style,
      }}
      {...rest}
    >
      <Marker kind={kind} />
      <span
        style={{
          font: `${severity === "overdue" ? "var(--weight-bold)" : "var(--weight-semibold)"} var(--text-xl)/var(--leading-body) var(--font-sans)`,
          color: "var(--text-strong)",
        }}
      >
        {headline}
        {detail ? (
          <span style={{ fontWeight: "var(--weight-regular)", color: "var(--text-muted)" }}> {detail}</span>
        ) : null}
      </span>
      <span style={{ font: "var(--weight-bold) var(--text-base) var(--font-sans)", color: timingColor }}>{timing}</span>
      {action ? (
        <button
          type="button"
          onClick={onAction}
          style={{
            border: 0,
            background: "transparent",
            font: "var(--weight-semibold) var(--text-base) var(--font-sans)",
            color: "var(--text-link)",
            textAlign: "right",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {action}
        </button>
      ) : (
        <span />
      )}
    </div>
  );
}
