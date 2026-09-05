import React from "react";
import { Tag } from "agreement-vault-design-system";

const row: React.CSSProperties = { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" };

export const DocumentTypes = () => (
  <div style={row}>
    <Tag>Franchise agreement</Tag>
    <Tag>Amendment</Tag>
    <Tag>Personal guarantee</Tag>
    <Tag>Lease rider</Tag>
  </div>
);

export const RemovableFilters = () => (
  <div style={row}>
    <Tag onRemove={() => {}}>Callahan Development Group</Tag>
    <Tag onRemove={() => {}}>Filed after Jan 2023</Tag>
    <Tag onRemove={() => {}}>State registration</Tag>
  </div>
);

export const InAFilterBar = () => (
  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", padding: "10px 12px", background: "var(--surface-plate)", border: "var(--border-card)", borderRadius: "var(--radius-md)" }}>
    <span style={{ font: "var(--type-label-caps)", letterSpacing: "var(--tracking-caps)", color: "var(--text-muted)" }}>FILTERS</span>
    <Tag onRemove={() => {}}>Unit 12</Tag>
    <Tag onRemove={() => {}}>Executed</Tag>
  </div>
);
