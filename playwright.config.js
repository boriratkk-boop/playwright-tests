const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [['html'], ['list']],
  use: {
    headless: true,
    screenshot: 'on',          // 🔥 แคปทุก step
    video: 'on',               // 🔥 อัด video
    trace: 'off'
  }
});
