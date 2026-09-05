# design-sync notes - Agreement Vault Design System (Strongbox)

Project: `Agreement Vault Design System`
`https://claude.ai/design/p/f013d6cd-f4c3-47d6-b014-dab17e0fee75`

## What this repo is, and why the sync needs a shim

This is a **Claude Design project folder**, not an npm package: components live as plain
`.jsx` with hand-written `.d.ts` and `.prompt.md` beside them under `components/<group>/`.
There is no build, no `dist/`, no Storybook. The converter (`package-build.mjs`) needs a
package with a built entry and a types root, so **`.design-sync/prep.mjs` synthesizes one
deterministically from the files already in the repo**. Nothing it writes is a second
source of truth.

**Always run, in this order:**

```sh
node .design-sync/prep.mjs
node .ds-sync/package-build.mjs --config .design-sync/config.json \
  --node-modules ./node_modules --entry ./dist/index.js --out ./ds-bundle
node .design-sync/postbuild.mjs
DS_CHROMIUM_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe" \
  node .ds-sync/package-validate.mjs ./ds-bundle
```

or the driver (`resync.mjs`, add `--remote .design-sync/.cache/remote-sync.json`), with
`prep.mjs` before it and `postbuild.mjs` after it.

- `prep.mjs` writes `dist/index.js` (esbuild bundle of all 19 `.jsx`, React external),
  `dist/index.d.ts` (flat barrel of the hand-written `.d.ts`, imports hoisted), and
  `.design-sync/docs/<Name>.md` (copies of each `.prompt.md`, named so the converter's
  doc discovery slug-matches them). It also warns on duplicate exported type names.
- `postbuild.mjs` copies the 16 `guidelines/*.html` `@dsCard` cards and the treatment
  canvas (`Treatment Exploration.dc.html` + `support.js`) into `ds-bundle/`. The
  converter only copies `.md` guidelines, and every build wipes `ds-bundle/`, so this
  must run after **every** build.

## Gotchas that cost time - do not rediscover these

- **`node_modules` must be at the repo root**, and the build must be pointed at it
  (`--node-modules ./node_modules`). `workspaceRoot` is derived from the node_modules
  parent, and there is no git repo here to override it. Pointing at `.ds-sync/node_modules`
  silently puts every repo-relative config path "outside the workspace": tokens, fonts and
  docs are all skipped, and `@types/react` is not found so every `.d.ts` body comes out empty.
- **`node_modules/agreement-vault-design-system` is a junction back to the repo root.**
  `copyTokens()` resolves `cfg.tokensGlob` inside `node_modules/<cfg.tokensPkg>`, and this
  system's tokens live in the package itself. **npm prunes this link as "extraneous" on any
  install**, so `prep.mjs` recreates it every run. If tokens ever come out empty, that link
  is the first thing to check.
- `cfg.tokensGlob` points at `.design-sync/tokens/` (staged by `prep.mjs`), **not** at
  `tokens/`. It deliberately excludes `tokens/fonts.css`: that file is handed to
  `cfg.extraFonts` instead, which copies the binaries into `ds-bundle/fonts/` and rewrites
  the `url()`s. Copying it as a token file too would ship a second, dangling copy pointing
  at `../assets/fonts/`.
- `cfg.cssEntry` points at `.design-sync/component-styles.css`, which is deliberately an
  empty `@ds-css-runtime` stub. **This system ships no compiled component stylesheet** -
  components style themselves with inline styles reading CSS custom properties, so all real
  CSS is the token layer. Validate reporting `[CSS_RUNTIME]` is correct and expected, not a
  problem to chase. Without an explicit `cssEntry` the converter picks up the repo's own
  root `styles.css` and emits dangling `@import`s.
- `Marker` is a real 20th component exported from `FindingRow.jsx`. It is pinned via
  `cfg.componentSrcMap` so it groups under `data` rather than `general`, and its doc lives
  at `.design-sync/docs-extra/Marker.md` (it has no sibling `.prompt.md`).
- Render check runs against **system Chrome** via `DS_CHROMIUM_PATH`; the playwright npm
  package is installed but no chromium was downloaded.

## Design-system findings from the first sync (2026-09-05)

**Fixed - duplicate border tokens.** `--border-card` and `--border-row` were each defined
twice: as a colour in `tokens/colors.css` and as a full shorthand in `tokens/shape.css`.
`styles.css` imports `shape.css` last, so the shorthand won, and every
`solid var(--border-card)` expanded to `1.5px solid 1.5px solid #C6CDD6` - invalid CSS, so
the browser dropped the declaration and the border vanished. Measured in Chrome: `Input`,
`Select` and `ContextMenu` had `border-style: none`, plus `Button` `quiet` and the
`borderRight` on `SidebarNav` / `EntityTree`.
Fix: the colour aliases were renamed to **`--border-card-color` / `--border-row-color`**
and the six component usages repointed. `--border-card` / `--border-row` /
`--rule-card-header` remain complete shorthands. See `check-tokens.mjs` below.

**Open - `SidebarNav` child items ignore `activeId`.** `SidebarNav.jsx` computes
`const active = item.id === activeId` but the `item.child` branch never uses it, so an open
Room can never render as the current place. Worth deciding whether that is intended.

**Observation - font manifest.** The app's `_ds_manifest.json` lists `files: []` for
Source Sans 3 weights 200-600 (700-900 and all Bitter weights resolve). The `@font-face`
rules and the files themselves are correct and uploaded, and `brandFonts` reports the family
`ok`, so this looks like manifest metadata rather than the render path. Worth an eyeball in
the DS pane.

## `.design-sync/check-tokens.mjs`

A linter for the three token mistakes that render as silently-missing styling and that
`package-validate` cannot see (it reads shipped CSS; this system's styles are inline in
component JS):

1. `var(--token)` that no token file defines.
2. A border **shorthand** used where a colour is expected (the bug above).
3. A **colour** used as a whole border shorthand - sets only `border-color`, leaving
   `border-style: none`, so nothing is drawn.

It also reports any token defined in two files and which one wins. Run it on any change:

```sh
node .design-sync/check-tokens.mjs components .design-sync/previews tokens guidelines
```

Add `ds-token-ok` to a line to opt out - used in `Badge.jsx` and `StatusBadge.jsx`, where
`border` is a data field interpolated into a real declaration later.

## Re-sync risks (watch-list)

- The npm-pruned junction (above). `prep.mjs` heals it, so run `prep.mjs` first, always.
- `postbuild.mjs` not run -> the 16 guideline cards and the canvas silently disappear from
  the upload.
- Adding a component: it needs `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md` beside
  each other under `components/<group>/`, and an authored preview at
  `.design-sync/previews/<Name>.tsx`, or it ships the floor card.
- `cfg.overrides` sets `cardMode: "column"` for `DataTable`, `FindingRow`, `Marker`,
  `Input` and `Switch` - they overflow a grid cell otherwise.
- This directory is **not a git repo**, so none of this is version-controlled. Consider
  `git init`; a `.gitignore` is already written for the generated paths.
