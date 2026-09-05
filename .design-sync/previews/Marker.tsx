import React from "react";
import { Marker } from "agreement-vault-design-system";

const cell: React.CSSProperties = { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, minWidth: 92 };
const label: React.CSSProperties = { font: "var(--type-table-cell)", color: "var(--text-muted)" };

export const Kinds = () => (
  <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
    <div style={cell}><Marker kind="finding" /><span style={label}>finding</span></div>
    <div style={cell}><Marker kind="check" /><span style={label}>check</span></div>
    <div style={cell}><Marker kind="overdue" /><span style={label}>overdue</span></div>
    <div style={cell}><Marker kind="upcoming" /><span style={label}>upcoming</span></div>
  </div>
);

export const Geometry = () => (
  <div style={{ display: "grid", gap: 10 }}>
    <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
      <div style={cell}><Marker kind="finding" size={16} /><span style={label}>square = finding</span></div>
      <div style={cell}><Marker kind="overdue" size={16} /><span style={label}>circle = time</span></div>
    </div>
    <p style={{ margin: 0, font: "var(--type-table-cell)", color: "var(--text-muted)", maxWidth: 460 }}>
      Squares are findings, circles are deadlines. Filled means it is wrong now, open means it is coming.
    </p>
  </div>
);

export const InLine = () => (
  <div style={{ display: "grid", gap: 8, font: "var(--type-body)", color: "var(--text-body)" }}>
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Marker kind="overdue" /> Wisconsin franchise registration is not in force
    </span>
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Marker kind="upcoming" /> Illinois renewal opens in 21 days
    </span>
  </div>
);
