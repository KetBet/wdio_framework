import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";
import transactionsPage from "../pageobjects/transactions.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Adding new transaction with invalid data", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("should not add new transaction with invalid data", async () => {
    await homePage.clickNewBtn();
    await expect(browser).toHaveUrl("http://localhost:3000/transaction/new");

    await transactionsPage.clickOnTheFirstContact();
    await expect(transactionsPage.transactionForm).toBeDisplayed();

    await transactionsPage.clickPayBtn();
    await expect(transactionsPage.payBtn).toBeDisabled();
  });
});
