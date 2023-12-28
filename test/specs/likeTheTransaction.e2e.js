import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";
import transactionsPage from "../pageobjects/transactions.page.js";

const username = process.env.SIGNIN_USERNAME;
const password = process.env.SIGNIN_PASSWORD;

describe("Like the transaction", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(username, password);
  });
  it("the like icon should be existing", async () => {
    await homePage.clickFirstTransaction();
    await expect(transactionsPage.likeIcon).toBeExisting();
  });
});
