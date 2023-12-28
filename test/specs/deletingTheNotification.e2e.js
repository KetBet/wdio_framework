import { expect } from "@wdio/globals";
import notificationsPage from "../pageobjects/notifications.page.js";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Deleting the notification", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("delete button should be enabled", async () => {
    await homePage.clickNotificationLink();
    await expect(browser).toHaveUrl("http://localhost:3000/notifications");
    await expect(notificationsPage.dismissButton).toBeEnabled();
  });
});
