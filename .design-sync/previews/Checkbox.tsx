import React from "react";
import { Checkbox } from "agreement-vault-design-system";

const row: React.CSSProperties = { display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap" };

export const States = () => (
  <div style={row}>
    <Checkbox checked readOnly label="Include inactive entities" />
    <Checkbox indeterminate label="Some rows selected" />
    <Checkbox label="Unchecked" />
    <Checkbox disabled label="Disabled" />
  </div>
);

export const RowSelection = () => (
  <div style={{ display: "grid", gap: 10, padding: "12px 14px", background: "var(--surface-plate)", border: "var(--border-card)", borderRadius: "var(--radius-md)" }}>
    <Checkbox indeterminate label="5 documents" />
    <div style={{ display: "grid", gap: 8, paddingLeft: 22 }}>
      <Checkbox checked readOnly label="Franchise Agreement - Unit 12" />
      <Checkbox checked readOnly label="Amendment No. 1 - Unit 12" />
      <Checkbox label="Personal guarantee - R. Callahan" />
    </div>
  </div>
);
