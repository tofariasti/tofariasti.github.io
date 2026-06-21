import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'public', 'assets');

const arquivos = [
  { html: 'curriculo-ats.html',                pdf: 'curriculo-ats.pdf' },
  { html: 'curriculo-ats-sem-freelance.html',  pdf: 'curriculo-ats-sem-freelance.pdf' },
];

const browser = await puppeteer.launch({ args: ['--no-sandbox'] });

for (const { html, pdf } of arquivos) {
  const page = await browser.newPage();
  await page.goto(`file://${path.join(assetsDir, html)}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: path.join(assetsDir, pdf),
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });
  await page.close();
  console.log(`✓ ${pdf}`);
}

await browser.close();
