import { test, expect } from '@playwright/test';

test('Login to SauceDemo and validate page is loaded', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // กรอก Username/Password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // คลิกปุ่ม login
  await page.click('#login-button');

  // ตรวจสอบว่าหน้า Products แสดง
  await expect(page.locator('.title')).toHaveText('Products');
});
