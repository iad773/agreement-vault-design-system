// Design-token linter for the Strongbox source.
//
// Catches three failure modes that render as silently-missing styling and that
// package-validate.mjs cannot see (it reads shipped CSS; this system's styles
// live in inline styles inside compiled component JS):
//
//   1. var(--token) that no token file defines.
//   2. A border SHORTHAND token used where a colour is expected:
//        `1.5px solid var(--border-card)` -> `1.5px solid 1.5px solid #ccc`
//      which is invalid, so the browser drops it and the border disappears.
//   3. A COLOUR token used as a whole border shorthand:
//        `borderBottom: var(--border-hairline)` sets only border-color,
//      leaving border-style `none`, so again nothing is drawn.
//
// Add `ds-token-ok` to a line to opt it out (for objects where `border` is a
// data field that is interpolated into a real declaration later).
//
//   node .design-sync/check-tokens.mjs <file|dir> ...
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const defined = new Set();
const decls = new Map();  // token -> { value, file }  (last definition wins)
const dupes = new Map();  // token -> [file, file]

// styles.css @import order decides which duplicate definition wins.
const order = (readFileSync('styles.css', 'utf8').match(/tokens\/[a-z]+\.css/g) ?? []).map((s) => s.split('/')[1]);
const tokenFiles = [...order, ...readdirSync('tokens').filter((f) => f.endsWith('.css') && !order.includes(f))];
for (const f of tokenFiles) {
  for (const m of readFileSync(join('tokens', f), 'utf8').matchAll(/^\s*(--[a-z0-9-]+)\s*:\s*([^;]+);/gm)) {
    defined.add(m[1]);
    if (decls.has(m[1])) {
      if (!dupes.has(m[1])) dupes.set(m[1], [decls.get(m[1]).file]);
      dupes.get(m[1]).push(f);
    }
    decls.set(m[1], { value: m[2].trim(), file: f });
  }
}

const resolve = (v, d = 0) =>
  d > 6 ? v : v.replace(/var\(\s*(--[a-z0-9-]+)\s*\)/g, (_, t) => (decls.has(t) ? resolve(decls.get(t).value, d + 1) : _));

// A token is a border shorthand if its resolved value carries a line style.
const shorthand = new Set();
for (const [tok, d] of decls) {
  if (/(?:solid|dashed|dotted|double)/.test(resolve(d.value))) shorthand.add(tok);
}

const targets = [];
const add = (p) => {
  if (statSync(p).isDirectory()) { for (const f of readdirSync(p)) add(join(p, f)); return; }
  if (/\.(tsx?|jsx?|md|html|css)$/.test(p)) targets.push(p);
};
for (const a of process.argv.slice(2)) add(a);

const BORDER_PROP = /(?:^|[^A-Za-z])border(?:Top|Bottom|Left|Right)?\s*:\s*[`"']var\(\s*(--[a-z0-9-]+)\s*\)[`"']/g;
const COLOR_POS = /(?:solid|dashed|dotted)\s+(?:\$\{[^}]*?)?var\(\s*(--[a-z0-9-]+)\s*\)/g;

let bad = 0;
for (const p of targets) {
  const txt = readFileSync(p, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split('\n').filter((l) => !l.includes('ds-token-ok')).join('\n');
  const seen = new Set();
  const flag = (k, msg) => { if (seen.has(k)) return; seen.add(k); console.error(`  \u2717 ${p}: ${msg}`); bad++; };

  for (const m of txt.matchAll(/var\(\s*(--[a-z0-9-]+)\s*([,)])/g)) {
    if (m[2] === ',') continue;  // an explicit fallback is deliberate
    if (!defined.has(m[1])) flag('U' + m[1], `var(${m[1]}) is not defined in tokens/`);
  }
  for (const m of txt.matchAll(COLOR_POS)) {
    if (shorthand.has(m[1]))
      flag('S' + m[1], `"solid var(${m[1]})" - ${m[1]} is a border SHORTHAND (${resolve(decls.get(m[1]).value)}), not a colour. This expands to invalid CSS and the border vanishes.`);
  }
  for (const m of txt.matchAll(BORDER_PROP)) {
    if (decls.has(m[1]) && !shorthand.has(m[1]))
      flag('C' + m[1], `"border: var(${m[1]})" - ${m[1]} is a COLOUR (${resolve(decls.get(m[1]).value)}), not a border shorthand. border-style stays "none" and nothing is drawn.`);
  }
}

for (const [tok, fs] of dupes)
  console.error(`  ! ${tok} is defined in ${fs.join(' and ')} - ${decls.get(tok).file} wins (${resolve(decls.get(tok).value)})`);

console.error(bad
  ? `\n${bad} token problem(s) across ${targets.length} file(s)`
  : `\u2713 ${targets.length} file(s) clean - every var(--token) resolves and sits in the right position (${defined.size} tokens defined)`);
process.exit(bad ? 1 : 0);
