import React from "react";
import { Switch } from "agreement-vault-design-system";

export const States = () => (
  <div style={{ display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap" }}>
    <Switch checked readOnly label="Show inactive" />
    <Switch label="Show inactive" />
  </div>
);

export const InAViewBar = () => (
  <div style={{ display: "flex", gap: 18, alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "var(--surface-plate)", border: "var(--border-card)", borderRadius: "var(--radius-md)", width: 420 }}>
    <span style={{ font: "var(--type-body)", color: "var(--text-body)" }}>Entities</span>
    <Switch checked readOnly label="Show inactive" />
  </div>
);
