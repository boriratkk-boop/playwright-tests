class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
  }

  async verifyItem() {
    await this.cartItem.first().waitFor();
    await this.page.screenshot({ path: 'screenshots/06-item-in-cart.png' });
  }
}

module.exports = { CartPage };
