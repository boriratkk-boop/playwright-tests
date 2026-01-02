const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/loginPage');
const { ProductsPage } = require('../page/productsPage');
const { CartPage } = require('../page/cartPage');

test('Add to cart with screenshots and video', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');

  await products.addItem();
  await products.openCart();

  await cart.verifyItem();
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');
});
