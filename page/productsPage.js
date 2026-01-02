class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.addBackpackBtn.click();
    await this.page.screenshot({ path: 'screenshots/03-add-to-cart.png' });
  }

  async goToCart() {
    await this.cartLink.click();
    await this.page.screenshot({ path: 'screenshots/04-open-cart.png' });
  }
}

module.exports = { ProductsPage };
