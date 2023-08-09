

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        // this.userName = page.locator("//input[@id='user-name']");
        // this.password = page.locator("//input[@id='password']");
        // this.loginBtn = page.locator("//input[@id='login-button']");
    }

    // locaters
    eleLoginBtn() {
        const loginBtn = this.page.locator("//input[@id='login-button']");
        if (loginBtn != null) {
            return loginBtn;
        } else throw new error("Could not find the Element");
    }

    eleUserName() {
        const userName = this.page.locator("//input[@id='user-name']");
        if (userName != null) {
            return userName;
        } else throw new Error("Could not find the Element");
    }

    elePassword() {
        const password = this.page.locator("//input[@id='password']");
        if (password != null) {
            return password;
        } else throw new error("Could not find the Element");
    }

    async gotoLoginPage() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(usernameVal, passwrodVal) {
        await this.eleUserName().fill(usernameVal);
        await this.elePassword().fill(passwrodVal);
        await this.eleLoginBtn().click();
    }
} 