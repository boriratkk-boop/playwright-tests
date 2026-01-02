const { takeScreenshot } = require('./screenshotHelper');

class ProductsPage {
  constructor(page, testName) {
    this.page = page;
    this.testName = testName;
  }

  async addBackpackToCart() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
    await takeScreenshot(this.page, this.testName, 'step3-add-to-cart');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
    await takeScreenshot(this.page, this.testName, 'step4-open-cart');
  }
}

module.exports = { ProductsPage };
