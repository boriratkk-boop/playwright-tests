import { test, expect } from '@playwright/test';

test('เช็คว่าหน้า Google โหลดได้', async ({ page }) => {
  // เปิดเว็บ google.com
  await page.goto('https://www.google.com');

  // ตรวจสอบว่าชื่อหน้าเว็บ (title) มีคำว่า "Google"
  await expect(page).toHaveTitle(/Google/);
});
