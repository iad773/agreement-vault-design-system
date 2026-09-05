// Renders every @dsCard at its DECLARED viewport and reports content that
// overflows it (the card is clipped in the Design System pane) plus any
// literal "\n" that leaked into the markup as visible text.
import { chromium } from 'playwright';
import { readFileSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const files = process.argv.slice(2);
const b = await chromium.launch({ executablePath: process.env.DS_CHROMIUM_PATH });
let bad = 0;
for (const f of files) {
  const head = readFileSync(f, 'utf8').split('\n')[0];
  const vp = /viewport="(\d+)x(\d+)"/.exec(head);
  if (!vp) { console.log('  ?  no viewport declared:', f); continue; }
  const [w, h] = [+vp[1], +vp[2]];
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto(pathToFileURL(resolve(f)).href);
  await p.waitForTimeout(700);
  const r = await p.evaluate(() => ({
    sh: document.documentElement.scrollHeight,
    sw: document.documentElement.scrollWidth,
    stray: document.body.innerText.includes(String.fromCharCode(92) + 'n'),
  }));
  const over = r.sh - h;
  const flag = over > 1 || r.sw - w > 1 || r.stray;
  if (flag) bad++;
  console.log(`${flag ? '  X' : '  .'} ${f.padEnd(44)} declared ${w}x${h}  content ${r.sw}x${r.sh}` +
    (over > 1 ? `  OVERFLOWS by ${over}px` : '') + (r.stray ? '  STRAY-\n' : ''));
  await p.close();
}
await b.close();
console.log(bad ? `\n${bad} card(s) need attention` : '\nevery card fits its declared viewport');
