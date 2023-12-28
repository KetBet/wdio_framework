import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Redirection to the personal payments list", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("should redirect to the personal payments page", async () => {
    await homePage.clickMineLink();
    await expect(browser).toHaveUrl("http://localhost:3000/personal");
  });
});
