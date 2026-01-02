const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  reporter: [['html'], ['list']],
  use: {
    headless: true,
    video: 'on',                //  อัด video ทุก test
    screenshot: 'off'           //  screenshot เอง
  }
});
