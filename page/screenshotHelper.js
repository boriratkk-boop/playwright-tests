const fs = require('fs');
const path = require('path');

async function takeScreenshot(page, testName, stepName) {
  const safeTestName = testName.replace(/[^a-zA-Z0-9]/g, '_');
  const dir = path.join('screenshots', safeTestName);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  await page.screenshot({
    path: `${dir}/${stepName}.png`,
    fullPage: true
  });
}

module.exports = { takeScreenshot };
