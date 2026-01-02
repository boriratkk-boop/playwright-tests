class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
  }

  async open() {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.screenshot({ path: 'screenshots/01-login-page.png' });
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.page.screenshot({ path: 'screenshots/02-fill-credentials.png' });
    await this.loginBtn.click();
    await this.page.screenshot({ path: 'screenshots/03-after-login.png' });
  }
}

module.exports = { LoginPage };
