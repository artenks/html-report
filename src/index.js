import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';
import puppeteer from 'puppeteer';

import templateOptions from './config/templateOptions';

(async () => {
  const data = { message: 'Hello World!' };

  const templateFile = path.join(process.cwd(), './public/template.html');
  const templateHtml = fs.readFileSync(templateFile, 'utf8');
  const template = handlebars.compile(templateHtml);

  const html = template(data);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto(`data:text/html,${html}`, { waitUntil: 'networkidle0' });
  await page.pdf(templateOptions);

  await browser.close();
})();
