class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
  }

  async verifyItemInCart() {
    await this.cartItem.first().waitFor();
    await this.page.screenshot({ path: 'screenshots/05-item-in-cart.png' });
  }
}

module.exports = { CartPage };
