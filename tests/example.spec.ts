import { test, expect } from '@playwright/test';

test('เปิดเว็บได้', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});