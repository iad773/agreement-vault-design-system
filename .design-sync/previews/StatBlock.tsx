import React from "react";
import { Card, StatBlock } from "agreement-vault-design-system";

export const UnderContract = () => (
  <Card title="Under contract" meta="Read from executed agreements.">
    <StatBlock
      hero="$105,000"
      stats={[
        { value: "13", label: "open units" },
        { value: "5.8%", label: "weighted average royalty" },
        { value: "6.4", unit: "yrs", label: "weighted average term remaining" },
      ]}
      note="Next due Aug 2027, $35,000 when Redline signs its first unit agreement."
      provenance="Read from executed agreements. Nothing here is a projection."
    />
  </Card>
);

export const WithHeroLabel = () => (
  <Card title="Royalty base">
    <StatBlock
      hero="$4.2M"
      heroLabel="Trailing twelve months"
      stats={[
        { value: "31", label: "reporting units" },
        { value: "2", label: "units not reporting" },
      ]}
      provenance="Read from unit royalty statements."
    />
  </Card>
);

export const StatsOnly = () => (
  <Card padded>
    <StatBlock
      stats={[
        { value: "24", label: "documents" },
        { value: "3", label: "deadlines" },
        { value: "1", label: "registration" },
      ]}
    />
  </Card>
);
