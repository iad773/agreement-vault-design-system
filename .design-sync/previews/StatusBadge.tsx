import React from "react";
import { StatusBadge } from "agreement-vault-design-system";

const row: React.CSSProperties = { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" };

export const Vocabulary = () => (
  <div style={row}>
    <StatusBadge status="executed" />
    <StatusBadge status="effective" />
    <StatusBadge status="dueSoon" />
    <StatusBadge status="renewalWindow" />
    <StatusBadge status="overdue" />
    <StatusBadge status="draft" />
  </div>
);

export const PlainForTableCells = () => (
  <div style={row}>
    <StatusBadge status="executed" plain />
    <StatusBadge status="dueSoon" plain />
    <StatusBadge status="overdue" plain />
    <StatusBadge status="draft" plain />
  </div>
);

export const SurvivesGreyscale = () => (
  <div style={{ display: "grid", gap: 10 }}>
    <div style={{ ...row, filter: "grayscale(1)" }}>
      <StatusBadge status="executed" />
      <StatusBadge status="dueSoon" />
      <StatusBadge status="overdue" />
      <StatusBadge status="draft" />
    </div>
    <p style={{ margin: 0, font: "var(--type-table-cell)", color: "var(--text-muted)", maxWidth: 470 }}>
      The same four badges in greyscale. Glyph and wording carry the state; color only reinforces it.
    </p>
  </div>
);
