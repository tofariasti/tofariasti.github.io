/**
 * Mobile layout smoke test — run: node scripts/mobile-check.mjs
 * Requires: npm/npx and playwright (chromium installed on first run)
 */
import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://127.0.0.1:8765';
const PAGES = ['/index.html', '/drone.html'];
const VIEWPORTS = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 14', width: 390, height: 844 },
  { name: 'Pixel 7', width: 412, height: 915 },
];

const failures = [];

async function checkPage(page, url, viewportName) {
  await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const metrics = await page.evaluate(() => {
    const header = document.getElementById('header');
    const pad = parseFloat(getComputedStyle(document.body).paddingTop);
    const tabs = document.querySelector('.site-tabs');
    const tab = document.querySelector('.site-tabs .site-tab');
    return {
      header: header?.offsetHeight ?? 0,
      bodyPad: pad,
      tabOverflow: tabs ? tabs.scrollWidth > tabs.clientWidth + 2 : false,
      tabText: tab?.textContent.replace(/\s+/g, ' ').trim() ?? '',
    };
  });

  if (metrics.bodyPad < metrics.header - 4) {
    failures.push(
      `${url} @ ${viewportName}: body padding (${metrics.bodyPad}px) < header (${metrics.header}px)`
    );
  }

  if (metrics.tabOverflow) {
    failures.push(`${url} @ ${viewportName}: site-tabs overflow`);
  }

  if (/Software Developer Software Dev|Desenvolvedor de Software Desenv\.|Operador de Drone Op\./i.test(metrics.tabText)) {
    failures.push(`${url} @ ${viewportName}: duplicate tab labels visible`);
  }

  const burger = page.locator('.menu-hamburguer');
  if (await burger.isVisible()) {
    await burger.click();
    await page.waitForTimeout(250);
    if (!(await page.locator('.nav-responsive.active').isVisible())) {
      failures.push(`${url} @ ${viewportName}: mobile menu did not open`);
    }
    await page.evaluate(() => {
      document.querySelector('.nav-responsive')?.classList.remove('active');
      const btn = document.querySelector('.menu-hamburguer');
      btn?.classList.remove('change');
      btn?.setAttribute('aria-expanded', 'false');
      const nr = document.querySelector('.nav-responsive');
      if (nr) nr.hidden = true;
      document.body.classList.remove('nav-menu-open');
      document.documentElement.style.setProperty('--header-h', `${document.getElementById('header')?.offsetHeight ?? 0}px`);
    });
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewportSize({ width: vp.width, height: vp.height });
      for (const path of PAGES) {
        await checkPage(page, path, vp.name);
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }

  if (failures.length) {
    console.error('FAILURES:\n' + failures.map((f) => '  - ' + f).join('\n'));
    process.exit(1);
  }
  console.log(`OK — ${PAGES.length} pages × ${VIEWPORTS.length} viewports`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
