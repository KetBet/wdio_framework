import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Logout", () => {
    beforeEach(async () => {
      await loginPage.open();
      await loginPage.login(username, password);
    });
  it("should logout", async () => {
    await homePage.clickLogoutBtn();
    await expect(browser).toHaveUrl("http://localhost:3000/signin");
  });
});
