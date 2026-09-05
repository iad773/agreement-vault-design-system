import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const [file, w, h, out] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: process.env.DS_CHROMIUM_PATH });
const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 2 });
await p.goto(pathToFileURL(resolve(file)).href);
await p.waitForTimeout(900);
await p.screenshot({ path: out });
const info = await p.evaluate(() => ({
  bodyScrollH: document.body.scrollHeight,
  strayText: [...document.body.querySelectorAll('*')].flatMap(e =>
    [...e.childNodes].filter(n => n.nodeType === 3 && n.textContent.includes('\n'))
      .map(n => JSON.stringify(n.textContent))).slice(0, 6),
}));
console.log(JSON.stringify(info));
await b.close();
