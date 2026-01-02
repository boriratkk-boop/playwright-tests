const { takeScreenshot } = require('./screenshotHelper');

class LoginPage {
  constructor(page, testName) {
    this.page = page;
    this.testName = testName;
  }

  async open() {
    await this.page.goto('https://www.saucedemo.com/');
    await takeScreenshot(this.page, this.testName, 'step1-login-page');
  }

  async login(username, password) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
    await takeScreenshot(this.page, this.testName, 'step2-after-login');
  }
}

module.exports = { LoginPage };
