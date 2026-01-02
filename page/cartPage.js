const { takeScreenshot } = require('./screenshotHelper');

class CartPage {
  constructor(page, testName) {
    this.page = page;
    this.testName = testName;
  }

  async verifyItem() {
    await this.page.locator('.cart_item').first().waitFor();
    await takeScreenshot(this.page, this.testName, 'step5-item-in-cart');
  }
}

module.exports = { CartPage };
