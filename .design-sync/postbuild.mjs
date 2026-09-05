// Post-build step. package-build.mjs only copies .md guideline files; this
// project's guidelines are hand-authored @dsCard HTML cards, and the treatment
// canvas is a first-class artifact the user asked to carry across. Both are
// copied verbatim into the bundle after every build (which wipes ./ds-bundle).
//
// Run after every package-build.mjs run:  node .design-sync/postbuild.mjs
import { readdirSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'ds-bundle');
if (!existsSync(join(OUT, '_ds_bundle.js'))) {
  console.error('postbuild: ./ds-bundle is not a built bundle - run package-build.mjs first');
  process.exit(1);
}

mkdirSync(join(OUT, 'guidelines'), { recursive: true });
let n = 0;
for (const f of readdirSync(join(ROOT, 'guidelines')).sort()) {
  if (!f.endsWith('.html')) continue;
  copyFileSync(join(ROOT, 'guidelines', f), join(OUT, 'guidelines', f));
  n++;
}

const extras = ['Treatment Exploration.dc.html', 'support.js'];
let e = 0;
for (const f of extras) {
  if (!existsSync(join(ROOT, f))) { console.error(`  ! missing ${f}`); continue; }
  copyFileSync(join(ROOT, f), join(OUT, f));
  e++;
}
console.error(`postbuild: ${n} guideline cards, ${e} canvas file(s)`);
