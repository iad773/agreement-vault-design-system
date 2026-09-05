import React from "react";
import { AppChrome, Badge, SandboxBanner } from "agreement-vault-design-system";

export const Default = () => <SandboxBanner sticky={false} />;

export const CustomMessage = () => (
  <SandboxBanner sticky={false} message="Sample data. Nothing you do here touches your real records." />
);

export const AboveTheChrome = () => (
  <div style={{ border: "var(--border-card)" }}>
    <SandboxBanner sticky={false} />
    <AppChrome brandName="Spacely Sprockets Franchising" badge={<Badge tone="warning">SANDBOX</Badge>} />
  </div>
);
