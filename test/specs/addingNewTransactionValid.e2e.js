import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import { faker } from "@faker-js/faker";
import homePage from "../pageobjects/home.page.js";
import transactionsPage from "../pageobjects/transactions.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Adding new transaction with valid data", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("should add new transaction with valid data", async () => {
    await homePage.clickNewBtn();
    await expect(browser).toHaveUrl("http://localhost:3000/transaction/new");

    await transactionsPage.clickOnTheFirstContact();
    await expect(transactionsPage.transactionForm).toBeDisplayed();

    await transactionsPage.inputAmount(
      faker.finance.amount()
    );
    await transactionsPage.inputNote(faker.finance.transactionDescription());
    await transactionsPage.clickPayBtn();
    await expect(transactionsPage.completeStep).toBeDisplayed();
  });
});
