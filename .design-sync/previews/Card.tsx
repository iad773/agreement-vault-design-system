import React from "react";
import { Card } from "agreement-vault-design-system";

const body: React.CSSProperties = { padding: "12px 22px", font: "var(--type-body)", color: "var(--text-secondary)" };

export const Titled = () => (
  <Card title="Under contract" meta="Read from executed agreements.">
    <div style={body}>The 2px vault-steel header rule marks a titled card. 1.5px border, 3px radius, no resting shadow.</div>
  </Card>
);

export const WithRows = () => (
  <Card title="Recent activity" meta="Last 7 days">
    <div style={body}>Orbit Holdings added 4 documents.</div>
    <div style={{ ...body, borderTop: "var(--border-row)" }}>Unit 12 amendment was countersigned.</div>
    <div style={{ ...body, borderTop: "var(--border-row)" }}>Wisconsin registration lapsed.</div>
  </Card>
);

export const HairlineRule = () => (
  <Card title="Deadlines" rule={false}>
    <div style={body}>A 1px hairline in place of the 2px steel rule, for panels that sit under a heading rather than carrying one.</div>
  </Card>
);

export const Untitled = () => (
  <Card padded>
    <div style={{ font: "var(--type-body)", color: "var(--text-secondary)" }}>
      An untitled, padded card. Use it as a plain surface when the section heading sits outside the card.
    </div>
  </Card>
);
