const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

test('SauceDemo POM JS Flow: login → add → checkout → verify', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1️⃣ Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2️⃣ Products
  await productsPage.verifyPage();
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  // 3️⃣ Cart
  await cartPage.verifyItemCount(1);
  await cartPage.checkout();

  // 4️⃣ Checkout
  await checkoutPage.fillInfo('John', 'Doe', '12345');
  await checkoutPage.finish();
  await checkoutPage.verifyOrderComplete();
});
