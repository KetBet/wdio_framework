import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Redirection to the Notifications page", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("should redirect to the notifications page", async () => {
    await homePage.clickNotificationLink();
    await expect(browser).toHaveUrl("http://localhost:3000/notifications");
  });
});
