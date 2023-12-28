import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";
import settingsPage from "../pageobjects/settings.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Changing settings with invalid data", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("should not change settings with invalid data", async () => {
    await homePage.clickMyAccountLink();
    await expect(browser).toHaveUrl("http://localhost:3000/user/settings");

    await settingsPage.inputPhoneNumInv();
    await expect(settingsPage.saveBtn).toBeDisabled();
  });
});
