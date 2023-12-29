import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";
import settingsPage from "../pageobjects/settings.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Changing settings with valid data", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("the save button should be enabled", async () => {
    await homePage.clickMyAccountLink();
    await expect(browser).toHaveUrl("http://localhost:3000/user/settings");

    await settingsPage.inputLastNameValid();
    await expect(settingsPage.saveBtn).toBeEnabled();
  });
});
