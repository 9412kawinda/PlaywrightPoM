import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page/Login.page';

test.describe("TC001",()=>{
    test("Login positive", async ({page}) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('standard_user','secret_sauce');
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    });
})
