const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');

test('saucedemo valid login', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();

  await login.login('standard_user', 'secret_sauce');

  expect(await products.isAt()).toBeTruthy();
});
