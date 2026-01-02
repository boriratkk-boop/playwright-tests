const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/loginPage');
const { ProductsPage } = require('../page/productsPage');
const { CartPage } = require('../page/cartPage');


test('Add to cart with screenshots each step', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.addBackpackToCart();
  await products.goToCart();

  await cart.verifyItemInCart();

  await expect(page.locator('.cart_item')).toBeVisible();
});

