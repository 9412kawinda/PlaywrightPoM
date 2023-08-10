import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page/Login.page';

test.describe("TC001", () => {

    test("Login positive", async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    });

    test("Login negative_01", async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('abc', 'secret_sauce');
        await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();
    });

    test("Login negative_02", async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('', 'secret_sauce');
        await expect(page.getByText("Epic sadface: Username is required")).toBeVisible();
    });

    test("Login negative_03",async({page})=>{
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('standard_user', 'abc');
        await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();
    });

    test("Login negative_04",async({page})=>{
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('standard_user', '');
        await expect(page.getByText("Epic sadface: Password is required")).toBeVisible();
    });
})
