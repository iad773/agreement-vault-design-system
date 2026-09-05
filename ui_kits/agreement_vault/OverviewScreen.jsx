/* Strongbox Overview: the morning report. Content held constant from the
   Agreement Vault Dashboard exploration. */
/* Components arrive as globals from the design-system bundle (or the preview loader). */

function SectionHeading() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
      <div>
        <div style={{ font: "var(--type-label-caps)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>
          Tuesday, September 1, 2026
        </div>
        <div style={{ font: "var(--type-page-heading)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>Your morning report</div>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <Input icon={window.Icon.search()} placeholder="Find a document, unit or person" wrapperStyle={{ width: 300 }} />
        <Button variant="primary" icon={window.Icon.upload()}>Add documents</Button>
      </div>
    </div>
  );
}

function UnitsCard() {
  const stat = (value, label) => (
    <div key={label}>
      <div style={{ font: "var(--weight-black) var(--text-num-md)/1.1 var(--font-slab)", color: "var(--text-strong)" }}>{value}</div>
      <div style={{ font: "var(--weight-regular) var(--text-base) var(--font-sans)", color: "var(--text-muted)", marginTop: 2 }}>{label}</div>
    </div>
  );
  const schedule = (name, detail, status) => (
    <div key={name} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "10px 22px", borderTop: "var(--border-row)", font: "var(--type-body)", color: "var(--text-strong)" }}>
      <span>
        <span style={{ fontWeight: "var(--weight-semibold)" }}>{name}</span> <span style={{ color: "var(--text-muted)" }}>{detail}</span>
      </span>
      <span style={{ font: "var(--weight-bold) var(--text-base) var(--font-sans)", color: "var(--text-link)" }}>{status}</span>
    </div>
  );
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", gap: 28, padding: "14px 22px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ font: "var(--type-hero-number)", color: "var(--text-strong)" }}>20</span>
          <span style={{ font: "var(--weight-bold) var(--text-2xl) var(--font-sans)", color: "var(--text-strong)" }}>units</span>
        </div>
        <span style={{ width: 1, height: 46, background: "var(--border-hairline)" }} />
        <div style={{ display: "flex", gap: 44 }}>
          {stat("13", "open")}
          {stat("5", "signed, not open")}
          {stat("2", "in development")}
        </div>
      </div>
      {schedule("Callahan Development Group", "3 of 4 open. Last unit due Dec 2027.", "Ahead")}
      {schedule("Redline Ventures", "0 of 2 open. Site search under way. First unit due Aug 2027.", "On track")}
    </Card>
  );
}

function UnderContractCard() {
  return (
    <Card title="Under contract" meta="Read from executed agreements. Nothing here is a projection.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 24px", alignItems: "start" }}>
        <StatBlock
          hero="$105,000"
          note="Next due Aug 2027, $35,000 when Redline signs its first unit agreement."
          provenance="Franchise fees committed under development agreements, not yet collected. 3 units, 2 developers."
        />
        <div style={{ height: "100%", background: "var(--border-hairline)" }} />
        <StatBlock
          stats={[
            { value: "13", label: "open units" },
            { value: "5.8%", label: "weighted average royalty" },
            { value: "6.4", unit: "yrs", label: "weighted average term remaining" },
          ]}
          provenance="Royalty base in force. Shortest term remaining: Unit 2, 26 months."
        />
      </div>
    </Card>
  );
}

function AttentionCard() {
  return (
    <Card title="Needs your attention" meta="3 findings from this morning's check">
      <FindingRow
        kind="overdue"
        severity="overdue"
        headline="Wisconsin franchise registration is not in force"
        detail="and no alert was on file."
        timing="Lapsed 90 days ago, Jun 3"
        action="Open registration"
      />
      <FindingRow
        kind="finding"
        headline="Unit 6 has no signed franchise agreement on file."
        detail="The folder holds an unsigned draft, the FDD receipt and the lease addendum."
        timing="Open since Mar 2022"
        action="Open unit 6"
      />
      <FindingRow
        kind="check"
        severity="warning"
        headline="Unit 10's 2024 territory amendment overlaps Unit 14's protected territory."
        detail="Check the boundary language in both."
        timing="Found Aug 19"
        action="Compare territories"
      />
    </Card>
  );
}

function FeedCard({ title, action, rows, firstWidth }) {
  return (
    <Card title={title} meta={<span style={{ font: "var(--weight-semibold) var(--text-base) var(--font-sans)", color: "var(--text-link)" }}>{action}</span>}>
      {rows.map((r) => (
        <div key={r.a + r.b} style={{ display: "grid", gridTemplateColumns: firstWidth + " 1fr", gap: "0 14px", alignItems: "baseline", padding: "10px 18px", borderTop: "var(--border-row)" }}>
          <span style={{ font: "var(--weight-regular) var(--text-sm) var(--font-mono)", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>{r.a}</span>
          <span style={{ font: "var(--type-body)", color: "var(--text-strong)" }}>
            {r.b} {r.c ? <span style={{ color: "var(--text-muted)" }}>{r.c}</span> : null}
          </span>
        </div>
      ))}
    </Card>
  );
}

function OverviewScreen() {
  return (
    <div style={{ display: "grid", gap: "var(--gap-stack)", alignContent: "start", padding: "26px 32px", minWidth: 0 }}>
      <SectionHeading />
      <UnitsCard />
      <UnderContractCard />
      <AttentionCard />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--gap-card)" }}>
        <FeedCard title="Recent activity" action="All activity" firstWidth="56px" rows={window.ACTIVITY.map((a) => ({ a: a.d, b: a.t }))} />
        <FeedCard title="Upcoming" action="Deadlines" firstWidth="88px" rows={window.UPCOMING.map((u) => ({ a: u.w, b: u.t, c: u.d }))} />
      </div>
    </div>
  );
}

window.OverviewScreen = OverviewScreen;
