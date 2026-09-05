import React from "react";

export const STATUS = {
  executed: { glyph: "\u25CF", label: "EXECUTED", tone: "steel" },
  effective: { glyph: "\u25CF", label: "EFFECTIVE", tone: "steel" },
  dueSoon: { glyph: "\u25C6", label: "DUE SOON", tone: "warning" },
  renewalWindow: { glyph: "\u25C6", label: "RENEWAL WINDOW", tone: "warning" },
  overdue: { glyph: "\u25B2", label: "OVERDUE", tone: "danger" },
  draft: { glyph: "\u25CB", label: "DRAFT", tone: "draft" },
};

const tones = {
  steel: { color: "var(--status-executed-fg)", background: "var(--status-executed-bg)", border: "var(--status-executed-border)", dashed: false },  // ds-token-ok: border is a data field, interpolated into a real declaration below
  warning: { color: "var(--status-due-fg)", background: "var(--status-due-bg)", border: "var(--status-due-border)", dashed: false },  // ds-token-ok: border is a data field, interpolated into a real declaration below
  danger: { color: "var(--status-overdue-fg)", background: "var(--status-overdue-bg)", border: "var(--status-overdue-border)", dashed: false },  // ds-token-ok: border is a data field, interpolated into a real declaration below
  draft: { color: "var(--status-draft-fg)", background: "transparent", border: "var(--status-draft-border)", dashed: true },  // ds-token-ok: border is a data field, interpolated into a real declaration below
};

export function StatusBadge({ status = "executed", plain = false, children, style, ...rest }) {
  const s = STATUS[status] || STATUS.executed;
  const t = tones[s.tone];
  const label = children || s.label;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        font: "var(--type-badge)",
        letterSpacing: "var(--tracking-caps)",
        color: t.color,
        background: plain ? "transparent" : t.background,
        border: plain ? "none" : `var(--border-width-hairline) ${t.dashed ? "dashed" : "solid"} ${t.border}`,
        borderRadius: "var(--radius-md)",
        padding: plain ? 0 : "3px 8px",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true">{s.glyph}</span>
      {label}
    </span>
  );
}
