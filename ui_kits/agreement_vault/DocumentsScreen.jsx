/* Strongbox Documents: Explorer-like browse with the record right-click menu. */
/* Components arrive as globals from the design-system bundle (or the preview loader). */

const COLUMNS = [
  { key: "title", header: "Title", width: "minmax(240px, 1fr)", primary: true },
  { key: "type", header: "Type", width: "190px", muted: true },
  { key: "status", header: "Status", width: "130px" },
  { key: "effective", header: "Effective", width: "120px", numeric: true },
  { key: "filed", header: "Filed", width: "110px", numeric: true },
];

function DocumentsScreen() {
  const [selectedEntity, setSelectedEntity] = React.useState("unit-12");
  const [showInactive, setShowInactive] = React.useState(false);
  const [selectedDoc, setSelectedDoc] = React.useState(null);
  const [menu, setMenu] = React.useState(null);

  const rows = window.DOCUMENTS.map((d) => ({
    ...d,
    status: <StatusBadge status="executed" />,
  }));

  return (
    <div
      style={{ display: "flex", alignItems: "stretch", minHeight: 520, position: "relative" }}
      onClick={() => setMenu(null)}
    >
      <EntityTree
        nodes={window.ENTITIES}
        selectedId={selectedEntity}
        onSelect={(n) => setSelectedEntity(n.id)}
        showInactive={showInactive}
        onToggleInactive={() => setShowInactive(!showInactive)}
      />
      <div style={{ flex: 1, minWidth: 0, padding: "20px 28px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
          <Breadcrumb items={[{ label: "Spacely Sprockets" }, { label: "Callahan Development Group" }, { label: "Unit 12" }]} />
          <Input icon={window.Icon.search()} placeholder="Search titles and document contents" wrapperStyle={{ width: 340 }} />
        </div>
        <div style={{ overflowX: "auto" }}>
        <Card title="Unit 12" meta="Callahan Development Group &middot; 4 documents" rule={false} style={{ minWidth: 820 }}>
          <DataTable
            columns={COLUMNS}
            rows={rows}
            selectedId={selectedDoc}
            onRowClick={(row) => setSelectedDoc(row.id)}
            onRowContextMenu={(e, row) => {
              e.preventDefault();
              const host = e.currentTarget.closest("[data-kit-body]") || e.currentTarget.parentElement;
              const box = host.getBoundingClientRect();
              setSelectedDoc(row.id);
              setMenu({ x: e.clientX - box.left, y: e.clientY - box.top });
            }}
          />
        </Card>
        </div>
        <div style={{ font: "var(--weight-regular) var(--text-sm) var(--font-sans)", color: "var(--text-muted)", marginTop: 10 }}>
          Right-click a row for record actions.
        </div>
      </div>
      {menu ? <ContextMenu items={window.RECORD_MENU} x={menu.x} y={menu.y} onSelect={() => setMenu(null)} /> : null}
    </div>
  );
}

window.DocumentsScreen = DocumentsScreen;
