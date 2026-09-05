import React from "react";
import { Card, DataTable, StatusBadge } from "agreement-vault-design-system";

const columns = [
  { key: "title", header: "Title", primary: true },
  { key: "type", header: "Type", width: "150px", muted: true },
  { key: "status", header: "Status", width: "130px" },
  { key: "filed", header: "Filed", width: "110px", numeric: true },
];

const rows = [
  { id: "1", title: "Franchise Agreement - Unit 12", type: "Franchise agreement", status: <StatusBadge status="executed" plain />, filed: "Mar 10, 2023" },
  { id: "2", title: "Amendment No. 1 - Unit 12", type: "Amendment", status: <StatusBadge status="executed" plain />, filed: "Jun 20, 2024" },
  { id: "3", title: "Personal guarantee - R. Callahan", type: "Personal guarantee", status: <StatusBadge status="draft" plain />, filed: "-" },
  { id: "4", title: "2027 FDD renewal filing", type: "FDD receipt", status: <StatusBadge status="dueSoon" plain />, filed: "-", urgency: "dueSoon" },
  { id: "5", title: "Wisconsin registration renewal", type: "State registration", status: <StatusBadge status="overdue" plain />, filed: "-", urgency: "overdue" },
];

export const DocumentTable = () => (
  <Card title="Unit 12" meta="5 documents">
    <DataTable columns={columns} rows={rows} />
  </Card>
);

export const WithSelection = () => (
  <Card>
    <DataTable columns={columns} rows={rows} selectedId="2" />
  </Card>
);

export const Bare = () => <DataTable columns={columns.slice(0, 3)} rows={rows.slice(0, 3)} />;
