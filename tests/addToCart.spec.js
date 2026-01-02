const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/loginPage');
const { ProductsPage } = require('../page/productsPage');
const { CartPage } = require('../page/cartPage');

test('Add to cart test', async ({ page }, testInfo) => {
  const testName = testInfo.title;

  const login = new LoginPage(page, testName);
  const products = new ProductsPage(page, testName);
  const cart = new CartPage(page, testName);

  await login.open();
  await login.login('standard_user', 'secret_sauce');

  await products.addBackpackToCart();
  await products.goToCart();

  await cart.verifyItem();

  await expect(page.locator('.inventory_item_name'))
    .toContainText('Sauce Labs Backpack');
});
