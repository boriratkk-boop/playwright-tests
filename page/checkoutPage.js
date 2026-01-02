const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillInfo(firstName, lastName, postalCode) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }

  async verifyOrderComplete() {
    await expect(this.page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
  }
}

module.exports = { CheckoutPage };
