class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
  }

  async isAt() {
    return await this.title.isVisible();
  }
}

module.exports = { ProductsPage };
