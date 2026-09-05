## How to build with Strongbox

**There is no provider and no wrapper component.** Every component is a plain function
that styles itself with inline styles reading CSS custom properties. The only setup
requirement is that `styles.css` is loaded: it `@import`s the token layer and the
self-hosted fonts, and *nothing* renders on-brand without it. Import components and use
them directly.

**There are no CSS classes.** Do not write utility classes, do not invent class names,
do not reach for Tailwind. For your own layout glue, write `style={{ ... }}` using the
same `var(--token)` vocabulary the components use. A hard-coded hex, px font size, or
font stack is always wrong: every value has a token.

### Token vocabulary

| Family | Tokens |
|---|---|
| Surfaces | `--surface-app` `--surface-card` `--surface-plate` `--surface-raised` `--surface-inverse` `--surface-hover` `--surface-selected` `--white` |
| Text | `--text-strong` `--text-body` `--text-secondary` `--text-muted` `--text-link` `--text-inverse` `--on-dark` `--on-dark-muted` |
| Brand + urgency | `--vault-steel` `--vault-steel-hover` `--vault-steel-tint` `--warning` `--danger` `--sandbox-band` `--status-executed-fg/-bg/-border` `--status-due-*` `--status-overdue-*` `--status-draft-*` |
| Type (font shorthands) | `--type-page-heading` `--type-screen-title` `--type-card-title` `--type-hero-number` `--type-body` `--type-table-title` `--type-table-cell` `--type-label-caps` `--type-badge` `--type-button` |
| Families | `--font-slab` (Bitter, headings and numerals) `--font-sans` (Source Sans 3, everything else) `--font-mono` |
| Space + metrics | `--space-1` … `--space-14` `--gap-card` `--gap-stack` `--card-padding-x/-y` `--row-height` `--row-height-dense` `--row-padding-x/-y` `--chrome-height` `--sidebar-width` `--tree-width` |
| Shape | `--radius-sm` `--radius-md` `--radius-pill` `--shadow-card` `--shadow-overlay` `--focus-ring` `--tracking-caps` |

Type tokens are whole `font:` shorthands, so write `font: "var(--type-body)"`, never
`fontSize`.

**Borders have two token shapes and they are not interchangeable:**

- `--border-card`, `--border-row`, `--rule-card-header` are **complete shorthands**
  (width + style + color). Use as `border: "var(--border-card)"`.
- `--border-card-color`, `--border-row-color`, `--border-hairline` are **colors only**.
  Use as `border: "var(--border-width-hairline) solid var(--border-hairline)"`.

Mixing them fails silently: `solid var(--border-card)` expands to invalid CSS and the
border disappears, and a bare `border: var(--border-hairline)` leaves `border-style:
none`. Widths: `--border-width-hairline` (1px), `--border-width-card` (1.5px),
`--border-width-header-rule` (2px).

### Rules that outrank taste

1. **No AI branding.** No sparkle icons, no "AI-powered", no chat affordances.
2. **Red and amber are reserved** for urgency (`--danger`, `--warning`) and the sandbox
   band. Never a brand accent, never decorative, never a chart color.
3. **Status is carried by wording, glyph and weight together**, with color on top. Use
   `StatusBadge` (fixed vocabulary: executed, effective, dueSoon, renewalWindow, overdue,
   draft) or `Marker`. Every screen must survive greyscale.
4. **Density beats whitespace.** The daily task is scanning tables of documents and dates.
5. **No em dashes in UI copy.** Regular hyphens. Sentence case for headings and buttons.
6. **12px is the type floor.** Copy states the number and the elapsed time
   ("Lapsed 90 days ago, Jun 3"), not a severity adjective.

### Where the truth lives

Read `_ds/<folder>/styles.css` and the `tokens/*.css` files it imports for the real
values, and each component's `.prompt.md` for how it is meant to be used. Prefer reading
those over guessing.

### Idiomatic example

```jsx
import { Card, DataTable, StatusBadge, Button } from "<the design system>";

<Card title="Unit 12" meta="5 documents">
  <DataTable
    columns={[
      { key: "title", header: "Title", primary: true },
      { key: "status", header: "Status", width: "130px" },
      { key: "filed", header: "Filed", width: "110px", numeric: true },
    ]}
    rows={[
      { id: "1", title: "Franchise Agreement - Unit 12",
        status: <StatusBadge status="executed" plain />, filed: "Mar 10, 2023" },
      { id: "2", title: "Wisconsin registration renewal",
        status: <StatusBadge status="overdue" plain />, filed: "-", urgency: "overdue" },
    ]}
  />
  <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-3)",
                padding: "var(--card-padding-y) var(--card-padding-x)",
                borderTop: "var(--border-row)" }}>
    <Button variant="secondary">Download</Button>
    <Button variant="primary">Add documents</Button>
  </div>
</Card>
```
