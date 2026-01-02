const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,               // รัน CI แบบไม่เห็น browser
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['html'], ['list']]
});
