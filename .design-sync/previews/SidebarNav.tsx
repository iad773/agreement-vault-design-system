import React from "react";
import { Badge, SidebarNav } from "agreement-vault-design-system";

const g = (d: string) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d }} />
);
const grid = '<rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect>';
const doc = '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path><path d="M14 2v5h5"></path>';
const review = '<path d="M22 12h-6l-2 3h-4l-2-3H2"></path><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>';
const rooms = '<circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="5" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>';
const settings = '<path d="M3 5h10"></path><circle cx="16" cy="5" r="2"></circle><path d="M19 5h2"></path><path d="M3 12h4"></path><circle cx="10" cy="12" r="2"></circle><path d="M13 12h8"></path>';

const items = [
  { id: "overview", label: "Overview", icon: g(grid) },
  { id: "documents", label: "Documents", icon: g(doc) },
  { id: "review", label: "Review", icon: g(review), badge: <Badge tone="inverse">3</Badge> },
  { id: "rooms", label: "Rooms", icon: g(rooms) },
  { id: "room-1", label: "2027 FDD Renewal", child: true },
  { id: "room-2", label: "Unit 12 Transfer", child: true },
  { id: "div", divider: true },
  { id: "settings", label: "Settings", icon: g(settings) },
];

export const Default = () => <SidebarNav items={items} activeId="documents" style={{ border: "var(--border-card)" }} />;

export const OverviewActive = () => <SidebarNav items={items} activeId="overview" style={{ border: "var(--border-card)" }} />;

// Note: child items (open Rooms) do not take the active treatment - SidebarNav
// only applies it to top-level items - so this shows the footer slot instead.
export const WithFooter = () => (
  <SidebarNav
    items={items}
    activeId="rooms"
    style={{ border: "var(--border-card)", minHeight: 320 }}
    footer={
      <div style={{ padding: "10px var(--space-5)", borderTop: "var(--border-row)", font: "var(--type-table-cell)", color: "var(--text-muted)" }}>
        Spacely Sprockets Franchising
      </div>
    }
  />
);
