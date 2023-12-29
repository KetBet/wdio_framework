import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Filter payments by date redirection", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("should display filter payments by date form", async () => {
    await homePage.clickFilterByDateDropdown();
    await expect(homePage.calendarForm).toBeExisting();
  });
});
