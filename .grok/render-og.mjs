import { chromium } from "playwright";

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto("file:///workspace/.grok/og-card.html", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
const metrics = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const svg = document.querySelector("svg");
  const box = (el) => {
    const r = el.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height, text: el.textContent };
  };
  return {
    fonts: [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.status}`),
    h1: box(h1),
    p: box(p),
    svg: box(svg),
  };
});
console.log(JSON.stringify(metrics, null, 2));
await page.screenshot({ path: "/workspace/.grok/card-raw.png", type: "png" });

const icon = await browser.newPage({
  viewport: { width: 64, height: 64 },
  deviceScaleFactor: 1,
});
await icon.setContent(`<!DOCTYPE html><html><body style="margin:0;background:#fff">
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#10211D"/>
  <path d="M7.2 11.2h8.4c4.7 0 8.2 3.3 8.2 7.6 0 3.6-2.6 6.2-6.4 6.2H13" fill="none" stroke="#2DD4BF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></body></html>`);
await icon.screenshot({ path: "/workspace/.grok/favicon-64.png", type: "png" });

const tiny = await browser.newPage({
  viewport: { width: 16, height: 16 },
  deviceScaleFactor: 4,
});
await tiny.setContent(`<!DOCTYPE html><html><body style="margin:0;background:#fff;width:16px;height:16px">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#10211D"/>
  <path d="M7.2 11.2h8.4c4.7 0 8.2 3.3 8.2 7.6 0 3.6-2.6 6.2-6.4 6.2H13" fill="none" stroke="#2DD4BF" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg></body></html>`);
await tiny.screenshot({ path: "/workspace/.grok/favicon-16.png", type: "png" });

await browser.close();
