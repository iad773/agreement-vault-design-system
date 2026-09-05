import React from "react";
import { Badge } from "agreement-vault-design-system";

const row: React.CSSProperties = { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" };

export const Tones = () => (
  <div style={row}>
    <Badge tone="neutral">NEUTRAL</Badge>
    <Badge tone="steel">EXECUTED</Badge>
    <Badge tone="warning">SANDBOX</Badge>
    <Badge tone="danger">OVERDUE</Badge>
    <Badge tone="inverse">3</Badge>
  </div>
);

export const Counts = () => (
  <div style={{ ...row, gap: 18 }}>
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--type-body)", color: "var(--text-body)" }}>
      Review <Badge tone="inverse">3</Badge>
    </span>
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: "var(--radius-md)", background: "var(--surface-inverse)", color: "var(--on-dark)", font: "var(--type-body)" }}>
      Alerts <Badge tone="inverse">12</Badge>
    </span>
  </div>
);

export const Dashed = () => (
  <div style={row}>
    <Badge tone="neutral" dashed glyph="○">DRAFT</Badge>
    <Badge tone="neutral" dashed>UNFILED</Badge>
  </div>
);

export const Reserved = () => (
  <div style={{ display: "grid", gap: 10 }}>
    <div style={row}>
      <Badge tone="warning" glyph="◆">SANDBOX</Badge>
      <Badge tone="danger" glyph="●">OVERDUE</Badge>
    </div>
    <p style={{ margin: 0, font: "var(--type-table-cell)", color: "var(--text-muted)", maxWidth: 460 }}>
      Amber and red are reserved for the urgency system and the sandbox band. Never use them to color a neutral count.
    </p>
  </div>
);
