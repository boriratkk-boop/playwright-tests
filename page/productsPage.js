const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async verifyPage() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async addFirstProductToCart() {
    await this.page.click('.inventory_item:first-child button');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}

module.exports = { ProductsPage };
