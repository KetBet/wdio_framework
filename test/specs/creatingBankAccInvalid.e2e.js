import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import { faker } from "@faker-js/faker";
import homePage from "../pageobjects/home.page.js";
import bankAccPage from "../pageobjects/bankAcc.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Creating Bank Account with invalid data", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("should not create Bank Account with invalid data", async () => {
    await homePage.clickBankAccLink();
    await expect(browser).toHaveUrl("http://localhost:3000/bankaccounts");

    await homePage.clickCreateBtn();
    await expect(browser).toHaveUrl("http://localhost:3000/bankaccounts/new");

    await bankAccPage.inputBankName(
      faker.finance.creditCardIssuer({ length: 6 })
    );
    await bankAccPage.inputRoutingNumber(
      faker.finance.routingNumber({ length: 9 })
    );

    await expect(bankAccPage.saveBtn).toBeDisabled();
  });
});
