Use `DataTable` for any list of records. It is the core surface of the product, so keep it dense: no card inside the card, no extra vertical padding.

```jsx
<DataTable
  columns={[
    { key: "title", header: "Title", primary: true },
    { key: "type", header: "Type", width: "190px", muted: true },
    { key: "status", header: "Status", width: "130px" },
    { key: "effective", header: "Effective", width: "120px", numeric: true },
    { key: "filed", header: "Filed", width: "110px", numeric: true },
  ]}
  rows={[{ id: "1", title: "Franchise Agreement - Unit 12", type: "Franchise agreement", status: <StatusBadge status="executed" />, effective: "Mar 3, 2023", filed: "Mar 10, 2023" }]}
  onRowContextMenu={openMenu}
/>
```

Set `urgency` on a row only when that record is genuinely overdue or due soon. Right-click opens `ContextMenu`; keyboard users get the same actions from the row's action menu.
