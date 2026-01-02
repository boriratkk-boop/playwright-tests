class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addItem() {
    await this.addBackpack.click();
    await this.page.screenshot({ path: 'screenshots/04-add-to-cart.png' });
  }

  async openCart() {
    await this.cartIcon.click();
    await this.page.screenshot({ path: 'screenshots/05-open-cart.png' });
  }
}

module.exports = { ProductsPage };
