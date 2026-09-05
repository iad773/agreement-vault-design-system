# Strongbox Design System

The visual system for **Agreement Vault**, the document system of record for franchisors.
Strongbox is the treatment selected out of a seven-way exploration (see
`Treatment Exploration.dc.html` in this project, option `2b`, badged SELECTED).

## Product context

Agreement Vault stores every franchise document a brand has (franchise agreements,
amendments, FDD receipts, state registrations) and tracks the compliance deadlines buried
inside them. Users are franchise operators and their admin staff, not engineers. The
product it replaces is not another SaaS tool, it is Windows Explorer and a shared drive, so
the system has to feel more trustworthy and more capable than a folder tree without ever
feeling less familiar or less findable.

Agreement Vault is the second product in the **Agreement Flow** family. Strongbox relates to
Flow as an *evolved sibling*: Flow's dark blue is de-saturated into gunmetal steel, so the two
products read as related in depth of tone while the Vault carries more gravity.

Emotional target: the calm of a well-kept records room where the one wrong thing is
unmissable. Strength, safety, reliability. Not dashboard energy.

### Hard rules that outrank taste

1. **No AI branding of any kind.** No sparkle icons, no "AI-powered", no chat affordances.
   The positioning is "just straight tech".
2. **Red and amber are reserved** for the urgency system and the sandbox warning band.
   Never decorative, never a brand accent, never a chart color.
3. **Status is carried by wording, glyph, and weight together.** Color sits on top. Every
   screen must survive greyscale; verify before shipping.
4. **Density beats whitespace.** The core daily task is scanning tables of documents and
   dates with a mouse and keyboard.
5. **No em dashes in UI copy.** Regular hyphens.
6. **12px is the type floor.** 10.5px is permitted for the SANDBOX badge alone.

## Sources

- `Treatment Exploration.dc.html` (this project) - the seven treatments and the Strongbox
  branding board this system is derived from.
- The Agreement Vault Dashboard exploration project, whose Overview content is held constant
  across all treatments (panels, copy and numbers are the source of truth for Screen 1).
- No codebase, no Figma file, and no font binaries were provided. See CAVEATS at the end.

## CONTENT FUNDAMENTALS

The product speaks like a competent operations person: someone who has read the agreement,
knows what is wrong, and tells you plainly. Not a lawyer, not a startup.

- **Voice:** declarative sentences that state the finding, then the consequence. "Wisconsin
  franchise registration is not in force and no alert was on file." Never "Uh oh!", never
  "Looks like something needs attention."
- **Person:** the user is "you" in headings and empty states ("Your morning report",
  "Needs your attention"). The system never says "I". Features are named as nouns the user
  already uses: Documents, Deadlines, Registrations, Units, Rooms, Records.
- **Numbers carry the sentence.** Copy states the count and the elapsed time rather than a
  severity word: "Lapsed 90 days ago, Jun 3", "Open since Mar 2022", "Overdue by 6 days".
  Relative time comes first because it is what the reader acts on; the date follows.
- **Provenance is stated, not implied.** Where a panel derives figures from documents it says
  so in small type: "Read from executed agreements. Nothing here is a projection."
- **Casing:** sentence case for headings, titles and buttons ("Add documents", "Under
  contract"). UPPERCASE with `--tracking-caps` only for micro labels and status badges
  (EXECUTED, DUE SOON, OVERDUE, SANDBOX).
- **Status words are fixed:** Executed / Due soon / Overdue / Draft for documents; Effective /
  Renewal window / Overdue for registrations; Ahead / On track for development schedules.
  Do not invent synonyms.
- **Hyphens, not em dashes**, everywhere: "Franchise Agreement - Unit 12".
- **No emoji.** Ever, in product or in marketing.
- **Titles of records are quoted verbatim** from the document, including unit numbers and
  personal names: "Personal Guarantee - D. Whitfield".

## VISUAL FOUNDATIONS

**Palette.** Cool steel neutrals from #F2F3F5 (app ground) through #D3D8DE (line) to #161C24
(ink), with one accent, vault steel #2C3E52, used for primary actions, selection, the 2px
card-header rule, and links. Two background tones maximum per screen: the steel ground and
white cards, plus the #161C24 chrome bar. Red #B3271E and amber #96660A are reserved for
urgency; #EFC24F is the sandbox band and nothing else.

**Type.** Bitter (slab serif) at 700/800 for headings, card titles and every large numeral;
Source Sans 3 for all interface text, tables and microcopy; the platform mono only for dates
in activity feeds and tabular columns. Weight is the primary hierarchy, size is second, color
is last. Body 14px, table cells 13.5px, micro labels 11px caps.

**Backgrounds.** Flat color only. No gradients, no photography, no illustration, no pattern,
no texture, no noise. The dark chrome bar across the top of every screen reads as a lintel:
the one heavy horizontal that everything hangs from.

**Cards.** White, 3px radius, **1.5px** #C6CDD6 border, no resting shadow. Titled cards carry a
**2px vault-steel rule** under the header. Rows inside a card are separated by 1px #E2E6EB
hairlines that run the full card width. Cards never nest inside cards.

**Corner radii.** 3px on cards, buttons, badges and nav items; 2px on the smallest chips;
pill only on toggles and avatars; circles only in brand lockups. Nothing is soft.

**Borders and shadows.** Structure comes from borders, never from blur. Shadow exists in two
places only: `--shadow-card` (0 2px 10px, 8% ink) for a whole artboard or floating panel, and
`--shadow-overlay` for menus and dialogs. No inner shadows, no glows, no protection gradients;
overlays sit on solid white with a 1.5px border instead.

**Spacing and density.** Row height 44px standard, 40px dense. Card padding 14px/22px, row
padding 12px/22px, 16px between stacked cards. Tables use fixed pixel columns for dates and
status so numbers line up; `font-variant-numeric: tabular-nums` on every date and count.

**Layout rules.** Fixed 224px sidebar, fixed 264px entity tree, fluid main pane with a 1440px
design width. The dark chrome bar is fixed at 54px. The sandbox band is fixed above the
chrome and must remain visible at any scroll position (`position: sticky; top: 0` with the
chrome sticky beneath it).

**Transparency and blur.** None. No frosted panels, no translucent overlays, no scrim blur.
Dialogs use a flat rgba(22,28,36,0.45) scrim.

**Animation.** Minimal and mechanical: 90ms linear for hover fills, 140ms ease-out for
menus and dialogs appearing. No bounce, no spring, no slide-in decoration, no skeleton
shimmer. Things appear where they will be.

**Hover states.** Rows and nav items fill with #E9EDF1. Primary buttons darken to #223142.
Secondary buttons keep their border and fill --vault-steel-tint. Links underline at 3px
offset. Never opacity fades, never scale.

**Press states.** Color only: one step darker. Nothing shrinks or lifts.

**Focus.** A 2px white gap plus a 2px vault-steel ring (`--focus-ring`), on every interactive
element. Keyboard use is a first-class path, not an accessibility afterthought.

**Imagery.** The product ships no imagery. If marketing needs it: cool-toned, desaturated,
architectural, no people mid-laugh, no stock office. Greyscale is safer than a warm filter.

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) at 2px stroke, `stroke-linecap="round"`, sized 16px in
  navigation and 13px inline. Loaded from CDN (see the substitution flag in CAVEATS) - no icon
  font or SVG sprite existed in the provided material.
- **Color:** icons inherit `currentColor` and sit at `--text-muted` when inactive,
  `--vault-steel` when active, `--on-dark-muted` on the chrome bar.
- **Never** use an icon to carry status on its own. The status glyph set below is separate
  from the icon set and is typographic, so it survives greyscale and copy-paste:
  - `●` filled circle - Executed / Effective
  - `◆` diamond - Due soon / Renewal window
  - `▲` triangle - Overdue
  - `○` open circle - Draft
- **Marker families** (used in the findings and deadline lists, drawn as 10px boxes, not icons):
  filled square = a health-check finding that is wrong right now; open amber square = check
  this; filled red circle = a dated deadline that has passed; open amber circle = a dated
  deadline coming up.
- **No emoji, no sparkles, no AI glyphs.** No decorative iconography of any kind: an icon
  either names a noun in the navigation or labels an action.

## Brand mark

**There is no logo yet.** The client is drawing the Agreement Vault mark separately. Nothing in
this system fakes one: wherever a mark would sit, render the wordmark in Bitter 800 with
`--tracking-wordmark`, or the initials AV in the same face. The three directions on the
Strongbox branding board (the door, the keystone, the heavy wordmark) are reference for the
character the palette and type expect, not assets. Do not reconstruct or approximate them as
production art.

## Index

- `styles.css` - the single entry point consumers link. Imports only.
- `ds-preview.js` - preview-only loader so the cards and UI kit still render before the
  first compile. Not part of what ships to consumers.
- `tokens/` - `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `base.css`.
- `assets/fonts/` - the licensed Bitter and Source Sans 3 families (100-900, roman and
  italic), wired up in `tokens/fonts.css`.
- `guidelines/` - foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` - Button, IconButton, Badge, Tag, Card.
- `components/forms/` - Input, Select, Checkbox, Switch.
- `components/data/` - DataTable, StatusBadge, FindingRow, StatBlock.
- `components/navigation/` - AppChrome, SidebarNav, Breadcrumb, EntityTree, SandboxBanner, ContextMenu.
- `ui_kits/agreement_vault/` - Overview, Documents browse, and the sandbox variant.
- `SKILL.md` - portable skill wrapper for use outside this workspace.

## Intentional additions

The source material is a branding board plus two screens, so it does not enumerate a
component library. These primitives were authored because the two screens require them:
Button, IconButton, Badge, Tag, Card, Input, Select, Checkbox, Switch, DataTable,
StatusBadge, FindingRow, StatBlock, AppChrome, SidebarNav, Breadcrumb, EntityTree,
SandboxBanner, ContextMenu. Anything beyond that list (Toast, Avatar, Tabs, Accordion) was
deliberately **not** invented; add them when a real screen needs them.

## CAVEATS

- **Fonts are self-hosted and complete.** `assets/fonts/` holds the full families: Bitter
  100-900 and Source Sans 3 200-900, roman and italic, all declared in `tokens/fonts.css` with
  nothing synthesized. The system itself only calls for Bitter 400/700/800 and Source Sans 3
  400/500/600/700; the rest are available for marketing and document work. Italics exist but
  are not part of the product voice - Strongbox does not italicize UI copy. Each face serves .woff2 with a .ttf
  fallback. For an app bundle, ship only the weights the product uses.
- **Icons are a substitution.** The exploration drew lucide-style glyphs inline; no icon
  asset set was provided. Lucide is linked from CDN as the closest match at the same 2px
  stroke weight.
- **No logo, by design.** See "Brand mark" above.
- **Set the file type to Design System** in the Share menu so the rest of the org can use
  this system, and so the component bundle is generated. Until then the preview files fall
  back to `ds-preview.js` (a 404 for `_ds_bundle.js` in the console is expected).
- **No product code was available.** The UI kit is a recreation of the Strongbox artboards,
  not of a running application, so interaction details (sort behavior, empty states, error
  states, permissions) are unspecified.
