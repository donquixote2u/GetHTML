const puppeteer = require('puppeteer');
let page;

async function getBrowserPage() {
  // Launch headless Chrome. Turn off sandbox so Chrome can run under root.
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  return browser.newPage();
}

exports.screenshot = async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.send('Url is not found!');
  }

  if (!page) {
    page = await getBrowserPage();
  }

  await page.goto(url);
  const content = await page.content();
  res.set('Content-Type', 'text/plain');
  res.send(content);
};