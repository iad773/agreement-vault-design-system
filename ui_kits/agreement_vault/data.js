const NAV = [
  { id: "overview", label: "Overview", key: "overview" },
  { id: "documents", label: "Documents", key: "documents" },
  { id: "review", label: "Review", key: "review", count: 3 },
  { id: "deadlines", label: "Deadlines", key: "deadlines" },
  { id: "registrations", label: "Registrations", key: "registrations" },
  { id: "development", label: "Development", key: "development" },
  { id: "units", label: "Units", key: "units" },
  { id: "health", label: "Document Health", key: "health" },
  { id: "rooms", label: "Rooms", key: "rooms" },
  { id: "room-fdd", label: "2027 FDD Renewal", child: true },
  { id: "room-transfer", label: "Unit 12 Transfer", child: true },
  { id: "divider", divider: true },
  { id: "records", label: "Records", key: "records" },
  { id: "settings", label: "Settings", key: "settings" },
];

const ENTITIES = [
  { id: "gearhart", name: "Gearhart Enterprises LLC", count: 24 },
  { id: "callahan", name: "Callahan Development Group", count: 31, expanded: true },
  { id: "unit-4", name: "Unit 4", depth: 1 },
  { id: "unit-12", name: "Unit 12", depth: 1 },
  { id: "unit-19", name: "Unit 19", depth: 1 },
  { id: "orbit", name: "Orbit Holdings", count: 18 },
  { id: "bluesky", name: "BlueSky Ops LLC", count: 12 },
  { id: "fourth-main", name: "Fourth & Main LLC", count: 9 },
  { id: "northline", name: "Northline Operating LLC", count: 22 },
  { id: "redline", name: "Redline Ventures", count: 11 },
];

const DOCUMENTS = [
  { id: "fa-12", title: "Franchise Agreement - Unit 12", type: "Franchise agreement", effective: "Mar 3, 2023", filed: "Mar 10, 2023" },
  { id: "am-1", title: "Amendment No. 1 - Unit 12", type: "Amendment", effective: "Jun 18, 2024", filed: "Jun 20, 2024" },
  { id: "pg-dw", title: "Personal Guarantee - D. Whitfield", type: "Personal guarantee", effective: "Mar 3, 2023", filed: "Mar 10, 2023" },
  { id: "lr-12", title: "Lease Rider - Unit 12", type: "Lease rider", effective: "Feb 12, 2023", filed: "Mar 10, 2023" },
];

const ACTIVITY = [
  { d: "Aug 29", t: "Renewal addendum for Unit 3 filed" },
  { d: "Aug 27", t: "Lease addendum for Unit 17 filed" },
  { d: "Aug 19", t: "Territory overlap between Units 10 and 14 found" },
  { d: "Aug 14", t: "Illinois registration renewed through Aug 2027" },
];

const UPCOMING = [
  { w: "4 months", t: "2027 FDD renewal filing due", d: "Dec 31" },
  { w: "11 months", t: "Redline's first unit due to open", d: "Aug 2027" },
  { w: "16 months", t: "Callahan's last unit due to open", d: "Dec 2027" },
  { w: "26 months", t: "Unit 2 franchise agreement expires", d: "Nov 2028" },
];

const RECORD_MENU = [
  { label: "Open", emphasis: true },
  { label: "Copy link" },
  { label: "Download" },
  { label: "Download with certificate" },
  { separator: true },
  { label: "Add to room" },
  { separator: true },
  { label: "Request signature send" },
  { label: "Signing history" },
  { separator: true },
  { label: "Related documents" },
  { label: "Details" },
  { label: "Deadlines" },
  { label: "Set deadline reminder" },
  { separator: true },
  { label: "Reassign" },
  { label: "Delete" },
];

Object.assign(window, { NAV, ENTITIES, DOCUMENTS, ACTIVITY, UPCOMING, RECORD_MENU });
