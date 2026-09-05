import React from "react";

const tones = {
  neutral: { color: "var(--text-muted)", background: "transparent", border: "var(--steel-400)" },  // ds-token-ok: `border` is a data field, interpolated below
  steel: { color: "var(--status-executed-fg)", background: "var(--status-executed-bg)", border: "var(--status-executed-border)" },  // ds-token-ok: `border` is a data field, interpolated below
  warning: { color: "var(--status-due-fg)", background: "var(--status-due-bg)", border: "var(--status-due-border)" },  // ds-token-ok: `border` is a data field, interpolated below
  danger: { color: "var(--status-overdue-fg)", background: "var(--status-overdue-bg)", border: "var(--status-overdue-border)" },  // ds-token-ok: `border` is a data field, interpolated below
  inverse: { color: "var(--on-dark)", background: "var(--vault-steel)", border: "var(--vault-steel)" },  // ds-token-ok: `border` is a data field, interpolated below
};

export function Badge({ tone = "neutral", glyph = null, dashed = false, children, style, ...rest }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        font: "var(--type-badge)",
        letterSpacing: "var(--tracking-caps)",
        color: t.color,
        background: t.background,
        border: `var(--border-width-hairline) ${dashed ? "dashed" : "solid"} ${t.border}`,
        borderRadius: "var(--radius-md)",
        padding: "3px 8px",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {glyph}
      {children}
    </span>
  );
}
